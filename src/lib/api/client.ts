import { StrapiError, StrapiResponse } from '@/types/strapi';

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiClient {
  private baseUrl: string;
  private token?: string;

  constructor() {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    if (!apiUrl) {
      throw new Error('NEXT_PUBLIC_STRAPI_API_URL is not defined');
    }
    this.baseUrl = apiUrl;
  }

  setToken(token: string) {
    this.token = token;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error: StrapiError = await response.json();
      throw new ApiError(
        error.status,
        error.message,
        error.details
      );
    }

    return response.json();
  }

  async get<T>(path: string, params?: Record<string, string>): Promise<StrapiResponse<T>> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString(), {
      headers: this.getHeaders(),
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    return this.handleResponse<StrapiResponse<T>>(response);
  }

  async post<T, R>(path: string, data: T): Promise<R> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse<R>(response);
  }

  async put<T, R>(path: string, data: T): Promise<R> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse<R>(response);
  }

  async delete<R>(path: string): Promise<R> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    return this.handleResponse<R>(response);
  }
}

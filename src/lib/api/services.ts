import { ApiClient } from './client';
import { Deal, Destination, dealSchema, destinationSchema } from '@/types/schema';
import { StrapiResponse } from '@/types/strapi';

export class ApiService {
  private client: ApiClient;

  constructor() {
    this.client = new ApiClient();
  }

  // Destinations
  async getDestinations(params?: Record<string, string>): Promise<StrapiResponse<Destination>> {
    const response = await this.client.get<Destination>('/destinations', params);
    // Validate each item in the response
    response.data.forEach(item => {
      destinationSchema.parse(item.attributes);
    });
    return response;
  }

  async getDestination(slug: string): Promise<Destination> {
    const response = await this.client.get<Destination>(`/destinations/${slug}`);
    const destination = response.data[0].attributes;
    return destinationSchema.parse(destination);
  }

  // Deals
  async getDeals(params?: Record<string, string>): Promise<StrapiResponse<Deal>> {
    const response = await this.client.get<Deal>('/deals', params);
    // Validate each item in the response
    response.data.forEach(item => {
      dealSchema.parse(item.attributes);
    });
    return response;
  }

  async getDeal(slug: string): Promise<Deal> {
    const response = await this.client.get<Deal>(`/deals/${slug}`);
    const deal = response.data[0].attributes;
    return dealSchema.parse(deal);
  }
}

export interface FlightDeal {
  id: number;
  from: string;
  to: string;
  price: number;
  date: string;
  image: string;
  airline: string;
  duration: string;
  baggage: string;
  description: string;
  terms: string[];
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
}

export interface Destination {
  name: string;
  count: number;
  image: string;
  region: string;
  description: string;
  weather: {
    bestTime: string;
    avgTemp: string;
    rainfall: string;
  };
  highlights: string[];
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Article {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorId: string;
  date: string;
  category: string;
  content: string;
}
import React from 'react';
import { Hero } from '../components/Hero';
import { FlightCard } from '../components/FlightCard';
import { SearchFilters } from '../components/SearchFilters';
import { DestinationCard } from '../components/DestinationCard';
import { ArticleCard } from '../components/ArticleCard';
import { flightDeals, destinations, articles } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>

          {/* Deals Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Latest Flight Deals</h2>
              <div className="flex items-center space-x-4">
                <select className="border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Sort by: Best Matches</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Shortest</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flightDeals.slice(0, 6).map((deal) => (
                <FlightCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
              <p className="text-gray-600">Discover our most sought-after locations</p>
            </div>
            <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((destination) => (
              <DestinationCard key={destination.name} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Blog */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Travel Inspiration</h2>
            <p className="text-gray-600">Tips and guides for your next adventure</p>
          </div>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
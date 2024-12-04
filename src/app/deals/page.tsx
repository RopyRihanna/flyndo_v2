"use client";

import { useState } from 'react';
import { FlightCard } from '@/components/FlightCard';
import { flightDeals } from '@/data/mockData';
import { FlightDeal } from '@/types';

export default function DealsPage() {
  const [sortBy, setSortBy] = useState<'price' | 'date'>('price');

  const sortDeals = (deals: FlightDeal[]) => {
    return [...deals].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  };

  const sortedDeals = sortDeals(flightDeals);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Flight Deals</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price' | 'date')}
            className="border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          >
            <option value="price">Sort by Price</option>
            <option value="date">Sort by Date</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedDeals.map((deal) => (
            <FlightCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  );
}
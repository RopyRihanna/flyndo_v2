"use client";

import { useState, useMemo } from 'react';
import { FlightCard } from './FlightCard';
import { SearchParams } from '@/types';
import { flightDeals } from '@/data/mockData';

interface SearchResultsProps {
  searchParams: SearchParams;
}

export function SearchResults({ searchParams }: SearchResultsProps) {
  const [sortBy, setSortBy] = useState<'price' | 'date'>('price');

  const filteredDeals = useMemo(() => {
    return flightDeals.filter(deal => {
      const fromMatch = !searchParams.from || 
        deal.from.toLowerCase().includes(searchParams.from.toLowerCase());
      const toMatch = !searchParams.to || 
        deal.to.toLowerCase().includes(searchParams.to.toLowerCase());
      const dateMatch = !searchParams.date || 
        deal.date === searchParams.date;
      
      return fromMatch && toMatch && dateMatch;
    });
  }, [searchParams]);

  const sortedDeals = useMemo(() => {
    return [...filteredDeals].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [filteredDeals, sortBy]);

  if (!sortedDeals.length) {
    return (
      <div className="bg-white rounded-lg p-8 text-center shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">No flights found</h3>
        <p className="text-gray-600">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Search Results</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'price' | 'date')}
          className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
}
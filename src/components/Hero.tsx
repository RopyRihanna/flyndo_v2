"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin, Calendar } from 'lucide-react';
import { SearchResults } from './SearchResults';
import { SearchParams } from '@/types';

export function Hero() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    from: '',
    to: '',
    date: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(Boolean(searchParams.from || searchParams.to || searchParams.date));
  };

  const handleInputChange = (field: keyof SearchParams, value: string) => {
    setSearchParams(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative mb-8">
      <div className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Find Your Next Adventure
          </h1>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
            Discover amazing flight deals to destinations worldwide. Your journey begins here.
          </p>

          <div className="w-full max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Departure city"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Destination city"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">When</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Flights
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showResults && (
        <div className="absolute left-0 right-0 top-[calc(100%-1rem)] z-20">
          <div className="max-w-7xl mx-auto px-4">
            <SearchResults searchParams={searchParams} />
          </div>
        </div>
      )}
    </div>
  );
}
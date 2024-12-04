"use client";

import { useState } from 'react';
import { MapPin, Search, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/types';

interface DestinationsGridProps {
  initialDestinations: Destination[];
}

export function DestinationsGrid({ initialDestinations }: DestinationsGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];

  const filteredDestinations = initialDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || destination.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 -mt-24 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredDestinations.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No destinations found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Link 
              key={destination.name}
              href={`/destinations/${destination.name.toLowerCase()}`}
              className="group block"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 p-6 w-full">
                    <div className="flex items-center text-white/80 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{destination.count} destinations</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {destination.name}
                    </h3>
                    <span className="text-sm text-white/80">{destination.region}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
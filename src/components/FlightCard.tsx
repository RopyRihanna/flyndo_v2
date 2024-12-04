"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, Heart, Share2, ArrowRight } from 'lucide-react';
import { FlightDeal } from '@/types';

interface FlightCardProps {
  deal: FlightDeal;
}

export function FlightCard({ deal }: FlightCardProps) {
  const formattedDate = new Date(deal.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={deal.image}
          alt={`${deal.from} to ${deal.to}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-lg font-semibold">{deal.from} → {deal.to}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
          <div className="text-2xl font-bold text-blue-600">${deal.price}</div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={`/deal/${deal.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            View Deal
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <div className="flex space-x-2">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Add to favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Share deal"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
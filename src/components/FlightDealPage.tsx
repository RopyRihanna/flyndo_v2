"use client";

import { Calendar, MapPin, Share2, Heart, Clock, Plane, AlertCircle, CreditCard } from 'lucide-react';
import { FlightDeal } from '@/types';
import Image from 'next/image';

interface FlightDealPageProps {
  deal: FlightDeal;
}

export function FlightDealPage({ deal }: FlightDealPageProps) {
  const terms = [
    'Non-refundable',
    'Date changes available for a fee',
    'Price subject to change'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <Image
          src={deal.image}
          alt={`${deal.from} to ${deal.to}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{deal.from} → {deal.to}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(deal.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  2h 45min
                </div>
                <div className="text-2xl font-bold">${deal.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Flight Details</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Direct Flight</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Carry-on included</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover the magic of {deal.to} at an incredible price! This offer includes a round-trip flight from {deal.from}. 
                {deal.to} is known for its rich culture, amazing cuisine, and vibrant atmosphere.
              </p>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Terms:</h3>
                <ul className="space-y-2">
                  {terms.map((term, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">${deal.price}</div>
                <div className="text-gray-500">per person</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-blue-700 transition-colors flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Book Now
              </button>
              <div className="flex gap-2">
                <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
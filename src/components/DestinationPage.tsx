"use client";

import { MapPin, Calendar, Users, Sun, Cloud } from 'lucide-react';
import { FlightCard } from './FlightCard';
import { ArticleCard } from './ArticleCard';
import { flightDeals } from '@/data/mockData';
import { Destination } from '@/types';

interface DestinationPageProps {
  destination?: Destination;
}

export function DestinationPage({ destination }: DestinationPageProps) {
  const defaultDestination = {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=600&fit=crop',
    description: 'Barcelona, the capital of Catalonia, is a city full of artistic spirit, magnificent architecture, and rich culture. Famous for Gaudi\'s works, including the amazing Sagrada Familia, and the vibrant La Rambla.',
    weather: {
      bestTime: 'May - October',
      avgTemp: '25°C',
      rainfall: 'Low'
    },
    highlights: [
      'Sagrada Familia',
      'Park Güell',
      'La Rambla',
      'Barceloneta Beach',
      'Camp Nou',
      'Gothic Quarter'
    ]
  };

  const dest = destination || defaultDestination;

  const articles = [
    {
      title: 'Top 10 Attractions',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop'
    },
    {
      title: 'Local Cuisine Guide',
      image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&h=600&fit=crop'
    }
  ];

  const relevantDeals = flightDeals.filter(deal => 
    deal.to.toLowerCase() === dest.name.toLowerCase()
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{dest.name}</h1>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Popular Destination</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{dest.description}</p>
              
              <h3 className="font-semibold text-xl mb-4">Main Attractions</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {defaultDestination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-4">Weather and Best Time to Visit</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-medium">Best Time</div>
                      <div className="text-sm text-gray-600">{defaultDestination.weather.bestTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Sun className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-medium">Avg. Temp</div>
                      <div className="text-sm text-gray-600">{defaultDestination.weather.avgTemp}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-medium">Rainfall</div>
                      <div className="text-sm text-gray-600">{defaultDestination.weather.rainfall}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Current Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {relevantDeals.map((deal) => (
                <FlightCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Useful Articles</h3>
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
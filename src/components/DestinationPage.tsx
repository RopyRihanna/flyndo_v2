import React from 'react';
import { MapPin, Calendar, Users, Sun, Cloud, Umbrella } from 'lucide-react';
import { FlightCard } from '../components/FlightCard';
import { ArticleCard } from '../components/ArticleCard';
import { Destination } from '@/types';

interface DestinationPageProps {
  destination: Destination;
}

export function DestinationPage({ destination }: DestinationPageProps) {
  const deals = Array(4).fill(null).map((_, i) => ({
    id: i,
    from: 'Warszawa',
    to: destination.name,
    price: Math.floor(Math.random() * 300) + 100,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    image: destination.image,
    airline: ['Ryanair', 'Wizz Air', 'LOT', 'Lufthansa'][i % 4],
    duration: ['2h 15m', '2h 45m', '3h', '2h 30m'][i % 4],
    baggage: 'Bagaż podręczny',
    description: `Odkryj magię ${destination.name} w niezwykłej cenie! Ta oferta obejmuje lot w obie strony z Warszawy.`,
    terms: [
      'Brak możliwości zwrotu',
      'Możliwość zmiany daty za opłatą',
      'Cena może ulec zmianie'
    ]
  }));

  const articles = [
    {
      title: `Top 10 Things to Do in ${destination.name}`,
      excerpt: `Discover the best attractions and hidden gems in ${destination.name}. From iconic landmarks to local favorites.`,
      image: destination.image,
      author: 'Anna Kowalska',
      authorId: 'anna-kowalska',
      date: '2024-03-10',
      category: 'Travel Guide',
      content: `Discover the magic of ${destination.name} with our comprehensive guide.`
    },
    {
      title: `Best Time to Visit ${destination.name}`,
      excerpt: `Learn when to visit ${destination.name} for the perfect weather, fewer crowds, and best prices.`,
      image: destination.image,
      author: 'Jan Nowak',
      authorId: 'jan-nowak',
      date: '2024-03-08',
      category: 'Travel Tips',
      content: `Plan your trip to ${destination.name} with our seasonal guide.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Hiszpania, Europa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">O miejscu</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{destination.description}</p>
              
              <h3 className="font-semibold text-xl mb-4">Główne atrakcje</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-4">Pogoda i najlepszy czas na podróż</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-medium">Najlepszy czas</div>
                      <div className="text-sm text-gray-600">{destination.weather.bestTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Sun className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-medium">Średnia temp.</div>
                      <div className="text-sm text-gray-600">{destination.weather.avgTemp}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="font-medium">Opady</div>
                      <div className="text-sm text-gray-600">{destination.weather.rainfall}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Aktualne okazje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {deals.map((deal) => (
                <FlightCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Przydatne artykuły</h3>
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
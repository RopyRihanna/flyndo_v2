import React from 'react';
import { MapPin, Calendar, Users, Sun, Cloud, Umbrella } from 'lucide-react';
import { FlightCard } from '../components/FlightCard';
import { ArticleCard } from '../components/ArticleCard';

export function DestinationPage() {
  const destination = {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=600&fit=crop',
    description: 'Barcelona, stolica Katalonii, to miasto pełne artystycznego ducha, wspaniałej architektury i bogatej kultury. Słynie z dzieł Gaudiego, w tym niesamowitej Sagrada Familia, oraz tętniącej życiem La Rambla.',
    weather: {
      bestTime: 'Maj - Październik',
      avgTemp: '25°C',
      rainfall: 'Niskie'
    },
    highlights: [
      'Sagrada Familia',
      'Park Güell',
      'La Rambla',
      'Plaża Barceloneta',
      'Camp Nou',
      'Barrio Gótico'
    ]
  };

  const deals = Array(4).fill(null).map((_, i) => ({
    id: i,
    from: 'Warszawa',
    to: 'Barcelona',
    price: Math.floor(Math.random() * 300) + 100,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop'
  }));

  const articles = [
    {
      title: 'Top 10 atrakcji w Barcelonie',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop'
    },
    {
      title: 'Przewodnik po lokalnej kuchni',
      image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&h=600&fit=crop'
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
import React from 'react';
import { Calendar, MapPin, Share2, Heart, Clock, Plane, AlertCircle, CreditCard } from 'lucide-react';

export function FlightDealPage() {
  const deal = {
    from: 'Warszawa',
    to: 'Barcelona',
    price: 299,
    date: new Date(2024, 5, 15),
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=600&fit=crop',
    airline: 'Ryanair',
    duration: '2h 45min',
    baggage: 'Bagaż podręczny',
    description: 'Odkryj magię Barcelony w niezwykłej cenie! Ta oferta obejmuje lot w obie strony z Warszawy do stolicy Katalonii. Barcelona zachwyca architekturą Gaudiego, plażami i wyśmienitą kuchnią.',
    terms: ['Brak możliwości zwrotu', 'Możliwość zmiany daty za opłatą', 'Cena może ulec zmianie']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img src={deal.image} alt={deal.to} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{deal.from} → {deal.to}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {deal.date.toLocaleDateString('pl-PL')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {deal.duration}
                </div>
                <div className="text-2xl font-bold">{deal.price} zł</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Szczegóły lotu</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{deal.airline}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{deal.baggage}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{deal.description}</p>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Warunki:</h3>
                <ul className="space-y-2">
                  {deal.terms.map((term, index) => (
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
                <div className="text-3xl font-bold text-blue-600 mb-2">{deal.price} zł</div>
                <div className="text-gray-500">za osobę</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-blue-700 transition-colors flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Zarezerwuj teraz
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
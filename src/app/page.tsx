import { Hero } from '@/components/Hero';
import { FlightCard } from '@/components/FlightCard';
import { DestinationCard } from '@/components/DestinationCard';
import { ArticleCard } from '@/components/ArticleCard';
import { flightDeals, destinations, articles } from '@/data/mockData';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Flight Deals</h2>
          <Link href="/deals" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Deals
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightDeals?.slice(0, 6).map((deal) => (
            <FlightCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
              <p className="text-gray-600">Discover our most sought-after locations</p>
            </div>
            <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Destinations
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations?.slice(0, 6).map((destination) => (
              <DestinationCard key={destination.name} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Travel Inspiration</h2>
            <p className="text-gray-600">Tips and guides for your next adventure</p>
          </div>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Articles
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles?.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
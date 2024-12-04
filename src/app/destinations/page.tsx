"use client";

import { destinations } from '@/data/mockData';
import { DestinationsHero } from '@/components/destinations/DestinationsHero';
import { DestinationsGrid } from '@/components/destinations/DestinationsGrid';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DestinationsHero />
      <DestinationsGrid initialDestinations={destinations} />
    </div>
  );
}
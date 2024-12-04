"use client";

import { DestinationPage } from '@/components/DestinationPage';
import { destinations } from '@/data/mockData';
import { notFound } from 'next/navigation';

export default function RegionPage({ params }: { params: { region: string } }) {
  const destination = destinations.find(
    d => d.name.toLowerCase() === params.region.toLowerCase()
  );

  if (!destination) {
    notFound();
  }

  return <DestinationPage destination={destination} />;
}
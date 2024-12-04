"use client";

import { FlightDealPage } from '@/components/FlightDealPage';
import { flightDeals } from '@/data/mockData';
import { notFound } from 'next/navigation';

export default function DealPage({ params }: { params: { id: string } }) {
  const deal = flightDeals.find(d => d.id === parseInt(params.id));
  
  if (!deal) {
    notFound();
  }

  return <FlightDealPage deal={deal} />;
}
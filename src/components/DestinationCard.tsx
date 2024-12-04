"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.name.toLowerCase()}`}>
      <div className="group relative h-80 rounded-2xl overflow-hidden">
        <Image 
          src={destination.image} 
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 p-6 w-full">
            <div className="flex items-center text-white/80 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{destination.count} destinations</span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {destination.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Sliders, DollarSign, Clock, Plane } from 'lucide-react';

interface SearchFiltersProps {
  onPriceChange?: (min: number, max: number) => void;
  onAirlineChange?: (airlines: string[]) => void;
  onDurationChange?: (duration: number) => void;
  onStopsChange?: (stops: string[]) => void;
}

export function SearchFilters({
  onPriceChange,
  onAirlineChange,
  onDurationChange,
  onStopsChange
}: SearchFiltersProps) {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [duration, setDuration] = useState<number>(24);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);

  const airlines = ['Ryanair', 'Wizz Air', 'LOT', 'Lufthansa'];
  const stops = ['Non-stop', '1 Stop', '2+ Stops'];

  const handlePriceChange = useCallback((min: string, max: string) => {
    const validMin = min === '' ? '0' : min;
    const validMax = max === '' ? 'Infinity' : max;
    setMinPrice(validMin);
    setMaxPrice(validMax);

    if (onPriceChange) {
      const numMin = Number(validMin) || 0;
      const numMax = validMax === 'Infinity' ? Infinity : Number(validMax) || Infinity;
      onPriceChange(numMin, numMax);
    }
  }, [onPriceChange]);

  const handleAirlineToggle = useCallback((airline: string) => {
    setSelectedAirlines(prev => {
      const newSelection = prev.includes(airline)
        ? prev.filter(a => a !== airline)
        : [...prev, airline];
      
      if (onAirlineChange) {
        onAirlineChange(newSelection);
      }
      return newSelection;
    });
  }, [onAirlineChange]);

  const handleDurationChange = useCallback((value: number) => {
    setDuration(value);
    if (onDurationChange) {
      onDurationChange(value);
    }
  }, [onDurationChange]);

  const handleStopsToggle = useCallback((stop: string) => {
    setSelectedStops(prev => {
      const newSelection = prev.includes(stop)
        ? prev.filter(s => s !== stop)
        : [...prev, stop];
      
      if (onStopsChange) {
        onStopsChange(newSelection);
      }
      return newSelection;
    });
  }, [onStopsChange]);

  const handleReset = useCallback(() => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedAirlines([]);
    setDuration(24);
    setSelectedStops([]);
    
    if (onPriceChange) onPriceChange(0, Infinity);
    if (onAirlineChange) onAirlineChange([]);
    if (onDurationChange) onDurationChange(24);
    if (onStopsChange) onStopsChange([]);
  }, [onPriceChange, onAirlineChange, onDurationChange, onStopsChange]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button 
          onClick={handleReset}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Reset All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Price Range</h4>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                min="0"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => handlePriceChange(e.target.value, maxPrice)}
                className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <span className="text-gray-500">-</span>
            <div className="relative flex-1">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                min="0"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => handlePriceChange(minPrice, e.target.value)}
                className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Airlines</h4>
          <div className="space-y-2">
            {airlines.map((airline) => (
              <label key={airline} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAirlines.includes(airline)}
                  onChange={() => handleAirlineToggle(airline)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{airline}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Flight Duration</h4>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="24"
              value={duration}
              onChange={(e) => handleDurationChange(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0h</span>
              <span>{duration}h</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Stops</h4>
          <div className="space-y-2">
            {stops.map((stop) => (
              <label key={stop} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedStops.includes(stop)}
                  onChange={() => handleStopsToggle(stop)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{stop}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
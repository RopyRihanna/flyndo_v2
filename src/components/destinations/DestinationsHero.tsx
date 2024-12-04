import Image from 'next/image';

export function DestinationsHero() {
  return (
    <div className="relative h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&h=800&fit=crop"
        alt="Destinations"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Amazing Destinations
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Discover incredible places around the world and find the best deals to get there
          </p>
        </div>
      </div>
    </div>
  );
}
import { FlightDeal, Destination, Article, Author } from '@/types';

const createDate = (daysFromNow: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString().split('T')[0];
};

const createPrice = (index: number) => {
  const basePrice = 200;
  return basePrice + (index * 25);
};

export const flightDeals: FlightDeal[] = Array(20).fill(null).map((_, i) => ({
  id: i,
  from: 'Warsaw',
  to: ['Barcelona', 'Rome', 'Paris', 'London', 'Porto'][i % 5],
  price: createPrice(i),
  date: createDate(i + 1),
  image: [
    'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  ][i % 5]
}));

export const destinations: Destination[] = [
  {
    name: 'Paris',
    count: 156,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    region: 'Europe'
  },
  {
    name: 'Barcelona',
    count: 134,
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
    region: 'Europe'
  },
  {
    name: 'Rome',
    count: 145,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
    region: 'Europe'
  },
  {
    name: 'Tokyo',
    count: 89,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
    region: 'Asia'
  },
  {
    name: 'Bangkok',
    count: 98,
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop',
    region: 'Asia'
  },
  {
    name: 'Singapore',
    count: 76,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop',
    region: 'Asia'
  },
  {
    name: 'New York',
    count: 167,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
    region: 'Americas'
  },
  {
    name: 'Rio de Janeiro',
    count: 92,
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop',
    region: 'Americas'
  },
  {
    name: 'Cape Town',
    count: 84,
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop',
    region: 'Africa'
  },
  {
    name: 'Marrakech',
    count: 112,
    image: 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=800&h=600&fit=crop',
    region: 'Africa'
  },
  {
    name: 'Sydney',
    count: 143,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop',
    region: 'Oceania'
  },
  {
    name: 'Auckland',
    count: 87,
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop',
    region: 'Oceania'
  }
];

export const authors: Author[] = [
  {
    id: 'peter-johnson',
    name: 'Peter Johnson',
    role: 'Travel Expert',
    bio: 'Peter is a seasoned travel writer with over a decade of experience exploring hidden gems across Europe. His passion for authentic travel experiences and local culture shines through in his detailed guides and engaging stories.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    socialLinks: {
      twitter: 'https://twitter.com/peterjohnson',
      linkedin: 'https://linkedin.com/in/peterjohnson'
    }
  },
  {
    id: 'martha-wilson',
    name: 'Martha Wilson',
    role: 'City Guide Writer',
    bio: 'Martha specializes in urban exploration and weekend getaways. Her background in architecture and passion for food culture gives her a unique perspective on city travel.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socialLinks: {
      twitter: 'https://twitter.com/marthawilson',
      website: 'https://marthawilson.com'
    }
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Travel Tips Expert',
    bio: 'John is our go-to expert for practical travel advice. With experience in both budget and luxury travel, he helps readers make the most of their journeys through smart planning and insider tips.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    socialLinks: {
      twitter: 'https://twitter.com/johnsmith',
      linkedin: 'https://linkedin.com/in/johnsmith'
    }
  }
];

export const articles: Article[] = [
  {
    title: '10 Hidden Beaches in Europe',
    excerpt: 'Discover the most beautiful but lesser-known beaches in Europe. From Greek islands to Portuguese bays.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    author: 'Peter Johnson',
    authorId: 'peter-johnson',
    date: '2024-03-12',
    category: 'Inspiration',
    content: `
      <p class="lead">Discover the most secluded and pristine beaches across Europe, from hidden coves in Greece to secret shores in Portugal.</p>

      <h2>1. Navagio Beach, Greece</h2>
      <p>Often called "Shipwreck Beach," this stunning cove on Zakynthos island is accessible only by boat. The beach gets its name from the famous shipwreck that rests on its shore, creating one of the most photographed scenes in Greece.</p>
      
      <img src="https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=1200&h=600&fit=crop" alt="Navagio Beach" class="my-8 rounded-2xl" />

      <h2>2. Praia da Marinha, Portugal</h2>
      <p>Hidden between limestone cliffs in the Algarve region, this beach offers crystal-clear waters and stunning rock formations. It's perfect for snorkeling and photography.</p>
    `
  },
  {
    title: 'Best Cities for a Weekend Break',
    excerpt: 'Planning a short trip? Choose one of these cities. We guarantee you won\'t regret it!',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    author: 'Martha Wilson',
    authorId: 'martha-wilson',
    date: '2024-03-10',
    category: 'Guides',
    content: `
      <p class="lead">Discover the perfect cities for a quick weekend getaway, offering the perfect blend of culture, cuisine, and adventure.</p>

      <h2>1. Amsterdam, Netherlands</h2>
      <p>With its picturesque canals, world-class museums, and vibrant culture, Amsterdam is perfect for a weekend escape. Explore the city by bike, visit the Van Gogh Museum, or simply enjoy the cafe culture.</p>
      
      <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=600&fit=crop" alt="Amsterdam Canals" class="my-8 rounded-2xl" />

      <h2>2. Barcelona, Spain</h2>
      <p>From Gaudi's architectural masterpieces to the bustling Las Ramblas, Barcelona offers an unforgettable weekend experience. Don't miss the Gothic Quarter and the famous food markets.</p>
    `
  },
  {
    title: 'What to Pack in Your Carry-on?',
    excerpt: 'Essential items you should always have in your carry-on luggage.',
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&h=600&fit=crop',
    author: 'John Smith',
    authorId: 'john-smith',
    date: '2024-03-08',
    category: 'Tips',
    content: `
      <p class="lead">Master the art of packing your carry-on with these essential tips and must-have items for any flight.</p>

      <h2>Essential Electronics</h2>
      <p>Always pack your valuable electronics, chargers, and adapters in your carry-on. Include a portable battery pack for emergencies and don't forget necessary cables.</p>
      
      <img src="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=1200&h=600&fit=crop" alt="Travel Electronics" class="my-8 rounded-2xl" />

      <h2>Comfort Items</h2>
      <p>Pack a light jacket or sweater, neck pillow, and eye mask for long flights. Consider noise-canceling headphones for a more peaceful journey.</p>
    `
  }
];
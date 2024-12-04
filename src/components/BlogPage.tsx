"use client";

import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export function BlogPage() {
  const featuredPost = {
    title: "How to Find Cheap Flights: Complete Guide",
    excerpt: "Learn proven methods for finding cheap flights. From choosing the right timing to the best search engines - everything you need to know.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop",
    date: "March 15, 2024",
    author: "Anna Smith",
    category: "Tips"
  };

  const posts = [
    {
      title: "10 Hidden Beaches in Europe",
      excerpt: "Discover the most beautiful but lesser-known beaches in Europe. From Greek islands to Portuguese bays.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      date: "March 12, 2024",
      author: "Peter Johnson",
      category: "Inspiration"
    },
    {
      title: "Best Cities for a Weekend Break",
      excerpt: "Planning a short trip? Choose one of these cities. We guarantee you won't regret it!",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
      date: "March 10, 2024",
      author: "Martha Wilson",
      category: "Guides"
    },
    {
      title: "What to Pack in Your Carry-on?",
      excerpt: "Essential items you should always have in your carry-on luggage.",
      image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&h=600&fit=crop",
      date: "March 8, 2024",
      author: "John Smith",
      category: "Tips"
    }
  ];

  const categories = ['All', 'Tips', 'Inspiration', 'Guides', 'Stories'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">Travel Blog</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          <div className="flex gap-4 mt-6 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-8 text-white">
                  <div className="mb-4">
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-lg text-gray-200 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      {featuredPost.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-gray-100 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Load More
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
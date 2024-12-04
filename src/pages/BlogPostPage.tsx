import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Heart, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
  MessageCircle
} from 'lucide-react';

export function BlogPostPage() {
  const post = {
    title: "10 Hidden Beaches in Europe You Must Visit in 2024",
    author: {
      name: "Anna Kowalska",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "Travel Expert"
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Travel Tips",
    mainImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
    content: `
      <p class="lead">Discover the most secluded and pristine beaches across Europe, from hidden coves in Greece to secret shores in Portugal.</p>

      <h2>1. Navagio Beach, Greece</h2>
      <p>Often called "Shipwreck Beach," this stunning cove on Zakynthos island is accessible only by boat. The beach gets its name from the famous shipwreck that rests on its shore, creating one of the most photographed scenes in Greece.</p>
      
      <img src="https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=1200&h=600&fit=crop" alt="Navagio Beach" class="my-8 rounded-2xl" />

      <h2>2. Praia da Marinha, Portugal</h2>
      <p>Hidden between limestone cliffs in the Algarve region, this beach offers crystal-clear waters and stunning rock formations. It's perfect for snorkeling and photography.</p>
    `,
    tags: ["Europe", "Beaches", "Summer 2024", "Travel Guide"],
    relatedPosts: [
      {
        title: "Best Time to Visit Mediterranean Beaches",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
        date: "March 10, 2024"
      },
      {
        title: "Top 5 Beach Activities for Families",
        image: "https://images.unsplash.com/photo-1533760881669-80db4d7b341a?w=400&h=300&fit=crop",
        date: "March 8, 2024"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img 
          src={post.mainImage} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="max-w-4xl mx-auto px-4 h-full flex items-end pb-12">
            <div className="text-white">
              <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-white/80">{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full border-2 border-white mr-3"
                  />
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-white/80">{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar className="w-5 h-5 mr-2" />
                  {post.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="border-t mt-8 pt-8">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t mt-8 pt-8">
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{post.author.name}</h3>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-6 sticky top-4">
              {/* Share Buttons */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold mb-4">Share this article</h3>
                <div className="flex flex-col space-y-2">
                  {[
                    { Icon: Facebook, label: 'Share on Facebook', color: 'bg-blue-600' },
                    { Icon: Twitter, label: 'Share on Twitter', color: 'bg-sky-500' },
                    { Icon: Linkedin, label: 'Share on LinkedIn', color: 'bg-blue-700' }
                  ].map(({ Icon, label, color }) => (
                    <button
                      key={label}
                      className={`${color} text-white px-4 py-2 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {label}
                    </button>
                  ))}
                  <button className="border border-gray-200 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy link
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="group">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-lg mb-2 group-hover:opacity-90 transition-opacity"
                      />
                      <h4 className="font-medium group-hover:text-indigo-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <div className="text-sm text-gray-500">{relatedPost.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Globe, ArrowRight } from 'lucide-react';
import { Author, Article } from '@/types';
import { ArticleCard } from '@/components/ArticleCard';

interface AuthorProfileProps {
  author: Author;
  articles: Article[];
}

export function AuthorProfile({ author, articles }: AuthorProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Author Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
          {/* Header Background */}
          <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Author Avatar */}
            <div className="absolute -bottom-16 left-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
                <p className="text-gray-600">{author.role}</p>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4">
                {author.socialLinks.twitter && (
                  <a
                    href={author.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {author.socialLinks.linkedin && (
                  <a
                    href={author.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {author.socialLinks.website && (
                  <a
                    href={author.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Personal Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed">{author.bio}</p>
            </div>
          </div>
        </div>

        {/* Author's Articles */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Link 
              href="/blog" 
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">No articles published yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
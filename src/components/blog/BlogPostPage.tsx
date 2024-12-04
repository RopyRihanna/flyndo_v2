"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Article } from '@/types';

interface BlogPostPageProps {
  post: Article;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[60vh] min-h-[500px]">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="max-w-4xl mx-auto px-4 h-full flex items-end pb-12">
            <div className="text-white">
              <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-white/80">
                  <User className="w-5 h-5 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-sm p-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
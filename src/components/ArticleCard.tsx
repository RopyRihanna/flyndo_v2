"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <article className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <Link 
            href={`/author/${article.authorId}`}
            className="flex items-center hover:text-blue-600"
          >
            <User className="w-4 h-4 mr-1" />
            {article.author}
          </Link>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div>
        <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
      </div>
    </article>
  );
}
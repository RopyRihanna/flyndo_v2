import { BlogPostPage } from '@/components/blog/BlogPostPage';
import { articles } from '@/data/mockData';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = articles.find(article => 
    article.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
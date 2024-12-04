import { notFound } from 'next/navigation';
import { authors, articles } from '@/data/mockData';
import { AuthorProfile } from '@/components/author/AuthorProfile';

export default function AuthorPage({ params }: { params: { id: string } }) {
  const author = authors.find(a => a.id === params.id);
  
  if (!author) {
    notFound();
  }

  const authorArticles = articles.filter(article => article.authorId === author.id);

  return <AuthorProfile author={author} articles={authorArticles} />;
}
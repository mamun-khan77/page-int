import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Reveal from '@/components/ui/Reveal';
import { newsArticles } from '@/data/news';

const categoryColors: Record<string, string> = {
  'Company News': 'bg-accent-50 text-accent-700 ring-accent-200',
  'Automotive Industry': 'bg-navy-50 text-navy-700 ring-navy-200',
  'Product Updates': 'bg-green-50 text-green-700 ring-green-200',
  'Workshop Technology': 'bg-amber-50 text-amber-700 ring-amber-200',
  Events: 'bg-blue-50 text-blue-700 ring-blue-200',
};

export default function News() {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <>
      <SEO
        title="News Feed | PAGE International Ltd."
        description="Stay updated with the latest company news, automotive industry insights, product updates, and events from PAGE International Ltd."
        path="/news"
      />

      {/* Hero */}
      <section className="border-b border-steel-200 bg-steel-50">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumb items={[{ label: 'News Feed' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">News Feed</h1>
          <p className="mt-2 max-w-2xl text-base text-steel-600">
            Stay updated with the latest company news, industry insights, and product updates.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-page">
          <Reveal>
            <Link
              to={`/news/${featured.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card transition-all hover:shadow-card-hover lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-steel-100 lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-6 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className={`badge ring-1 ring-inset ${categoryColors[featured.category] || 'bg-steel-50 text-steel-700 ring-steel-200'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-steel-500">Featured</span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-navy-900 group-hover:text-accent-600 lg:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-steel-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-600">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-steel-50 py-14 lg:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {rest.map((article, index) => (
              <Reveal key={article.id} delay={index * 80}>
                <Link
                  to={`/news/${article.slug}`}
                  className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3">
                      <span className={`badge ring-1 ring-inset ${categoryColors[article.category] || 'bg-steel-50 text-steel-700 ring-steel-200'}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-accent-600">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-steel-600">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-steel-100 pt-4 text-xs text-steel-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {formatDate(article.date)}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Empty state note */}
      {newsArticles.length === 0 && (
        <section className="bg-steel-50 py-20">
          <div className="container-page">
            <div className="flex flex-col items-center rounded-2xl border border-steel-200 bg-white py-16 text-center">
              <Newspaper className="h-12 w-12 text-steel-300" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-navy-900">No articles available</h3>
              <p className="mt-2 text-sm text-steel-600">Check back soon for the latest news and updates.</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

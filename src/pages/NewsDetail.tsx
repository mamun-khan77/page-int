import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Reveal from '@/components/ui/Reveal';
import { getArticleBySlug, newsArticles } from '@/data/news';

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const currentIndex = newsArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null;

  return (
    <>
      <SEO
        title={`${article.title} | PAGE International Ltd.`}
        description={article.excerpt}
        path={`/news/${article.slug}`}
      />

      {/* Breadcrumb */}
      <section className="border-b border-steel-200 bg-steel-50">
        <div className="container-page py-6">
          <Breadcrumb
            items={[
              { label: 'News Feed', path: '/news' },
              { label: article.title },
            ]}
          />
        </div>
      </section>

      {/* Article header */}
      <section className="bg-white py-10 lg:py-14">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="badge bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {article.category}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                {article.title}
              </h1>
              <div className="mt-4 flex items-center gap-5 text-sm text-steel-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article image */}
      <section className="bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="space-y-5 text-base leading-[1.8] text-steel-700">
                {article.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Back to news */}
            <div className="mt-10 border-t border-steel-200 pt-6">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 transition-colors hover:text-accent-700"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to News Feed
              </Link>
            </div>

            {/* Prev / Next navigation */}
            {(prevArticle || nextArticle) && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {prevArticle ? (
                  <Link
                    to={`/news/${prevArticle.slug}`}
                    className="card group p-5 hover:shadow-card-hover"
                  >
                    <span className="text-xs font-semibold text-steel-500">Previous Article</span>
                    <p className="mt-1 text-sm font-bold text-navy-900 group-hover:text-accent-600">
                      {prevArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {nextArticle && (
                  <Link
                    to={`/news/${nextArticle.slug}`}
                    className="card group p-5 text-right hover:shadow-card-hover"
                  >
                    <span className="text-xs font-semibold text-steel-500">Next Article</span>
                    <p className="mt-1 flex items-center justify-end gap-2 text-sm font-bold text-navy-900 group-hover:text-accent-600">
                      {nextArticle.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

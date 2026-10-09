import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import Reveal from '@/components/ui/Reveal';
import { products } from '@/data/products';

export default function TrendingProducts() {
  const trending = products.filter((p) => p.trending);

  return (
    <section className="bg-steel-50 py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Trending Products"
            title="Trending Products"
            description="Explore our most requested automotive garage and maintenance equipment."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {trending.map((product, index) => (
            <Reveal key={product.id} delay={index * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/garage-equipment"
            className="btn btn-outline group"
          >
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

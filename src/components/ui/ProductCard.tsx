import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Zap } from 'lucide-react';
import type { Product } from '@/types';
import StatusBadge from '@/components/ui/StatusBadge';

export default function ProductCard({ product }: { product: Product }) {
  const isEV = Boolean(product.isEV || product.productType === 'electric-vehicle');
  const productPath = isEV ? `/electric-vehicle/${product.slug}` : `/garage-equipment/${product.slug}`;

  const quoteParams = new URLSearchParams({
    product: product.name,
    category: product.categoryName,
    ...(product.vehicleType ? { vehicleType: product.vehicleType } : {}),
  });

  return (
    <div className={`card group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover ${isEV ? 'border-steel-200/90' : ''}`}>
      <Link
        to={productPath}
        className="relative block aspect-[4/3] overflow-hidden bg-steel-100"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <StatusBadge status={product.availability} />
          {isEV && (
            <span className="inline-flex items-center gap-1 rounded-full bg-navy-950/85 px-2.5 py-0.5 text-2xs font-bold text-accent-400 backdrop-blur-sm">
              <Zap className="h-3 w-3 text-accent-400" aria-hidden="true" />
              EV Mobility
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
            {product.categoryName}
          </p>
          {product.brand && (
            <span className="text-2xs font-medium text-steel-400">
              {product.brand}
            </span>
          )}
        </div>

        <h3 className="mt-1.5 text-base font-bold leading-snug text-navy-900">
          <Link
            to={productPath}
            className="transition-colors hover:text-accent-600"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-steel-600">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-3 border-t border-steel-100 pt-4">
          <Link
            to={productPath}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-accent-600"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <span className="text-steel-300" aria-hidden="true">|</span>
          <Link
            to={`/contact?${quoteParams.toString()}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
          >
            Request Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

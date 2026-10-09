import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/ui/Breadcrumb';
import StatusBadge from '@/components/ui/StatusBadge';
import ProductCard from '@/components/ui/ProductCard';
import Reveal from '@/components/ui/Reveal';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/garage-equipment" replace />;
  }

  const related = getRelatedProducts(product, 4);

  return (
    <>
      <SEO
        title={`${product.name} | PAGE International Ltd.`}
        description={product.shortDescription}
        path={`/garage-equipment/${product.slug}`}
      />

      {/* Breadcrumb */}
      <section className="border-b border-steel-200 bg-steel-50">
        <div className="container-page py-6">
          <Breadcrumb
            items={[
              { label: 'Garage Equipment', path: '/garage-equipment' },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      {/* Product detail */}
      <section className="bg-white py-10 lg:py-14">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image gallery */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-steel-200 bg-steel-50">
                <div className="aspect-[4/3]">
                  <img
                    src={product.gallery[activeImage]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {product.gallery.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {product.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-[4/3] w-24 overflow-hidden rounded-lg border-2 transition-colors sm:w-28 ${
                        activeImage === index ? 'border-accent-600' : 'border-steel-200 hover:border-steel-400'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wide text-accent-600">
                  {product.categoryName}
                </span>
                <StatusBadge status={product.availability} />
              </div>

              <h1 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">{product.name}</h1>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-steel-500">Brand:</span>
                <span className="text-sm font-bold text-navy-800">{product.brand}</span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-steel-700">{product.description}</p>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn btn-primary btn-lg flex-1"
                >
                  Request a Quote
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg flex-1">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Contact Sales
                </Link>
              </div>

              {/* Quick specs */}
              <div className="mt-8 rounded-xl border border-steel-200 bg-steel-50 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-900">
                  Quick Specifications
                </h3>
                <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {product.specifications.slice(0, 6).map((spec) => (
                    <div key={spec.label} className="flex justify-between border-b border-steel-200 pb-2 text-sm">
                      <dt className="text-steel-500">{spec.label}</dt>
                      <dd className="font-semibold text-navy-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-navy-900">Features</h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-relaxed text-steel-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-xl font-bold text-navy-900">Applications</h2>
              <ul className="mt-4 space-y-3">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-relaxed text-steel-700">
                    <ArrowRight className="h-5 w-5 shrink-0 text-navy-400" aria-hidden="true" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full specifications */}
            <div>
              <h2 className="text-xl font-bold text-navy-900">Technical Specifications</h2>
              <dl className="mt-4 space-y-2">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-steel-200 pb-2 text-sm">
                    <dt className="text-steel-500">{spec.label}</dt>
                    <dd className="font-semibold text-navy-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* CTA bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-navy-900 p-6 sm:flex-row lg:p-8">
            <div>
              <h3 className="text-lg font-bold text-white">Interested in this product?</h3>
              <p className="mt-1 text-sm text-steel-300">
                Get a personalized quote or contact our sales team for more information.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="btn btn-primary"
              >
                Request a Quote
              </Link>
              <a
                href="mailto:info@pageinternational.com.bd"
                className="btn border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-steel-50 py-14 lg:py-20">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Related Products</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
              {related.map((rel, index) => (
                <Reveal key={rel.id} delay={index * 80}>
                  <ProductCard product={rel} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

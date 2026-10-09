import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, PackageSearch, X } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import Reveal from '@/components/ui/Reveal';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

type SortOption = 'featured' | 'az' | 'newest';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'az', label: 'A-Z' },
  { value: 'newest', label: 'Newest' },
];

export default function GarageEquipment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categorySlug = searchParams.get('category') || 'all';
  const urlSearch = searchParams.get('search') || '';

  useEffect(() => {
    setSearchQuery(urlSearch);
  }, [urlSearch]);

  const categoryTabs = useMemo(
    () => [{ name: 'All', slug: 'all' }, ...categories.map((c) => ({ name: c.name, slug: c.slug }))],
    []
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categorySlug !== 'all') {
      result = result.filter((p) => p.category === categorySlug);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result.reverse();
        break;
      case 'featured':
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return result;
  }, [categorySlug, searchQuery, sort]);

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    setSearchParams(params);
    setShowFilters(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim());
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
    setSort('featured');
  };

  return (
    <>
      <SEO
        title="Garage Equipment | PAGE International Ltd."
        description="Professional equipment designed to improve automotive workshop efficiency, safety, and service quality. Browse our full catalog of lifting, diagnostic, wheel, and maintenance equipment."
        path="/garage-equipment"
      />

      {/* Page Header */}
      <section className="border-b border-steel-200 bg-steel-50">
        <div className="container-page py-8 lg:py-10">
          <Breadcrumb items={[{ label: 'Garage Equipment' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Garage Equipment</h1>
          <p className="mt-2 max-w-2xl text-base text-steel-600">
            Professional equipment designed to improve automotive workshop efficiency, safety, and
            service quality.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="border-b border-steel-200 bg-white">
        <div className="container-page py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category tabs - desktop */}
            <div className="hidden lg:block">
              <div className="flex flex-wrap items-center gap-2">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.slug}
                    onClick={() => handleCategoryChange(tab.slug)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      categorySlug === tab.slug
                        ? 'bg-navy-800 text-white'
                        : 'bg-steel-100 text-navy-700 hover:bg-steel-200'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search + sort */}
            <div className="flex flex-1 items-center gap-3 lg:max-w-md lg:justify-end">
              <form onSubmit={handleSearch} className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-400" aria-hidden="true" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search equipment..."
                  className="w-full rounded-lg border border-steel-300 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 placeholder:text-steel-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                  aria-label="Search equipment"
                />
              </form>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="appearance-none rounded-lg border border-steel-300 bg-white py-2.5 pl-4 pr-9 text-sm font-semibold text-navy-800 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                  aria-label="Sort products"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-400" aria-hidden="true" />
              </div>

              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-steel-300 text-navy-700 lg:hidden"
                aria-label="Toggle category filters"
                aria-expanded={showFilters}
              >
                <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mobile category filters */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.slug}
                  onClick={() => handleCategoryChange(tab.slug)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    categorySlug === tab.slug
                      ? 'bg-navy-800 text-white'
                      : 'bg-steel-100 text-navy-700 hover:bg-steel-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-steel-50 py-10 lg:py-14">
        <div className="container-page">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-steel-600">
              Showing <span className="font-bold text-navy-900">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            {(categorySlug !== 'all' || searchQuery || sort !== 'featured') && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              {filteredProducts.map((product, index) => (
                <Reveal key={product.id} delay={Math.min(index * 50, 200)}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-steel-200 bg-white py-20 text-center">
              <PackageSearch className="h-12 w-12 text-steel-300" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-navy-900">No equipment found</h3>
              <p className="mt-2 max-w-sm text-sm text-steel-600">
                Try another search term or browse our categories.
              </p>
              <button onClick={clearFilters} className="btn btn-primary mt-6">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

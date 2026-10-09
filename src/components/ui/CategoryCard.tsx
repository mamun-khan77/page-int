import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Category } from '@/types';

type IconComponent = React.ComponentType<{ className?: string }>;

function getIcon(name: string): IconComponent {
  const icons = LucideIcons as unknown as Record<string, IconComponent>;
  return icons[name] || icons.CircleDot;
}

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = getIcon(category.icon);

  return (
    <div className="card group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
      <Link
        to={`/garage-equipment?category=${category.slug}`}
        className="relative block aspect-[3/2] overflow-hidden bg-steel-100"
      >
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="mb-2 inline-flex items-center justify-center rounded-lg bg-accent-600 p-2 text-white shadow-lg">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-base font-bold text-white">{category.name}</h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm leading-relaxed text-steel-600">{category.description}</p>
        <Link
          to={`/garage-equipment?category=${category.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-accent-600"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

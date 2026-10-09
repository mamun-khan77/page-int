import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link
        to="/"
        className="flex items-center text-steel-500 transition-colors hover:text-accent-600"
      >
        <Home className="h-4 w-4" aria-hidden="true" />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-4 w-4 text-steel-300" aria-hidden="true" />
            {item.path && !isLast ? (
              <Link to={item.path} className="text-steel-500 transition-colors hover:text-accent-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-navy-800" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

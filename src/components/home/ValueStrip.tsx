import * as LucideIcons from 'lucide-react';
import { valueProps } from '@/data/company';

type IconComponent = React.ComponentType<{ className?: string }>;

function getIcon(name: string): IconComponent {
  const icons = LucideIcons as unknown as Record<string, IconComponent>;
  return icons[name] || icons.Circle;
}

export default function ValueStrip() {
  return (
    <section className="border-b border-steel-200 bg-white">
      <div className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {valueProps.map((prop) => {
            const Icon = getIcon(prop.icon);
            return (
              <div
                key={prop.id}
                className="group flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left"
              >
                <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-accent-600 group-hover:text-white sm:mb-0 sm:mr-4">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-900">
                    {prop.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel-600">{prop.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

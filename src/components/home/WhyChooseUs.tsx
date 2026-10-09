import * as LucideIcons from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { features } from '@/data/company';

type IconComponent = React.ComponentType<{ className?: string }>;

function getIcon(name: string): IconComponent {
  const icons = LucideIcons as unknown as Record<string, IconComponent>;
  return icons[name] || icons.Circle;
}

export default function WhyChooseUs() {
  return (
    <section className="bg-steel-50 py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="Why Choose Us?"
            description="Our commitment to excellence and deep industry expertise sets us apart."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <Reveal key={feature.id} delay={index * 80}>
                <div className="card h-full p-6 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

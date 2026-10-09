import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src="https://images.pexels.com/photos/4756887/pexels-photo-4756887.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern automotive repair workshop"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              {/* Stat card overlay */}
              <div className="absolute -bottom-6 -right-4 sm:right-6">
                <div className="rounded-xl bg-navy-900 px-6 py-5 shadow-card-hover">
                  <div className="text-3xl font-extrabold text-accent-500 sm:text-4xl">500+</div>
                  <div className="mt-1 text-xs font-medium text-steel-300">Workshops &amp; Parts Sellers</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={100}>
            <div>
              <p className="section-eyebrow">About PAGE International</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                A Little About Us!
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel-600">
                PAGE International Ltd. specializes in supplying garage equipment and vehicle parts
                tailored to our customers&rsquo; needs and proudly serves as the distributor for
                LAUNCH, SmartSafe, ATS Elgi &amp; WIPRO Enterprises Ltd.
              </p>
              <p className="mt-3 text-base leading-relaxed text-steel-600">
                In the past year alone, we have compiled a database of over 500 local workshops and
                parts sellers across Bangladesh, with plans to expand this network further.
              </p>

              <ul className="mt-6 space-y-2.5">
                {['Distributor for LAUNCH, SmartSafe, ATS Elgi & WIPRO', '500+ workshops in our network', 'Nationwide coverage across Bangladesh'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-navy-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent-600 transition-colors hover:text-accent-700">
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

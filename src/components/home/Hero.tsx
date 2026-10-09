import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33814736/pexels-photo-33814736.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern automotive workshop with hydraulic lift"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
      </div>

      {/* Content */}
      <div className="container-page relative">
        <div className="flex min-h-[560px] max-w-2xl flex-col justify-center py-16 lg:min-h-[620px] lg:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-600/15 px-4 py-1.5 ring-1 ring-inset ring-accent-500/30">
              <Wrench className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent-300">
                Automotive Equipment &amp; Solutions
              </span>
            </div>
          </div>

          <h1 className="mt-5 animate-fade-up text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl text-balance" style={{ animationDelay: '50ms' }}>
            Experience Automotive Through Innovation &amp; Expertise.
          </h1>

          <p className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-steel-300" style={{ animationDelay: '100ms' }}>
            Professional garage equipment, vehicle service solutions, and technical expertise for
            Bangladesh&rsquo;s growing automotive industry.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: '150ms' }}>
            <Link
              to="/garage-equipment"
              className="btn btn-primary btn-lg group"
            >
              Explore Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="btn btn-lg border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33814734/pexels-photo-33814734.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Automotive workshop"
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/90" />
      </div>

      <div className="container-page relative py-16 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem] text-balance">
              Get Your Best Automotive Services
            </h2>
            <p className="mt-4 text-lg text-steel-300 text-balance">
              Visit us in person for a better experience or explore our products online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/garage-equipment" className="btn btn-primary btn-lg group">
                Shop Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="btn btn-lg border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

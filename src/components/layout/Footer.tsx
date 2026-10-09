import { Link } from 'react-router-dom';
import { Wrench, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import { navLinks, footerProductLinks, contactInfo } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-steel-300">
      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company */}
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="PAGE International home">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600 text-white">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-base font-extrabold text-white">
                PAGE<span className="text-accent-400"> International</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-steel-400">
              Professional garage equipment, vehicle service solutions, and technical expertise for
              Bangladesh&rsquo;s growing automotive industry.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-steel-400 transition-colors hover:bg-accent-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {footerProductLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-steel-400">
                <MapPin className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-steel-400">
                <Phone className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <a href={`tel:${contactInfo.phone}`} className="transition-colors hover:text-accent-400">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-steel-400">
                <Mail className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-accent-400">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-steel-400">
                <Clock className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-6 sm:flex-row">
          <p className="text-xs text-steel-500">
            Copyright &copy; 2026 PAGE INTERNATIONAL LTD. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/" className="text-xs text-steel-500 transition-colors hover:text-accent-400">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-steel-500 transition-colors hover:text-accent-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

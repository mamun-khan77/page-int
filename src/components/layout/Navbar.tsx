import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Wrench,
  ChevronDown,
  ArrowRight,
  Bike,
  Truck,
  Zap,
} from 'lucide-react';
import { navLinks } from '@/data/company';
import { categories } from '@/data/categories';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [evMenuOpen, setEvMenuOpen] = useState(false);
  const [mobileEvAccordion, setMobileEvAccordion] = useState(false);
  const [mobileGarageAccordion, setMobileGarageAccordion] = useState(false);

  const evMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setEvMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      // If search contains ev, bike, electric, rickshaw, motor, battery, route to EV or garage equipment
      if (['ev', 'bike', 'electric', 'scooter', 'rickshaw', 'battery', 'charger', 'motor'].some((term) => q.includes(term))) {
        navigate(`/electric-vehicle?search=${encodeURIComponent(searchQuery.trim())}`);
      } else {
        navigate(`/garage-equipment?search=${encodeURIComponent(searchQuery.trim())}`);
      }
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleEvMouseEnter = () => {
    if (evMenuTimeoutRef.current) clearTimeout(evMenuTimeoutRef.current);
    setEvMenuOpen(true);
  };

  const handleEvMouseLeave = () => {
    evMenuTimeoutRef.current = setTimeout(() => {
      setEvMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-nav backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="PAGE International home">
              <img
                src="/images/pagelogo.png"
                alt="PAGE International logo"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => {
                if (link.label === 'Electric Vehicle') {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={handleEvMouseEnter}
                      onMouseLeave={handleEvMouseLeave}
                    >
                      <Link
                        to={link.path}
                        className={`relative inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                          isActive(link.path)
                            ? 'text-accent-600'
                            : 'text-navy-700 hover:text-accent-600'
                        }`}
                        aria-expanded={evMenuOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${evMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        {isActive(link.path) && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent-600" />
                        )}
                      </Link>

                      {/* Electric Vehicle Mega Menu */}
                      {evMenuOpen && (
                        <div
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-2 animate-fade-in"
                          style={{ width: '640px' }}
                        >
                          <div className="rounded-2xl border border-steel-200 bg-white p-6 shadow-2xl ring-1 ring-black/5">
                            <div className="mb-4 flex items-center justify-between border-b border-steel-100 pb-3">
                              <div className="flex items-center gap-2">
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-navy-900 text-white">
                                  <Zap className="h-3.5 w-3.5 text-accent-400" />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                                  ELECTRIC VEHICLE ECOSYSTEM
                                </span>
                              </div>
                              <span className="text-xs text-steel-500">Commercial &amp; Urban Mobility</span>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                              {/* Column 1: 2-Wheeler Electric Bikes */}
                              <div>
                                <Link
                                  to="/electric-vehicle/2-wheeler"
                                  className="group flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-accent-600"
                                >
                                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                                    <Bike className="h-4 w-4" />
                                  </div>
                                  <span>2-Wheeler Electric Bikes</span>
                                </Link>

                                <ul className="mt-3 space-y-1.5 pl-9 text-xs text-steel-600">
                                  <li>
                                    <Link to="/electric-vehicle/2-wheeler?subcategory=Electric+Bikes" className="block py-1 hover:text-accent-600 transition-colors">
                                      Electric Bikes
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle/2-wheeler?subcategory=Electric+Motorcycles" className="block py-1 hover:text-accent-600 transition-colors">
                                      Electric Motorcycles
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-battery" className="block py-1 hover:text-accent-600 transition-colors">
                                      EV Batteries
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-controller" className="block py-1 hover:text-accent-600 transition-colors">
                                      EV Controllers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-charger" className="block py-1 hover:text-accent-600 transition-colors">
                                      Chargers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-spare-parts" className="block py-1 hover:text-accent-600 transition-colors">
                                      Spare Parts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-accessories" className="block py-1 hover:text-accent-600 transition-colors">
                                      Accessories
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              {/* Column 2: 3-Wheeler Electric Vehicles */}
                              <div>
                                <Link
                                  to="/electric-vehicle/3-wheeler"
                                  className="group flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-accent-600"
                                >
                                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                                    <Truck className="h-4 w-4" />
                                  </div>
                                  <span>3-Wheeler Electric Vehicles</span>
                                </Link>

                                <ul className="mt-3 space-y-1.5 pl-9 text-xs text-steel-600">
                                  <li>
                                    <Link to="/electric-vehicle/3-wheeler?subcategory=Passenger+EVs" className="block py-1 hover:text-accent-600 transition-colors">
                                      Passenger EVs
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle/3-wheeler?subcategory=Cargo+EVs" className="block py-1 hover:text-accent-600 transition-colors">
                                      Cargo EVs
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle/3-wheeler" className="block py-1 hover:text-accent-600 transition-colors">
                                      Electric Rickshaw / Three-Wheeler
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-battery" className="block py-1 hover:text-accent-600 transition-colors">
                                      EV Batteries
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-motor" className="block py-1 hover:text-accent-600 transition-colors">
                                      Motors
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-controller" className="block py-1 hover:text-accent-600 transition-colors">
                                      Controllers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-charger" className="block py-1 hover:text-accent-600 transition-colors">
                                      Chargers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-spare-parts" className="block py-1 hover:text-accent-600 transition-colors">
                                      Spare Parts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/electric-vehicle?category=ev-accessories" className="block py-1 hover:text-accent-600 transition-colors">
                                      Accessories
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* Mega Menu Footer Banner */}
                            <div className="mt-6 flex items-center justify-between rounded-xl bg-steel-50 px-4 py-3 border border-steel-100">
                              <span className="text-xs text-steel-600">
                                Looking for custom battery packs or commercial fleet setups?
                              </span>
                              <Link
                                to="/electric-vehicle"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 hover:text-accent-700 transition-colors"
                              >
                                View All EV Products
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'text-accent-600'
                        : 'text-navy-700 hover:text-accent-600'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent-600" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50"
                aria-label="Search"
                aria-expanded={searchOpen}
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>

              <Link
                to="/contact"
                className="hidden btn-primary sm:inline-flex"
              >
                Get a Quote
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-50 lg:hidden"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Search Dropdown Bar */}
          {searchOpen && (
            <div className="absolute left-0 right-0 top-full border-t border-steel-200 bg-white shadow-card animate-fade-in">
              <div className="container-page py-4">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel-400" aria-hidden="true" />
                  <input
                    type="search"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search garage equipment, electric vehicles, batteries, parts..."
                    className="w-full rounded-lg border border-steel-300 bg-steel-50 py-3 pl-12 pr-4 text-sm text-navy-900 placeholder:text-steel-400 focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    aria-label="Search query"
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Navigation with Accordions */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-steel-200 px-5">
            <span className="text-base font-extrabold text-navy-900">
              PAGE<span className="text-accent-600"> International</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
            <Link
              to="/"
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-colors ${
                location.pathname === '/' ? 'bg-accent-50 text-accent-600' : 'text-navy-700 hover:bg-navy-50'
              }`}
            >
              Home
            </Link>

            {/* Garage Equipment Accordion */}
            <div>
              <div className="flex items-center justify-between rounded-lg px-4 py-2.5 hover:bg-navy-50">
                <Link
                  to="/garage-equipment"
                  className={`text-base font-semibold ${
                    location.pathname.startsWith('/garage-equipment') ? 'text-accent-600' : 'text-navy-700'
                  }`}
                >
                  Garage Equipment
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileGarageAccordion(!mobileGarageAccordion)}
                  className="p-1 text-steel-500"
                  aria-label="Toggle Garage Equipment categories"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileGarageAccordion ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileGarageAccordion && (
                <div className="ml-4 space-y-1 border-l-2 border-steel-100 pl-3 pt-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/garage-equipment?category=${cat.slug}`}
                      className="block rounded-md px-3 py-1.5 text-sm text-steel-600 hover:text-accent-600"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    to="/garage-equipment"
                    className="block rounded-md px-3 py-1.5 text-sm font-semibold text-accent-600"
                  >
                    All Garage Equipment →
                  </Link>
                </div>
              )}
            </div>

            {/* Electric Vehicle Accordion */}
            <div>
              <div className="flex items-center justify-between rounded-lg px-4 py-2.5 hover:bg-navy-50">
                <Link
                  to="/electric-vehicle"
                  className={`text-base font-semibold ${
                    location.pathname.startsWith('/electric-vehicle') ? 'text-accent-600' : 'text-navy-700'
                  }`}
                >
                  Electric Vehicle
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileEvAccordion(!mobileEvAccordion)}
                  className="p-1 text-steel-500"
                  aria-label="Toggle Electric Vehicle categories"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileEvAccordion ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileEvAccordion && (
                <div className="ml-4 space-y-1 border-l-2 border-steel-100 pl-3 pt-1">
                  <Link
                    to="/electric-vehicle/2-wheeler"
                    className="block rounded-md px-3 py-1.5 text-sm text-steel-600 hover:text-accent-600"
                  >
                    2-Wheeler Electric Bikes
                  </Link>
                  <Link
                    to="/electric-vehicle/3-wheeler"
                    className="block rounded-md px-3 py-1.5 text-sm text-steel-600 hover:text-accent-600"
                  >
                    3-Wheeler Electric Vehicles
                  </Link>
                  <Link
                    to="/electric-vehicle?category=ev-battery"
                    className="block rounded-md px-3 py-1.5 text-sm text-steel-600 hover:text-accent-600"
                  >
                    EV Components
                  </Link>
                  <Link
                    to="/electric-vehicle?category=ev-accessories"
                    className="block rounded-md px-3 py-1.5 text-sm text-steel-600 hover:text-accent-600"
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/electric-vehicle"
                    className="block rounded-md px-3 py-1.5 text-sm font-semibold text-accent-600"
                  >
                    View All EV Products →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-colors ${
                location.pathname === '/about' ? 'bg-accent-50 text-accent-600' : 'text-navy-700 hover:bg-navy-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-colors ${
                location.pathname === '/contact' ? 'bg-accent-50 text-accent-600' : 'text-navy-700 hover:bg-navy-50'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/news"
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-colors ${
                location.pathname === '/news' ? 'bg-accent-50 text-accent-600' : 'text-navy-700 hover:bg-navy-50'
              }`}
            >
              News Feed
            </Link>

            <div className="pt-4">
              <Link to="/contact" className="btn-primary w-full text-center">
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

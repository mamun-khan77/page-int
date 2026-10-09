import { Link } from 'react-router-dom';
import {
  Wrench,
  GraduationCap,
  Cog,
  Warehouse,
  HardHat,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Award,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  Briefcase,
  Building2,
  MapPin,
  Sparkles,
  Clock,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/ui/Breadcrumb';
import StatCard from '@/components/ui/StatCard';
import Reveal from '@/components/ui/Reveal';
import { companyStats, distributors, visionaries, pillars } from '@/data/company';
import historyImage from '@/assets/page-history.png';

// Map pillar iconName to actual icon component
const pillarIconMap = {
  Wrench: Wrench,
  GraduationCap: GraduationCap,
  Cog: Cog,
  Warehouse: Warehouse,
  HardHat: HardHat,
};

export default function About() {
  return (
    <>
      <SEO
        title="About Us | PAGE International Ltd."
        description="PAGE International Ltd. - Distributor for LAUNCH, SmartSafe, ATS Elgi & WIPRO Enterprises Ltd. Supplying automotive garage equipment, training solutions, and workshop infrastructure across Bangladesh."
        path="/about"
      />

      {/* Accessible Skip Link Target */}
      <div id="content" tabIndex={-1} className="outline-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5506047/pexels-photo-5506047.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern automotive engineering facility"
            loading="lazy"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/80" />
        </div>

        <div className="container-page relative">
          <Breadcrumb items={[{ label: 'About' }]} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              PAGE INTERNATIONAL LTD.
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              We are Passionate About Our Work
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-steel-300">
              Pioneering modern garage technology, workshop construction, and automotive technician
              development across Bangladesh. Authorized distributor for LAUNCH, SmartSafe, ATS Elgi &amp; WIPRO Enterprises Ltd.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/garage-equipment" className="btn btn-primary">
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                Explore Equipment
              </Link>
              <Link
                to="/contact"
                className="btn bg-white text-black border-white hover:bg-gray-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE INTERNATIONAL HISTORY: A fast growing journey */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Image with Overlays */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-2xl shadow-card border border-steel-200 bg-navy-950">
                  <img
                    src={historyImage}
                    alt="PAGE International automotive technology and modern workshop"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: History Content */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div>
                  <p className="section-eyebrow">PAGE INTERNATIONAL HISTORY</p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
                    A Fast Growing Journey
                  </h2>

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-700">
                    <p>
                      Our team comprises experienced engineers with over fifteen to twenty years in the
                      automobile industry, making us well-known and trusted within Bangladesh&rsquo;s automotive sector.
                      We specialize in supplying premium tools, equipment, and workshop construction solutions tailored
                      to our customers&rsquo; needs and proudly serve as the distributor for <strong className="text-navy-900 font-bold">LAUNCH, SmartSafe, ATS Elgi &amp; WIPRO Enterprises Ltd.</strong>
                    </p>
                    <p>
                      In the past year alone, we have compiled a database of over <strong className="text-navy-900 font-bold">500 local workshops and parts sellers</strong> across Bangladesh,
                      with plans to expand this number further. Notably, we have identified that around <strong className="text-accent-600 font-bold">80% of workshops lack modern tools</strong>,
                      creating a timely opportunity for upgrading. As workshop owners recognize our expertise and reputation, we aim to aggressively promote your products within this promising market.
                    </p>
                  </div>

                  {/* Key highlights checklist */}
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      '15–20+ Years Automotive Industry Expertise',
                      'Distributor for LAUNCH, SmartSafe, ATS Elgi & WIPRO',
                      '500+ Local Workshop & Parts Seller Network',
                      'Turnkey Workshop Construction & Modernization',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy-800">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-steel-200 bg-steel-50 py-12 lg:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {companyStats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 60}>
                <div className="rounded-xl border border-steel-200/80 bg-white p-6 text-center shadow-card transition-transform duration-200 hover:-translate-y-1">
                  <StatCard value={stat.value} label={stat.label} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Philosophy Section */}
      <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-24 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8985923/pexels-photo-8985923.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Automotive workshop background"
            loading="lazy"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/85 to-navy-900" />
        </div>

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-400">
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                Our Commitment to Quality
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
                We strive to provide our customers with the highest quality
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-300 sm:text-lg">
                <p>
                  PAGE International Ltd. operates on the philosophy that investing in the automotive
                  industry is an investment in Bangladesh&rsquo;s future. We believe in empowering individuals
                  with the knowledge and tools to excel, fostering a culture of continuous learning and improvement.
                </p>
                <p>
                  Our commitment to excellence extends beyond providing equipment; we strive to build lasting
                  partnerships with our customers, contributing to their success and the advancement of the entire
                  automotive ecosystem in Bangladesh through integrity, innovation, and unwavering support.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Philosophy Pillars */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Integrity & Trust',
                description: 'Transparent dealings, genuine certified machinery, and honest technical guidance.',
              },
              {
                icon: Target,
                title: 'Innovation & Modernization',
                description: 'Bringing state-of-the-art diagnostic scanners, ADAS calibration, and EV tools to Bangladesh.',
              },
              {
                icon: Users,
                title: 'Lasting Partnerships',
                description: 'End-to-end after-sales service, engineer training, and continuous customer growth.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={150 + idx * 80}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600/20 text-accent-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-300">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team / Our Visionaries */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="section-eyebrow">Our Team</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
                Our Visionaries
              </h2>
              <p className="mt-3 text-base text-steel-600">
                Pioneering leaders bringing decades of specialized engineering, electric vehicle expertise, and global market knowledge.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {visionaries.map((leader, idx) => (
              <Reveal key={leader.role} delay={idx * 120}>
                <div className="card flex flex-col justify-between p-8 hover:shadow-card-hover border-steel-200 h-full">
                  <div>
                    {/* Header with Role & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel-100 pb-5">
                      <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-600">
                          Leadership
                        </span>
                        <h3 className="text-2xl font-bold text-navy-900">{leader.role}</h3>
                      </div>
                      <div className="rounded-full bg-navy-50 px-3.5 py-1 text-xs font-semibold text-navy-700">
                        {leader.experience}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="mt-5 text-sm leading-relaxed text-steel-700">
                      {leader.bio}
                    </p>

                    {/* Focus Areas */}
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-steel-500">
                        Core Focus &amp; Expertise:
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {leader.specialties.map((spec) => (
                          <li key={spec} className="flex items-start gap-2.5 text-xs text-navy-800">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-steel-100 flex items-center justify-between text-xs text-steel-500">
                    <span className="font-semibold text-navy-800">PAGE International Ltd.</span>
                    <span>Executive Leadership</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of PAGE that Drive Everything We Do */}
      <section className="border-t border-steel-200 bg-steel-50 py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="section-eyebrow">Comprehensive Capabilities</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
                Pillars of PAGE that Drive Everything We Do
              </h2>
              <p className="mt-3 text-base text-steel-600">
                End-to-end solutions powering every aspect of modern automotive servicing, training, and infrastructure.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillarIconMap[pillar.iconName] || Wrench;
              return (
                <Reveal key={pillar.id} delay={idx * 80}>
                  <div className="card group flex h-full flex-col justify-between p-7 hover:-translate-y-1 hover:shadow-card-hover transition-all">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-accent-600">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-navy-900">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-steel-600">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-steel-100">
                      <Link
                        to="/garage-equipment"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 transition-colors hover:text-accent-700"
                      >
                        Explore Solutions
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {/* Turnkey Project Card to complete grid balance */}
            <Reveal delay={pillars.length * 80}>
              <div className="card group flex h-full flex-col justify-between bg-gradient-to-br from-navy-900 to-navy-950 p-7 text-white hover:-translate-y-1 hover:shadow-card-hover transition-all">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-600 text-white">
                    <Building2 className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">Workshop Modernization</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-300">
                    Turnkey workshop design, 3D floor planning, electrical layout, and installation tailored to OEM specifications.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-400 transition-colors hover:text-white"
                  >
                    Consult With Engineers
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-8 sm:p-10 border-accent-100 bg-gradient-to-br from-white to-accent-50/30">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-600 text-white shadow-sm">
                  <Target className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-navy-900">Our Mission</h3>
                <p className="mt-4 text-base leading-relaxed text-steel-700">
                  PAGE International Ltd. is dedicated to supplying cutting-edge equipment, delivering industry-leading training programs, and providing exceptional customer service, empowering automotive professionals and driving the growth and modernization of Bangladesh&rsquo;s automotive sector.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card h-full p-8 sm:p-10 border-navy-100 bg-gradient-to-br from-white to-navy-50/40">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white shadow-sm">
                  <Eye className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-navy-900">Our Vision</h3>
                <p className="mt-4 text-base leading-relaxed text-steel-700">
                  To be the premier provider of advanced automotive service equipment and training solutions in Bangladesh, recognized for innovation, quality, and a commitment to developing a highly skilled automotive workforce.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brands & Distribution Partners */}
      <section className="border-t border-steel-200 bg-steel-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="section-eyebrow">Authorized Distributor</p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
                Our Global Brand Partners
              </h2>
              <p className="mt-3 text-base text-steel-600">
                Proudly serving as the official distributor in Bangladesh for world-leading automotive technology manufacturers.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {distributors.map((brand, idx) => (
              <Reveal key={brand} delay={idx * 80}>
                <div className="card flex h-full flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white mb-3">
                    <Wrench className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-base font-extrabold text-navy-900">{brand}</div>
                  <div className="mt-1 text-xs font-semibold text-accent-600">Official Distributor</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Get Your Best Automotive Services */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 text-white">
        <div className="container-page relative text-center">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-400">
                PAGE INTERNATIONAL LTD.
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
                Get Your Best Automotive Services
              </h2>
              <p className="mt-4 text-lg text-steel-300">
                Visit us in person for better experience or just shop online
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link to="/garage-equipment" className="btn btn-primary btn-lg">
                  <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                  Shop Now
                </Link>
                <Link to="/contact" className="btn btn-outline border-steel-500 text-white hover:bg-white/10 hover:border-white btn-lg">
                  Visit Us in Person
                </Link>
              </div>

              {/* Navigation Quick Links Anchor */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-steel-800 pt-8 text-sm text-steel-400">
                <Link to="/" className="hover:text-accent-400 transition-colors">Home</Link>
                <span className="text-steel-600">•</span>
                <Link to="/garage-equipment" className="hover:text-accent-400 transition-colors">Garage Equipment</Link>
                <span className="text-steel-600">•</span>
                <Link to="/about" className="text-white font-semibold">About</Link>
                <span className="text-steel-600">•</span>
                <Link to="/contact" className="hover:text-accent-400 transition-colors">Contact</Link>
                <span className="text-steel-600">•</span>
                <Link to="/news" className="hover:text-accent-400 transition-colors">News Feed</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

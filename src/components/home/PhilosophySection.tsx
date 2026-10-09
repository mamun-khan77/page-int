import Reveal from '@/components/ui/Reveal';

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8985923/pexels-photo-8985923.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Automotive workshop interior"
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
      </div>

      <div className="container-page relative py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="section-eyebrow text-accent-400">Our Philosophy</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15] text-balance">
                Your Premier Destination for All Automotive Needs.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-300">
                <p>
                  PAGE International Ltd. operates on the philosophy that investing in the automotive
                  industry is an investment in Bangladesh&rsquo;s future.
                </p>
                <p>
                  We believe in empowering individuals with the knowledge and tools to excel, fostering
                  a culture of continuous learning and improvement.
                </p>
                <p>
                  Our commitment to excellence extends beyond providing equipment; we strive to build
                  lasting partnerships with our customers, contributing to their success and the
                  advancement of the entire automotive ecosystem in Bangladesh through integrity,
                  innovation, and unwavering support.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stat */}
          <Reveal delay={200}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm lg:p-10">
              <div className="text-5xl font-extrabold text-accent-500 lg:text-6xl">95%</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-white">
                Customer Satisfaction
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[95%] rounded-full bg-accent-500" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

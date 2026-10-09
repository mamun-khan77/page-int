import SEO from '@/components/SEO';
import Hero from '@/components/home/Hero';
import ValueStrip from '@/components/home/ValueStrip';
import TrendingProducts from '@/components/home/TrendingProducts';
import AboutSection from '@/components/home/AboutSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import PopularProducts from '@/components/home/PopularProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="PAGE International Ltd. | Automotive Garage Equipment & Solutions Bangladesh"
        description="Professional garage equipment, vehicle service solutions, and technical expertise for Bangladesh's growing automotive industry. Distributor for LAUNCH, SmartSafe, ATS Elgi & WIPRO Enterprises Ltd."
        path="/"
      />
      <Hero />
      <ValueStrip />
      <TrendingProducts />
      <AboutSection />
      <CategoriesSection />
      <PhilosophySection />
      <PopularProducts />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

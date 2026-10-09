import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Testimonials"
            title="What Our Customers Say"
            description="Discover why customers choose PAGE International as their trusted automotive equipment partner."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

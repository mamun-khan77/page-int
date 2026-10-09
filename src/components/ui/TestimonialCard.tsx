import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="card flex flex-col p-6">
      <div className="mb-4 flex gap-0.5" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? 'fill-accent-500 text-accent-500' : 'fill-steel-200 text-steel-200'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-steel-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-5 flex items-center gap-3 border-t border-steel-100 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white">
          {initials}
        </div>
        <div>
          <div className="text-sm font-bold text-navy-900">{testimonial.name}</div>
          <div className="text-xs text-steel-500">
            {testimonial.designation}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

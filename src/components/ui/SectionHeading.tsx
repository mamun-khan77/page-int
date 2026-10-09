import { type ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl text-balance">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-steel-600 text-balance">{description}</p>
      )}
      {children}
    </div>
  );
}

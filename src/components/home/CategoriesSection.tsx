import SectionHeading from '@/components/ui/SectionHeading';
import CategoryCard from '@/components/ui/CategoryCard';
import Reveal from '@/components/ui/Reveal';
import { categories } from '@/data/categories';

export default function CategoriesSection() {
  return (
    <section className="bg-steel-50 py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Categories"
            title="Our Categories"
            description="Comprehensive automotive equipment solutions across five specialized categories."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

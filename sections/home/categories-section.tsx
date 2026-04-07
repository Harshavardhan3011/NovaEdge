import Link from "next/link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { BrainIcon, LaptopIcon, MessageIcon } from "@/components/icons";
import { IconTile } from "@/components/icon-tile";
import { courseCategories } from "@/lib/site-data";

const iconMap = {
  technical: LaptopIcon,
  aptitude: BrainIcon,
  "soft-skills": MessageIcon,
};

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Course categories"
          title="Three focused paths that meet learners where they are"
          description="Each track has a different purpose, but the same standard: practical content, clear outcomes, and a polished learning experience."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {courseCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];

            return (
              <Link key={category.title} href={category.href} className="group block h-full">
                <Card className="h-full p-7 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <IconTile>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{category.description}</p>
                  <p className="mt-6 text-sm font-semibold text-blue-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blue-800">
                    Explore the category
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
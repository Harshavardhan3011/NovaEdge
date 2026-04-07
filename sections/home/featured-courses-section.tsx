import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProgramCard } from "@/components/program-card";
import { featuredCourses } from "@/lib/site-data";

export function FeaturedCoursesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured courses"
          title="High-impact programs that build useful skills fast"
          description="These courses reflect the core of the academy: practical learning, visible output, and a clear path to the next milestone."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <ProgramCard key={course.title} {...course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
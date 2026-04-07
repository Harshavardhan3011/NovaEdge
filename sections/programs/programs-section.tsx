import { Container } from "@/components/container";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/section-heading";
import { programSections } from "@/lib/site-data";

export function ProgramsSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="A complete catalog organized by learner outcome"
          description="Each section focuses on a specific capability area, making it easier to understand the journey and choose the right starting point."
        />

        <div className="mt-10 space-y-12">
          {programSections.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                  {group.title}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-600">{group.description}</p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.programs.map((program) => (
                  <ProgramCard key={program.title} {...program} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ProgramsSection } from "@/sections/programs/programs-section";

export const metadata: Metadata = {
  title: "Our Programs",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="py-14 sm:py-16">
        <Container>
          <div className="rounded-4xl border border-slate-200 bg-white px-6 py-8 shadow-lg shadow-slate-200/60 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Our programs
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              A structured program catalog for technical, aptitude, and soft-skills outcomes.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Choose a path that matches the learner goal, then move through a clear progression of
              practice, mentoring, and review.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Enroll / Learn More</ButtonLink>
              <ButtonLink href="/programs/technical" variant="secondary">
                Explore technical track
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <ProgramsSection />
    </>
  );
}
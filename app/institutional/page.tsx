import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { InstitutionalSection } from "@/sections/institutional/institutional-section";
import { CtaSection } from "@/sections/shared/cta-section";

export const metadata: Metadata = {
  title: "Institutional",
};

export default function InstitutionalPage() {
  return (
    <>
      <section className="py-14 sm:py-16">
        <Container>
          <div className="rounded-4xl border border-slate-200 bg-white px-6 py-8 shadow-lg shadow-slate-200/60 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Institutional partnerships
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Campus-ready training built for student engagement and measurable delivery.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              We work with colleges, schools, and learning teams to deliver programs that align with
              academic goals and scheduling constraints.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a proposal</ButtonLink>
              <ButtonLink href="/programs" variant="secondary">
                Review our programs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <InstitutionalSection />
      <CtaSection
        title="Planning a campus workshop or institutional bootcamp?"
        description="Share the audience, timeline, and expected outcomes and we will help design the right format."
        buttonLabel="Contact our team"
        buttonHref="/contact"
      />
    </>
  );
}
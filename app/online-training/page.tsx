import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { OnlineTrainingSection } from "@/sections/online-training/online-training-section";
import { CtaSection } from "@/sections/shared/cta-section";

export const metadata: Metadata = {
  title: "Online Training",
};

export default function OnlineTrainingPage() {
  return (
    <>
      <section className="py-14 sm:py-16">
        <Container>
          <div className="rounded-4xl border border-slate-200 bg-white px-6 py-8 shadow-lg shadow-slate-200/60 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Online training
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Online classes with the same structure and support as an in-person program.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Nova Edge Academy keeps the learning experience consistent with live instruction,
              checkpoints, and a calm pace that works for remote cohorts.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a schedule</ButtonLink>
              <ButtonLink href="/programs" variant="secondary">
                View programs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <OnlineTrainingSection />
      <CtaSection
        title="Need a remote learning plan for your cohort?"
        description="We can help map the delivery schedule, session format, and support model around your participants."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
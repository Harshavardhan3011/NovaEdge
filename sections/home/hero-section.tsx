import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { InquiryForm } from "@/components/inquiry-form";
import { SparklesIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container className="max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
              <SparklesIcon className="h-4 w-4" aria-hidden="true" />
              Career training built for modern outcomes
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Practical learning for technical growth, communication, and exam readiness.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Nova Edge Academy helps learners and institutions build measurable progress through
              structured programs, live mentoring, and project-led practice.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/programs" className="rounded-full px-7 py-3.5">
                Explore Courses
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="rounded-full px-7 py-3.5">
                Contact
              </ButtonLink>
            </div>
          </div>

          <InquiryForm submitLabel="Get Quotes" />
        </div>
      </Container>
    </section>
  );
}
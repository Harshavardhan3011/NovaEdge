import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SparklesIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="bg-white pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <Container className="max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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

          <div className="relative">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
              <Image
                src="/hero-illustration.svg"
                alt="Nova Edge Academy learning illustration"
                width={720}
                height={620}
                priority
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
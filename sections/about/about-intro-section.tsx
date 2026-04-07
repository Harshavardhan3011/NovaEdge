import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function AboutIntroSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About us"
              title="A training organization focused on skill, structure, and momentum"
              description="We design training experiences that help people build confidence through practical repetition, measurable progress, and clear support."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/programs">View programs</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a conversation
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70">
            <Image
              src="/about-illustration.svg"
              alt="Nova Edge Academy overview illustration"
              width={760}
              height={620}
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
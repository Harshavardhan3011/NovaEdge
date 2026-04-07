import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

type CtaSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaSection({
  eyebrow = "Ready to move forward",
  title,
  description,
  buttonLabel,
  buttonHref,
}: CtaSectionProps) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-sky-50 px-6 py-10 shadow-lg shadow-sky-100 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={buttonHref} className="rounded-full! px-7! py-3.5!">
                {buttonLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
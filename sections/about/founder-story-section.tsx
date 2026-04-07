import Image from "next/image";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { founderHighlights } from "@/lib/site-data";

export function FounderStorySection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70 lg:order-1">
            <Image
              src="/founder-illustration.svg"
              alt="Founder story illustration"
              width={760}
              height={620}
              className="h-auto w-full rounded-3xl"
            />
          </div>

          <div className="lg:order-2">
            <SectionHeading
              eyebrow="Founder story"
              title="Created to turn training into visible career movement"
              description="Nova Edge Academy started with a simple observation: many learners do not need more information, they need a better structure for turning effort into progress."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {founderHighlights.map((item) => (
                <Card key={item.title} className="h-full">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
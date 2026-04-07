import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { BookOpenIcon, LaptopIcon, TargetIcon, UsersIcon } from "@/components/icons";
import { IconTile } from "@/components/icon-tile";
import { whyChooseUsFeatures } from "@/lib/site-data";

const iconMap = {
  mentors: UsersIcon,
  projects: BookOpenIcon,
  support: TargetIcon,
  flexible: LaptopIcon,
};

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="A training partner built around clarity, outcomes, and consistency"
          description="We focus on practical learning, visible progress, and smooth delivery across student, professional, and institutional audiences."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUsFeatures.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card key={feature.title} className="h-full p-7">
                <IconTile className="bg-sky-50 text-sky-600 ring-sky-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
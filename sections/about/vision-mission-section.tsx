import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { visionMission } from "@/lib/site-data";

export function VisionMissionSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Vision and mission"
          title="The principles that shape every program we deliver"
          description="Every engagement should feel coherent, supportive, and outcome-driven. These two ideas keep the academy focused."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {visionMission.map((item) => (
            <Card key={item.title} className="h-full p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
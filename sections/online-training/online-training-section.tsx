import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { IconTile } from "@/components/icon-tile";
import { ClockIcon, LaptopIcon, TargetIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { onlineTrainingFeatures } from "@/lib/site-data";

export function OnlineTrainingSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Online training"
              title="A flexible delivery model without losing structure"
              description="Remote learning should still feel intentional, accountable, and easy to follow. We keep the pace clear and the support visible."
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {onlineTrainingFeatures.map((feature) => (
                <Card key={feature.title}>
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <IconTile>
                  <ClockIcon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <div>
                  <p className="font-semibold text-slate-900">Structured schedules</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Fixed milestones keep every cohort aligned.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <IconTile>
                  <LaptopIcon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <div>
                  <p className="font-semibold text-slate-900">Modern classroom experience</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Live sessions, recordings, and task tracking in one flow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <IconTile>
                  <TargetIcon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <div>
                  <p className="font-semibold text-slate-900">Outcome reviews</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Short feedback loops make progress easy to act on.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
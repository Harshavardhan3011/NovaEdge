import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { IconTile } from "@/components/icon-tile";
import { BuildingIcon, UsersIcon, TargetIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { institutionalBenefits } from "@/lib/site-data";

export function InstitutionalSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Institutional"
              title="Programs tailored for campuses, centers, and learning teams"
              description="We work with institutions to create delivery models that fit the cohort, the calendar, and the reporting expectations."
            />

            <div className="mt-6 grid gap-5">
              {institutionalBenefits.map((feature) => (
                <Card key={feature.title} className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-linear-to-br from-white via-slate-50 to-indigo-50 p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <IconTile>
                  <BuildingIcon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <div>
                  <p className="font-semibold text-slate-900">Campus-friendly delivery</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Adapted to academic timetables and cohort size.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <IconTile>
                  <UsersIcon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <div>
                  <p className="font-semibold text-slate-900">Learner coordination</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Smooth scheduling and communication with stakeholders.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <IconTile>
                  <TargetIcon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <div>
                  <p className="font-semibold text-slate-900">Outcome tracking</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Regular checkpoints keep the engagement measurable.
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
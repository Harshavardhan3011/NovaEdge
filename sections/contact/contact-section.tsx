import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { IconTile } from "@/components/icon-tile";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact us"
              title="Tell us what you are planning and we will help shape the right format"
              description="Whether you need a learner cohort, a campus workshop, or a training roadmap for a team, start with a short message and we will take it from there."
            />

            <Card className="mt-6 p-5 sm:p-6">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    Name
                    <input
                      type="text"
                      name="name"
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    Email
                    <input
                      type="email"
                      name="email"
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="Tell us about your training need"
                  />
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 hover:shadow-lg"
                  >
                    Submit inquiry
                  </button>
                  <p className="text-sm text-slate-500">
                    We typically reply within one business day.
                  </p>
                </div>
              </form>
            </Card>
          </div>

          <div className="space-y-5">
            <Card>
              <Image
                src="/contact-illustration.svg"
                alt="Contact and support illustration"
                width={760}
                height={520}
                className="h-auto w-full rounded-3xl"
              />
            </Card>

            <Card className="p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-slate-900">Company contact details</h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-4">
                  <IconTile>
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">{contactDetails[0]}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <IconTile>
                    <MailIcon className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">{contactDetails[1]}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <IconTile>
                    <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  </IconTile>
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-sm text-slate-600">{contactDetails[2]}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <ButtonLink href="/programs" variant="secondary">
                  Explore programs
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Gallery",
};

const images = [
  { src: "/hero-illustration.svg", title: "Classroom Workshops" },
  { src: "/about-illustration.svg", title: "Mentor Sessions" },
  { src: "/contact-illustration.svg", title: "Career Guidance" },
  { src: "/founder-illustration.svg", title: "Project Reviews" },
];

export default function GalleryPage() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container className="max-w-7xl">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Gallery</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Nova Edge Learning Moments
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
            Highlights from live classes, practice labs, mentoring sessions, and learner showcases.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <article key={image.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={image.src}
                alt={image.title}
                width={640}
                height={480}
                className="h-44 w-full object-cover"
              />
              <p className="px-4 py-3 text-sm font-medium text-slate-700">{image.title}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

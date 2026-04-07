import { Container } from "@/components/container";
import { CourseCard } from "@/components/course-card";
import type { ProgramTrack } from "@/lib/site-data";

type ProgramTrackSectionProps = {
  track: ProgramTrack;
};

export function ProgramTrackSection({ track }: ProgramTrackSectionProps) {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container className="max-w-7xl">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Our Programs</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {track.title}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{track.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {track.courses.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import type { DetailedCourse } from "@/lib/site-data";

type CourseCardProps = {
  course: DetailedCourse;
};

export function CourseCard({ course }: CourseCardProps) {
  const stars = "★".repeat(course.rating) + "☆".repeat(5 - course.rating);

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="relative">
        <Image
          src={course.image}
          alt={course.name}
          width={900}
          height={520}
          className="h-44 w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
          {course.offerTag}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">{course.name}</h3>
          <p className="text-sm leading-6 text-slate-600">{course.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{course.duration}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{course.mode}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{course.level}</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">{course.language}</span>
        </div>

        <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <p>
            <span className="font-semibold text-slate-900">Price:</span> {course.price}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Rating:</span> {stars}
          </p>
          <p className="sm:col-span-2">
            <span className="font-semibold text-slate-900">Batch:</span> {course.batchTimer}
          </p>
          <p className="sm:col-span-2">
            <span className="font-semibold text-slate-900">Projects:</span> {course.projectsIncluded}
          </p>
          <p className="sm:col-span-2">
            <span className="font-semibold text-slate-900">Certificate:</span>{" "}
            {course.hasCertificate ? "Included" : "Not Included"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Skills Covered</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {course.skillsCovered.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <ButtonLink href={course.enrollHref} className="w-full justify-center rounded-xl">
          Enroll Now
        </ButtonLink>
      </div>
    </article>
  );
}

import Link from "next/link";
import { Card } from "@/components/card";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  title: string;
  duration: string;
  description: string;
  href: string;
  category?: string;
  className?: string;
};

export function ProgramCard({
  title,
  duration,
  description,
  href,
  category,
  className,
}: ProgramCardProps) {
  return (
    <Card className={cn("flex h-full flex-col justify-between p-7", className)}>
      <div>
        {category ? (
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            {category}
          </p>
        ) : null}
        <div className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
          <ClockIcon className="mr-2 h-4 w-4 text-blue-500" aria-hidden="true" />
          <span>{duration}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-base leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-8">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-all duration-300 hover:translate-x-0.5 hover:text-blue-800"
        >
          Learn more
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
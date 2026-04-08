import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  href: string;
};

export function CategoryCard({ title, description, includes, ctaLabel, href }: CategoryCardProps) {
  return (
    <article className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-900">Includes</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-600">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Link href={href} className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800">
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

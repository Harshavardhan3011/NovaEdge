import { Card } from "@/components/card";
import { StarIcon } from "@/components/icons";

type TestimonialCardProps = {
  name: string;
  role: string;
  message: string;
};

export function TestimonialCard({ name, role, message }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="h-full p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-amber-400" aria-hidden="true">
          <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
          <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
          <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
          <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
          <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
          {initials}
        </div>
      </div>
      <p className="mt-6 text-base leading-8 text-slate-600">{message}</p>
      <div className="mt-8 border-t border-slate-200 pt-5">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </Card>
  );
}
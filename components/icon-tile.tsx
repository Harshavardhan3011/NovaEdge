import { cn } from "@/lib/utils";

type IconTileProps = {
  children: React.ReactNode;
  className?: string;
};

export function IconTile({ children, className }: IconTileProps) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
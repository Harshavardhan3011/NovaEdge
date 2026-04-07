import Link from "next/link";
import { Container } from "@/components/container";
import { navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Nova Edge Academy
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Practical learning for technical, aptitude, and soft-skills growth across students,
              institutions, and working professionals.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Explore
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {navigation.map((item) =>
                item.children ? null : (
                  <Link key={item.label} href={item.href ?? "/"} className="block hover:text-blue-700">
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Bengaluru, Karnataka</p>
              <p>hello@novaedgeacademy.in</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-500">© 2026 Nova Edge Academy. All rights reserved.</p>
      </Container>
    </footer>
  );
}
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { stats } from "@/lib/site-data";

export function AboutStatsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-4xl border border-slate-200 bg-white px-6 py-8 shadow-lg shadow-slate-200/70 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <Card key={item.label} className="border-0 bg-slate-50 p-5 shadow-none">
                <p className="text-4xl font-semibold tracking-tight text-slate-900">{item.value}</p>
                <p className="mt-3 text-sm text-slate-600">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
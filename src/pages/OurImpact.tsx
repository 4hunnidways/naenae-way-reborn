import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

const stats = [
  { v: "12K+", l: "Meals served" },
  { v: "350+", l: "Families supported" },
  { v: "8", l: "Active initiatives" },
  { v: "20+", l: "Partner organizations" },
];

export default function OurImpact() {
  useSeo("Our Impact — Nae Nae's Way", "The lives touched and the work being done in our communities.");
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Our Impact</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Action over words.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            We measure success in the lives we touch. Here's a snapshot of the work in motion.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-3xl bg-card border border-border p-7 text-center">
                <div className="font-display text-5xl text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/w7VG4hX-dMw"
              title="Nae Nae's Way — Our Impact"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

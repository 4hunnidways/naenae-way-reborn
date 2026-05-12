import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/celebrity-supporters")({
  head: () => ({
    meta: [
      { title: "Celebrity Supporters — Nae Nae's Way" },
      { name: "description", content: "Public figures who stand with Nae Nae's Way." },
    ],
  }),
  component: CelebritySupporters,
});

function CelebritySupporters() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Who We Are</p>
          <h1 className="mt-3 font-display text-5xl">Celebrity Supporters</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            Artists, athletes, and advocates who lend their voice and platform to
            amplify the causes Nae Nae's Way champions.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="aspect-[4/5] rounded-3xl bg-card border border-border flex items-end p-6">
                <div>
                  <p className="font-display text-2xl">Coming Soon</p>
                  <p className="text-sm text-muted-foreground mt-1">Featured supporter</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

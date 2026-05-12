import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import founder from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/meet-nae-nae")({
  head: () => ({
    meta: [
      { title: "Meet Nae Nae — Nae Nae's Way" },
      { name: "description", content: "Get to know Shonee 'Nae Nae' Jackson, founder of Nae Nae's Way." },
    ],
  }),
  component: MeetNaeNae,
});

function MeetNaeNae() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <img src={founder} alt="Shonee 'Nae Nae' Jackson" className="rounded-3xl w-full object-cover shadow-2xl" />
          <div>
            <p className="eyebrow">Meet Nae Nae</p>
            <h1 className="mt-3 font-display text-5xl">Shonee Jackson</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Affectionately known as "Nae Nae," Shonee is a mother, mentor, social
              activist and entrepreneur whose lived experience fuels every cause this
              foundation champions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From founding 4Hunnid Ways to launching Nae Nae's Way, her work uplifts
              foster youth, the unhoused, and families navigating health crises.
            </p>
            <Link to="/who-we-are" className="pill-link mt-8 inline-flex">Read our full story</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

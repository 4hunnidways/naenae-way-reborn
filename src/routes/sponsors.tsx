import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — Nae Nae's Way" },
      { name: "description", content: "The partners and sponsors who make our work possible." },
    ],
  }),
  component: Sponsors,
});

const sponsors = ["4Hunnid Ways","YG Foundation","Karen Civil","Compton Cares","Calabasas Coalition","MS Brokerage Transportation","Westside Wellness","Sister Circle"];

function Sponsors() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Sponsors</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Partners in the mission.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            We're grateful to the organizations and individuals who help fuel
            every initiative we run.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.map((s) => (
              <div key={s} className="aspect-[4/3] rounded-2xl bg-card border border-border flex items-center justify-center text-center px-4 hover:border-primary/60 transition">
                <span className="font-display text-lg">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

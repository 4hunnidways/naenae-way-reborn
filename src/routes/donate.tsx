import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Nae Nae's Way" },
      { name: "description", content: "Support Nae Nae's Way and help bridge the gap for our communities." },
    ],
  }),
  component: Donate,
});

const tiers = [
  { amt: "$25", desc: "Provides meals for a family in need." },
  { amt: "$100", desc: "Funds health-awareness materials for an event." },
  { amt: "$500", desc: "Sponsors a youth mentorship session." },
];

function Donate() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Donate</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Your gift becomes action.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Every dollar helps Nae Nae's Way support families, raise awareness,
            and stand alongside our community.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.amt} className="rounded-3xl bg-card border border-border p-8 text-center hover:border-primary/60 transition">
                <Heart className="mx-auto text-primary" />
                <div className="mt-3 font-display text-4xl">{t.amt}</div>
                <p className="mt-3 text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl p-10 text-center" style={{ background: "var(--gradient-pink)" }}>
            <h2 className="font-display text-3xl text-primary-foreground">Donate via PayPal</h2>
            <p className="mt-3 text-primary-foreground/90">Secure giving processed through PayPal.</p>
            <a
              href="https://www.paypal.com/donate"
              target="_blank" rel="noreferrer"
              className="mt-6 inline-block px-8 py-3 rounded-full bg-background text-foreground font-semibold hover:bg-foreground hover:text-background transition"
            >
              Donate with PayPal
            </a>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Mailing address: 22287 Mulholland Hwy #358, Calabasas, CA 91302-5157
          </p>
        </div>
      </section>
    </Layout>
  );
}

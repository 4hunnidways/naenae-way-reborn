import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/support-team")({
  head: () => ({
    meta: [
      { title: "Support Team — Nae Nae's Way" },
      { name: "description", content: "The dedicated team behind Nae Nae's Way." },
    ],
  }),
  component: SupportTeam,
});

const team = [
  { name: "Shonee Jackson", role: "Founder & CEO" },
  { name: "Board of Directors", role: "Strategic Leadership" },
  { name: "Volunteer Coordinators", role: "Community Outreach" },
  { name: "Program Leads", role: "Initiative Management" },
];

function SupportTeam() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Who We Are</p>
          <h1 className="mt-3 font-display text-5xl">Support Team</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            The people behind every program, drive, and event. Together we keep the
            mission moving forward.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <article key={m.name} className="rounded-3xl bg-card border border-border p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

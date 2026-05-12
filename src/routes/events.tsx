import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Nae Nae's Way" },
      { name: "description", content: "Upcoming community events, fundraisers, and awareness drives." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "Sep 14, 2026", title: "Annual Community Health Fair", place: "Burbank, CA" },
  { date: "Oct 22, 2026", title: "Vision Awareness Walk", place: "Calabasas, CA" },
  { date: "Nov 30, 2026", title: "Holiday Family Drive", place: "Los Angeles, CA" },
  { date: "Feb 8, 2027", title: "Mental Health Roundtable", place: "Virtual" },
];

function Events() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Events</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Show up. Stand together.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Join us at upcoming events to support our initiatives, meet the
            community, and be part of the change.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <article key={e.title} className="rounded-3xl border border-border bg-card p-7 hover:border-primary/60 transition">
                <p className="text-primary font-semibold flex items-center gap-2"><Calendar size={16} /> {e.date}</p>
                <h3 className="mt-3 font-display text-2xl">{e.title}</h3>
                <p className="mt-2 text-muted-foreground flex items-center gap-2"><MapPin size={16} /> {e.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import { Calendar, MapPin } from "lucide-react";
import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";
import event4 from "@/assets/events/event-4.jpg";
import event5 from "@/assets/events/event-5.jpg";
import event6 from "@/assets/events/event-6.png";
import event7 from "@/assets/events/event-7.avif";

const events = [
  { date: "Sep 14, 2026", title: "Annual Community Health Fair", place: "Burbank, CA" },
  { date: "Oct 22, 2026", title: "Vision Awareness Walk", place: "Calabasas, CA" },
  { date: "Nov 30, 2026", title: "Holiday Family Drive", place: "Los Angeles, CA" },
  { date: "Feb 8, 2027", title: "Mental Health Roundtable", place: "Virtual" },
];

const gallery = [
  { src: event1, alt: "Nae Nae and kids preparing meals in the kitchen" },
  { src: event2, alt: "Packing green care bags with food and essentials" },
  { src: event3, alt: "Nae Nae and supporters in front of the TeleHealth Van" },
  { src: event4, alt: "TeleHealth Van event with community members" },
  { src: event5, alt: "Handing out care bags to community members on the street" },
  { src: event6, alt: "TeleHealth Van providing mobile telemeeting services" },
  { src: event7, alt: "Shonee with family at a community event" },
];

export default function Events() {
  useSeo("Events — Nae Nae's Way", "Upcoming community events, fundraisers, and awareness drives.");
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Events</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Show up. Stand together.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Join us at upcoming events to support our initiatives, meet the community, and be
            part of the change.
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

          <div className="mt-20">
            <p className="eyebrow">From the field</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Moments from past events</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {gallery.map((p, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border border-border bg-card ${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-square hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

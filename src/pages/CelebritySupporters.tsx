import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import cedric from "@/assets/celebrities/cedric-the-entertainer.jpg";
import rayJ from "@/assets/celebrities/ray-j.jpeg";
import yg from "@/assets/celebrities/yg.jpeg";

const supporters = [
  { name: "Cedric the Entertainer", role: "Actor & Comedian", image: cedric },
  { name: "Ray J", role: "Singer & Entrepreneur", image: rayJ },
  { name: "YG", role: "Rapper", image: yg },
];

export default function CelebritySupporters() {
  useSeo("Celebrity Supporters — Nae Nae's Way", "Public figures who stand with Nae Nae's Way.");
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Who We Are</p>
          <h1 className="mt-3 font-display text-5xl">Celebrity Supporters</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            Artists, athletes, and advocates who lend their voice and platform to amplify the
            causes Nae Nae's Way champions.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supporters.map((s) => (
              <article
                key={s.name}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-border"
              >
                <img
                  src={s.image}
                  alt={`${s.name} supporting Nae Nae's Way`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-display text-2xl">{s.name}</p>
                  <p className="text-sm opacity-90 mt-1">{s.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

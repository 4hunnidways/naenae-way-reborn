import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

const data: Record<string, { title: string; tagline: string; body: string[] }> = {
  community: {
    title: "Community Engagement",
    tagline: "Showing up where it counts.",
    body: [
      "We partner with local organizations, schools, and shelters to deliver consistent, on-the-ground support across Los Angeles and beyond.",
      "From food drives to back-to-school programs, our community work is the heart of everything Nae Nae's Way stands for.",
    ],
  },
  "pseudo-tumor-cerebri": {
    title: "Pseudo Tumor Cerebri",
    tagline: "Awareness, advocacy, support.",
    body: [
      "Pseudo Tumor Cerebri (Idiopathic Intracranial Hypertension) affects thousands and is often misunderstood.",
      "We raise awareness, share resources, and connect patients with medical professionals and peer support groups.",
    ],
  },
};

export default function InitiativeGeneric() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? data[slug] : undefined;
  useSeo(item ? `${item.title} — Nae Nae's Way` : "Initiative — Nae Nae's Way", item?.tagline);

  if (!item) return <Navigate to="/" replace />;

  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">← All initiatives</Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{item.title}</h1>
          <p className="mt-4 text-primary text-xl italic">{item.tagline}</p>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {item.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link to="/donate" className="pill-link mt-10 inline-flex">Support this cause</Link>
        </div>
      </section>
    </Layout>
  );
}

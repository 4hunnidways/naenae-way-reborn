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

          {slug === "pseudo-tumor-cerebri" && (
            <div className="mt-12">
              <h2 className="font-display text-3xl mb-4 text-foreground">Shonee's Journey with Pseudo Tumor Cerebri</h2>
              <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/A0I3C0Gdipg"
                  title="Shonee Jackson on her journey with Pseudo Tumor Cerebri"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <Link to="/donate" className="pill-link mt-10 inline-flex">Support this cause</Link>
        </div>
      </section>
    </Layout>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

const data: Record<string, { title: string; tagline: string; body: string[] }> = {
  "community": {
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
  "visual-impairment": {
    title: "Visual Impairment",
    tagline: "Vision is power.",
    body: [
      "We support those living with low vision and blindness through resources, screenings, and accessibility advocacy.",
    ],
  },
  "mental-health": {
    title: "Mental Health",
    tagline: "Strength includes asking for help.",
    body: [
      "We work to reduce stigma and connect community members to therapists, peer groups, and crisis resources.",
    ],
  },
  "cancer": {
    title: "Cancer",
    tagline: "Standing with patients and families.",
    body: [
      "From early-detection education to fundraising for treatment support, we walk with families through every stage.",
    ],
  },
  "diabetes": {
    title: "Diabetes",
    tagline: "Knowledge that saves lives.",
    body: [
      "Through nutrition workshops and screenings, we help our community prevent and manage diabetes.",
    ],
  },
  "homelessness": {
    title: "Homelessness",
    tagline: "Dignity for every neighbor.",
    body: [
      "We feed, clothe, and connect unhoused neighbors with services that lead toward stable housing.",
    ],
  },
  "fitness-physical-health": {
    title: "Fitness & Physical Health",
    tagline: "Healthy bodies, strong communities.",
    body: [
      "Group fitness, walking clubs, and youth sports programs that make movement accessible and joyful.",
    ],
  },
};

export const Route = createFileRoute("/initiatives/$slug")({
  loader: ({ params }) => {
    const item = data[params.slug];
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Nae Nae's Way` },
          { name: "description", content: loaderData.tagline },
        ]
      : [{ title: "Initiative — Nae Nae's Way" }],
  }),
  notFoundComponent: () => (
    <Layout>
      <section className="section text-center">
        <h1 className="font-display text-4xl">Initiative not found</h1>
        <Link to="/" className="pill-link mt-6 inline-flex">Back home</Link>
      </section>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <section className="section text-center">
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </section>
    </Layout>
  ),
  component: Initiative,
});

function Initiative() {
  const item = Route.useLoaderData();
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">← All initiatives</Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{item.title}</h1>
          <p className="mt-4 text-primary text-xl italic">{item.tagline}</p>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {item.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          <Link to="/donate" className="pill-link mt-10 inline-flex">Support this cause</Link>
        </div>
      </section>
    </Layout>
  );
}

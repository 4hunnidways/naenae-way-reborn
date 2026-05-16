import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import founder from "@/assets/founder-portrait.jpg";

export default function WhoWeAre() {
  useSeo("Who We Are — Nae Nae's Way", "Meet Shonee Jackson and learn about the mission of Nae Nae's Way.");
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Who We Are</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">A portal to bridge the gap.</h1>
          <p className="mt-6 text-muted-foreground max-w-3xl text-lg leading-relaxed">
            Nae Nae's Way is a non-profit dedicated to community engagement, health awareness,
            and giving voice to those who need it most. We join forces with progressive
            agencies and individuals to shine a light on the people and causes that matter.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <img src={founder} loading="lazy" alt="Shonee Jackson" className="rounded-3xl w-full object-cover shadow-2xl" />
          <div>
            <p className="eyebrow">Founder & CEO</p>
            <h2 className="mt-3 font-display text-4xl">Shonee Jackson</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Shonee is a social activist, mentor, and entrepreneur who has spent her adult life
              in service to others. She founded 4Hunnid Ways, a 501(c)(3) supporting
              disadvantaged youth in the foster system through STEM education, and now leads
              Nae Nae's Way to expand that mission across multiple causes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Her work helping the homeless, feeding the needy, and uplifting young people forms
              the foundation of everything we do.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

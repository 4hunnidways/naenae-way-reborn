import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import founder from "@/assets/founder.jpg";
import community from "@/assets/community.jpg";
import family from "@/assets/family.jpg";
import signing from "@/assets/signing.jpg";
import sponsor4Hunnid from "@/assets/sponsor-4hunnid.jpeg";
import sponsorFishbone from "@/assets/sponsor-fishbone.png";
import sponsorDatMoi from "@/assets/sponsor-datmoi.png";

const sponsors = [
  { name: "4Hunnid", logo: sponsor4Hunnid },
  { name: "Fish Bone", logo: sponsorFishbone },
  { name: "Dat Moi Market", logo: sponsorDatMoi },
];
import { Heart, Users, Megaphone, ArrowRight } from "lucide-react";

const initiatives = [
  { slug: "community", label: "Community Engagement" },
  { slug: "pseudo-tumor-cerebri", label: "Pseudo Tumor Cerebri" },
  { slug: "visual-impairment", label: "Visual Impairment" },
  { slug: "mental-health", label: "Mental Health" },
  { slug: "cancer", label: "Cancer" },
  { slug: "diabetes", label: "Diabetes" },
  { slug: "homelessness", label: "Homelessness" },
  { slug: "fitness-physical-health", label: "Fitness / Physical Health" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nae Nae's Way — Strength in Action" },
      { name: "description", content: "A nonprofit founded by Shonee Jackson that bridges gaps and shines a light on community, health and wellbeing initiatives." },
      { property: "og:title", content: "Nae Nae's Way — Strength in Action" },
      { property: "og:description", content: "Bridging the gap and shining a light on those who need it most." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section pt-10">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" aria-hidden />
            <img
              src={founder}
              alt="Shonee Jackson, Founder & CEO of Nae Nae's Way"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
              width={1024}
              height={1024}
            />
          </div>
          <div>
            <p className="eyebrow">Our Initiatives</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight">
              Strength in <span className="text-primary italic">action.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg max-w-prose">
              Nae Nae's Way knows that strength lies not only in the words we say,
              but in the actions we take. Explore the causes we champion every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {initiatives.map((i) => (
                <Link key={i.slug} to="/initiatives/$slug" params={{ slug: i.slug }} className="pill-link text-sm">
                  {i.label}
                </Link>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/donate" className="pill-link">Donate</Link>
              <a
                href="https://naenaesway.us7.list-manage.com/subscribe?u=7fc60e6bec0ba26ea99ab9cd5&id=08597b611c"
                target="_blank" rel="noreferrer"
                className="px-6 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary font-medium"
              >
                Newsletter
              </a>
            </div>
            <p className="mt-6 text-sm text-primary/90 font-medium">
              #BlackLivesMatter · #TheMarathonContinues
            </p>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section bg-surface">
        <div className="container-narrow text-center">
          <p className="eyebrow">Home: Who We Are</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Our Non-Profit at a Glance</h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My life took a traumatic twist back in 1993. Although the struggles that
            followed were real, the strength I gained from that experience made me
            the woman I am today. Out of my struggles, Nae Nae's Way was born.
            I'm determined to join forces with progressive agencies and individuals,
            becoming a portal to bridge the gap and shine a light on those needing
            assistance. I have taken control and am doing things, Nae Nae's Way.
          </p>
          <a
            href="mailto:naenaesway@outlook.com"
            className="pill-link mt-8 inline-flex"
          >
            Get in Touch <ArrowRight size={16} className="ml-2" />
          </a>

          <div className="mt-12 mx-auto max-w-4xl aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/enngj1XN2F8"
              title="Nae Nae's Way"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-center">Home: What We Do</p>
          <h2 className="mt-3 text-center font-display text-4xl md:text-5xl">What We Do</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Support", body: "One day at a time, increasing community engagement." },
              { icon: Users, title: "Resources", body: "Partnering with leaders to help our community thrive." },
              { icon: Megaphone, title: "Championing", body: "Acting as a voice for the community we serve." },
            ].map((c) => (
              <article key={c.title} className="rounded-3xl bg-card border border-border p-8 hover:border-primary/60 transition-colors">
                <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <c.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[community, family, signing].map((src, i) => (
              <img key={i} src={src} loading="lazy" alt="Community moments" className="rounded-2xl aspect-square object-cover w-full" />
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section bg-surface">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <img src={founder} loading="lazy" alt="Shonee Jackson" className="rounded-3xl w-full object-cover" />
          <div>
            <p className="eyebrow">Meet the Founder</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Shonee Jackson</h2>
            <p className="mt-2 text-primary italic">CEO · Mother · Daughter · Sister · Entrepreneur · Community Advocate</p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shonee Jackson is the founder of the non-profit organization 4Hunnid Ways
                and CEO of Nae Nae's Way Inc. A social activist who believes in enriching
                the lives of children, she has advocated for youth as a tutor, mentor,
                and community leader.
              </p>
              <p>
                With experience in strategic development from launching her son Keenon's
                (YG) music career, Shonee founded 4Hunnid Ways — a 501(c)(3) whose mission
                is to enhance the lives of disadvantaged youth in the foster care system
                through STEM education.
              </p>
              <p>
                Driven and committed, Shonee continues to give youth and adults a deeper
                sense of pride — letting them know that someone cares, and showing them
                positive change is possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="section">
        <div className="container-narrow text-center">
          <p className="eyebrow">Home: Sponsors</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Our Sponsors</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sponsors.map((s) => (
              <div key={s.name} className="aspect-[4/3] rounded-2xl bg-card border border-border flex items-center justify-center p-8 hover:border-primary/60 transition">
                <img src={s.logo} alt={`${s.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow rounded-3xl p-10 md:p-16 text-center" style={{ background: "var(--gradient-pink)" }}>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground">Join us. Make change happen.</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
            Every contribution helps us bridge the gap for families, youth, and
            communities who need a hand and a voice.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/donate" className="px-7 py-3 rounded-full bg-background text-foreground font-semibold hover:bg-foreground hover:text-background transition">Donate Now</Link>
            <Link to="/who-we-are" className="px-7 py-3 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">Learn More</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

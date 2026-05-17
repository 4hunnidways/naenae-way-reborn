import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import kitchen1 from "@/assets/homeless-kitchen-1.jpg";
import kitchen2 from "@/assets/homeless-kitchen-2.jpg";
import street1 from "@/assets/impact/impact-1.jpg";
import street2 from "@/assets/impact/impact-2.jpg";

export default function Homelessness() {
  useSeo(
    "Homelessness — Nae Nae's Way",
    "Homelessness on the rise: causes, what it looks like, and how Nae Nae's Way supports families experiencing homelessness in LA.",
  );
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">← All initiatives</Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Homelessness on the Rise</h1>
          <p className="mt-4 text-primary text-xl italic">Dignity for every neighbor.</p>
          <p className="mt-2 text-muted-foreground">What it is, what causes it, what it's like to live with &amp; getting help.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>Can you imagine not having a place to live? Being homeless is more common than you may believe. The Department of Housing and Urban Development defines homelessness as "a person who has nowhere to go, no resources to obtain housing, and is being evicted within a week or discharged from an institution within a week, or one fleeing domestic violence."</p>
          <p>Another organization explains homelessness as "the situation of an individual, family, or community without stable, safe, permanent, appropriate housing, or the immediate prospect, means, and ability of acquiring it."</p>
          <p>You don't have to be living on the street to be homeless. Even with a roof over your head you can still be without a home — for example, when a lack of resources to fix unfit living conditions classifies a dwelling as uninhabitable. Regardless of life circumstances, homelessness is a real problem and the numbers only continue to increase.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">What causes homelessness?</h2>
          <p>Numerous factors and life events can catapult one into homelessness. Chronic issues like mental illness, addiction, or PTSD can affect individuals to the point where they are unable or refuse to maintain themselves in permanent housing. The lack of affordable housing, unemployment, poverty, racial inequality, low wages, and substance abuse without needed services are all known to lead to homelessness.</p>
          <p>People and families can also experience <strong className="text-foreground">situational homelessness</strong> — caused by job loss, divorce, domestic violence, or wildfires. No one should feel shame when dealing with unfair circumstances. There are specific resources often available to assist people in these situations.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">A crisis in California</h2>
          <p>Homelessness in California is at a crisis level, according to HUD in 2019. Well over a half a million people in the United States were homeless during 2019, rising nearly 3% from the prior year. California had nearly one-third of that — <strong className="text-foreground">over 150,000 people in the Golden State were homeless</strong>. Sadly, many are those who are most shattered and broken: our veterans, women who have been trafficked or abused, and families struck by addiction or mental health issues.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">What does it look like?</h2>
          <p>People who are homeless may live on the streets, in crisis centers, or in homeless shelters. Centers, organizations, and shelters provide basic necessities like food, beds, clothing and sometimes hygiene products. They are run by community organizations with the help of volunteers, and supported by government, charities, churches and individual donors. Homeless people are real people living a simple life to survive day-by-day.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Is there hope?</h2>
          <p>The solutions are controversial. Some experts cite California's housing crisis and unaffordable housing, liberalized drug laws, and opposition to mandatory treatment for mental illness. Others believe a "housing first" initiative would eradicate a large portion of homelessness. Some say more shelters need to be built. It is a societal battle that has caused division among legislators.</p>
          <p>A single solution will not eradicate homelessness. But to do something can bring about change. Doing nothing will only exacerbate the problem. Together, we can strive to make a difference in the lives of people battling homelessness.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">How we help</p>
            <h2 className="mt-3 font-display text-3xl">Supporting the Homeless in LA</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nae Nae's Way and 4 Hunnid Ways have been providing food and essentials to
              families in need for over 3 years. Our CEO, Shonee, has adopted{" "}
              <strong className="text-foreground">12 local area homes</strong> to provide weekly
              hot meals and health essentials to families who are off the streets and into these
              homes.
            </p>
            <blockquote className="mt-6 border-l-4 border-primary pl-5 italic text-foreground">
              "I believe it is important to help families, especially the youth that are experiencing homelessness in Los Angeles."
              <footer className="mt-2 text-sm text-muted-foreground not-italic">— Shonee Jackson, CEO of Nae Nae's Way</footer>
            </blockquote>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Each November, Nae Nae's Way and 4Hunnid Ways highlight{" "}
              <strong className="text-foreground">National Homeless Youth Awareness Month</strong>
              , championing the resilience of youth and young adults overcoming the challenges
              of being homeless.
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Here's a sneak peek into Nae Nae's kitchen where she cooks and prepares{" "}
              <strong className="text-foreground">70 pasta dishes</strong> for her sponsored
              homeless care centers.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <img src={kitchen1} alt="Shonee preparing trays of macaroni and cheese in her kitchen for sponsored homeless care centers" className="rounded-2xl w-full h-auto object-cover" loading="lazy" />
              <img src={kitchen2} alt="Shonee plating dozens of pasta dishes for delivery to homeless families in Los Angeles" className="rounded-2xl w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/donate" className="pill-link">Support this cause</Link>
            <Link to="/our-impact" className="px-6 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary font-medium">
              Back to Our Impact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

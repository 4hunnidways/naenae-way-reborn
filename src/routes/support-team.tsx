import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/support-team")({
  head: () => ({
    meta: [
      { title: "Support Team — Nae Nae's Way" },
      {
        name: "description",
        content:
          "The leaders, advocates, and creators behind Nae Nae's Way — Aja Brown, Tai Savet, Amy Rafe, and Davin Stanley.",
      },
      { property: "og:title", content: "Support Team — Nae Nae's Way" },
      {
        property: "og:description",
        content:
          "Meet the people who keep our mission moving forward.",
      },
    ],
  }),
  component: SupportTeam,
});

const team: { name: string; role?: string; bio: string }[] = [
  {
    name: "Aja Brown",
    role: "Former Mayor of Compton",
    bio: "Mayor Aja Brown made history at 31 as the youngest mayor ever elected in the City of Compton. A national trailblazer, Mayor Brown's 'New Vision for Compton' is a revitalization strategy centered on 12 key principles that focus on family values, quality of life, economic development and infrastructural growth. She was overwhelmingly re-elected to a second four-year term in June of 2017. Mayor Brown is focused on improving outcomes through policy reform, innovation and strategic partnerships, proudly serving the citizens of Compton by developing and implementing public policies that facilitate guided growth through the protection of community assets.",
  },
  {
    name: "Tai Savet",
    role: "Realtor & Advocate",
    bio: "Tai is a professional Realtor specializing in serving the particular needs of his clients from Ventura and Malibu through the Westside of LA, Beverly Hills and Hollywood. Savet's experience in both the real estate and entertainment industries has earned him tremendous trust and a well-deserved reputation within the entertainment industry. Throughout his career, Savet has directly given back to his community and to multiple charities and foundations such as the YMCA, Boys & Girls Clubs of America, Children Are The Future, and A Walk on Water. He has also sponsored and helped raise money for the KJLH Stevie Wonder Toy Drive and other charitable events. Tai is in full support of his long-time friend Shonee Jackson with the launch of Nae Nae's Way.",
  },
  {
    name: "Amy Rafe",
    role: "Community Advocate",
    bio: "First and foremost, I am a Mother, Grandmother and Great-Grandmother whose life's mission is one of service. I strive to carve a brighter path for my family as well as my community. My experiences come from over 45 years of community advocacy and involvement, focusing on making a difference. Working alongside organizations such as The Mothers of Watts, Operation PUSH, the NAACP, and numerous others — fighting for change while continuing to bridge the gap, opening up doors of opportunity, and helping to educate our underserved communities — has been my life's mission. This passion led me to work for over 23 years with the State of Georgia, focusing on Persons with Disabilities. I plan to use my past experiences and self-driven passions to continue building bridges, while assisting in developing stronger, more informed and healthy individuals, families and communities.",
  },
  {
    name: "Davin Stanley",
    role: "Social Media & Video",
    bio: "Davin was first brought on to photograph events for Shonee's son's nonprofit, 4Hunnid Ways. Once Shonee realized he had other talents, he began to help manage the foundation's social media. In early 2020, when Shonee decided to start her own non-profit, she turned to Davin to oversee her online accounts and even produce a series of videos.",
  },
];

function SupportTeam() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Who We Are</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Our Support Team
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-lg">
            The leaders, advocates, and creators who help Nae Nae's Way show
            up for our community every day.
          </p>

          <div className="mt-14 space-y-6">
            {team.map((m) => (
              <article
                key={m.name}
                className="rounded-3xl bg-card border border-border p-8 md:p-10 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-display text-2xl">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h2 className="font-display text-3xl">{m.name}</h2>
                    {m.role && (
                      <p className="mt-1 text-primary italic">{m.role}</p>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {m.bio}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/donate" className="pill-link">Support our work</Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary font-medium"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

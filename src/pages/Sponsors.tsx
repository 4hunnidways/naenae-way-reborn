import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import sponsor4Hunnid from "@/assets/sponsor-4hunnid.jpeg";
import sponsorFishbone from "@/assets/sponsor-fishbone.png";
import sponsorDatMoi from "@/assets/sponsor-datmoi.png";

const sponsors = [
  { name: "4Hunnid", logo: sponsor4Hunnid },
  { name: "Fish Bone", logo: sponsorFishbone },
  { name: "Dat Moi Market", logo: sponsorDatMoi },
];

export default function Sponsors() {
  useSeo("Sponsors — Nae Nae's Way", "The partners and sponsors who make our work possible.");
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Sponsors</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Partners in the mission.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            We're grateful to the organizations and individuals who help fuel every initiative
            we run.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sponsors.map((s) => (
              <div key={s.name} className="aspect-[4/3] rounded-2xl bg-card border border-border flex items-center justify-center p-8 hover:border-primary/60 transition">
                <img src={s.logo} alt={`${s.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

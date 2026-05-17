import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import img1 from "@/assets/impact/impact-1.jpg";
import img2 from "@/assets/impact/impact-2.jpg";
import img3 from "@/assets/impact/impact-3.jpg";
import img4 from "@/assets/impact/impact-4.jpg";
import img5 from "@/assets/impact/impact-5.jpg";
import img6 from "@/assets/impact/impact-6.jpg";
import img7 from "@/assets/impact/impact-7.jpg";

const stats = [
  { v: "12K+", l: "Meals served" },
  { v: "350+", l: "Families supported" },
  { v: "8", l: "Active initiatives" },
  { v: "20+", l: "Partner organizations" },
];

const photos = [
  { src: img1, alt: "Volunteers handing meals to a child on Skid Row" },
  { src: img2, alt: "Distributing meal bags from the van downtown" },
  { src: img3, alt: "Preparing meals in the kitchen with young volunteers" },
  { src: img4, alt: "Packing donation bags with essentials" },
  { src: img5, alt: "The Nae Nae's Way TeleHealth Van team" },
  { src: img6, alt: "Founders beside the TeleHealth Van" },
  { src: img7, alt: "Handing care packages to community members" },
];

export default function OurImpact() {
  useSeo("Our Impact — Nae Nae's Way", "The lives touched and the work being done in our communities.");
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Our Impact</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Action over words.</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            We measure success in the lives we touch. Here's a snapshot of the work in motion.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-3xl bg-card border border-border p-7 text-center">
                <div className="font-display text-5xl text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/w7VG4hX-dMw"
              title="Nae Nae's Way — Our Impact"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="mt-16">
            <p className="eyebrow">Moments</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">From the field.</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((p, i) => (
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
                    className="h-full w-full object-cover aspect-square transition-transform duration-500 hover:scale-105"
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

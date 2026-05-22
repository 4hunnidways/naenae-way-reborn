import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

export default function MedicalDisclaimer() {
  useSeo(
    "Medical Disclaimer — Nae Nae's Way",
    "Medical disclaimer for information provided on naenaesway.org."
  );

  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-4xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Medical Disclaimer</h1>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              The information published on{" "}
              <a
                href="https://naenaesway.org"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                naenaesway.org
              </a>{" "}
              serves strictly educational and informational purposes. Nae Nae's Way provides these materials to support general understanding and does not offer professional medical advice.
            </p>

            <p>
              Visitors must consult a licensed doctor or qualified healthcare professional regarding any medical condition or treatment plan. You should never disregard professional medical counsel or delay seeking out a healthcare provider because of information found on this website.
            </p>

            <div className="p-4 bg-card border border-border rounded-2xl">
              <p className="font-semibold text-foreground mb-2">Medical Emergency</p>
              <p>
                If you experience a medical emergency, call emergency services or go to the nearest hospital immediately.
              </p>
            </div>

            <p>
              Nae Nae's Way does not endorse specific tests, procedures, products, or physicians. Reliance on any information provided by our foundation, our staff, or other contributors to the website is solely at your own risk.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

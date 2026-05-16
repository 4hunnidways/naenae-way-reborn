import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

export default function Cancer() {
  useSeo(
    "Breast Cancer — Nae Nae's Way",
    "Breast cancer awareness, types, symptoms, prevention, treatment options, and resources for early detection.",
  );
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">← All initiatives</Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Breast Cancer</h1>
          <p className="mt-4 text-primary text-xl italic">
            1 in 8 women will develop breast cancer in her lifetime.
            <span className="text-muted-foreground not-italic text-sm block mt-1">
              — National Breast Cancer Foundation
            </span>
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            Breast cancer is the #2 cancer in the US, and strikes men as well as women. Although
            we speak generically about breast cancer, there are many different forms of this
            wide-spread disease.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">The forms of breast cancer</h2>
          <p>
            <strong className="text-foreground">Ductal Carcinoma in Situ (DCIS)</strong> is the
            presence of abnormal cells in the milk ducts of the breast. It is the earliest form
            of breast cancer and is seldom invasive. Because it rarely has symptoms, the usual
            informant is a mammogram. Increased risk factors include menstrual cycles starting
            before age 12, menopause beginning after age 55, and never having children. Because
            DCIS is non-invasive, there is little concern if it is found.
          </p>
          <p>
            Two rare forms are sometimes found:{" "}
            <strong className="text-foreground">inflammatory breast cancer</strong> and{" "}
            <strong className="text-foreground">lobular carcinoma</strong>. Lobular carcinoma is
            caused by mutations in the breast tissue and can spread to other parts of the body.
            Inflammatory breast cancer causes painful redness and is sometimes confused with an
            infection. Although both are rare, the best defense is early detection through
            regular mammograms.
          </p>
          <p>
            <strong className="text-foreground">Metastatic breast cancer</strong> starts in the
            breast and spreads to other organs such as the lungs, liver, brain, or bones. 20–30%
            of women are diagnosed with early stage cancer; after diagnosis, it spreads. 6–10%
            of women are diagnosed with stage IV cancer, the highest stage recognized. When
            cancer spreads to other organs, it develops more tumors by travelling through the
            lymph nodes and entering the lymphatic system. Metastatic breast cancer can also
            start long after you've finished treatment for early stage cancer — this is called
            distant recurrence.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">Risk factors</h2>
          <p>
            Microwaves, cell phones, and deodorant have been blamed for causing breast cancer;
            however, that's not true. Genetic factors such as age, race, and family history are
            the primary factors. Caucasian women are the most prone to developing breast cancer;
            this is one disease that being a minority does not increase your risk. Controllable,
            environmental factors include alcohol consumption, obesity, and a poor diet.
          </p>
          <p>
            Nearly <strong className="text-foreground">300,000 women will be diagnosed</strong>{" "}
            with cancer this year, and over 40,000 will die of this disease. More than 2,000 men
            every year will also be diagnosed with some form of breast cancer. It strikes more
            Americans than any other form of cancer except skin cancer.{" "}
            <strong className="text-foreground">64% of breast cancers are diagnosed at the localized stage.</strong>
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">Symptoms to watch for</h2>
          <p>Symptoms can be visible or sometimes hard to identify. Women typically see one of five:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="text-foreground">A lump in the breast</strong> — the most common sign, but breast tissue can have lumps from irregularities without signifying cancer. A mammogram is the best course of action.</li>
            <li><strong className="text-foreground">Changes in the skin's texture or inflammation</strong> around the breast.</li>
            <li><strong className="text-foreground">Discharge in the nipples</strong> — unless you are breastfeeding, this can signify cancer or other conditions.</li>
            <li><strong className="text-foreground">Swollen lymph nodes</strong> under the armpit.</li>
            <li><strong className="text-foreground">Tingling or burning sensation</strong> in the breasts.</li>
          </ul>
          <p>These signs can also warn of other conditions which may or may not require treatment — but seeking a professional evaluation is recommended.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Treatment options</h2>
          <p>
            Living with breast cancer can vary from little disruption to major disruption and
            side effects. Some women choose to have small, slow-spreading tumors removed; others
            battle cancer with multiple rounds of chemotherapy, aggressive drugs, and other
            treatments.
          </p>
          <p>
            <strong className="text-foreground">Chemotherapy</strong> kills fast-growing cancer
            cells but has the potential to damage the kidneys, bladder, lungs, and nervous
            system. Hair follicles, the reproductive tract, and the digestive tract are commonly
            affected.
          </p>
          <p>
            <strong className="text-foreground">Adjuvant treatments</strong> — secondary
            treatments used to kill any remaining cancer cells — can include chemotherapy,
            radiation therapy, and hormone replacement therapy. There are both holistic and
            medical approaches; surgery, radiation, hormone therapy, and chemotherapy are
            traditional Western options.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">Prevention</h2>
          <p>
            According to the World Health Organization, between 30% and 50% of cancer deaths
            could be prevented by modifying or avoiding key risk factors:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Avoid all tobacco use, including e-cigarettes</li>
            <li>Create a healthy lifestyle by exercising regularly</li>
            <li>Maintain a healthy diet</li>
            <li>Limit exposure to direct sun and UV radiation</li>
            <li>Seek medical attention if you suspect any irregular changes — you know your body best</li>
            <li>Keep track of any irregular changes and share them with your doctor</li>
          </ul>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Resources</p>
            <h2 className="mt-3 font-display text-3xl">If you need assistance or have questions</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                ["dhs.lacounty.org", "https://dhs.lacounty.org/"],
                ["freemammograms.org", "https://freemammograms.org/"],
                ["cancer.org", "https://cancer.org/"],
                ["lacancernetwork.com", "https://lacancernetwork.com/"],
                ["breastcancersupportassociation.org", "https://breastcancersupportassociation.org/"],
              ].map(([label, url]) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
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

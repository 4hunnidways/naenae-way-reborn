import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

export default function Diabetes() {
  useSeo(
    "Diabetes — Nae Nae's Way",
    "What diabetes is, what causes it, what it's like to live with, and treatment options. Plus the A, B, Cs+2 management formula.",
  );
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">← All initiatives</Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Diabetes</h1>
          <p className="mt-4 text-primary text-xl italic">Insulin Challenged? What can you do about it?</p>
          <p className="mt-2 text-muted-foreground">What it is, what causes it, what it's like to live with &amp; treatment options.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            When insulin-producing beta cells are attacked by your immune system, it can trigger
            diabetes. The pancreas is the organ responsible for secreting insulin and glucagon
            into the bloodstream. When that balance is upset, there is an imbalance in sugar
            levels — a problem known as diabetes, specifically Type 1. The most common type,{" "}
            <strong className="text-foreground">Type 2 Diabetes</strong>, can be caused by
            lifestyle and/or genetics.
          </p>
          <p>
            Because we can control our lifestyle, making healthier choices can be the easiest
            way to mitigate your risk. Some racial and ethnic groups tend to be more prone to
            Type 2 diabetes — including African Americans, Pacific Islanders, and Native
            Americans. Damage to the pancreas, prescription drugs, or a history of heart disease
            or strokes can also elevate your risk.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">Manage with the "A, B, Cs + 2" formula</h2>
          <ul className="space-y-4">
            <li><strong className="text-foreground">A — A1C test.</strong> Shows your average glucose levels over the last three months. Knowing these numbers gives you a guide to keep yours where they need to be.</li>
            <li><strong className="text-foreground">B — Blood pressure.</strong> Most people with diabetes are asked to keep their blood pressure at or below 140/90.</li>
            <li><strong className="text-foreground">C — Cholesterol.</strong> LDL ("bad") levels can build up and cause heart attacks and strokes, creating havoc for your diabetes.</li>
            <li><strong className="text-foreground">+2 — Stop smoking &amp; eat well.</strong> Eliminate smoking, choose whole grains, fresh produce, and low-sugar options. Daily exercise is the final component.</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground pt-6">Diabetes defined</h2>
          <p>There are three types of diabetes common among Americans: Type 1, Type 2, and gestational diabetes.</p>
          <p><strong className="text-foreground">Type 1</strong> occurs in people of every race, shape, size and age. When your body doesn't produce insulin, this is what is referred to as Type 1 — and it is no respecter of persons.</p>
          <p><strong className="text-foreground">Type 2</strong>, the most common form, is caused by your body using insulin incorrectly. Diet and exercise can go a long way in managing it.</p>
          <p><strong className="text-foreground">Gestational diabetes</strong> is usually temporary, occurring during pregnancy. After delivery, insulin levels tend to return to normal. Those with gestational diabetes can be more prone to a C-section and are more likely to develop Type 2 diabetes later in life.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Who should be screened?</h2>
          <p>The ADA recommends screening for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Anyone with a BMI of 25 or higher who has at least one other risk factor</li>
            <li>Anyone 45 or older — every three years</li>
            <li>Any woman who has had gestational diabetes — every 3 years</li>
            <li>Anyone who is prediabetic — annually</li>
          </ul>
          <p>The American Diabetes Association states you can lower your chances of Type 2 diabetes by <strong className="text-foreground">58%</strong> if you lose 7% of your body weight or exercise moderately 30 minutes a day, 5 days a week.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Symptoms &amp; complications</h2>
          <p>Symptoms include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, irritability, blurred vision, or frequent infections. If left unmanaged, complications can arise — cardiovascular disease, neuropathy, nephropathy, eye damage, Alzheimer's, hearing impairment, poor blood flow to the feet, and skin conditions.</p>
          <p>Living with diabetes doesn't have to be a death sentence — it's simply a wake-up call to lead a healthier lifestyle. Insulin therapy, managing your diet, and exercising can help you lead a normal life.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Resource</p>
            <h2 className="mt-3 font-display text-3xl">Learn more</h2>
            <p className="mt-3 text-muted-foreground">
              Visit the{" "}
              <a href="https://diabetes.org/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold">
                American Diabetes Association
              </a>{" "}
              for diagnosis information, prevention guides, and support.
            </p>
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

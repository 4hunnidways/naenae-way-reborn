import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

export default function MentalHealth() {
  useSeo(
    "Mental Health — Nae Nae's Way",
    "Mental Health and COVID-19: causes, what it's like to live with mental illness, treatment options, and crisis resources.",
  );
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">← All initiatives</Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Mental Health</h1>
          <p className="mt-4 text-primary text-xl italic">"It's a disorder, not a decision."</p>
          <p className="mt-2 text-muted-foreground">What it is, what causes it, what it's like to live with &amp; getting treatment.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>Across the nation, people struggle with various mental health disorders. These disorders have greatly affected Americans for many years due to the toll that mental illness takes on the people who suffer with any given mental health disorder. Individuals who face mental illness do not choose to struggle — they are simply confronted with mental illness disorders. The list of diagnosed disorders continues to grow, and includes bipolar disorder, depression, anxiety, hoarding disorder, ADHD, and many others.</p>
          <p>One in four people in the world will be affected by mental or neurological disorders at some point in their lives. Around <strong className="text-foreground">450 million people</strong> currently suffer from such conditions, placing mental disorders among the leading causes of ill-health and disability worldwide. The Social Dilemma, a Netflix original, cited that suicide rates had increased by <strong className="text-foreground">151% in girls ages 10–14</strong> and by <strong className="text-foreground">70% in girls ages 15–19</strong>. These statistics are alarming.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">What causes mental illness?</h2>
          <p>Because of the vast mix of factors — genetics, brain function, childhood, the environment during our formative years, one's living environment, social groups, cultural background, and life experiences — we cannot pinpoint one single cause. What we do know is that there are situations which exacerbate different types of mental health disorders: more-than-moderate consumption of alcohol, prescribed or illicit drug usage, loneliness and isolation, abandonment as a child, PTSD from a traumatic event, sexual abuse, chronic health issues, or unusually high amounts of stress.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Living with a mental health disorder</h2>
          <p>Although most people are able to manage normal stressors in their daily lives, mental health disorders are detrimental for those conflicted within. They can lead to addictions, hospitalization, suicide and other problems, and they affect not just the person living with the disorder but their entire family and loved ones. People affected by mental illness can also experience problems with health issues, financial instability, maintaining a job, being taken advantage of, or even jail time.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Mental Health and COVID-19</h2>
          <p>COVID-19 created additional life stressors — entire family units quarantined at home for extended periods, job furloughs and job loss, and isolation. Re-entering and living in the world as we did before has created its own stress. Many experienced mixed emotions integrating back into society. Some fret over the possibility of getting sick or "catching the Rona." Others struggle to adjust to "normal" life as a parent, student, or member of the workplace.</p>
          <p>During the pandemic, suicide and crisis prevention help lines saw a dramatic increase in calls. The coronavirus contributed to mental illness in those not formerly diagnosed with any, and complicated mental illness for those already affected by it.</p>

          <h2 className="font-display text-3xl text-foreground pt-6">Healthy coping &amp; getting treatment</h2>
          <p>There are ways to eliminate or reduce stress that can be used as healthy coping mechanisms. Making healthy lifestyle choices — eliminating tobacco, alcohol, and fast foods — can help. Other ways to manage stress include meditation, breathing techniques, consistent exercise, and deep sleep. Self-care can reduce stress and keep your immune system strong. Making time to relax and connect with others decreases stress and feelings of isolation.</p>
          <p>If a mental health disorder is chronic or severe, seeking professional treatment is a wise course of action. Psychotherapy, prescription medications, ECT or TMS stimulation therapy, or complementary health treatments are effective options. Most disorders don't "go away" — they require careful management and treatment to ensure one is not at risk to self-harm.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Resources</p>
            <h2 className="mt-3 font-display text-3xl">If you or a loved one needs help</h2>
            <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-display text-xl text-foreground">988 Suicide &amp; Crisis Lifeline</h3>
                <p className="mt-1">
                  Free, confidential crisis support, 24/7. Call or text{" "}
                  <a href="tel:988" className="text-primary hover:underline font-semibold">988</a>, or call{" "}
                  <a href="tel:18002738255" className="text-primary hover:underline font-semibold">1-800-273-TALK (8255)</a>. En español:{" "}
                  <a href="tel:18886289454" className="text-primary hover:underline font-semibold">1-888-628-9454</a>.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">SAMHSA National Helpline</h3>
                <p className="mt-1">Confidential, free, 24/7/365 information service in English and Spanish for individuals and family members facing mental and/or substance use disorders. Provides referrals to local treatment facilities, support groups, and community-based organizations.</p>
                <p className="mt-2">
                  Call <a href="tel:18006624357" className="text-primary hover:underline font-semibold">1-800-662-HELP (4357)</a> · TTY:{" "}
                  <a href="tel:18004874889" className="text-primary hover:underline font-semibold">1-800-487-4889</a>
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">Lifeline Chat</h3>
                <p className="mt-1">
                  Chat online with a trained crisis counselor at{" "}
                  <a href="https://988lifeline.org/chat/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold">988lifeline.org/chat</a>.
                </p>
              </div>
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

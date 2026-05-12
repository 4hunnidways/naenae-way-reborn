import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/initiatives/fitness-physical-health")({
  head: () => ({
    meta: [
      { title: "Fitness & Physical Health — Nae Nae's Way" },
      {
        name: "description",
        content:
          "The body's two brains, gut health, and the wellness habits that build a healthier lifestyle.",
      },
      { property: "og:title", content: "Fitness & Physical Health — Nae Nae's Way" },
      {
        property: "og:description",
        content:
          "Healthy bodies, strong communities. Nutrition, movement, and the science behind feeling good.",
      },
    ],
  }),
  component: Fitness,
});

function Fitness() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← All initiatives
          </Link>
          <p className="eyebrow mt-6">Initiative</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Fitness &amp; Physical Health
          </h1>
          <p className="mt-4 text-primary text-xl italic">
            Healthy bodies, strong communities.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl space-y-6 text-muted-foreground text-lg leading-relaxed">
          <h2 className="font-display text-3xl text-foreground">
            The Body's Two Brains
          </h2>
          <p>
            The connection between your brain and the "second brain" in your
            digestive tract is something you've probably experienced in the
            form of a "gut reaction." You know the feeling when you get some
            bad news or have a difficult conversation with someone — your gut
            tells you exactly how you're feeling. When stress or anxiety
            strikes, your brain sends a signal to your gut, and the next
            thing you know, you've got a churning stomach.
          </p>
          <p>
            The signals travel in the other direction, too: from gut to
            brain. This system alerts the "first brain" if you've eaten
            something you shouldn't have, and also keeps tabs on your hunger
            level and your mood.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">
            Your Gut and Your Mood
          </h2>
          <p>
            Certain emotions can trigger a digestive response, but the reverse
            may also be true — conditions in your gut may influence how you
            feel. According to{" "}
            <a
              href="https://www.scientificamerican.com/article/gut-feelings-the-second-brain-in-our-gastrointestinal-systems-excerpt/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Scientific American
            </a>
            , recent evidence indicates that not only is our brain "aware" of
            our gut microbes, but these bacteria can influence our perception
            of the world and alter our behavior.
          </p>
          <p>
            There is no question that your brain and gut are well connected —
            so it makes sense that keeping your digestive system in tip-top
            shape is vital to your sense of well-being.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">
            How to Improve Your Digestive Health
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Include plenty of fiber from colorful fruits, vegetables, and
              whole grains. Fiber promotes regularity (which could affect
              your mood!) and feeds the "good" bacteria in your microbiome.
            </li>
            <li>Stay adequately hydrated throughout the day.</li>
            <li>
              Eat a source of probiotics — fermented foods like yogurt,
              pickled vegetables, and tempeh provide natural probiotics that
              support immune health.
            </li>
            <li>Make regular exercise a part of your routine.</li>
          </ul>

          <h2 className="font-display text-3xl text-foreground pt-6">
            Why a daily shake helps
          </h2>
          <p>
            <strong className="text-foreground">Count calories accurately.</strong>{" "}
            Most people underestimate their calorie intake by 20% or so.
            Protein shakes are usually made of just a few measurable
            ingredients, so you get an accurate count.
          </p>
          <p>
            <strong className="text-foreground">
              Include more fruits &amp; vegetables.
            </strong>{" "}
            Customizing a shake with fruits and vegetables allows almost
            endless variety — keep frozen fruits and veggies like spinach,
            kale, or carrots on hand.
          </p>
          <p>
            <strong className="text-foreground">Establish regular mealtimes.</strong>{" "}
            Few things are easier to prepare than a protein shake — balanced
            nutrition in a glass in minutes, with no excuse for skipping
            meals.
          </p>
          <p>
            <strong className="text-foreground">Control portion size.</strong>{" "}
            A protein shake is naturally portion-controlled and helps keep
            you satisfied to your next meal.
          </p>
          <p>
            <strong className="text-foreground">Meet nutritional needs.</strong>{" "}
            A shake made with milk or soy milk plus fruit or vegetables can
            help you meet your needs for protein, calcium, vitamin D, and
            fiber.
          </p>
          <p>
            <strong className="text-foreground">Eat better, even on the run.</strong>{" "}
            When hunger strikes and you're tempted by fast food, a portable
            shake is ready to go.
          </p>

          <h2 className="font-display text-3xl text-foreground pt-6">
            Why you might feel worse before you feel better
          </h2>
          <p>
            Imagine you're a few days into your new nutrition plan. You're
            more active, drinking shakes and tea, taking your vitamins — but
            you feel lousy. What's the deal?
          </p>
          <p>
            Think of your fat cells as tiny sponges. They soak up everything
            — vitamins, fats, hormones, and unfortunately random pollutants
            and toxins. Throughout our lives we have a constant number of fat
            cells; they grow and shrink in size. When you lose weight, fat
            cells shrink and whatever was stored inside them is released into
            the bloodstream.
          </p>
          <p>
            As you burn fat, you release toxins into your body. They are
            eventually eliminated through natural detoxification — but as
            they circulate, you can feel pretty lousy. The problem isn't your
            healthy lifestyle — it's the speed of change combined with not
            understanding what's going on.
          </p>
          <p>
            There may be times in the beginning stages that you feel yucky,
            but keep pressing forward.{" "}
            <strong className="text-foreground">Trust the process.</strong>
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-narrow max-w-3xl">
          <div className="mt-2 flex flex-wrap gap-4">
            <Link to="/donate" className="pill-link">Support this cause</Link>
            <Link
              to="/our-impact"
              className="px-6 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary font-medium"
            >
              Back to Our Impact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

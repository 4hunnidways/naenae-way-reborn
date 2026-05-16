import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import founder from "@/assets/founder-portrait.jpg";

const press: [string, string][] = [
  ["XXL Magazine", "https://www.xxlmag.com/yg-mom-confront-hilarious-text-message/"],
  ["Jimmy Kimmel Live", "https://www.youtube.com/watch?v=pgvsLqPyuiw"],
  ["LA Sentinel", "https://lasentinel.net/compton-mayor-master-p-and-ygs-4hundredwaze-foundation-feed-hundreds-for-thanksgiving.html"],
  ["BET", "https://www.bet.com/news/music/2014/05/10/yg-s-mother-shonee-jackson-talks-momma-speech-intro.html"],
  ["TMZ", "https://www.tmz.com/2020/04/20/yg-nonprofit-4hunnid-ways-delivers-ppe-to-needy-families/"],
  ["Getty Images", "https://www.gettyimages.com.mx/detail/fotograf%C3%ADa-de-noticias/s-mother-shonee-jackson-yg-mayor-aja-brown-and-fotograf%C3%ADa-de-noticias/630163656"],
  ["Digital Journal", "http://www.digitaljournal.com/pr/4585990"],
  ["REAL 92.3", "https://real923la.iheart.com/featured/young-california/content/2017-10-25-ygs-mom-has-new-food-truck-for-nae-naes-bbq-more/"],
  ["REVOLT", "https://www.revolt.tv/2018/3/11/20821846/yg-2-chainz-and-offset-recruit-their-mothers-for-upcoming-music-video"],
];

export default function MeetNaeNae() {
  useSeo(
    "Meet Nae Nae — Nae Nae's Way",
    "Get to know Shonee 'Nae Nae' Jackson — founder of Nae Nae's Way, social activist, mother, and community advocate.",
  );
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-start">
          <img
            src={founder}
            alt="Shonee 'Nae Nae' Jackson, founder of Nae Nae's Way"
            className="rounded-3xl w-full object-cover shadow-2xl lg:sticky lg:top-28"
          />
          <div>
            <p className="eyebrow">Who We Are</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">Who is Nae Nae?</h1>
            <p className="mt-3 text-primary italic">Shonee Jackson · Momma YG · Nae Nae</p>

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Shonee Jackson is the founder of the non-profit organization 4Hundred Waze and
                the CEO of Nae Nae's Way Inc. She is a social activist who believes in
                enriching the lives of children. She knows the importance of education and has
                advocated for youth as a tutor and mentor, and has launched back-to-school and
                community programs. Helping others is her passion. Over the years she has
                worked tirelessly in her community by helping the homeless and feeding the
                needy, in order to make positive changes in their lives and the community at
                large.
              </p>
              <p>
                Jackson has experience in strategic development from launching her son Keenon's
                (YG) music career. With the success of YG's music, she decided to take things
                to the next level and founded 4Hundred Waze (renamed{" "}
                <strong className="text-foreground">4Hunnid Ways</strong>) — a 501(c)(3)
                non-profit organization whose mission is to enhance the lives of disadvantaged
                youth in the foster care/group home system by providing growth and development
                in the areas of science, technology, education, and math (STEM).
              </p>
              <p>
                Jackson has spent most of her adult life working in the service industry,
                helping to make a difference wherever there is a need. Driven and committed,
                she continues to work endlessly with both youth and adults — giving them a
                better sense of pride, letting them know that someone does care, and showing
                them they can make a positive change if they work hard and stay focused.
              </p>
              <p>With all that she has accomplished, she has decided it is time to share her story.</p>
            </div>

            <h2 className="mt-12 font-display text-3xl text-foreground">Her Story</h2>
            <div className="mt-4 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                In 1993, Shonee was diagnosed with a rare disease called{" "}
                <strong className="text-foreground">Pseudotumor Cerebri</strong>. Living with
                her condition has made Shonee vigilant in her quest to learn more about the
                disease and help educate others on prevention.
              </p>
              <p>
                As a result, Nae Nae's Way Inc. was founded. <em>Nae Nae</em> is the name given
                to her by her grandchildren. Jackson's passion for philanthropy and community
                service has always been at the forefront of her work. She hopes to empower
                others to take control of their health through awareness and overcoming
                obstacles, with a renewed sense of hope and life possibilities. Her mantra:{" "}
                <em>knowledge is power, and staying true to yourself, anything is possible.</em>
              </p>
              <p>
                Her life's journey is one of grace, gratitude and giving back to those in need.
                Jackson has been recognized for her charitable work with numerous organizations
                around the country, including the Special Olympics, Iverse Legends, and the
                City of Compton. She has received the{" "}
                <strong className="text-foreground">People of Change Award</strong> and the{" "}
                <strong className="text-foreground">Visionary Leadership Award</strong> as well.
              </p>
              <p>
                Jackson grew up in Los Angeles, CA, attended Long Beach Jordan High School, and
                has strong family roots in the Atlanta, GA area.
              </p>
            </div>

            <h2 className="mt-12 font-display text-3xl text-foreground">Press featuring Nae Nae</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {press.map(([label, url], i) => (
                <li key={url} className="text-muted-foreground">
                  <span className="text-primary mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  <a href={url} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-muted-foreground">
              Find Mama YG on{" "}
              <a href="http://www.reddit.com/u/mamayg" target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold">
                Reddit
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/donate" className="pill-link">Support the mission</Link>
              <Link to="/who-we-are" className="px-6 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary font-medium">
                Read our full story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

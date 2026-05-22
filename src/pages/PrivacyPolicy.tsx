import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

export default function PrivacyPolicy() {
  useSeo(
    "Privacy Policy — Nae Nae's Way",
    "Privacy policy explaining how Nae Nae's Way collects, uses, and protects your personal information."
  );

  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-4xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">
            Last Updated: May 22, 2026
          </p>

          <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              Nae Nae's Way believes in protecting the privacy of personal information gathered from our members and website visitors. We created this privacy policy to explain our practices regarding the collection and distribution of personal data that connects to a specific individual. This includes names, addresses, phone numbers, email addresses, and other details provided to us by our members and website visitors.
            </p>

            <Section title="Why does Nae Nae's Way ask for my information?">
              <p>
                You might need to provide personal information to participate in certain activities. This occurs in connection with the following actions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Shipping items purchased from the Nae Nae's Way Shop</li>
                <li>Making or renewing an online donation</li>
                <li>Sending personalized faxes or email messages during action alerts</li>
                <li>Registering for our activist networks</li>
                <li>Participating in contests, surveys, petitions, and giveaways</li>
                <li>Requesting information packs</li>
                <li>Subscribing to our email news lists</li>
              </ul>
            </Section>

            <Section title="What information does Nae Nae's Way collect?">
              <p>
                We only collect personal information that visitors supply to us voluntarily.
              </p>
            </Section>

            <Section title="How does Nae Nae's Way use the gathered information?">
              <p>
                We use your information to send details about our campaigns, events, and activities. We also send local volunteer opportunities, alerts, and membership renewal appeals. Nae Nae's Way uses information gathered through our websites to improve our digital campaigns. We perform statistical analyses of overall user behavior and characteristics. This helps us measure interest in various website areas and improve our ability to serve you.
              </p>
            </Section>

            <Section title="Does Nae Nae's Way use cookies on its websites?">
              <p>
                Nae Nae's Way uses cookies and pixels on some webpages. A cookie is a small piece of data stored on a visitor's hard drive that does not contain personal information. Cookies enhance a visitor's experience by preventing the need to log in or provide information during return visits. They also customize content based on a visitor's interests. Pixels are small blocks of code on webpages that allow another server to measure viewing statistics. Visitors can configure their browsers to refuse cookies or issue an alert when a site attempts to send a cookie. Note that some of our electronic commerce pages will not function properly without accepting cookies.
              </p>
              <p className="mt-4">
                Nae Nae's Way and third-party vendors use cookies and pixels to show website visitors advertisements based on prior visits. We use first-party cookies and third-party cookies together to report how advertisement impressions and interactions correspond to website visits. These third-party vendors might combine your email information with other details they possess, such as a mailing address. This allows Nae Nae's Way to send relevant marketing offers through email and direct mail.
              </p>
              <p className="mt-4">
                We also use demographic information gathered via Google Analytics to understand our visitors better. This helps us tailor content and track our success at reaching new populations. Visitors who wish to opt out of Google's use of cookies can visit the Google advertising opt-out page. Other options for managing third-party cookies and pixels are available at{" "}
                <a href="https://www.aboutads.info/choices" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.aboutads.info/choices</a>{" "}
                and the Network Advertising Initiative. If you do not want us to share your information with third-party vendors, you can email{" "}
                <a href="mailto:naenaesway@outlook.com" className="text-primary hover:underline">naenaesway@outlook.com</a>{" "}
                to opt out. Nae Nae's Way also uses cookies to manage its websites, track visitor movement, and gather broad demographic data for overall use.
              </p>
            </Section>

            <Section title="How is information used in Nae Nae's Way emails?">
              <p>
                If you provide Nae Nae's Way with your email address, you will begin receiving emails from us. You can unsubscribe from any Nae Nae's Way email list at any time by following the instructions included in each email or by emailing{" "}
                <a href="mailto:naenaesway@outlook.com" className="text-primary hover:underline">naenaesway@outlook.com</a>.{" "}
                The information we gather from subscribers is not shared with outside organizations or companies not affiliated with us. We sometimes send email messages containing information about like-minded organizations, but we do not provide them with access to your personal information. If you prefer that we do not send you these specific promotional communications, you may opt out by contacting us at{" "}
                <a href="mailto:naenaesway@outlook.com" className="text-primary hover:underline">naenaesway@outlook.com</a>.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                Nae Nae's Way implements physical, electronic, and administrative safeguards to protect your personal information from unauthorized access, alteration, or disclosure. We process all financial transactions through secure, encrypted connections. While no method of transmission over the Internet is entirely secure, we maintain strict internal protocols and limit data access to authorized personnel who need the information to perform their duties.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your personal data only for the time necessary to fulfill the purposes outlined in this policy. This timeframe accounts for any legal, accounting, or reporting requirements. Once this period expires, or if you explicitly request deletion, we will securely dispose of your information.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                Our website is not directed at children under the age of 13. Nae Nae's Way does not knowingly collect personal information from children. If we discover that we have inadvertently gathered such data, we will take immediate steps to remove it from our servers. Parents or guardians who believe their child has provided us with personal information should contact us directly at{" "}
                <a href="mailto:naenaesway@outlook.com" className="text-primary hover:underline">naenaesway@outlook.com</a>.
              </p>
            </Section>

            <Section title="Policy Changes">
              <p>
                We may update this privacy policy periodically to reflect changes in our operational practices or legal obligations. We will post any revisions on this page along with the updated effective date at the top of the document. We encourage visitors to review this policy regularly to stay informed about how we protect your information. Continued use of our website after any changes constitutes acceptance of the new terms.
              </p>
            </Section>

            <div className="p-4 bg-card border border-border rounded-2xl text-sm text-muted-foreground">
              <strong className="text-foreground">Contact:</strong> If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:naenaesway@outlook.com" className="text-primary hover:underline">naenaesway@outlook.com</a>.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl md:text-2xl text-foreground mb-3">{title}</h2>
      {children}
    </div>
  );
}

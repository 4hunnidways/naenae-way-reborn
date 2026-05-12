import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Instagram, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nae Nae's Way" },
      { name: "description", content: "Get in touch with Nae Nae's Way." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="mt-3 font-display text-5xl">Contact</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            Partnerships, press, volunteering, or just to say hello — we'd love to
            hear from you.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <a href="mailto:naenaesway@outlook.com" className="rounded-3xl bg-card border border-border p-6 hover:border-primary/60 transition">
              <Mail className="text-primary" />
              <p className="mt-4 font-display text-xl">Email</p>
              <p className="mt-1 text-sm text-muted-foreground break-all">naenaesway@outlook.com</p>
            </a>
            <a href="https://instagram.com/naenaesway" target="_blank" rel="noreferrer" className="rounded-3xl bg-card border border-border p-6 hover:border-primary/60 transition">
              <Instagram className="text-primary" />
              <p className="mt-4 font-display text-xl">Instagram</p>
              <p className="mt-1 text-sm text-muted-foreground">@naenaesway</p>
            </a>
            <div className="rounded-3xl bg-card border border-border p-6">
              <Phone className="text-primary" />
              <p className="mt-4 font-display text-xl">Phone</p>
              <p className="mt-1 text-sm text-muted-foreground">By appointment</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

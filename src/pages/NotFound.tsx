import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

export default function NotFound() {
  useSeo("Page not found — Nae Nae's Way");
  return (
    <Layout>
      <section className="section text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="pill-link mt-8 inline-flex">Back home</Link>
      </section>
    </Layout>
  );
}

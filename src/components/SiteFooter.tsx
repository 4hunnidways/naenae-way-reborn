import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="container-narrow grid gap-10 md:grid-cols-4 px-6 py-14">
        <div>
          <h3 className="font-display text-2xl text-primary">Nae Nae's Way</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Bridging the gap and shining a light on those who need it most —
            one community at a time.
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Twitter" href="#" className="p-2 rounded-full border border-border hover:text-primary"><Twitter size={16} /></a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full border border-border hover:text-primary"><Facebook size={16} /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-border hover:text-primary"><Instagram size={16} /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2 items-start"><Mail size={16} className="mt-0.5 text-primary" /><a href="mailto:amy@naenaesway.org">amy@naenaesway.org</a></li>
            <li className="flex gap-2 items-start"><Phone size={16} className="mt-0.5 text-primary" /><a href="tel:+18189667786">(818) 966-7786</a></li>
            <li className="flex gap-2 items-start"><MapPin size={16} className="mt-0.5 text-primary" /><span>Los Angeles, CA</span></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/who-we-are" className="hover:text-primary">Who We Are</Link></li>
            <li><Link to="/our-impact" className="hover:text-primary">Our Impact</Link></li>
            <li><Link to="/events" className="hover:text-primary">Events</Link></li>
            <li><Link to="/sponsors" className="hover:text-primary">Sponsors</Link></li>
            <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            #BlackLivesMatter · #TheMarathonContinues
          </p>
        </div>
        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/terms-of-use" className="hover:text-primary">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nae Nae's Way Inc. All rights reserved.
      </div>
    </footer>
  );
}

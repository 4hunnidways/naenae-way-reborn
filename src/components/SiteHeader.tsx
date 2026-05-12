import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/events", label: "Events" },
  { to: "/our-impact", label: "Our Impact" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/donate", label: "Donate" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-narrow flex items-center justify-between py-4 px-2">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Nae Nae's Way crest" className="h-14 w-14 object-contain" />
          <span className="font-display text-2xl tracking-wide text-primary">
            Nae Nae's Way
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link"
              activeProps={{ "data-active": "true" } as any}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link"
              activeProps={{ "data-active": "true" } as any}
              activeOptions={{ exact: n.to === "/" }}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  to?: string;
  exact?: boolean;
  children?: { to: string; label: string }[];
};

const nav: NavItem[] = [
  { label: "Home", to: "/", exact: true },
  {
    label: "Who We Are",
    to: "/who-we-are",
    children: [
      { to: "/meet-nae-nae", label: "Meet Nae Nae" },
      { to: "/support-team", label: "Support Team" },
      { to: "/celebrity-supporters", label: "Celebrity Supporters" },
      { to: "/events", label: "Events" },
    ],
  },
  {
    label: "Our Impact",
    to: "/our-impact",
    children: [
      { to: "/initiatives/visual-impairment", label: "Visual Impairment" },
      { to: "/initiatives/mental-health", label: "Mental Health" },
      { to: "/initiatives/cancer", label: "Cancer" },
      { to: "/initiatives/diabetes", label: "Diabetes" },
      { to: "/initiatives/homelessness", label: "Homelessness" },
      { to: "/initiatives/fitness-physical-health", label: "Fitness/Physical Health" },
    ],
  },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Donate", to: "/donate" },
  { label: "Contact", to: "/contact" },
];

function useActive(to: string, exact = false) {
  const { pathname } = useLocation();
  return exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");
}

function NavLinkItem({ to, exact, children, className }: { to: string; exact?: boolean; children: React.ReactNode; className?: string }) {
  const active = useActive(to, exact);
  return (
    <Link to={to} className={className} data-active={active ? "true" : undefined}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-narrow flex items-center justify-between py-4 px-2">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Nae Nae's Way" className="h-16 w-auto object-contain" />
          <span className="sr-only">Nae Nae's Way</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) =>
            n.children ? (
              <div key={n.label} className="relative group">
                <NavLinkItem to={n.to!} className="nav-link inline-flex items-center gap-1">
                  {n.label}
                  <ChevronDown size={14} className="opacity-70" />
                </NavLinkItem>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="min-w-[220px] rounded-2xl bg-background border border-border shadow-2xl p-2">
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 rounded-xl text-sm hover:bg-surface hover:text-primary transition"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLinkItem key={n.to} to={n.to!} exact={n.exact} className="nav-link">
                {n.label}
              </NavLinkItem>
            ),
          )}
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
          {nav.map((n) =>
            n.children ? (
              <div key={n.label} className="flex flex-col">
                <button
                  onClick={() => setOpenGroup((g) => (g === n.label ? null : n.label))}
                  className="nav-link flex items-center justify-between w-full text-left"
                >
                  {n.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openGroup === n.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openGroup === n.label && (
                  <div className="pl-4 flex flex-col gap-1 py-1">
                    <Link to={n.to!} onClick={() => setOpen(false)} className="nav-link text-sm opacity-80">
                      Overview
                    </Link>
                    {n.children.map((c) => (
                      <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="nav-link text-sm">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLinkItem key={n.to} to={n.to!} exact={n.exact} className="nav-link">
                {n.label}
              </NavLinkItem>
            ),
          )}
        </nav>
      )}
    </header>
  );
}

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const NAV = [
  { to: "/bemutatkozas", label: "Bemutatkozás" },
  { to: "/javitas-karbantartas", label: "Javítás" },
  { to: "/alkatreszek", label: "Alkatrészek" },
  { to: "/kazancsere", label: "Kazáncsere" },
  { to: "/kapumotorok", label: "Kapumotorok" },
  { to: "/blog", label: "Blog" },
  { to: "/kapcsolat", label: "Kapcsolat" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-dark text-dark-foreground border-b border-dark-muted shadow-elevated">
      <div className="container-page flex items-center gap-4 h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="BattaGáz logó" className="h-12 w-12 rounded-full bg-white object-cover" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-white">BattaGáz</div>
            <div className="text-xs text-dark-foreground/70">Gázkazán-alkatrész és szerviz</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-6 flex-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-primary-glow bg-dark-muted" : "text-dark-foreground/85 hover:text-white hover:bg-dark-muted"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+36703734632" className="hidden md:flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-glow">
          <Phone className="h-4 w-4" /> 06 70 373 4632
        </a>
        <Button asChild variant="cta" size="sm" className="hidden md:inline-flex">
          <Link to="/kapcsolat">Ajánlatkérés</Link>
        </Button>

        <button
          aria-label="Menü"
          className="lg:hidden ml-auto p-2 rounded-md hover:bg-dark-muted"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-dark-muted bg-dark">
          <div className="container-page py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive ? "text-primary-glow bg-dark-muted" : "text-dark-foreground/85"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a href="tel:+36703734632" className="px-3 py-2.5 text-sm font-semibold text-white flex items-center gap-2">
              <Phone className="h-4 w-4" /> 06 70 373 4632
            </a>
            <Button asChild variant="cta" className="mt-2">
              <Link to="/kapcsolat" onClick={() => setOpen(false)}>Ajánlatkérés</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
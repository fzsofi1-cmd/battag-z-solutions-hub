import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BattaGáz" className="h-14 w-14 rounded-full bg-white object-cover" width={56} height={56} loading="lazy" />
            <div>
              <div className="font-display text-xl font-bold text-white">BattaGáz</div>
              <div className="text-sm text-dark-foreground/70">Gázkazán-alkatrész és szerviz</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-dark-foreground/70 max-w-md">
            Bontott, ellenőrzött, tesztelt gázkazán-alkatrészek, javítás, karbantartás, kazáncsere és kapumotor-telepítés — egy kiszállással, garanciával.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Gyorslinkek</h4>
          <ul className="space-y-2 text-sm text-dark-foreground/75">
            <li><Link to="/bemutatkozas" className="hover:text-primary-glow">Bemutatkozás</Link></li>
            <li><Link to="/javitas-karbantartas" className="hover:text-primary-glow">Szolgáltatások</Link></li>
            <li><Link to="/blog" className="hover:text-primary-glow">Blog</Link></li>
            <li><Link to="/kapcsolat" className="hover:text-primary-glow">Kapcsolat</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Elérhetőség</h4>
          <ul className="space-y-2 text-sm text-dark-foreground/75">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow" /> <a href="tel:+36703734632">06 70 373 4632</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-glow" /> <a href="mailto:battagaz@gmail.com">battagaz@gmail.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" /> Széchenyi u. 8.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dark-muted">
        <div className="container-page py-5 text-xs text-dark-foreground/60 text-center">
          © 2026 BattaGáz — Gázkazán-alkatrész és szerviz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallBanner = () => (
  <section className="bg-primary-dark text-white">
    <div className="container-page py-12 md:py-14 grid md:grid-cols-[1fr_auto] gap-6 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-balance">
          Kazánja nem fűt? Nincs melegvíz? Hívjon most, és még ma segítünk!
        </h2>
        <p className="text-white/75 mt-2">Egyszeri kiszállás, helyszíni javítás bontott alkatrésszel.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild variant="cta" size="xl">
          <a href="tel:+36703734632"><Phone className="mr-2 h-5 w-5" />06 70 373 4632</a>
        </Button>
        <Button asChild variant="outlineLight" size="xl">
          <Link to="/kapcsolat">Írásos ajánlatkérés</Link>
        </Button>
      </div>
    </div>
  </section>
);
export default CallBanner;

import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import tisztitas from "@/assets/tisztitas.jpg";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Vízoldal átmosása",
  "Égéstér és lemezes hőcserélő tisztítás",
  "Kondenzszifon tisztítás",
  "Tágulási tartály előfeszítés beállítása",
  "Nyomáspróba, működéspróba",
  "Gépi citromsavas hőcserélő tisztítás a falon",
];

const Repair = () => (
  <>
    <PageHero eyebrow="Szolgáltatás" title="Gázkazán javítás és karbantartás" subtitle="Saunier Duval, Immergas, Radiant, Fég, Viessmann, Junkers, Vaillant, Ariston és egyéb típusok azonnali javítása." />
    <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <img src={tisztitas} alt="Gépi citromsavas hőcserélő tisztítás" className="rounded-xl shadow-elevated w-full" loading="lazy" width={1280} height={832} />
        <div className="mt-8 space-y-4 text-foreground/85 leading-relaxed">
          <p>Mit csinálunk egy karbantartásnál? Vízoldal átmosása, égéstér és lemezes hőcserélő tisztítás, kondenzszifon tisztítás, tágtartály előfeszítés beállítása, nyomáspróba, működéspróba.</p>
          <p><strong className="text-primary-dark">Gépi citromsavas hőcserélő tisztítás</strong> — a falon elvégezhető, nem kell leszerelni vagy szétszedni a kazánt!</p>
          <p>A kombi kazánok egész évben üzemelnek, hiszen a melegvízkészítés is az ő feladatuk. Mindegy, hogy az év mely időszakában kapják meg az éves törődést.</p>
        </div>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" />{i}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Kérjen ajánlatot</h2>
        <ContactForm topic="Javítás / karbantartás" />
      </div>
    </section>
  </>
);
export default Repair;

import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import kapunyito from "@/assets/kapunyito.jpg";
import kapuMozgato from "@/assets/kapu-mozgato.jpg";
import kapuhoz from "@/assets/kapuhoz.jpg";
import { Wifi, KeyRound, Wrench } from "lucide-react";

const Gates = () => (
  <>
    <PageHero eyebrow="Kapumotorok" title="Kapumotor telepítés és szerviz" subtitle="Proteco és Gatepro úszó és tolókapu szettek telepítése akár 500 kg kapusúlyig." />
    <section className="container-page py-16">
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {[kapunyito, kapuMozgato, kapuhoz].map((src, i) => (
          <img key={i} src={src} alt={`Kapumotor referencia ${i+1}`} className="rounded-xl shadow-card w-full h-72 object-cover" loading="lazy" />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>Proteco, Gatepro márkájú úszó és tolókapumozgató szettek telepítése, akár 500 kg kapusúlyig. Számlával, garanciával.</p>
          <p>A rendszer bővíthető: <strong className="text-primary-dark">WiFi modul</strong> (mobiltelefonos működtetés), kulcstartós biléta érintéssel, vagy számkódos nyitással.</p>
          <p>Meglévő automatikák okosítása, javítása, bővítése, cseréje is. Tolókapú alatti sérült cső kiváltása szögvasra, szekcionált garázskapu motorok javítása — kérje ajánlatunkat!</p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { icon: Wifi, t: "WiFi vezérlés", d: "Mobiltelefonos működtetés" },
              { icon: KeyRound, t: "Biléta / kódos nyitás", d: "Érintéses és számkódos panel" },
              { icon: Wrench, t: "Javítás, bővítés", d: "Meglévő rendszerek szervize" },
            ].map((b) => (
              <div key={b.t} className="bg-secondary rounded-lg p-4">
                <b.icon className="h-5 w-5 text-primary" />
                <div className="mt-1.5 font-semibold text-primary-dark text-sm">{b.t}</div>
                <div className="text-xs text-muted-foreground">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Kérjen ajánlatot</h2>
          <ContactForm topic="Kapumotor" />
        </div>
      </div>
    </section>
  </>
);
export default Gates;

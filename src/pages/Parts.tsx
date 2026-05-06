import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import alkatreszek from "@/assets/alkatreszek.jpg";
import { Package, RefreshCcw, Truck } from "lucide-react";

const Parts = () => (
  <>
    <PageHero eyebrow="Alkatrészek" title="Gázkazán-alkatrészek készletről" subtitle="Bontott, ellenőrzött, tesztelt alkatrészek és felújított vezérlőpanelek — azonnal elérhető készletből." />
    <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <img src={alkatreszek} alt="Gázkazán alkatrészek készletről" className="rounded-xl shadow-elevated w-full" loading="lazy" width={1280} height={832} />
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Package, t: "Készlet", d: "Több száz tesztelt alkatrész raktáron" },
            { icon: RefreshCcw, t: "Felújított panelek", d: "Vezérlőpanelek sok típushoz" },
            { icon: Truck, t: "Beszerzés", d: "Új alkatrészt is beszerzünk igény szerint" },
          ].map((b) => (
            <div key={b.t} className="bg-secondary rounded-lg p-5">
              <b.icon className="h-6 w-6 text-primary" />
              <div className="mt-2 font-semibold text-primary-dark">{b.t}</div>
              <div className="text-sm text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
        <p className="text-foreground/85 leading-relaxed">
          Ha tudja a kazán típusát és az alkatrész cikkszámát, írjon nekünk — gyorsan válaszolunk!
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Alkatrész érdeklődés</h2>
        <ContactForm topic="Alkatrész" />
      </div>
    </section>
  </>
);
export default Parts;

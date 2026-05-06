import PageHero from "@/components/site/PageHero";
import szerelo from "@/assets/szerelo.jpg";
import { Mail, MapPin, Phone, BadgeCheck } from "lucide-react";

const About = () => (
  <>
    <PageHero eyebrow="Bemutatkozás" title="Rólunk — a BattaGáz csapata" subtitle="Gázkazán-szerviz, alkatrész-kereskedés és kapumotor-telepítés egy kézből." />
    <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-start">
      <img src={szerelo} alt="BattaGáz szakember munka közben" className="rounded-xl shadow-elevated w-full h-auto object-cover" loading="lazy" width={1280} height={832} />
      <div className="space-y-5 text-foreground/85 text-lg leading-relaxed">
        <p>Bontott, ellenőrzött, tesztelt gázkazán-alkatrészek forgalmazásával, valamint gázkazánok javításával, karbantartásával és cseréjével foglalkozunk. Piaci előnyünk, hogy a meghibásodást azonnal tudjuk bontott alkatrésszel javítani — nincs szükség többszöri kiszállásra.</p>
        <p>Arcképes gázszerelői igazolvány és bejegyzett műszaki biztonsági felülvizsgáló képesítés, valamint szakmai elkötelezettség: ügyfeleink elégedettségének biztosítéka.</p>
        <p><strong className="text-primary-dark">Fő profilunk:</strong> Saunier Duval, Vaillant, Junkers, Bosch, Immergas, Radiant, Westen kazánok — de a többitől sem riadunk vissza.</p>
        <div className="grid sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-secondary rounded-lg p-4 flex items-start gap-3"><Phone className="h-5 w-5 text-primary mt-0.5" /><div><div className="text-xs text-muted-foreground">Telefon</div><a href="tel:+36703734632" className="font-semibold text-primary-dark">06 70 373 4632</a></div></div>
          <div className="bg-secondary rounded-lg p-4 flex items-start gap-3"><Mail className="h-5 w-5 text-primary mt-0.5" /><div><div className="text-xs text-muted-foreground">E-mail</div><a href="mailto:battagaz@gmail.com" className="font-semibold text-primary-dark">battagaz@gmail.com</a></div></div>
          <div className="bg-secondary rounded-lg p-4 flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><div><div className="text-xs text-muted-foreground">Cím</div><div className="font-semibold text-primary-dark">Széchenyi u. 8.</div></div></div>
        </div>
        <div className="flex items-start gap-3 pt-2 text-sm text-muted-foreground">
          <BadgeCheck className="h-5 w-5 text-primary mt-0.5" />
          Hivatalos arcképes gázszerelői igazolvány · műszaki biztonsági felülvizsgáló képesítés
        </div>
      </div>
    </section>
  </>
);
export default About;
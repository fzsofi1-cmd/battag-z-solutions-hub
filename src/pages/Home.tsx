import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Flame, Phone, ShieldCheck, Truck, Wrench, Package, Replace, DoorClosed } from "lucide-react";
import CallBanner from "@/components/site/CallBanner";
import szerelo from "@/assets/szerelo.jpg";
import gazkazan from "@/assets/gazkazan.jpg";
import kapunyito from "@/assets/kapunyito.jpg";
import alkatreszek from "@/assets/alkatreszek.jpg";

const services = [
  { icon: Wrench, title: "Javítás, karbantartás", to: "/javitas-karbantartas",
    text: "Saunier Duval, Immergas, Radiant, Fég, Viessmann, Junkers, Vaillant, Ariston — azonnali javítás, karbantartás. Gépi citromsavas hőcserélő tisztítás a falon, szétszerelés nélkül.",
    img: szerelo },
  { icon: Package, title: "Alkatrész-értékesítés", to: "/alkatreszek",
    text: "Bontott, ellenőrzött, tesztelt gázkazán-alkatrészek és felújított vezérlőpanelek készletről, sok típushoz.",
    img: alkatreszek },
  { icon: Replace, title: "Kazáncsere", to: "/kazancsere",
    text: "Ha a javítás már nem éri meg: teljes kazáncsere szakszerűen, számlával, garanciával.",
    img: gazkazan },
  { icon: DoorClosed, title: "Kapumotorok telepítése", to: "/kapumotorok",
    text: "Proteco, Gatepro márkájú úszó és tolókapu szettek telepítése 500 kg kapusúlyig. WiFi modul, biléta, számkódos nyitás.",
    img: kapunyito },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${szerelo})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-transparent" />
        <div className="container-page relative py-20 md:py-32 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary-glow/40 text-primary-glow px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-up">
            <Flame className="h-3.5 w-3.5" /> Gázkazán szerviz · 24h hívható
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance animate-fade-up">
            Gázkazán meghibásodás? <span className="text-primary-glow">Azonnal javítunk.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl animate-fade-up">
            Egyszeri kiszállás, hibafeltárás, javítás — nem marad napokig melegvíz és fűtés nélkül! Bontott, ellenőrzött alkatrészekkel azonnali javítás, nincs szükség többszöri kiszállásra.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 animate-fade-up">
            <Button asChild variant="cta" size="xl">
              <Link to="/kapcsolat">Kérjen ajánlatot! <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="tel:+36703734632"><Phone className="mr-1" />Hívjon most: 06 70 373 4632</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Szolgáltatásaink</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-balance">Mindent egy helyen — kazántól a kapuig</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.to} to={s.to} className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={832} />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Részletek <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-20">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Miért minket válasszon</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-balance">Megbízható szakember, gyors megoldás</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Egyszeri kiszállás", text: "A meghibásodást helyszínen, azonnal javítjuk bontott alkatrésszel. Nincs többszöri kiszállás, nincs napokig várakozás." },
              { icon: ShieldCheck, title: "Szakmai garancia", text: "Arcképes gázszerelői igazolvány, bejegyzett műszaki biztonsági felülvizsgáló képesítés. Számla és garancia minden munkánkra." },
              { icon: Award, title: "Széles márkaismeret", text: "Saunier Duval, Vaillant, Junkers, Bosch, Immergas, Radiant, Westen a fő profilunk — de a többitől sem riadunk vissza." },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-xl p-7 border border-border shadow-card">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg gradient-cta text-accent-foreground mb-4">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  );
};

export default Home;
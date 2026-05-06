import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import gazkazan from "@/assets/gazkazan.jpg";

const Replacement = () => (
  <>
    <PageHero eyebrow="Kazáncsere" title="Kazáncsere szakszerűen" subtitle="Számlával, garanciával — egy kiszállás, egy nap alatt megoldjuk." />
    <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-5">
        <img src={gazkazan} alt="Új gázkazán telepítve" className="rounded-xl shadow-elevated w-full" loading="lazy" width={1280} height={832} />
        <p className="text-foreground/85 text-lg leading-relaxed">
          Ha a régi kazán javítása már nem gazdaságos, segítünk az új kiválasztásában és a cseréjében is. Mérlegeljük az ár, hatásfok és élettartam szempontokat — Önnek csak választania kell.
        </p>
        <p className="text-foreground/85 leading-relaxed">
          A teljes szerelést, idomgyártást, beüzemelést és gázbiztonsági felülvizsgálatot is mi végezzük. Egy nap alatt visszakapja a fűtését és melegvizét.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Kérjen ajánlatot fotókkal</h2>
        <ContactForm topic="Kazáncsere" />
      </div>
    </section>
  </>
);
export default Replacement;

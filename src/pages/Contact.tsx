import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <>
    <PageHero eyebrow="Kapcsolat" title="Lépjen kapcsolatba velünk!" subtitle="Hívjon, írjon vagy küldjön ajánlatkérést — a legtöbb hívásra még aznap visszahívással reagálunk." />
    <section className="container-page py-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
      <div className="space-y-5">
        <div className="bg-secondary rounded-xl p-6 space-y-4">
          <a href="tel:+36703734632" className="flex items-center gap-3 text-primary-dark hover:text-primary">
            <span className="h-10 w-10 rounded-lg bg-primary/10 inline-flex items-center justify-center"><Phone className="h-5 w-5 text-primary" /></span>
            <div><div className="text-xs text-muted-foreground">Telefon</div><div className="font-semibold">06 70 373 4632</div></div>
          </a>
          <a href="mailto:battagaz@gmail.com" className="flex items-center gap-3 text-primary-dark hover:text-primary">
            <span className="h-10 w-10 rounded-lg bg-primary/10 inline-flex items-center justify-center"><Mail className="h-5 w-5 text-primary" /></span>
            <div><div className="text-xs text-muted-foreground">E-mail</div><div className="font-semibold">battagaz@gmail.com</div></div>
          </a>
          <div className="flex items-center gap-3 text-primary-dark">
            <span className="h-10 w-10 rounded-lg bg-primary/10 inline-flex items-center justify-center"><MapPin className="h-5 w-5 text-primary" /></span>
            <div><div className="text-xs text-muted-foreground">Cím</div><div className="font-semibold">Széchenyi u. 8.</div></div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-card border border-border">
          <iframe
            title="BattaGáz térkép"
            src="https://www.google.com/maps?q=Sz%C3%A9chenyi%20u.%208%20Sz%C3%A1zhalombatta&output=embed"
            className="w-full h-72 border-0"
            loading="lazy"
          />
        </div>
      </div>
      <ContactForm topic="Általános megkeresés" />
    </section>
  </>
);
export default Contact;

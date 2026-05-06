import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import tisztitas from "@/assets/tisztitas.jpg";
import gazkazan from "@/assets/gazkazan.jpg";
import kapunyito from "@/assets/kapunyito.jpg";

const posts = [
  { img: tisztitas, title: "Gépi citromsavas hőcserélő tisztítás — így csináljuk", excerpt: "A gépi tisztítás a falon elvégezhető, nem kell szétszedni a kazánt. Mutatjuk, hogyan!" },
  { img: gazkazan, title: "Mikor érdemes kazánt cserélni javítás helyett?", excerpt: "Nem minden kazán javítható gazdaságosan. Mikor jön el az a pont, amikor az újat éri meg?" },
  { img: kapunyito, title: "Kétszárnyas kapu automatizálása — egy friss telepítés története", excerpt: "Gatepro Techno 400-as motorok, 2 db távnyitó és wifis elérés. Így készült." },
];

const Blog = () => (
  <>
    <PageHero eyebrow="Blog" title="Szakmai tippek és érdekes esetek" subtitle="Tapasztalatok, esettanulmányok és karbantartási tudnivalók a saját műhelyünkből." />
    <section className="container-page py-16">
      <div className="grid md:grid-cols-3 gap-7">
        {posts.map((p) => (
          <article key={p.title} className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all group">
            <div className="aspect-video overflow-hidden bg-muted">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h2 className="font-bold text-lg text-primary-dark text-balance">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/kapcsolat" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Tovább <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);
export default Blog;

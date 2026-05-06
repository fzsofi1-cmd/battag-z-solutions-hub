interface Props { eyebrow?: string; title: string; subtitle?: string; }
const PageHero = ({ eyebrow, title, subtitle }: Props) => (
  <section className="gradient-hero text-white">
    <div className="container-page py-16 md:py-24 animate-fade-up">
      {eyebrow && <div className="text-primary-glow text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</div>}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">{title}</h1>
      {subtitle && <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
    </div>
  </section>
);
export default PageHero;

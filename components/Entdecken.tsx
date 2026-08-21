import Link from "next/link";
import CmsImage from "@/components/CmsImage";
import type { EntdeckenContent, EntdeckenPanel } from "@/lib/strapi";

const fallback: EntdeckenContent = {
  panels: [
    {
      title: "BEER Küchen-Designs",
      subtitle: "Design, das Persönlichkeit zum Leben bringt.",
      buttonLabel: "Küchen entdecken",
      href: "#kacheln",
      image: "",
      alt: "",
    },
    {
      title: "Materialien & Farben",
      subtitle: "Die Kunst des Kombinierens.",
      buttonLabel: "Farben entdecken",
      href: "#kacheln",
      image: "",
      alt: "",
    },
    {
      title: "Arbeitsplatten",
      subtitle: "Präzision, die man sieht und fühlt.",
      buttonLabel: "Arbeitsplatten entdecken",
      href: "#manufaktur",
      image: "",
      alt: "",
    },
    {
      title: "Innenleben",
      subtitle: "Organisation, die Freiheit gibt.",
      buttonLabel: "Innenleben entdecken",
      href: "#manufaktur",
      image: "",
      alt: "",
    },
  ],
};

function PanelCard({ panel }: { panel: EntdeckenPanel }) {
  return (
    <li>
      <article className="group relative flex aspect-[4/3] min-h-[22rem] items-center justify-center overflow-hidden bg-nacht sm:min-h-[26rem] lg:min-h-[32rem]">
        {panel.image ? (
          <CmsImage
            src={panel.image}
            srcSet={panel.srcSet}
            alt={panel.alt || panel.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1440px) 50vw, 720px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : null}
        <div className="absolute inset-0 bg-nacht/45" />
        <div className="relative z-10 flex max-w-lg flex-col items-center px-6 py-12 text-center md:px-10 md:py-16">
          <h3 className="font-serif text-[32px] leading-[1.12] font-medium tracking-[-0.02em] text-paper md:text-[36px] lg:text-[42px]">
            {panel.title}
          </h3>
          <p className="type-body mt-3 text-paper/90">{panel.subtitle}</p>
          <Link href={panel.href} className="pill pill-light mt-6 md:mt-8">
            {panel.buttonLabel}
          </Link>
        </div>
      </article>
    </li>
  );
}

export default function Entdecken({
  content,
}: {
  content: EntdeckenContent | null;
}) {
  const data = content ?? fallback;
  const panels = data.panels.length > 0 ? data.panels : fallback.panels;

  return (
    <section
      id="entdecken"
      className="bg-paper"
      aria-label="Küchenwelten entdecken"
    >
      <h2 className="sr-only">Küchenwelten entdecken</h2>
      <ul className="mx-auto grid max-w-[90rem] grid-cols-1 gap-5 px-6 py-16 sm:grid-cols-2 md:gap-8 md:px-8 md:py-24 lg:px-10">
        {panels.map((panel, index) => (
          <PanelCard key={`${panel.title}-${index}`} panel={panel} />
        ))}
      </ul>
    </section>
  );
}

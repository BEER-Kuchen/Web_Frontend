import HeroCarousel from "@/components/HeroCarousel";
import { type HeroSlide } from "@/lib/strapi";

const fallbackSlides: HeroSlide[] = [
  {
    src: "/kitchens/stile-modern.jpg",
    alt: "Graue moderne Küche mit weißer Rückwand",
  },
  {
    src: "/kitchens/stile-landhaus.jpg",
    alt: "Salbeigrüne Landhausküche",
  },
  {
    src: "/kitchens/stile-design.jpg",
    alt: "Schwarze Designküche mit Eiche",
  },
  {
    src: "/kitchens/stile-holz.jpg",
    alt: "Weiße Küche mit Holz und Naturstein",
  },
  {
    src: "/kitchens/stile-insel.jpg",
    alt: "Helle Küche mit Insel",
  },
  {
    src: "/kitchens/stile-purist.jpg",
    alt: "Puristische Küche mit anthrazitfarbenem Stein",
  },
];

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  return (
    <HeroCarousel slides={slides.length > 0 ? slides : fallbackSlides} />
  );
}

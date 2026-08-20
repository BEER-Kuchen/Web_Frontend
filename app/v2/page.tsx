import BrochureForm from "@/components/v2/BrochureForm";
import Link from "next/link";
import {
  newsItems,
  productTeasers,
  siematicMedia,
  styleWorlds,
} from "@/lib/siematic";

function CoverImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
  );
}

function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[15px] text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#8d1d2c]"
    >
      {children}
    </Link>
  );
}

function DarkButton({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center border border-[#111827] bg-[#111827] px-8 py-3 text-[13px] tracking-[0.06em] text-white transition-colors hover:bg-white hover:text-[#111827]"
    >
      {children}
    </Link>
  );
}

export default function SiematicHome() {
  return (
    <main className="bg-white text-[#111827]">
      <section className="relative min-h-[50vh] max-h-[100vh] overflow-hidden bg-black">
        <div className="aspect-video max-h-[100vh] min-h-[50vh] w-full">
          <video
            className="h-full w-full object-cover"
            src={siematicMedia.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section id="beratung" className="bg-white">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="aspect-[4/3] w-full overflow-hidden bg-[#6e6d6d] lg:aspect-[16/8]">
            <CoverImage
              src={siematicMedia.planning}
              alt="SieMatic Beratung und individuelle Planung"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
              <h2 className="siematic-serif text-[32px] leading-[1.15] text-[#111827] md:text-[42px] lg:text-[48px]">
                SieMatic – professionelle Beratung & individuelle Planung
              </h2>
              <div className="mt-8">
                <DarkButton href="#broschuere">Jetzt Beratung starten</DarkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stilwelten" className="bg-white px-5 py-16 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="siematic-serif text-[32px] md:text-[42px]">
            Unsere Stilwelten
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-[#3d4245] md:text-[18px]">
            Mit dem SieMatic Planungsprinzip der vier Stilwelten PURE, URBAN,
            CLASSIC und MONDIAL lassen sich heute weltweit Lebensräume
            gestalten, die die Persönlichkeit ihrer Besitzer perfekt
            widerspiegeln.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2">
          {styleWorlds.map((world) => (
            <li key={world.title}>
              <Link href={world.href} className="group relative block overflow-hidden">
                <div className="aspect-[4/3]">
                  <CoverImage
                    src={world.image}
                    alt={world.title}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/15 text-center">
                  <h3 className="siematic-serif text-[42px] text-white md:text-[56px]">
                    {world.title}
                  </h3>
                  <span className="mt-4 text-[15px] text-white underline underline-offset-4">
                    {world.cta}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="stories" className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="aspect-video overflow-hidden bg-black lg:aspect-auto lg:min-h-[520px]">
            <video
              className="h-full w-full object-cover"
              src={siematicMedia.storiesVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
          <div className="flex items-center px-6 py-16 lg:px-16">
            <div className="max-w-xl">
              <h2 className="siematic-serif text-[32px] md:text-[42px]">
                Weil jedes Zuhause anders ist
              </h2>
              <p className="mt-6 text-[16px] leading-7 text-[#3d4245] md:text-[18px]">
                Jede SieMatic Küche erzählt eine faszinierende Geschichte. Von
                schöner Gestaltung und Handwerkskunst, von Ideenreichtum,
                Inspiration und Innovation. Und von der Leidenschaft und
                Kreativität ihrer Besitzer. Unsere Homestories laden Sie von nun
                an regelmäßig ein in das wahre Leben einzigartiger
                Persönlichkeiten, in Küchenlösungen mit zeitgemäßem Design und
                in erfrischend neue Wohnkonzepte. Lassen Sie sich von uns
                inspirieren.
              </p>
              <div className="mt-8">
                <TextLink href="#news">SieMatic Stories</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="bg-white px-5 py-16 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="siematic-serif text-[32px] md:text-[42px]">
            Wir haben Neuigkeiten für Sie.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-[#3d4245] md:text-[18px]">
            Lesen Sie hier regelmäßig spannende News aus der weiten Welt von
            SieMatic und seinen globalen Partnern. Ob neue Produkte,
            zukunftsweisende Trends, globale Studioeröffnungen, internationale
            Messen und Contests oder inspirierende Homestories. Lassen sie sich
            überraschen, informieren und inspirieren.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <li key={item.title}>
              <article>
                <div className="aspect-[4/3] overflow-hidden bg-[#e5e7eb]">
                  <CoverImage src={item.image} alt={item.title} />
                </div>
                <h3 className="siematic-serif mt-5 text-[24px]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[#3d4245]">
                  {item.excerpt}
                </p>
                <div className="mt-4">
                  <TextLink href="#news">{item.cta}</TextLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section id="kuechen" className="bg-white">
        <ul className="grid grid-cols-1 md:grid-cols-2">
          {productTeasers.map((item) => (
            <li key={item.title}>
              <Link href="#kuechen" className="group relative block overflow-hidden">
                <div className="aspect-[16/10]">
                  <CoverImage
                    src={item.image}
                    alt={item.title}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 px-6 text-center text-white">
                  <h4 className="siematic-serif text-[28px] md:text-[36px]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[15px]">{item.subtitle}</p>
                  <span className="mt-5 text-[14px] underline underline-offset-4">
                    {item.cta}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="broschuere" className="bg-white px-5 py-16 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-2">
          <div>
            <h2 className="siematic-serif text-[32px] md:text-[42px]">
              SieMatic Broschüren ansehen oder bestellen
            </h2>
          </div>
          <BrochureForm />
        </div>
      </section>

      <section id="haendler" className="bg-white">
        <div className="relative">
          <div className="aspect-[16/7] overflow-hidden bg-[#e5e7eb]">
            <CoverImage src={siematicMedia.map} alt="SieMatic Händlernetz weltweit" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-xl bg-white/90 px-8 py-10 text-center">
              <h3 className="siematic-serif text-[28px] md:text-[36px]">
                Ihr nächster Händler
              </h3>
              <div className="mt-6">
                <DarkButton href="#haendler">Händler finden</DarkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

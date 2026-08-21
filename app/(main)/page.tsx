import Entdecken from "@/components/Entdecken";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Kacheln from "@/components/Kacheln";
import LeadCta from "@/components/LeadCta";
import Process from "@/components/Process";
import { fetchHomeCms } from "@/lib/strapi";

export const revalidate = 120;

export default async function Home() {
  const { heroSlides, kacheln, entdecken, faq, ablauf, beratung } =
    await fetchHomeCms();

  return (
    <main className="bg-paper">
      <Hero slides={heroSlides} />
      <Kacheln content={kacheln} />
      <Process content={ablauf} />
      <Entdecken content={entdecken} />
      <Faq content={faq} />
      <LeadCta content={beratung} />
    </main>
  );
}

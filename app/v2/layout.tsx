import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SiematicFooter from "@/components/v2/Footer";
import SiematicHeader from "@/components/v2/Header";
import "./v2.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-siematic-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-siematic-serif",
});

export const metadata: Metadata = {
  title: "SieMatic | Hochwertige Küchen & Interior Design | SieMatic",
  description:
    "SieMatic bietet einzigartiges Küchendesign, perfekte Verarbeitung und individuelle Planungslösungen – entdecken Sie Raum für Ihre Ideen in der Küche.",
};

export default function SiematicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${playfair.variable} siematic-root`}>
      <SiematicHeader />
      {children}
      <SiematicFooter />
      <a
        href="#beratung"
        className="fixed right-5 bottom-5 z-50 bg-[#111827] px-5 py-3 text-[13px] tracking-[0.06em] text-white shadow-lg hover:bg-[#8d1d2c]"
      >
        Termin vereinbaren
      </a>
    </div>
  );
}

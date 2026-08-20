import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  preload: false,
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "BEER Küchenmanufaktur | Wolfersdorf bei Freising",
  description:
    "Individuelle Manufakturküchen aus Wolfersdorf bei Freising. Beratung, Planung, Fertigung und Montage aus einer Hand.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${figtree.variable} ${cormorant.variable}`}>
      <body className={`${figtree.className} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

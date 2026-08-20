export type FooterLink = {
  href: string;
  label: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
  extraTitle?: string;
  extraLinks?: FooterLink[];
  note?: string;
};

export const kitchenWorlds: FooterLink[] = [
  { href: "#kacheln", label: "Moderne Küchen" },
  { href: "#kacheln", label: "Landhausküchen" },
  { href: "#kacheln", label: "Designküchen" },
  { href: "#kacheln", label: "Holzküchen" },
  { href: "#kacheln", label: "Küche mit Insel" },
  { href: "#kacheln", label: "Offene Küche" },
  { href: "#kacheln", label: "L-Form" },
  { href: "#kacheln", label: "U-Form" },
  { href: "#kacheln", label: "Küchenzeile" },
  { href: "#kacheln", label: "Kleine Küchen" },
  { href: "#kacheln", label: "Schwarze Küchen" },
  { href: "#kacheln", label: "Weiße Küchen" },
  { href: "#kacheln", label: "Salbeigrüne Küchen" },
  { href: "#kacheln", label: "Einbauküche" },
  { href: "#kacheln", label: "Luxusküche" },
  { href: "#kacheln", label: "Raumhohe Küchen" },
  { href: "#kacheln", label: "Grifflose Küchen" },
  { href: "#kacheln", label: "Küche nach Maß" },
  { href: "#kacheln", label: "Material & Ausstattung" },
];

export const footerColumns: FooterSection[] = [
  {
    title: "Marken & Möbel",
    links: [
      { href: "#manufaktur", label: "Bora" },
      { href: "#manufaktur", label: "Miele" },
      { href: "#manufaktur", label: "Gaggenau" },
      { href: "#manufaktur", label: "Quooker" },
    ],
    extraTitle: "Möbel nach Maß",
    extraLinks: [
      { href: "#manufaktur", label: "Einbauschränke" },
      { href: "#manufaktur", label: "Begehbare Kleiderschränke" },
      { href: "#manufaktur", label: "Tische & Bänke" },
      { href: "#manufaktur", label: "Wohnmöbel" },
    ],
  },
  {
    title: "Regionen",
    links: [
      { href: "#beratung", label: "München" },
      { href: "#beratung", label: "Freising" },
      { href: "#beratung", label: "Erding" },
      { href: "#beratung", label: "Dachau" },
      { href: "#beratung", label: "Pfaffenhofen" },
      { href: "#beratung", label: "Augsburg" },
      { href: "#beratung", label: "Ingolstadt" },
      { href: "#beratung", label: "Landshut" },
      { href: "#beratung", label: "Regensburg" },
      { href: "#beratung", label: "Mainburg" },
      { href: "#beratung", label: "Nürnberg" },
    ],
  },
  {
    title: "Küche planen",
    links: [
      { href: "#ablauf", label: "So entsteht Ihre Küche" },
      { href: "#beratung", label: "Ausstellung Freising" },
      { href: "#beratung", label: "Küchenplaner" },
      { href: "#beratung", label: "Katalog bestellen" },
      { href: "#beratung", label: "Beratung & Termin" },
    ],
  },
  {
    title: "Ratgeber",
    links: [
      { href: "#faq", label: "Was kostet eine Küche?" },
      { href: "#faq", label: "Top-Artikel" },
      { href: "#faq", label: "Alle Artikel" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "#manufaktur", label: "Über BEER" },
      { href: "#manufaktur", label: "Team" },
      { href: "#kacheln", label: "Alle Projekte" },
      { href: "#manufaktur", label: "Nachhaltigkeit" },
      { href: "#beratung", label: "Karriere" },
      { href: "#manufaktur", label: "Presse" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "#beratung", label: "BEER GmbH" },
      { href: "#beratung", label: "Badendorf 6" },
      { href: "#beratung", label: "85395 Wolfersdorf" },
      { href: "#beratung", label: "Öffnungszeiten" },
    ],
  },
];

export const legalLinks: FooterLink[] = [
  { href: "#", label: "Impressum" },
  { href: "#", label: "Datenschutz" },
  { href: "#", label: "AGB" },
  { href: "#", label: "Cookie-Einstellungen" },
];

export const socialLinks: FooterLink[] = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://pinterest.com", label: "Pinterest" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://houzz.com", label: "Houzz" },
];

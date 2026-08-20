export type MenuLink = {
  href: string;
  label: string;
  highlight?: boolean;
};

export type MenuGroup = {
  title?: string;
  links: MenuLink[];
};

export type MenuTeaser = {
  href: string;
  image: string;
  caption: string;
  alt: string;
  objectPosition?: string;
};

export type MenuPanelId = "kuechen" | "moebel" | "planen" | "ueber";

export type MenuPanel = {
  id: MenuPanelId;
  label: string;
  title: string;
  href: string;
  variant: "rich" | "slim" | "guide" | "about";
  intro: string;
  groups: MenuGroup[];
  teasers?: MenuTeaser[];
};

export const menuPanels: MenuPanel[] = [
  {
    id: "kuechen",
    label: "Küchen",
    title: "Küchen",
    href: "#kacheln",
    variant: "rich",
    intro: "Formen, Stile und Materialien – der Überblick vor dem Detail.",
    groups: [
      {
        links: [
          { href: "#kacheln", label: "Küchenformen" },
          { href: "#kacheln", label: "Küchenstile" },
          { href: "#kacheln", label: "Küchenfarben" },
          { href: "#kacheln", label: "Besondere Küchen" },
          { href: "#kacheln", label: "Material & Ausstattung" },
          { href: "#manufaktur", label: "Marken" },
          { href: "#kacheln", label: "Alle Projekte" },
        ],
      },
    ],
    teasers: [
      {
        href: "#kacheln",
        image: "/kitchens/stile-design.jpg",
        caption: "Designküche",
        alt: "Schwarze Designküche mit Eiche und Fischgrätparkett",
        objectPosition: "center 42%",
      },
      {
        href: "#kacheln",
        image: "/kitchens/stile-landhaus.jpg",
        caption: "Salbeigrüne Küche",
        alt: "Salbeigrüne Landhausküche mit Marmor und schwarzen Beschlägen",
        objectPosition: "center 40%",
      },
      {
        href: "#kacheln",
        image: "/kitchens/stile-modern.jpg",
        caption: "Moderne Küche",
        alt: "Graue moderne Küche mit weißer Rückwand",
        objectPosition: "center 38%",
      },
    ],
  },
  {
    id: "moebel",
    label: "Möbel nach Maß",
    title: "Möbel nach Maß",
    href: "#manufaktur",
    variant: "slim",
    intro: "Einbauten und Wohnmöbel – präzise gefertigt, zurückhaltend im Angebot.",
    groups: [
      {
        links: [
          { href: "#manufaktur", label: "Einbauschränke" },
          { href: "#manufaktur", label: "Begehbare Kleiderschränke" },
          { href: "#manufaktur", label: "Tische & Bänke" },
          { href: "#manufaktur", label: "Wohnmöbel" },
        ],
      },
    ],
  },
  {
    id: "planen",
    label: "Küche planen",
    title: "Küche planen",
    href: "#beratung",
    variant: "guide",
    intro: "Vom ersten Gespräch bis zur Ausstellung – der Weg zu Ihrer Küche.",
    groups: [
      {
        links: [
          { href: "#ablauf", label: "So entsteht Ihre Küche" },
          { href: "#beratung", label: "Ausstellung Freising" },
          {
            href: "#beratung",
            label: "Küchenplaner – Welche Küche passt zu Ihnen?",
            highlight: true,
          },
          { href: "#beratung", label: "Beratung & Termin" },
        ],
      },
      {
        title: "Wissen & Ratgeber",
        links: [
          { href: "#faq", label: "Blog" },
          { href: "#beratung", label: "Katalog bestellen" },
          { href: "#faq", label: "Checkliste" },
        ],
      },
    ],
  },
  {
    id: "ueber",
    label: "Über BEER",
    title: "Über BEER",
    href: "#manufaktur",
    variant: "about",
    intro: "Manufaktur, Haltung und die Menschen dahinter.",
    groups: [
      {
        links: [
          { href: "#manufaktur", label: "Über uns – Werte & Philosophie" },
          { href: "#manufaktur", label: "Team" },
          { href: "#manufaktur", label: "Aktuelles & Presse" },
          { href: "#manufaktur", label: "Nachhaltigkeit" },
          { href: "#manufaktur", label: "Empfehlungen" },
          { href: "#beratung", label: "Karriere" },
        ],
      },
    ],
  },
];

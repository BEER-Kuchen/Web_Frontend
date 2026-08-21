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
  srcSet?: string;
  caption: string;
  alt: string;
  objectPosition?: string;
};

export type MenuPanelId = string;

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
          { href: "#ablauf", label: "Marken" },
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
    href: "#ablauf",
    variant: "slim",
    intro: "Einbauten und Wohnmöbel – präzise gefertigt, zurückhaltend im Angebot.",
    groups: [
      {
        links: [
          { href: "#ablauf", label: "Einbauschränke" },
          { href: "#ablauf", label: "Begehbare Kleiderschränke" },
          { href: "#ablauf", label: "Tische & Bänke" },
          { href: "#ablauf", label: "Wohnmöbel" },
        ],
      },
    ],
    teasers: [
      {
        href: "#ablauf",
        image: "/kitchens/stile-holz.jpg",
        caption: "Möbel nach Maß",
        alt: "Eingebaute Möbel aus Holz, präzise nach Maß gefertigt",
        objectPosition: "center 40%",
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
    teasers: [
      {
        href: "#beratung",
        image: "/kitchens/stile-insel.jpg",
        caption: "Küche planen",
        alt: "Kücheninsel in der Ausstellung – der Weg zur eigenen Planung",
        objectPosition: "center 38%",
      },
    ],
  },
  {
    id: "ueber",
    label: "Über BEER",
    title: "Über BEER",
    href: "#ablauf",
    variant: "about",
    intro: "Manufaktur, Haltung und die Menschen dahinter.",
    groups: [
      {
        links: [
          { href: "#ablauf", label: "Über uns – Werte & Philosophie" },
          { href: "#ablauf", label: "Team" },
          { href: "#ablauf", label: "Aktuelles & Presse" },
          { href: "#ablauf", label: "Nachhaltigkeit" },
          { href: "#ablauf", label: "Empfehlungen" },
          { href: "#beratung", label: "Karriere" },
        ],
      },
    ],
    teasers: [
      {
        href: "#ablauf",
        image: "/kitchens/stile-purist.jpg",
        caption: "Über BEER",
        alt: "Puristische Manufakturküche – Haltung und Handwerk bei BEER",
        objectPosition: "center 42%",
      },
    ],
  },
];

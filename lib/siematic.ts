export const SIEMATIC_CDN = "https://cdn.siematic.com/site/assets/files";

export function siematicFile(id: string, file: string) {
  return `${SIEMATIC_CDN}/${id}/${file}`;
}

export const siematicMedia = {
  heroVideo: siematicFile(
    "315793",
    "260225_siematic_loop_3_16zu9_ohne_stoerer.mp4",
  ),
  planning: siematicFile("315857", "planning-8k.jpg"),
  pure: siematicFile("316044", "siematic_pure_01.jpg"),
  urban: siematicFile("316052", "siematic_urban_01.jpg"),
  mondial: siematicFile("316048", "mondial_teaser.jpg"),
  classic: siematicFile("316051", "classic_tease.jpg"),
  storiesVideo: siematicFile(
    "315973",
    "240529_siematic_loop_16zu9_hd_no_siematic.mp4",
  ),
  rome: siematicFile("316119", "siematic-rome-kitchen-overview.jpg"),
  birmingham: siematicFile("596317", "siematic-aktar-islam-kitchen-overview.jpg"),
  milan: siematicFile(
    "402254",
    "2026-04-milan-siematic-conscious_design_-_emotionally_connected-6.jpg",
  ),
  porsche: siematicFile("316118", "ptgp24_ku1_5881.jpg"),
  summit: siematicFile("316117", "dcgh_26030847.jpg"),
  contest: siematicFile("316113", "siematic_id-days_2024_018.jpg"),
  designs: siematicFile("581765", "frame_1_18.png"),
  materials: siematicFile("316173", "teaser_0002_materials.jpg"),
  countertops: siematicFile("316176", "pure-00418.jpg"),
  inside: siematicFile("316167", "teaser_0004_inside.jpg"),
  map: siematicFile("55685", "world_map.jpg"),
};

export const navLeft = [
  {
    label: "Küchen",
    href: "#kuechen",
    items: [
      { label: "Küchendesign", href: "#kuechen" },
      { label: "Stilwelten", href: "#stilwelten" },
      { label: "Material & Farbe", href: "#materialien" },
      { label: "Arbeitsplatten", href: "#materialien" },
      { label: "Innenausstattung", href: "#materialien" },
    ],
  },
  {
    label: "Inspiration",
    href: "#stories",
    items: [
      { label: "Homes", href: "#stories" },
      { label: "Stories", href: "#news" },
      { label: "Ratgeber", href: "#news" },
    ],
  },
  {
    label: "Beratung",
    href: "#beratung",
    items: [
      { label: "Übersicht", href: "#beratung" },
      { label: "Küchenplaner", href: "#beratung" },
      { label: "SieMatic Showrooms", href: "#haendler" },
      { label: "Termin vereinbaren", href: "#beratung" },
      { label: "Kostenlose Broschüre", href: "#broschuere" },
      { label: "Kontakt", href: "#haendler" },
      { label: "Checkliste", href: "#beratung" },
      { label: "360° Showroom", href: "#beratung" },
    ],
  },
  {
    label: "Unternehmen",
    href: "#unternehmen",
    items: [
      { label: "Über SieMatic", href: "#unternehmen" },
      { label: "Neuigkeiten", href: "#news" },
      { label: "Karriere", href: "#unternehmen" },
      { label: "Presseinformationen", href: "#news" },
      { label: "Pressekontakt", href: "#unternehmen" },
      { label: "Nachhaltigkeit", href: "#unternehmen" },
      { label: "Objektgeschäft", href: "#unternehmen" },
      { label: "Partner werden", href: "#unternehmen" },
    ],
  },
];

export const styleWorlds = [
  {
    title: "PURE",
    href: "#stilwelten",
    image: siematicMedia.pure,
    cta: "PURE entdecken",
  },
  {
    title: "URBAN",
    href: "#stilwelten",
    image: siematicMedia.urban,
    cta: "URBAN entdecken",
  },
  {
    title: "MONDIAL",
    href: "#stilwelten",
    image: siematicMedia.mondial,
    cta: "MONDIAL entdecken",
  },
  {
    title: "CLASSIC",
    href: "#stilwelten",
    image: siematicMedia.classic,
    cta: "CLASSIC entdecken",
  },
];

export const newsItems = [
  {
    title: "SieMatic Stories: Rom",
    excerpt: "Die perfekte Verbindung von Geschichte, Kunst und zeitgenössischem Design.",
    cta: "Auf nach Rom",
    image: siematicMedia.rome,
  },
  {
    title: "SieMatic Stories: Birmingham",
    excerpt: "Für Aktar Islam ist die Küche die Grundlage seines Handwerks.",
    cta: "Auf nach England",
    image: siematicMedia.birmingham,
  },
  {
    title: "Milano Design Week",
    excerpt:
      "Sechs Tage Milano Design Week, voller Begegnungen, kreativer Impulse und eines neuen Luxusverständnisses.",
    cta: "Mehr erfahren",
    image: siematicMedia.milan,
  },
  {
    title: "Porsche Tennis Grand Prix",
    excerpt:
      "Zu Gast beim Porsche Tennis Grand Prix – zwischen Weltklasse-Tennis und einzigartiger Atmosphäre.",
    cta: "Jetzt Porsche Tennis erleben",
    image: siematicMedia.porsche,
  },
  {
    title: "Deutsch-Chinesischer Business Summit",
    excerpt:
      "Deutsch-Chinesischer Business Summit bei SieMatic – internationale Kontakte und neue Impulse.",
    cta: "Mehr erfahren",
    image: siematicMedia.summit,
  },
  {
    title: "Gewinner vom SieMatic ID Contest 2024",
    excerpt:
      "Entdecken Sie unsere exzellenten Gewinner von unserem ID Contest 2024. Lassen Sie sich inspirieren.",
    cta: "Entdecke ID Contest Gewinner",
    image: siematicMedia.contest,
  },
];

export const productTeasers = [
  {
    title: "SieMatic Küchendesigns",
    subtitle: "Design, das Persönlichkeit sichtbar macht",
    cta: "Unsere Küchendesigns entdecken",
    image: siematicMedia.designs,
  },
  {
    title: "Materialien & Farben",
    subtitle: "Die Kunst des Kombinierens",
    cta: "Materialien & Farben Entdecken",
    image: siematicMedia.materials,
  },
  {
    title: "Arbeitsplatten",
    subtitle: "Präzision, die man sehen und fühlen kann",
    cta: "Arbeitsplatten Entdecken",
    image: siematicMedia.countertops,
  },
  {
    title: "Inside",
    subtitle: "Organisation, die Ihnen völlige Freiheit gibt",
    cta: "Innenausstattung Entdecken",
    image: siematicMedia.inside,
  },
];

export const footerCompany = [
  "SieMatic Showrooms",
  "Über SieMatic",
  "Nachhaltigkeit",
  "Karriere",
  "Neuigkeiten",
  "Ratgeber",
  "Presseinformationen",
  "Pressekontakt",
];

export const footerKitchenTopics = [
  "Schwarz-Weiße Küchen",
  "Schwarze Küchen",
  "Graue Küchen",
  "Weiße Küchen",
  "Offene Küchen",
  "Küchen mit Kochinsel",
  "Wohnküchen",
  "Grifflose Küchen",
  "Singleküchen",
  "Traumküchen",
  "Designer Küchen",
  "Küchen nach Maß",
  "Luxus-Küchen",
  "Premium-Küchen",
  "Hochwertige Küchen",
  "Exklusive Küchen",
  "Moderne Küchen",
];

export const footerLegal = [
  "Impressum",
  "Compliance",
  "Datenschutzerklärung",
  "Barrierefreiheit",
  "Cookie Settings",
];

export const footerSocial = [
  { label: "Facebook", href: "https://www.facebook.com/siematic/" },
  {
    label: "Houzz",
    href: "https://www.houzz.de/experten/kuechenplanung/siematic-moebelwerke-gmbh-und-co-kg-pfvwde-pf~1670836758",
  },
  { label: "Instagram", href: "https://www.instagram.com/siematic.official/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/siematic-moebelwerke/",
  },
  { label: "Pinterest", href: "https://www.pinterest.com/siematic/" },
];

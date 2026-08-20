import type { ReactNode } from "react";

type UspItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

function IconCraft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M4 20V8.5L12 4l8 4.5V20" />
      <path d="M4 8.5 12 13l8-4.5" />
      <path d="M12 13v7" />
    </svg>
  );
}

function IconShowroom() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 10h18" />
      <path d="M9 14h6" />
    </svg>
  );
}

function IconCustom() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M12 12 4 7" />
      <path d="M12 12v11" />
      <path d="m12 12 8-5" />
    </svg>
  );
}

function IconGermany() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2.5 2.8 3.8 5.6 3.8 8S14.5 17.2 12 20c-2.5-2.8-3.8-5.6-3.8-8S9.5 6.8 12 4Z" />
      <path d="M4 12h16" />
    </svg>
  );
}

// TODO: replace with real company facts
const usps: UspItem[] = [
  {
    title: "Manufaktur seit 1987",
    description: "Handwerk und Präzision über Generationen.",
    icon: <IconCraft />,
  },
  {
    title: "800 m² Ausstellung",
    description: "Materialien, Stile und Inszenierungen erleben.",
    icon: <IconShowroom />,
  },
  {
    title: "100 % Einzelanfertigung",
    description: "Jede Küche wird einzigartig für Sie gebaut.",
    icon: <IconCustom />,
  },
  {
    title: "Made in Germany",
    description: "Entwicklung und Fertigung in Bayern.",
    icon: <IconGermany />,
  },
];

export default function UspBar() {
  return (
    <section
      id="manufaktur"
      className="border-b border-line bg-paper"
      aria-label="Unsere Stärken"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
        {usps.map((item) => (
          <article key={item.title} className="text-center lg:text-left">
            <div className="mb-4 inline-flex text-ink">{item.icon}</div>
            <h2 className="type-h3 text-ink">{item.title}</h2>
            <p className="type-body mt-2 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

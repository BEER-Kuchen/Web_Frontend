import { Compass, Hammer, MessageCircle, PackageCheck, type LucideIcon } from "lucide-react";
import Pill from "@/components/Pill";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Beratung",
    description:
      "Wir hören zu, verstehen Ihren Alltag und definieren den Rahmen für Ihre Küche.",
    Icon: MessageCircle,
  },
  {
    step: "02",
    title: "Planung & Design",
    description:
      "Raum, Material und Funktion werden zu einem präzisen Entwurf zusammengeführt.",
    Icon: Compass,
  },
  {
    step: "03",
    title: "Manufaktur-Fertigung",
    description:
      "In der Werkstatt entsteht jedes Element als Einzelstück – maßgenau und langlebig.",
    Icon: Hammer,
  },
  {
    step: "04",
    title: "Montage & Übergabe",
    description:
      "Vor Ort montiert, justiert und übergeben – bis alles sitzt, wie geplant.",
    Icon: PackageCheck,
  },
];

export default function Process() {
  return (
    <section
      id="ablauf"
      className="border-y border-line bg-stone"
      aria-labelledby="ablauf-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="type-eyebrow mb-3">Der Weg zur Küche</p>
            <h2 id="ablauf-heading" className="type-h2 max-w-xl text-ink">
              Von der ersten Idee bis zur Übergabe
            </h2>
          </div>
          <Pill href="#ablauf" variant="secondary">
            Entdecken
          </Pill>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-5 left-11 hidden h-px w-[calc(100%+2rem)] bg-line lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative mb-5 inline-flex h-10 w-10 items-center justify-center text-ink">
                <item.Icon className="h-6 w-6" strokeWidth={1.35} aria-hidden="true" />
              </div>
              <p className="type-eyebrow mb-2">{item.step}</p>
              <h3 className="type-h3 text-ink">{item.title}</h3>
              <p className="type-body mt-3 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

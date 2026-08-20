import Accordion from "@/components/Accordion";

const questions = [
  {
    question: "Was kostet eine Küche nach Maß?",
    answer:
      "Jede Küche wird einzeln geplant. Der Preis hängt von Größe, Material und Ausstattung ab. Im Beratungsgespräch nennen wir Ihnen einen ehrlichen Rahmen – bevor die Planung vertieft wird.",
  },
  {
    question: "Wie lange dauert Planung und Fertigung?",
    answer:
      "Von der ersten Beratung bis zur Montage rechnen wir in der Regel mit einigen Monaten. Den konkreten Zeitplan stimmen wir nach der Aufmaßnahme mit Ihnen ab.",
  },
  {
    question: "Kann ich die Ausstellung ohne Termin besuchen?",
    answer:
      "Ja. Für ein ruhiges Gespräch empfehlen wir dennoch einen Termin – so ist Ihr Berater vorbereitet und die Zeit gehört Ihnen.",
  },
  {
    question: "Fertigen Sie auch Möbel außerhalb der Küche?",
    answer:
      "Ja, in kleinerem Umfang: Einbauschränke, Ankleiden, Tische und Wohnmöbel – immer dann, wenn sie zur Küche und zum Haus gehören.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-paper" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <p className="type-eyebrow mb-3">Fragen</p>
        <h2 id="faq-heading" className="type-h2 text-ink">
          Bevor wir uns sehen
        </h2>
        <div className="mt-12">
          <Accordion items={questions} />
        </div>
      </div>
    </section>
  );
}

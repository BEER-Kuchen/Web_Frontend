"use client";

import type { FormEvent } from "react";
import Pill from "@/components/Pill";
import TextLink from "@/components/TextLink";

export default function LeadCta() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // TODO: replace with real form submission
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });
  }

  return (
    <section
      id="beratung"
      className="border-t border-line bg-nacht text-white"
      aria-labelledby="beratung-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="type-eyebrow mb-3 text-paper">
            Persönliche Beratung
          </p>
          <h2 id="beratung-heading" className="type-h2 text-paper">
            Vereinbare deine persönliche Beratung
          </h2>
          <p className="type-intro mt-6 max-w-md text-white/70">
            Erzählen Sie uns von Ihrem Raum, Ihrem Alltag und Ihren Wünschen.
            Wir vereinbaren einen Termin in der Ausstellung oder bei Ihnen vor
            Ort.
          </p>

          <address className="type-body mt-12 text-white/70 not-italic">
            <p className="type-eyebrow text-white">BEER GmbH</p>
            <p className="mt-3">Badendorf 6</p>
            <p>85395 Wolfersdorf</p>
            <p className="mt-4">
              <TextLink href="tel:+498168909910" tone="dark">
                T 08168 909910
              </TextLink>
            </p>
            <p className="mt-2">
              <TextLink
                href="mailto:beratung@beer-kuechenmanufaktur.de"
                tone="dark"
              >
                beratung@beer-kuechenmanufaktur.de
              </TextLink>
            </p>
          </address>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 lg:col-span-7"
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" type="text" autoComplete="name" />
            <Field
              label="E-Mail"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>
          <Field
            label="Telefon"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
          <label className="block">
            <span className="type-eyebrow mb-2 block text-white/55">
              Nachricht
            </span>
            <textarea
              name="message"
              rows={5}
              className="type-body w-full resize-y border border-white/20 bg-transparent px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
              placeholder="Raum, Zeitrahmen, erste Ideen…"
            />
          </label>
          <Pill type="submit" variant="ghost-dark">
            Beratung anfragen
          </Pill>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="type-eyebrow mb-2 block text-white/55">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="type-body w-full border border-white/20 bg-transparent px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
      />
    </label>
  );
}

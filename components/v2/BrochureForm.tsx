"use client";

export default function BrochureForm() {
  return (
    <form
      toolname="request_brochure"
      tooldescription="Sendet eine Broschüren- oder Kontaktanfrage. Verwende dieses Formular, wenn der Nutzer Unterlagen oder eine Rückmeldung zur Küchenplanung erhalten möchte."
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="siematic-field sm:col-span-2">
        Anrede
        <select
          name="salutation"
          defaultValue="Herr"
          toolparamdescription="Anrede der anfragenden Person"
        >
          <option>Herr</option>
          <option>Frau</option>
        </select>
      </label>
      <label className="siematic-field">
        Vorname
        <input
          type="text"
          name="firstName"
          toolparamdescription="Vorname der anfragenden Person"
        />
      </label>
      <label className="siematic-field">
        Nachname*
        <input
          type="text"
          name="lastName"
          required
          toolparamdescription="Nachname der anfragenden Person"
        />
      </label>
      <label className="siematic-field sm:col-span-2">
        E-mail*
        <input
          type="email"
          name="email"
          required
          toolparamdescription="E-Mail-Adresse für den Broschürenversand"
        />
      </label>
      <label className="siematic-field">
        Land*
        <select
          name="country"
          defaultValue="Deutschland"
          toolparamdescription="Land der Liefer- oder Wohnadresse"
        >
          <option>Deutschland</option>
          <option>Österreich</option>
          <option>Schweiz</option>
        </select>
      </label>
      <label className="siematic-field">
        Postleitzahl*
        <input
          type="text"
          name="zip"
          required
          toolparamdescription="Postleitzahl der Anschrift"
        />
      </label>
      <label className="siematic-field sm:col-span-2">
        Telefonnummer
        <input
          type="tel"
          name="phone"
          toolparamdescription="Telefonnummer für Rückfragen"
        />
      </label>
      <label className="flex items-start gap-3 text-[13px] leading-5 text-[#3d4245] sm:col-span-2">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1"
          toolparamdescription="Einwilligung in Tipps und Neuigkeiten zur Küchenplanung"
        />
        Ja, ich möchte regelmäßig hilfreiche Tipps, Empfehlungen rund um die
        Küchenplanung, Neuigkeiten und unverbindliche Einladungen erhalten.
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="border border-[#111827] bg-[#111827] px-8 py-3 text-[13px] tracking-[0.06em] text-white transition-colors hover:bg-white hover:text-[#111827]"
        >
          Absenden
        </button>
      </div>
    </form>
  );
}

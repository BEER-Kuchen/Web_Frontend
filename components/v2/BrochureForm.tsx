"use client";

export default function BrochureForm() {
  return (
    <form
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="siematic-field sm:col-span-2">
        Anrede
        <select defaultValue="Herr">
          <option>Herr</option>
          <option>Frau</option>
        </select>
      </label>
      <label className="siematic-field">
        Vorname
        <input type="text" name="firstName" />
      </label>
      <label className="siematic-field">
        Nachname*
        <input type="text" name="lastName" required />
      </label>
      <label className="siematic-field sm:col-span-2">
        E-mail*
        <input type="email" name="email" required />
      </label>
      <label className="siematic-field">
        Land*
        <select defaultValue="Deutschland">
          <option>Deutschland</option>
          <option>Österreich</option>
          <option>Schweiz</option>
        </select>
      </label>
      <label className="siematic-field">
        Postleitzahl*
        <input type="text" name="zip" required />
      </label>
      <label className="siematic-field sm:col-span-2">
        Telefonnummer
        <input type="tel" name="phone" />
      </label>
      <label className="flex items-start gap-3 text-[13px] leading-5 text-[#3d4245] sm:col-span-2">
        <input type="checkbox" className="mt-1" />
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

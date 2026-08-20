"use client";

import Link from "next/link";
import { useState } from "react";
import SiematicLogo from "@/components/v2/SiematicLogo";
import { navLeft } from "@/lib/siematic";

export default function SiematicHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <nav
        className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between px-5 py-2 lg:px-7 lg:py-5"
        onMouseLeave={() => setOpen(null)}
      >
        <div className="relative w-full text-center lg:order-2 lg:w-1/5">
          <Link href="/v2" className="inline-block" aria-label="Startseite">
            <SiematicLogo />
          </Link>
          <button
            type="button"
            className="absolute top-1/2 right-0 -translate-y-1/2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Menü"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="flex h-[18px] w-6 flex-col justify-between">
              <span className="block h-px bg-black" />
              <span className="block h-px bg-black" />
              <span className="block h-px bg-black" />
            </span>
          </button>
        </div>

        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } w-full lg:order-1 lg:block lg:w-2/5`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-7">
            {navLeft.map((item) => (
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  className="relative block py-4 text-[24px] leading-[60px] text-[#111827] lg:py-0 lg:text-[13px] xl:text-[18px]"
                  onMouseEnter={() => setOpen(item.label)}
                  onFocus={() => setOpen(item.label)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${
            mobileOpen ? "flex" : "hidden"
          } w-full flex-col gap-3 pb-4 lg:order-3 lg:flex lg:w-2/5 lg:flex-row lg:items-center lg:justify-end lg:gap-6 lg:pb-0`}
        >
          <Link
            href="#beratung"
            className="text-[15px] text-[#111827] hover:text-[#6b6f78] lg:text-[13px] xl:text-[15px]"
          >
            Planung starten
          </Link>
          <Link
            href="#beratung"
            className="text-[15px] text-[#111827] hover:text-[#6b6f78] lg:text-[13px] xl:text-[15px]"
          >
            Termin vereinbaren
          </Link>
          <span className="text-[13px] tracking-wide text-[#111827]">DE</span>
        </div>
      </nav>

      {open ? (
        <div
          className="absolute inset-x-0 top-full z-20 hidden border-t border-[#e5e7eb] bg-white lg:block"
          onMouseEnter={() => setOpen(open)}
          onMouseLeave={() => setOpen(null)}
        >
          <ul className="mx-auto flex max-w-[1440px] flex-wrap gap-x-10 gap-y-3 px-7 py-8">
            {navLeft
              .find((item) => item.label === open)
              ?.items.map((sub) => (
                <li key={sub.label}>
                  <Link
                    href={sub.href}
                    className="siematic-serif text-[24px] text-[#111827] hover:text-[#6b6f78]"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

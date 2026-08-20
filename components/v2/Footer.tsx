import Link from "next/link";
import SiematicLogo from "@/components/v2/SiematicLogo";
import {
  footerCompany,
  footerKitchenTopics,
  footerLegal,
  footerSocial,
} from "@/lib/siematic";

export default function SiematicFooter() {
  return (
    <footer className="bg-[#f2f2f2] px-4 py-10">
      <div className="mx-auto max-w-5xl md:flex md:gap-16">
        <div className="flex-auto text-left">
          <Link href="/v2" aria-label="Startseite">
            <SiematicLogo className="h-10 w-[125px]" />
          </Link>
          <ul className="mt-8 space-y-2">
            {footerCompany.map((label) => (
              <li key={label}>
                <Link
                  href="#unternehmen"
                  className="text-[14px] text-[#111827] hover:text-[#6b6f78]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {footerSocial.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] text-[#111827] hover:text-[#6b6f78]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex-auto md:mt-16">
          <p className="mb-4 text-[13px] tracking-wide text-[#6b6f78]">
            Küchenwelten
          </p>
          <p className="text-[14px] leading-7 text-[#111827]">
            {footerKitchenTopics.map((label, index) => (
              <span key={label}>
                <Link href="#stilwelten" className="hover:text-[#6b6f78]">
                  {label}
                </Link>
                {index < footerKitchenTopics.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap gap-x-6 gap-y-2 border-t border-[#d1d5db] pt-6 text-[12px] text-[#6b6f78]">
        {footerLegal.map((label) => (
          <Link key={label} href="#" className="hover:text-[#111827]">
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

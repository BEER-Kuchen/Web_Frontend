import Link from "next/link";
import type { ReactNode } from "react";

export default function TextLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClass = tone === "dark" ? "text-link text-link-dark" : "text-link";

  return (
    <Link href={href} className={`${toneClass} ${className}`.trim()}>
      {children}
    </Link>
  );
}

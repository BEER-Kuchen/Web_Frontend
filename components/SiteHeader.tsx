import type { ReactNode } from "react";

export default function SiteHeader({ children }: { children: ReactNode }) {
  return <div className="sticky top-0 z-50 bg-transparent">{children}</div>;
}

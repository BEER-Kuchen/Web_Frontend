import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center justify-center", className)}
    >
      <Image
        src="/logo.png"
        alt="BEER Küchenmanufaktur"
        width={300}
        height={320}
        priority
        className="h-11 w-auto object-contain object-center lg:h-[88px]"
      />
    </Link>
  );
}

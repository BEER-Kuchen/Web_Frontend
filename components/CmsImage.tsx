import Image, { type ImageProps } from "next/image";

export default function CmsImage({ src, alt, ...props }: ImageProps) {
  const proxied = typeof src === "string" && src.startsWith("/cms-uploads/");
  const remote = typeof src === "string" && /^https?:\/\//.test(src);

  return (
    <Image
      src={src}
      alt={alt}
      unoptimized={remote || proxied}
      {...props}
    />
  );
}

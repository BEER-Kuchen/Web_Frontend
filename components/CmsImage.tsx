import Image, { type ImageProps } from "next/image";

export default function CmsImage({ src, alt, ...props }: ImageProps) {
  const remote = typeof src === "string" && /^https?:\/\//.test(src);

  return (
    <Image
      src={src}
      alt={alt}
      unoptimized={remote}
      {...props}
    />
  );
}

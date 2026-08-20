export default function SiematicLogo({
  className = "h-10 w-[145px]",
}: {
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/v2/siematic-logo.svg"
      alt="SieMatic"
      className={className}
    />
  );
}

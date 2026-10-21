import Image from "next/image";

// Decorative editorial image. Pass a real `alt` only when the picture carries information.
export function EditorialImage({
  src,
  width,
  height,
  alt = "",
  className = "",
  sizes = "(min-width: 960px) 50vw, 100vw",
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`editorial ${className}`.trim()}>
      <Image src={src} width={width} height={height} alt={alt} sizes={sizes} />
    </figure>
  );
}

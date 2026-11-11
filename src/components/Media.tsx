import Image from "next/image";
import type { CSSProperties } from "react";
import type { Img } from "@/data/images";

type Props = {
  image: Img;
  alt: string;
  /** Responsive `sizes` hint — every image declares how wide it renders. */
  sizes: string;
  className?: string;
  reveal?: boolean;
  parallax?: boolean;
  priority?: boolean;
  position?: string;
  delay?: number;
  style?: CSSProperties;
};

/** Cropped image frame. Aspect ratio comes from CSS; never stretches the photo. */
export default function Media({ image, alt, sizes, className = "", reveal, parallax, priority, position, delay, style }: Props) {
  const picture = (
    <Image src={image.src} alt={alt} fill sizes={sizes} priority={priority} style={position ? { objectPosition: position } : undefined} />
  );
  return (
    <div
      className={`media ${className}`}
      data-reveal={reveal ? "clip" : undefined}
      data-parallax={parallax ? "" : undefined}
      style={{ ...(delay ? ({ "--d": delay } as CSSProperties) : {}), ...style }}
    >
      {parallax ? <div className="px-inner">{picture}</div> : picture}
    </div>
  );
}

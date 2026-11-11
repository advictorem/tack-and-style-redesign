import type { ReactNode } from "react";
import type { Img } from "@/data/images";
import Media from "./Media";
import Split from "./Split";

type Props = { label: string; title: string; lead?: ReactNode; image?: Img; imageAlt?: string; position?: string };

/** Shared editorial header for the secondary pages. */
export default function PageHero({ label, title, lead, image, imageAlt = "", position }: Props) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="label" data-reveal="fade"><span>—</span> {label}</p>
          <Split as="h1" text={title} />
          {lead ? <p className="lead" data-reveal>{lead}</p> : null}
        </div>
      </section>
      {image ? (
        <div className="container-wide">
          <Media className="page-banner" image={image} alt={imageAlt} sizes="100vw" position={position} priority reveal parallax />
        </div>
      ) : null}
    </>
  );
}

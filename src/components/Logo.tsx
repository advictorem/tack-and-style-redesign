import Image from "next/image";
import Link from "next/link";
import { img } from "@/data/images";
import { site } from "@/data/site";

const dark = img("brand/logo-espresso");
const light = img("brand/logo-paper");

/** Original Tack & Style logo artwork; both colourways are stacked and cross-faded by tone. */
export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="brand" href="/" aria-label={`${site.name} — home`} onClick={onClick}>
      <Image className="logo-dark" src={dark.src} alt="" width={dark.w} height={dark.h} sizes="130px" priority />
      <Image className="logo-light" src={light.src} alt="" width={light.w} height={light.h} sizes="130px" priority />
    </Link>
  );
}

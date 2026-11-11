import { img } from "./images";

/**
 * Posts synced to the "Latest From Instagram" block on tackandstyledesign.com.
 * Instagram itself requires a signed-in session / Graph API token, so the live
 * feed cannot be read at build time yet — see README "Next phase".
 */
export const instagramPosts = [
  { href: "https://www.instagram.com/p/DDKMYYvRHHl/", image: img("home/1749230924661-image-asset"), alt: "Bedroom makeover with patterned wallpaper and leopard rug" },
  { href: "https://www.instagram.com/p/DCaLkPVy-08/", image: img("home/1749230925904-image-asset"), alt: "Kitchen before and after with green cabinetry" },
  { href: "https://www.instagram.com/p/DCW29gURzGI/", image: img("home/1749230926931-image-asset"), alt: "Office rendering with leather armchairs" },
  { href: "https://www.instagram.com/p/C7SjCgJR13r/", image: img("home/1749230929453-image-asset"), alt: "Custom wall panelling behind a leather sofa" },
  { href: "https://www.instagram.com/p/C67ZwSirDxS/", image: img("home/1749230931322-image-asset"), alt: "Refinished green vintage nightstand" },
];

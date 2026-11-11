import manifest from "./generated/images.json";

export type Img = { src: string; w: number; h: number };

const all = manifest as Record<string, Img>;

/** Look up an optimised local image by "<folder>/<file-stem>". See ASSETS.md for sources. */
export function img(key: string): Img {
  const found = all[key];
  if (!found) throw new Error(`Missing image asset: ${key}`);
  return found;
}

import generated from "./generated/projects.json";
import { img, type Img } from "./images";

type Generated = Record<
  string,
  { slug: string; sourceTitle: string; intro: string; quote: string; gallery: Img[] }
>;
const source = generated as Generated;

export type Project = {
  slug: string;
  title: string;
  /** Italicised part of the title for the editorial display treatment. */
  accent?: string;
  cover: Img;
  coverPosition?: string;
  intro: string;
  quote: string;
  gallery: Img[];
  featured?: boolean;
};

/**
 * Titles are the room categories used on tackandstyledesign.com/projects.
 * Intro copy, quotes and galleries are scraped from each category page
 * (see src/data/generated/projects.json). No locations, dates or sizes are
 * given on the source site, so none are shown here.
 */
const meta: Omit<Project, "intro" | "quote" | "gallery">[] = [
  { slug: "living-room", title: "Living Room", accent: "Room", featured: true, cover: img("project-living-room/interiordesign3-5-2025-107") },
  { slug: "kitchen", title: "Kitchen", featured: true, cover: img("project-kitchen/interiordesign3-5-2025-113"), coverPosition: "45% 50%" },
  { slug: "sitting-room", title: "Formal Sitting Room", accent: "Sitting Room", featured: true, cover: img("project-sitting-room/interiordesign3-5-2025-124") },
  { slug: "master-bedroom", title: "Primary Bedroom", accent: "Bedroom", featured: true, cover: img("project-master-bedroom/interiordesign3-5-2025-078") },
  { slug: "entry", title: "Entryway", featured: true, cover: img("project-entry/interiordesign3-5-2025-025"), coverPosition: "60% 50%" },
  { slug: "dining-room", title: "Dining Room", accent: "Room", cover: img("projects/interiordesign3-5-2025-008") },
  { slug: "master-bathroom", title: "Primary Bathroom", accent: "Bathroom", cover: img("projects/interiordesign3-5-2025-155") },
  { slug: "kids-bedroom", title: "Kids Bedroom", accent: "Bedroom", cover: img("projects/interiordesign3-5-2025-045") },
  { slug: "hallway", title: "Hallway", cover: img("projects/interiordesign3-5-2025-083") },
  { slug: "office", title: "Office", cover: img("projects/interiordesign3-5-2025-133-1") },
  { slug: "garage", title: "Garage", cover: img("home/img-7395") },
];

export const projects: Project[] = meta.map((m) => ({
  ...m,
  intro: source[m.slug].intro,
  quote: source[m.slug].quote,
  gallery: source[m.slug].gallery,
}));

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

import { img, type Img } from "./images";

export type Service = { num: string; name: string; text: string; image: Img; imageAlt: string; anchor: string };

export const services: Service[] = [
  {
    num: "01",
    name: "Design Consultation",
    text: "We discuss your vision, budget, and inspiration to create a design direction that reflects how you want to live.",
    image: img("about/evan-designer-kitchen"),
    imageAlt: "Evan Sheehan reviewing samples at a kitchen island",
    anchor: "design-planning",
  },
  {
    num: "02",
    name: "Design Renderings",
    text: "Bring your ideas to life through detailed digital renderings that help you visualize your space.",
    image: img("services/design-renderings"),
    imageAlt: "Digital rendering of a lounge with leather armchairs",
    anchor: "design-renderings",
  },
  {
    num: "03",
    name: "Renovation & Styling",
    text: "From paint and wallpaper to lighting, trim, and finishing touches, transform everyday spaces with character.",
    image: img("blog-pencil-trim/wainscot-wall-trim"),
    imageAlt: "White wall with layered wainscot and pencil trim",
    anchor: "renovation-styling",
  },
  {
    num: "04",
    name: "Personalized Purchasing",
    text: "Discover one-of-a-kind furniture, vintage pieces, and thoughtful accessories selected specifically for your home.",
    image: img("home/thrifting-store-antique"),
    imageAlt: "Antique store interior filled with vintage furniture",
    anchor: "personalized-purchasing",
  },
];

export const pillars = [
  { num: "01", name: "Individuality", text: "Spaces that celebrate the unique personalities and stories of the people who live in them.", image: img("about/individuality-4x"), alt: "Wallpaper with cheetahs among tropical leaves" },
  { num: "02", name: "Craftsmanship", text: "Thoughtfully selected materials, furnishings, and details that bring lasting beauty and function.", image: img("about/craft-4x"), alt: "Painting of a weathered barn in autumn" },
  { num: "03", name: "Elevated Style", text: "A timeless approach to interiors, blending old-world character with modern comfort.", image: img("about/elevated-4x"), alt: "Staircase with panelled walls and brass sconces" },
];

export const processSteps = [
  { num: "I", name: "Discover", text: "Understand the client’s personality, needs, budget, and vision." },
  { num: "II", name: "Envision", text: "Develop a design direction through planning, inspiration, and renderings." },
  { num: "III", name: "Curate", text: "Source furniture, finishes, vintage treasures, and thoughtful details." },
  { num: "IV", name: "Transform", text: "Bring the design together through styling, renovation details, and finishing touches." },
];

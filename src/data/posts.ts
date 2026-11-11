import generated from "./generated/posts.json";
import { img, type Img } from "./images";

export type Block = { t: "p"; text: string } | { t: "h"; text: string } | { t: "img"; img: Img };
type Generated = Record<string, { title: string; date: string; blocks: Block[] }>;
const source = generated as Generated;

export type Post = {
  /** Slugs match the live site so existing links keep working. */
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  cover: Img;
  coverAlt: string;
  blocks: Block[];
};

const meta: Omit<Post, "blocks" | "title">[] = [
  {
    slug: "thrifting",
    category: "Furniture · Inspiration",
    date: "August 4, 2020",
    excerpt: "There’s nothing wrong with convenience, but your home deserves more than something that comes in a box.",
    cover: img("home/thrifting-store-antique"),
    coverAlt: "Antique store with white brick walls and vintage furniture",
  },
  {
    slug: "adding-pencil-trim",
    category: "Design",
    date: "August 5, 2020",
    excerpt: "If you’re looking for a way to elevate your space without a complete renovation, pencil trim might just be your new best friend.",
    cover: img("home/before-after"),
    coverAlt: "Staircase wall before and after adding pencil trim",
  },
  {
    slug: "how-changing-your-morning-routine-94yny",
    category: "Organization",
    date: "August 6, 2020",
    excerpt: "Let’s talk about the garage—the often-forgotten, usually cluttered, catch-all space that too many of us ignore.",
    cover: img("home/img-7395"),
    coverAlt: "Organized garage with grey cabinetry and painted floor",
  },
  {
    slug: "closed-concept",
    category: "Design",
    date: "July 10, 2025",
    excerpt: "For years, open concept homes have reigned supreme. Here’s why I’m loving rooms with a purpose instead.",
    cover: img("blog-closed-concept/closed-room-concept"),
    coverAlt: "View through black French doors into a sunlit sitting room",
  },
];

export const posts: Post[] = meta.map((m) => ({ ...m, title: source[m.slug].title, blocks: source[m.slug].blocks }));
/** The three articles featured on the homepage, in the order requested in the brief. */
export const featuredPosts = posts.slice(0, 3);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

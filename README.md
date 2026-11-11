# Tack & Style Design — website redesign prototype

A Next.js (App Router, TypeScript) prototype for **Tack & Style Design**. Layout, rhythm and motion follow the
Sundial "Architecture & Interiors" (Forma Atelier) demo; brand, copy, photography, colours and type come from
the existing site at tackandstyledesign.com.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

Node 20+ is required. There are no environment variables.

## What's here

| Route | Notes |
|---|---|
| `/` | Full homepage: hero, (01) studio, (02) selected work, (03) services, founder quote, (04) philosophy, (05) process, (06) journal, Instagram strip, (07) contact CTA, footer |
| `/about`, `/services`, `/contact` | Shared editorial template with the live site's copy and images |
| `/projects`, `/projects/[slug]` | All 11 room categories from the live portfolio, each with its full gallery |
| `/blog`, `/blog/[slug]` | The 4 live articles; slugs match the live site |

```
src/app/            routes, layout, globals.css (design tokens + all styles)
src/components/     SiteHeader, FullscreenMenu, Hero, EditorialIntro, SelectedProjects, ProjectShowcase,
                    ServicesList, Philosophy, Process, JournalPreview, ContactCTA, SiteFooter, …
src/data/           site.ts, projects.ts, services.ts, posts.ts, instagram.ts  ← edit content here
src/data/generated/ scraped galleries, article bodies and the image manifest
public/images/      optimised local copies of every asset (see ASSETS.md)
```

Motion is native CSS plus one small IntersectionObserver/`requestAnimationFrame` component
(`src/components/Motion.tsx`) — no GSAP or animation library. Everything is visible without JavaScript and
under `prefers-reduced-motion`.

## Verified brand system

**Colours** (from the live site's Squarespace palette variables and logo):

| Token | Hex | Source |
|---|---|---|
| `--paper` | `#F8F8F8` | `--white-hsl` |
| `--espresso` | `#3A211A` | `--black-hsl`; also the logo colour |
| `--tan` | `#C3B197` | `--accent-hsl` |
| `--khaki` | `#C0BCA2` | `--lightAccent-hsl` |
| `--olive` | `#464734` | `--darkAccent-hsl` |
| `--linen` | `#EFEBE4` | derived tint of tan, for alternate bands |
| `--navy` | `#0F2558` | sampled from the brand's navy satin photograph (not a CSS token on the live site) |

**Fonts** (all on the live site, all SIL Open Font License, self-hosted via `@fontsource`):
Sorts Mill Goudy (headings), Lora (body), Alegreya Sans (buttons and labels). The live site also loads
Newsreader for meta text; it is not used here because Alegreya Sans covers that role.

**Logo**: original artwork (`TS-Logo-Color@4x.png`), untouched apart from trimming transparent margins.
The light version is the same artwork recoloured to `--paper` for dark backgrounds.

## Design reference

The Sundial theme's source files were not supplied, so nothing was copied from it. Markup, CSS and JS are an
original implementation that follows the reference's structure: overlay header with hide-on-scroll, full-screen
numbered menu, hairline-ruled hero, 12-column offset image pairs, alternating project rows, oversized hover
list with a cursor-following image, numbered principles, four-column roman-numeral process, 6/5 journal split
and split image/text contact band. Sundial's stats, awards and client-testimonial sections were left out
because the brief rules out invented figures; the founder's own quote from the live homepage takes the
full-bleed quote slot.

## Needs a decision or replacement

- **Phone number mismatch on the live site.** The site displays (609)-468-7578 but its "Let's Chat" link dials
  609-**486**-7578. This prototype uses the displayed number everywhere. Confirm which is right.
- **Hero photo resolution.** The best hero candidate is only 1500px wide on the live site. An original
  full-resolution file (2400px+) would sharpen it on large screens.
- **Instagram feed.** Instagram blocks unauthenticated access, so the strip shows the five posts already synced
  to the live homepage, linked to the real posts. A live feed needs an Instagram Graph API token.
- **Contact form.** There is no form backend yet; submit opens the visitor's email app with the message
  addressed to the studio. Swap in a form service or API route when one is chosen.
- **Article dates.** The live blog lists three posts as 8/4/20–8/6/20; those dates are shown as 2020.
- **Garage post category.** The live post has no category; "Organization" is a placeholder label.
- **Testimonials and shop** pages from the live site are not part of this phase.

## Deploy

Import the GitHub repository at vercel.com/new. Framework preset "Next.js", no settings to change.

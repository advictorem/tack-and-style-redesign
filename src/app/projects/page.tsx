import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import Media from "@/components/Media";
import PageHero from "@/components/PageHero";
import { ProjectTitle } from "@/components/ProjectShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Every room tells a story. Browse kitchens, living rooms, bedrooms, entryways and more designed by Tack & Style Design.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero label="Projects" title="Every Room Tells *a Story.*" lead="A collection of thoughtfully designed interiors, where timeless details and personal stories come together." />
      <section className="section section-flush-top">
        <div className="container">
          <div className="grid-3">
            {projects.map((project, i) => (
              <article className="tile" key={project.slug}>
                <Link href={`/projects/${project.slug}`} aria-label={`${project.title} — view project`}>
                  <Media className="media-zoom" image={project.cover} alt={`${project.title} by Tack & Style`} sizes="(min-width: 1000px) 30vw, (min-width: 640px) 46vw, 100vw" position={project.coverPosition} reveal delay={i % 3} />
                </Link>
                <p className="proj-num">{String(i + 1).padStart(2, "0")}</p>
                <h2><Link className="u-line" href={`/projects/${project.slug}`}><ProjectTitle project={project} /></Link></h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA numbered={false} />
    </>
  );
}

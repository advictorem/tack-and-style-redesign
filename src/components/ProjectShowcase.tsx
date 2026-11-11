import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { ArrowRight } from "./Icons";
import Media from "./Media";

export function ProjectTitle({ project }: { project: Project }) {
  if (!project.accent) return <em>{project.title}</em>;
  const lead = project.title.slice(0, project.title.length - project.accent.length);
  return <>{lead}<em>{project.accent}</em></>;
}

/** One large alternating project row: full-image link, number, oversized title, revealed details. */
export default function ProjectShowcase({ project, index, total }: { project: Project; index: number; total: number }) {
  const href = `/projects/${project.slug}`;
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <article className="proj">
      <Link href={href} className="proj-link" aria-label={`${project.title} — view project`} style={{ display: "contents" }}>
        <Media
          className="proj-media media-zoom"
          image={project.cover}
          alt={`${project.title} designed by Tack & Style`}
          sizes="(min-width: 900px) 56vw, 100vw"
          position={project.coverPosition}
          reveal
        />
      </Link>
      <div className="proj-body" data-reveal style={{ "--d": 2 } as CSSProperties}>
        <span className="proj-num">{pad(index + 1)} <span>/ {pad(total)}</span></span>
        <h3 className="proj-title">
          <Link href={href} className="u-line"><ProjectTitle project={project} /></Link>
        </h3>
        <p className="muted">{project.intro}</p>
        <p className="proj-quote">“{project.quote}”</p>
        <Link className="link-arrow" href={href}>View project <ArrowRight /></Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "./Icons";
import ProjectShowcase from "./ProjectShowcase";
import SectionHead from "./SectionHead";

export default function SelectedProjects() {
  return (
    <section className="section section-flush-top" aria-labelledby="work-title">
      <div className="container">
        <SectionHead num="02" label="Selected Work" title="Spaces with *Character.*" id="work-title">
          <p>A collection of thoughtfully designed interiors, where timeless details and personal stories come together.</p>
        </SectionHead>
        <div className="proj-list">
          {featuredProjects.map((project, i) => (
            <ProjectShowcase key={project.slug} project={project} index={i} total={featuredProjects.length} />
          ))}
        </div>
        <div className="center" data-reveal>
          <Link className="btn btn-lg" href="/projects">View all projects <ArrowRight /></Link>
        </div>
      </div>
    </section>
  );
}

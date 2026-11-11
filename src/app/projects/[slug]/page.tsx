import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.intro, openGraph: { images: [project.cover.src] } };
}

export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const title = project.accent ? `${project.title.slice(0, -project.accent.length)}*${project.accent}*` : `*${project.title}*`;

  return (
    <>
      <PageHero label={`Project ${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`} title={title} lead={project.intro} image={project.cover} imageAlt={`${project.title} by Tack & Style`} position={project.coverPosition} />
      <section className="section">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p className="display" data-reveal style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--fs-2xl)", lineHeight: 1.25 }}>
            “{project.quote}”
          </p>
        </div>
      </section>
      <section className="section section-flush-top" aria-label={`${project.title} gallery`}>
        <div className="container">
          <div className="gallery">
            {project.gallery.map((image, i) => (
              <div key={image.src} data-reveal>
                <Image src={image.src} alt={`${project.title} — photograph ${i + 1}`} width={image.w} height={image.h} sizes="(min-width: 700px) 46vw, 100vw" />
              </div>
            ))}
          </div>
          <nav className="pager" aria-label="More projects" style={{ marginBlockStart: "var(--section)" }}>
            <Link href={`/projects/${prev.slug}`}><span className="eyebrow muted">Previous</span><strong className="u-line">{prev.title}</strong></Link>
            <Link href={`/projects/${next.slug}`}><span className="eyebrow muted">Next</span><strong className="u-line">{next.title}</strong></Link>
          </nav>
        </div>
      </section>
      <ContactCTA numbered={false} />
    </>
  );
}

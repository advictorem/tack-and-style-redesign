import { pillars } from "@/data/services";
import Media from "./Media";
import Split from "./Split";

export default function Philosophy() {
  return (
    <section className="section" aria-labelledby="philosophy-title">
      <div className="container">
        <div className="phil-grid">
          <div className="stack stack-lg">
            <p className="label" data-reveal><span>(04)</span> Our Philosophy</p>
            <Split className="display" id="philosophy-title" text="Design with Heart, Style *and Purpose.*" />
            <p className="muted" data-reveal>
              Great design isn’t about price tags, it’s about personality. A home should be lived in, designed for
              your unique needs, and free to evolve with you over time.
            </p>
            <ol className="principles" role="list" data-stagger>
              {pillars.map((p) => (
                <li key={p.num}>
                  <span className="principle-num">{p.num}</span>
                  <div><h3>{p.name}</h3><p>{p.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="phil-tiles">
            {pillars.map((p, i) => (
              <figure className="phil-tile" key={p.num}>
                <Media image={p.image} alt={p.alt} sizes="(min-width: 1000px) 17vw, 31vw" reveal delay={i * 2} />
                <figcaption>{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

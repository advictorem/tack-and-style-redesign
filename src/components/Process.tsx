import { processSteps } from "@/data/services";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section className="section tone-alt" aria-labelledby="process-title">
      <div className="container">
        <SectionHead num="05" label="The Process" title="From Vision *to Reality.*" id="process-title">
          <p>Four considered stages, with Evan alongside you throughout — laying the groundwork with intention, then layering in the style.</p>
        </SectionHead>
        <ol className="steps" role="list" data-stagger>
          {processSteps.map((s) => (
            <li className="step" key={s.num}>
              <span className="step-num" aria-hidden="true">{s.num}</span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

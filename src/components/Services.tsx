import SectionHead from "./SectionHead";
import ServicesList from "./ServicesList";

export default function Services() {
  return (
    <section className="section tone-alt" aria-labelledby="services-title">
      <div className="container">
        <SectionHead num="03" label="What We Do" title="Thoughtful Design. *Personal Touch.*" id="services-title">
          <p>Whether you’re refreshing a single room or transforming an entire space, every detail is handled from concept to completion.</p>
        </SectionHead>
        <ServicesList />
      </div>
    </section>
  );
}

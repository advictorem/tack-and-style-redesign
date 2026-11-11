import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minBlockSize: "70svh" }}>
      <div className="container">
        <p className="label"><span>404</span> Page not found</p>
        <h1>This room is still <em>being styled.</em></h1>
        <p className="lead">The page you’re looking for doesn’t exist or has moved.</p>
        <p style={{ marginBlockStart: "2rem" }}><Link className="btn" href="/">Back to home <ArrowRight /></Link></p>
      </div>
    </section>
  );
}

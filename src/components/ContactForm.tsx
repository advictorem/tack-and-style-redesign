"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { ArrowRight } from "./Icons";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Validated enquiry form. There is no form backend in this prototype, so submit
 * performs a real email action: it opens the visitor's mail app with the
 * message addressed to the studio. No fake success state.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("name")) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Please enter a valid email address.";
    if (get("message").length < 10) next.message = "A sentence or two about your project helps me prepare.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      setStatus("");
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const body = [`Name: ${get("name")}`, `Email: ${get("email")}`, get("phone") ? `Phone: ${get("phone")}` : null, get("space") ? `Space: ${get("space")}` : null, "", get("message")]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Design consultation enquiry")}&body=${encodeURIComponent(body)}`;
    setStatus(`Your email app should now be open with this message addressed to ${site.email}. Press send there to deliver it.`);
  };

  const field = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required {...field("name")} />
        {errors.name ? <p className="field-error" id="name-error">{errors.name}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required {...field("email")} />
        {errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="space">Which space are you thinking about? (optional)</label>
        <input id="space" name="space" placeholder="Kitchen, living room, whole home…" />
      </div>
      <div className="field">
        <label htmlFor="message">Tell me about your project</label>
        <textarea id="message" name="message" required {...field("message")} />
        {errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : null}
      </div>
      <button className="btn btn-solid btn-lg" type="submit">Compose email <ArrowRight /></button>
      <p className="form-note" role="status" aria-live="polite">
        {status || `This opens your email app with your message addressed to ${site.email}.`}
      </p>
    </form>
  );
}

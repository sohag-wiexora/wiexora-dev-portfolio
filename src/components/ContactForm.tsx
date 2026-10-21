"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { budgetRanges, contactSchema, projectTypes, timelines, type FieldErrors } from "@/lib/validation";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current,
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setState({ kind: "error", message: "Please correct the highlighted fields." });
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string; fields?: FieldErrors }
        | null;
      if (res.ok && json?.ok) {
        form.reset();
        setState({ kind: "success" });
        return;
      }
      if (json?.fields) setErrors(json.fields);
      setState({ kind: "error", message: json?.error ?? "Something went wrong. Please try again." });
    } catch {
      setState({ kind: "error", message: "Network error. Your message was not sent. Please try again." });
    }
  }

  const busy = state.kind === "submitting";
  const fieldProps = (name: keyof FieldErrors) => ({
    name,
    id: `f-${name}`,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `e-${name}` : undefined,
  });
  const Err = ({ name }: { name: keyof FieldErrors }) =>
    errors[name] ? <p className="err" id={`e-${name}`}>{errors[name]}</p> : null;

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Start a project">
      <div className="row">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
          <Err name="name" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input type="email" autoComplete="email" required {...fieldProps("email")} />
          <Err name="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-projectType">Project type</label>
        <select defaultValue="" required {...fieldProps("projectType")}>
          <option value="" disabled>Select…</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <Err name="projectType" />
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="f-budget">Budget range</label>
          <select defaultValue="" required {...fieldProps("budget")}>
            <option value="" disabled>Select…</option>
            {budgetRanges.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <Err name="budget" />
        </div>
        <div className="field">
          <label htmlFor="f-timeline">Timeline</label>
          <select defaultValue="" required {...fieldProps("timeline")}>
            <option value="" disabled>Select…</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <Err name="timeline" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-message">What are you building?</label>
        <textarea required {...fieldProps("message")} />
        <Err name="message" />
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Leave this field empty</label>
        <input type="text" name="website" id="f-website" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-primary" disabled={busy}>
        {busy ? "Sending…" : "Send message"}
      </button>

      <div role="status" aria-live="polite">
        {state.kind === "success" && (
          <p className="status ok">Message received. Thank you; I will reply by email.</p>
        )}
        {state.kind === "error" && <p className="status bad">{state.message}</p>}
      </div>
    </form>
  );
}

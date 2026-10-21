import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

// Best-effort, per-instance rate limit. On serverless hosts each instance has its own
// memory, so use a shared store (or the provider's WAF) if you need strict limits.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function fail(status: number, error: string, fields?: Record<string, string>) {
  return NextResponse.json({ ok: false, error, fields }, { status });
}

export async function POST(req: Request) {
  // Same-origin check against obvious cross-site abuse.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return fail(403, "Request origin not allowed.");
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return fail(429, "Too many messages. Please try again later.");
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return fail(400, "Invalid request.");
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fields[key]) fields[key] = issue.message;
    }
    if (fields.website) return fail(400, "Invalid request.");
    return fail(422, "Please correct the highlighted fields.", fields);
  }

  const data = parsed.data;
  if (data.startedAt && Date.now() - data.startedAt < 2000) {
    return fail(400, "Invalid request.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "WIEXORA <onboarding@resend.dev>";
  if (!apiKey || !to) {
    // Honest failure: nothing was delivered, so never report success.
    return fail(503, "Message delivery is not configured yet. Please email directly instead.");
  }

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    "",
    data.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New WIEXORA inquiry: ${data.projectType}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Contact delivery failed with status", res.status);
      return fail(502, "The message could not be delivered. Please try again later.");
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact delivery error", err);
    return fail(502, "The message could not be delivered. Please try again later.");
  }
}

import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = { name?: string; email?: string; message?: string; company?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Very small in-memory rate limit — enough to stop casual form spam. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages in a short time. Try again in a minute." },
      { status: 429 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: real people never fill a field they cannot see.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Tell me your name.";
  if (!EMAIL_RE.test(email)) errors.email = "That email address doesn't look right.";
  if (message.length < 10) errors.message = "A little more detail helps.";
  if (message.length > 4000) errors.message = "That's longer than this form accepts.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // No mail provider is wired up yet, so the message is logged server-side and
  // the client falls back to opening the user's mail app. Swap this for Resend
  // /SendGrid/SMTP and the form starts delivering without any UI change.
  console.log("[contact]", { name, email, length: message.length, at: new Date().toISOString() });

  return NextResponse.json({ ok: true, received: { name, email } });
}

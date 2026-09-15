import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// Server-side-only reverse proxy to the FastAPI backend.
//
// Why this exists: the crisis tracker is gated by a site password (see
// middleware.ts / auth.ts), but that only protects Next.js *pages*. Without
// this proxy, `frontend/lib/apiClient.ts` would call the backend directly
// from the browser at NEXT_PUBLIC_API_BASE_URL — a URL that, by
// definition, is inlined into the public bundle and reachable by anyone,
// session or no session. The backend's own guard (`require_admin_token`)
// is a no-op unless ADMIN_API_TOKEN is set, and even if it were set, an
// admin token can't safely live in NEXT_PUBLIC_* env (same exposure
// problem). So today the data API is open to anyone who can reach it,
// password screen or not.
//
// This route closes that gap: it requires a valid NextAuth session before
// forwarding anything, and it attaches ADMIN_API_TOKEN to the upstream
// request from the server side, where it's never sent to the browser.
// `apiClient` and the character bulk-upload call now go through
// `/api/backend/...` instead of talking to the backend directly.
const INTERNAL_API_BASE_URL = process.env.INTERNAL_API_BASE_URL ?? "http://backend:8000";
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN;

async function proxy(req: NextRequest, path: string[]): Promise<NextResponse> {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
  }

  const targetUrl = `${INTERNAL_API_BASE_URL}/${path.join("/")}${req.nextUrl.search}`;

  const headers = new Headers();
  const contentType = req.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);
  if (ADMIN_API_TOKEN) headers.set("x-admin-token", ADMIN_API_TOKEN);

  const hasBody = !["GET", "HEAD"].includes(req.method);

  let backendRes: Response;
  try {
    backendRes = await fetch(targetUrl, {
      method: req.method,
      headers,
      body: hasBody ? req.body : undefined,
      // Required by Node's fetch when streaming a request body.
      duplex: hasBody ? "half" : undefined,
    } as RequestInit);
  } catch {
    return NextResponse.json({ detail: "Backend is unreachable." }, { status: 502 });
  }

  const resHeaders = new Headers();
  const resContentType = backendRes.headers.get("content-type");
  if (resContentType) resHeaders.set("content-type", resContentType);

  return new NextResponse(backendRes.body, {
    status: backendRes.status,
    headers: resHeaders,
  });
}

type RouteParams = { params: Promise<{ path: string[] }> };

async function handler(req: NextRequest, { params }: RouteParams) {
  const { path } = await params;
  return proxy(req, path);
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;

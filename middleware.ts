import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  console.log('Middleware triggered for:', url.pathname);

  if (url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (!url.pathname.startsWith("/welcome")) {
    console.log('Redirecting to /welcome');
    return NextResponse.redirect(new URL("/welcome", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
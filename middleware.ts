import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Allow API routes to work normally
  if (url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Redirect all other routes to /welcome
    if (!url.pathname.startsWith("/welcome")) {
    return NextResponse.redirect(new URL("/welcome", req.url));
  }
  
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};

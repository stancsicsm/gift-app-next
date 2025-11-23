import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/signup"];

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Proxy /api requests to the backend
  if (path.startsWith("/api/")) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      return new NextResponse(
        JSON.stringify({ error: "API URL not configured" }),
        { status: 500, headers: { "content-type": "application/json" } },
      );
    }

    const targetUrl = new URL(path.replace(/^\/api/, ""), apiUrl);

    request.nextUrl.searchParams.forEach((value, key) => {
      targetUrl.searchParams.append(key, value);
    });

    return NextResponse.rewrite(targetUrl);
  }

  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = await cookies();
  const cookie = cookieStore.get("jwt");

  if (!cookie?.value && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (cookie?.value && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/api/:path*"],
};

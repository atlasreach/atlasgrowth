import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Development environments
  if (
    hostname === 'localhost:3000' ||
    hostname.includes('127.0.0.1') ||
    hostname.includes('vercel.app')
  ) {
    return NextResponse.next()
  }

  // Main domain - no rewrite needed
  if (hostname === 'atlasgrowth.ai' || hostname === 'www.atlasgrowth.ai') {
    return NextResponse.next()
  }

  // Check if it's a wildcard subdomain (e.g., riley-heating-air.atlasgrowth.ai)
  if (hostname.endsWith('.atlasgrowth.ai')) {
    const slug = hostname.replace('.atlasgrowth.ai', '')

    // Rewrite to /hvac/[slug] - we'll determine niche from database
    // For now, default to hvac (could be made dynamic by checking DB)
    url.pathname = `/hvac/${slug}${url.pathname}`

    return NextResponse.rewrite(url)
  }

  // If it's a custom domain, we need to look it up in the database
  // For now, just pass through
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

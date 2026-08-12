import { NextResponse, type NextRequest } from 'next/server';
import { securityHeaders } from '@/lib/security/headers';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  for (const [header, value] of Object.entries(securityHeaders)) response.headers.set(header, value);
  return response;
}

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' };

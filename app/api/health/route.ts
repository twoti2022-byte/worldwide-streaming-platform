import { NextResponse } from 'next/server';
import { apiSuccess } from '@/lib/api/errors';

export function GET() {
  return NextResponse.json(apiSuccess({ status: 'ok', module: 'foundation' }));
}

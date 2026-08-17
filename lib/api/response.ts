import { NextResponse } from 'next/server';
export type ApiErrorCode = 'UNAUTHORIZED'|'FORBIDDEN'|'VALIDATION_ERROR'|'INTERNAL_ERROR'|'NOT_IMPLEMENTED';
export function ok<T>(data: T){ return NextResponse.json({ success: true, data }); }
export function fail(code: ApiErrorCode, message: string, status=400, requestId: string = crypto.randomUUID()){ return NextResponse.json({ success: false, error: { code, message, requestId } }, { status }); }

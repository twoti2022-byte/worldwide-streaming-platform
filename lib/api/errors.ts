export interface ApiErrorBody { success: false; error: { code: string; message: string; requestId: string } }
export interface ApiSuccessBody<T> { success: true; data: T; requestId: string }
export type ApiResponse<T> = ApiSuccessBody<T> | ApiErrorBody;

export function createRequestId(): string {
  return crypto.randomUUID();
}

export function apiSuccess<T>(data: T, requestId = createRequestId()): ApiSuccessBody<T> {
  return { success: true, data, requestId };
}

export function apiError(code: string, message: string, requestId = createRequestId()): ApiErrorBody {
  return { success: false, error: { code, message, requestId } };
}

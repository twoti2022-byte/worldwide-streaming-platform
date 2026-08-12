import { describe, expect, it } from 'vitest';
import { apiError, apiSuccess } from '@/lib/api/errors';

describe('api response boundary', () => {
  it('returns safe success and error envelopes', () => {
    expect(apiSuccess({ ok: true }, 'request-id')).toEqual({ success: true, data: { ok: true }, requestId: 'request-id' });
    expect(apiError('UNAUTHORIZED', 'Authentication required.', 'request-id')).toEqual({ success: false, error: { code: 'UNAUTHORIZED', message: 'Authentication required.', requestId: 'request-id' } });
  });
});

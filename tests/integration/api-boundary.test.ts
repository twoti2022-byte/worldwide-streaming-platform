import { describe, expect, it } from 'vitest';
import { fail } from '@/lib/api/response';
describe('api boundary',()=>{ it('returns safe errors', async()=>{ const response = fail('UNAUTHORIZED','Sign in is required.',401,'req_test'); expect(response.status).toBe(401); expect(await response.json()).toEqual({ success:false, error:{ code:'UNAUTHORIZED', message:'Sign in is required.', requestId:'req_test' } }); }); });

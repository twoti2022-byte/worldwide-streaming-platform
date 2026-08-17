import { describe, expect, it } from 'vitest';
import { isServerSecret, securityHeaderNames } from '@/lib/security/headers';
describe('security utilities',()=>{ it('identifies server secrets and headers',()=>{ expect(isServerSecret('OPENAI_API_KEY')).toBe(true); expect(securityHeaderNames).toContain('X-Frame-Options'); }); });

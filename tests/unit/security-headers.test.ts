import { describe, expect, it } from 'vitest';
import { securityHeaders } from '@/lib/security/headers';

describe('securityHeaders', () => {
  it('sets clickjacking and content sniffing protections', () => {
    expect(securityHeaders['X-Frame-Options']).toBe('DENY');
    expect(securityHeaders['X-Content-Type-Options']).toBe('nosniff');
    expect(securityHeaders['Content-Security-Policy']).toContain("frame-ancestors 'none'");
  });
});

import { describe, expect, it } from 'vitest';
import { getPublicEnv } from '@/lib/config/env';

describe('supabase configuration boundary', () => {
  it('requires a Supabase URL and anon key before clients can be created', () => {
    expect(() => getPublicEnv({ NEXT_PUBLIC_APP_URL: 'https://example.com' })).toThrow();
  });
});

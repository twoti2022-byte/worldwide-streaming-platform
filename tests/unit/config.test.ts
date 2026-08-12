import { describe, expect, it } from 'vitest';
import { getPublicEnv } from '@/lib/config/env';

describe('environment config', () => {
  it('validates required public configuration', () => {
    expect(getPublicEnv({ NEXT_PUBLIC_APP_URL: 'https://example.com', NEXT_PUBLIC_SUPABASE_URL: 'https://project.supabase.co', NEXT_PUBLIC_SUPABASE_ANON_KEY: 'anon' }).NEXT_PUBLIC_APP_URL).toBe('https://example.com');
  });
});

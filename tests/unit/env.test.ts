import { describe, expect, it } from 'vitest';
import { validateServerEnv } from '@/lib/config/env';
describe('environment validation',()=>{ it('accepts safe placeholders',()=>{ expect(validateServerEnv({ NEXT_PUBLIC_APP_URL: '' }).success).toBe(true); }); });

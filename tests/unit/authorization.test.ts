import { describe, expect, it } from 'vitest';
import { hasPermission, hasRole } from '@/lib/auth/authorization';
const principal = { userId: 'u', roles: ['viewer'] as const, permissions: ['profile:read' as const] };
describe('authorization',()=>{ it('checks direct roles and permissions',()=>{ expect(hasRole(principal,'viewer')).toBe(true); expect(hasPermission(principal,'profile:read')).toBe(true); expect(hasPermission(principal,'admin:write')).toBe(false); }); it('allows super administrators',()=>{ expect(hasPermission({ userId:'u', roles:['super_administrator'], permissions: [] }, 'admin:write')).toBe(true); }); });

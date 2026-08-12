import { describe, expect, it } from 'vitest';
import { hasPermission, permissionsForRoles } from '@/lib/auth/authorization';

describe('authorization', () => {
  it('does not grant permissions to anonymous users', () => {
    expect(hasPermission(null, 'admin:read')).toBe(false);
  });

  it('keeps viewer permissions separate from administrator permissions', () => {
    expect(permissionsForRoles(['viewer'])).toContain('profile:read');
    expect(permissionsForRoles(['viewer'])).not.toContain('admin:write');
  });
});

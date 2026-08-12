import type { AuthenticatedUser, Permission, PlatformRole } from '@/types/auth';

const rolePermissions: Record<PlatformRole, readonly Permission[]> = {
  viewer: ['profile:read', 'profile:update'],
  creator: ['profile:read', 'profile:update'],
  content_manager: ['profile:read', 'content:review'],
  rights_manager: ['profile:read', 'rights:manage'],
  moderator: ['profile:read', 'moderation:manage'],
  finance: ['profile:read', 'finance:read'],
  administrator: ['profile:read', 'admin:read'],
  super_administrator: ['profile:read', 'admin:read', 'admin:write'],
};

export function permissionsForRoles(roles: readonly PlatformRole[]): Permission[] {
  return [...new Set(roles.flatMap((role) => rolePermissions[role]))];
}

export function hasPermission(user: AuthenticatedUser | null, permission: Permission): boolean {
  if (!user) return false;
  return user.permissions.includes(permission) || permissionsForRoles(user.roles).includes(permission);
}

export const platformRoles = ['viewer', 'creator', 'content_manager', 'rights_manager', 'moderator', 'finance', 'administrator', 'super_administrator'] as const;
export type PlatformRole = typeof platformRoles[number];
export type Permission = 'profile:read' | 'profile:update' | 'admin:read' | 'admin:write' | 'content:review' | 'rights:manage' | 'finance:read' | 'moderation:manage';
export interface AuthenticatedUser { id: string; email?: string; roles: PlatformRole[]; permissions: Permission[]; }

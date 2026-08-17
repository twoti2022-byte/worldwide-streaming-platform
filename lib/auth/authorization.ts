import type { Permission, Principal, Role } from '@/types/auth';
const elevated: Role[] = ['administrator','super_administrator'];
export function hasRole(principal: Principal, role: Role){ return principal.roles.includes(role) || principal.roles.includes('super_administrator'); }
export function hasPermission(principal: Principal, permission: Permission){ return principal.permissions.includes(permission) || principal.roles.some((role)=>elevated.includes(role)); }
export function requirePermission(principal: Principal | null, permission: Permission){ if(!principal) return false; return hasPermission(principal, permission); }

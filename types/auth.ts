export const roles = ['viewer','creator','content_manager','rights_manager','moderator','finance','administrator','super_administrator'] as const;
export type Role = typeof roles[number];
export type Permission = `${string}:${string}`;
export type Principal = { userId: string; roles: readonly Role[]; permissions: readonly Permission[] };

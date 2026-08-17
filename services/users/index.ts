import 'server-only';
export type UserProfile = { userId: string; displayName: string | null; locale: string | null };
export async function getOwnProfile(): Promise<UserProfile | null>{ throw new Error('Profile retrieval requires a configured Supabase project.'); }

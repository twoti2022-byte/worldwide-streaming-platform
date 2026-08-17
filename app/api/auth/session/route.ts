import { fail, ok } from '@/lib/api/response';
import { createSupabaseServerClient } from '@/lib/db/supabase-server';
export async function GET(){ const supabase = createSupabaseServerClient(); const { data, error } = await supabase.auth.getUser(); if(error || !data.user) return fail('UNAUTHORIZED','Sign in is required.',401); return ok({ user: { id: data.user.id, email: data.user.email } }); }

import 'server-only';
import { createSupabaseServerClient } from '@/lib/db/supabase-server';
export async function getCurrentUser(){ const supabase = createSupabaseServerClient(); const { data, error } = await supabase.auth.getUser(); if(error) return null; return data.user; }

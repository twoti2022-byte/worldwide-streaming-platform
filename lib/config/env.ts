import { z } from 'zod';
export const clientEnvSchema = z.object({ NEXT_PUBLIC_APP_URL: z.string().url().optional().or(z.literal('')), NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional().or(z.literal('')), NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional() });
export const serverEnvSchema = clientEnvSchema.extend({ SUPABASE_SERVICE_ROLE_KEY: z.string().optional(), OPENAI_API_KEY: z.string().optional(), CLOUDFLARE_ACCOUNT_ID: z.string().optional(), CLOUDFLARE_STREAM_TOKEN: z.string().optional() });
export function validateServerEnv(env: NodeJS.ProcessEnv = process.env){ return serverEnvSchema.safeParse(env); }

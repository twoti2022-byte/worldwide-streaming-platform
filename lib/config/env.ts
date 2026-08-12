import { z } from 'zod';

const publicSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

const serverSchema = publicSchema.extend({
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  OPENAI_API_KEY: z.string().min(1).optional(),
  CLOUDFLARE_ACCOUNT_ID: z.string().min(1).optional(),
  CLOUDFLARE_STREAM_TOKEN: z.string().min(1).optional(),
});

export function getPublicEnv(source: NodeJS.ProcessEnv = process.env) {
  return publicSchema.parse(source);
}

export function getServerEnv(source: NodeJS.ProcessEnv = process.env) {
  return serverSchema.parse(source);
}

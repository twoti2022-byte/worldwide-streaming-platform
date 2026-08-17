export const securityHeaderNames = ['X-DNS-Prefetch-Control','X-Frame-Options','X-Content-Type-Options','Referrer-Policy','Permissions-Policy'] as const;
export function isServerSecret(name: string){ return ['SUPABASE_SERVICE_ROLE_KEY','OPENAI_API_KEY','CLOUDFLARE_STREAM_TOKEN'].includes(name); }

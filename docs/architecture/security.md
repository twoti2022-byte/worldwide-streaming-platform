# Security model

Browser code may read only `NEXT_PUBLIC_*` variables. Service-role Supabase keys, OpenAI API keys, and Cloudflare Stream tokens are server-side secrets. Authorization is centralized in `lib/auth/authorization.ts` and must be enforced server-side or database-side. Next.js security headers are configured globally.

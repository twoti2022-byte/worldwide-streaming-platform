# Architecture Overview

The approved architecture is Next.js + React + TypeScript with Supabase PostgreSQL/Auth, Vercel deployment, Cloudflare Stream as the future video provider, and OpenAI API behind secure server-side service boundaries.

ChatGPT must never receive unrestricted database access. Future requests flow through permission-aware platform APIs before authorized data is provided to the model.

Video files must never be stored in PostgreSQL. Cloudflare Stream is the future media processing and playback boundary.

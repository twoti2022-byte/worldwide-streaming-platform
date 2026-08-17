type Level='info'|'warn'|'error';
const redacted = ['password','token','apiKey','authorization','SUPABASE_SERVICE_ROLE_KEY','OPENAI_API_KEY'];
function sanitize(meta: Record<string, unknown> = {}){ return Object.fromEntries(Object.entries(meta).map(([k,v])=>[k, redacted.some(r=>k.toLowerCase().includes(r.toLowerCase())) ? '[REDACTED]' : v])); }
export function log(level: Level, message: string, meta?: Record<string, unknown>){ console[level](JSON.stringify({ level, message, ...sanitize(meta) })); }

type LogLevel = 'info' | 'warn' | 'error' | 'security';
const sensitiveKeys = ['password', 'token', 'secret', 'apiKey', 'authorization'];

function redact(value: unknown): unknown {
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, sensitiveKeys.some((sensitive) => key.toLowerCase().includes(sensitive.toLowerCase())) ? '[REDACTED]' : entry]));
}

export function log(level: LogLevel, message: string, metadata: Record<string, unknown> = {}) {
  console[level === 'security' ? 'warn' : level](JSON.stringify({ level, message, metadata: redact(metadata), timestamp: new Date().toISOString() }));
}

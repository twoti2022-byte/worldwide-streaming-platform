import { z } from 'zod';

export const healthQuerySchema = z.object({}).strict();

export function parseWithSchema<T>(schema: z.ZodSchema<T>, value: unknown): T {
  return schema.parse(value);
}

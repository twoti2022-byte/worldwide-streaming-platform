import { z } from 'zod';
export const emptyBodySchema = z.object({}).strict();
export function validate<T>(schema: z.ZodSchema<T>, input: unknown){ return schema.safeParse(input); }

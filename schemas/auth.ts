import { z } from 'zod';
import { platformRoles } from '@/types/auth';

export const roleSchema = z.enum(platformRoles);
export const uuidSchema = z.string().uuid();

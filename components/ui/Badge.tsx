import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

export function Badge({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return <span className={cn('ui-badge', className)} {...props}>{children}</span>;
}

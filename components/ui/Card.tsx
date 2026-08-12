import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

export function Card({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn('feature-card', className)} {...props}>{children}</div>;
}

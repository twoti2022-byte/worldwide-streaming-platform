import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export function Button({ children, className, variant = 'primary', ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }>) {
  return <button className={cn('ui-button', `ui-button-${variant}`, className)} {...props}>{children}</button>;
}

import type { PropsWithChildren } from 'react';

export function Dropdown({ label, children }: PropsWithChildren<{ label: string }>) {
  return <details className="ui-dropdown"><summary>{label}</summary>{children}</details>;
}

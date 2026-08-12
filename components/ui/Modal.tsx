import type { PropsWithChildren } from 'react';

export function Modal({ title, children }: PropsWithChildren<{ title: string }>) {
  return <section aria-modal="true" role="dialog" aria-label={title} className="ui-modal">{children}</section>;
}

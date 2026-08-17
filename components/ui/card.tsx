import type { ReactNode } from 'react';
export function Card({ title, children }: { title: string; children: ReactNode }) { return <article className="card"><h2>{title}</h2><p>{children}</p></article>; }

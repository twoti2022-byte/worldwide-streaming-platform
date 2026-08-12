import { Header } from '@/components/layout/Header';
import { ChatGptCompanionCard } from '@/components/shared/ChatGptCompanionCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const foundations = [
  ['Supabase-ready identity', 'Authentication and authorization are separated for future viewer and operator workflows.'],
  ['Secure service boundaries', 'ChatGPT and Cloudflare Stream integrations are represented as server-side interfaces only.'],
  ['Global platform baseline', 'The app shell is responsive, accessible, Vercel-ready, and scoped to Module 01.'],
] as const;

export default function HomePage() {
  return <><Header /><main><section className="page-shell hero"><div className="hero-grid"><div><p className="eyebrow">Worldwide Streaming Platform</p><h1>Stories from everywhere. Discover what speaks to you.</h1><p className="lede">A premium entertainment foundation for global audiences, built with Next.js, React, TypeScript, Supabase, and secure future integration boundaries.</p><div className="hero-actions"><Button>Explore foundation</Button><Button variant="secondary">View architecture</Button></div></div><div><div className="preview-card" aria-label="Entertainment artwork placeholders"><div className="poster-grid"><div className="poster" style={{ '--from': '#0284c7', '--to': '#7c3aed' } as React.CSSProperties} /><div className="poster" style={{ '--from': '#be123c', '--to': '#f97316' } as React.CSSProperties} /><div className="poster" style={{ '--from': '#047857', '--to': '#22d3ee' } as React.CSSProperties} /></div></div><ChatGptCompanionCard /></div></div></section><section className="page-shell section" id="foundation" aria-labelledby="foundation-heading"><p className="eyebrow">Module 01</p><h2 id="foundation-heading">Foundation and engineering baseline</h2><div className="feature-grid">{foundations.map(([title, description]) => <Card key={title}><h3>{title}</h3><p>{description}</p></Card>)}</div></section></main></>;
}

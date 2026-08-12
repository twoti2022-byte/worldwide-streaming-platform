import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Worldwide Streaming Platform',
  description: 'Stories from everywhere. Discover what speaks to you.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

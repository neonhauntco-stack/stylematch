import './globals.css';
import { generalSans } from './fonts';
import { cn } from '../lib/utils';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'StyleMatch',
  description: 'Find lookalike pieces at better prices.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', generalSans.variable)}>
        {children}
      </body>
    </html>
  );
}

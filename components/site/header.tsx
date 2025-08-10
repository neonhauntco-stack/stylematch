"use client";

import Link from 'next/link';
import { Button } from '../ui/button';
import UpgradePremium from '../UpgradePremium';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          StyleMatch
        </Link>
        <nav className="flex items-center gap-4">
<Link<Link href="/pricing">
            <Button variant="outline">Pricing</Button>
          </Link>
          <UpgradePremium />
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Type definition for items returned by /api/search
interface Item {
  id: string;
  title: string;
  store: string;
  price: number;
  currency?: string;
  imageUrl?: string;
  category?: string;
  matchScore?: number;
}

export default function ResultsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'relevance' | 'newest' | 'price-asc' | 'price-desc'>('relevance');
  const [cat, setCat] = useState<string>('All');

  async function runSearch() {
    setLoading(true);
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          filters: { category: cat === 'All' ? undefined : cat },
        }),
      });
      const json = await res.json();
      setItems(json.items || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // initial search
    runSearch();
  }, []);

  useEffect(() => {
    // run search whenever query, category or sort changes with a small debounce
    const t = setTimeout(runSearch, 250);
    return () => clearTimeout(t);
  }, [query, cat, sort]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">Results</h1>
      {/* Toolbar placeholder: search input, sort and view toggles could go here */}
      <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
        {loading ? (
          <p>Loading...</p>
        ) : items.length === 0 ? (
          <p>No results</p>
        ) : (
          items.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.store}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={item.imageUrl || '/images/mock/1.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">
                  {item.currency || 'GBP'} {item.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary">View</Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

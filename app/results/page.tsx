"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ResultsPage() {
  // Mock data for now
  const items = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">Results</h1>
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 border-b">
        <div className="flex items-center gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="secondary">Sort</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Grid</Button>
          <Button variant="outline">List</Button>
        </div>
      </div>
      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Item {i}</CardTitle>
              <CardDescription>Description {i}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted rounded-lg" />
            </CardContent>
            <CardFooter>
              <Button>View</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export default function UIPreviewPage() {
  return (
    <div className="container mx-auto py-10 space-y-4">
      <h1 className="text-3xl font-bold">UI Kit</h1>
      <div className="flex space-x-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content area.</p>
        </CardContent>
        <CardFooter>
          Footer text.
        </CardFooter>
      </Card>
    </div>
  );
}

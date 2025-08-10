"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      features: ["Upload 3 images", "Basic matches"],
      cta: "Get started",
      recommended: false,
    },
    {
      name: "Pro",
      price: "$9/mo",
      features: [
        "Upload unlimited images",
        "Better matches",
        "Priority support",
      ],
      cta: "Choose plan",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$29/mo",
      features: [
        "Everything in Pro",
        "Team accounts",
        "Dedicated support",
      ],
      cta: "Contact us",
      recommended: false,
    },
  ];
  const faqs = [
    {
      question: "How does pricing work?",
      answer:
        "This is a dummy plan for UI; actual pricing will be connected with Stripe soon.",
    },
    { question: "Can I cancel?", answer: "Yes, you can cancel anytime." },
    { question: "Is there a free plan?", answer: "Yes, we have a free Starter plan." },
  ];
  return (
    <div className="container py-10 space-y-10">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Pricing Plans</h1>
        <p className="text-muted-foreground">
          Choose the plan that fits your needs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <Card
            key={i}
            className={`relative ${
              tier.recommended ? "border-primary shadow-lg" : ""
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 right-3 bg-primary text-background text-xs px-2 py-1 rounded-full uppercase">
                Recommended
              </div>
            )}
            <CardHeader className="space-y-2 text-center">
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="text-sm">{feat}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>{tier.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-2">
              <p className="font-medium">{faq.question}</p>
              <p className="text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

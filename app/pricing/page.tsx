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
    {
      question: "Can I cancel?",
      answer: "Yes, you can cancel anytime.",
    },
    {
      question: "Is there a free plan?",
      answer: "Yes, we have a free Starter plan.",
    },
  ];

  return (
    <div className="container py-10 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Pricing Plans</h1>
        <p className="text-muted-foreground">
          Choose the plan that fits your needs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative ${tier.recommended ? "border-primary shadow-lg" : ""}`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 right-3 bg-primary text-background text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                Recommended
              </div>
            )}
            <CardHeader className="text-center space-y-2 pb-2">
              <CardTitle>{tier.name}</CardTitle>
              <div className="text-4xl font-bold">{tier.price}</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{tier.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="border rounded-md p-4">
              <summary className="font-medium">{faq.question}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

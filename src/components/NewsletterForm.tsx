"use client";

import { useState } from "react";
import Button from "./Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-center text-sm font-medium text-green-500">
        ✓ You&apos;re on the list! We&apos;ll notify you when new templates drop.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="font-focus h-11 w-full max-w-sm rounded border border-border-base bg-bg-secondary px-4 text-sm text-tx-primary placeholder:text-tx-tertiary outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 sm:w-72"
      />
      <Button type="submit" size="lg">Subscribe</Button>
    </form>
  );
}

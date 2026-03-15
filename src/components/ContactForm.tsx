"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-indigo-900/30";

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/40 dark:bg-green-950/20">
        <p className="text-lg font-semibold text-green-700 dark:text-green-400">Thanks! Message received.</p>
        <p className="mt-1 text-sm text-green-600 dark:text-green-500">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
          <input type="text" value={form.name} onChange={set("name")} placeholder="Your name" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
          <input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" required className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Subject</label>
        <select value={form.subject} onChange={set("subject")} className={inputClass}>
          <option>General</option>
          <option>Template Request</option>
          <option>Collaboration</option>
          <option>Bug Report</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
        <textarea
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us what's on your mind..."
          required
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}

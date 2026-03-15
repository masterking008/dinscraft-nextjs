import { Github, Twitter, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Get in touch</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Have a template request or want to collaborate?
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Alternatively */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-zinc-900 dark:text-white">Alternatively</h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 cursor-pointer transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
          >
            <Github size={18} className="text-zinc-500" />
            Open an issue on GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 cursor-pointer transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
          >
            <Twitter size={18} className="text-zinc-500" />
            DM us on X / Twitter
          </a>
          <a
            href="mailto:hello@dinscraft.com"
            className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 cursor-pointer transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
          >
            <Mail size={18} className="text-zinc-500" />
            hello@dinscraft.com
          </a>
        </div>
      </div>
    </div>
  );
}

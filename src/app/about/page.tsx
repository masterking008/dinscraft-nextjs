import Link from "next/link";
import { ArrowRight, Heart, Award, Code2 } from "lucide-react";
import Button from "@/components/Button";
import FeatureBlock from "@/components/FeatureBlock";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white px-4 py-20 dark:bg-zinc-950 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
            Built by DinsCraft,{" "}
            <span className="text-indigo-500">part of the Dins family</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
            Our mission is simple — give every developer and founder access to beautiful, production-ready web templates, completely free.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-zinc-200 px-4 py-20 dark:border-zinc-800 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Story</h2>
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              DinsCraft started because we were tired of paying for mediocre templates. Every time we kicked off a new project, we&apos;d spend hours hunting for a decent starting point — only to find paywalled designs or outdated code that needed a full rewrite.
            </p>
            <p>
              So we built our own. We started with a handful of templates for the projects we were already building — SaaS dashboards, portfolio sites, startup landing pages. The response from the community was immediate: people wanted more.
            </p>
            <p>
              Today, DinsCraft is a growing library of free, open-source templates built with the modern stack developers actually use. Every template ships with clean code, responsive layouts, and zero lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* The Dins Family */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">The Dins Family</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            DinsCraft is the web design arm of Dins Technology — a company building tools and products for the next generation of developers and founders.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-4 dark:border-zinc-700 dark:bg-zinc-900">
              <span className="text-xl font-bold text-zinc-500 dark:text-zinc-400">Dins</span>
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Technology</span>
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-4 dark:border-indigo-800 dark:bg-indigo-950/30">
              <span className="text-xl font-bold text-indigo-500">Dins</span>
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Craft</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-200 px-4 py-20 dark:border-zinc-800 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <FeatureBlock
              icon={Heart}
              title="Open Source First"
              description="Everything we build is open source. Fork it, modify it, ship it — no strings attached."
            />
            <FeatureBlock
              icon={Award}
              title="Quality Over Quantity"
              description="We&apos;d rather ship 12 great templates than 100 mediocre ones. Every template is reviewed before release."
            />
            <FeatureBlock
              icon={Code2}
              title="Developer Experience"
              description="Clean code, sensible defaults, and zero unnecessary dependencies. Your DX matters to us."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 text-center dark:border-zinc-800 dark:bg-zinc-900/30 sm:px-6">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Ready to build something?</h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Browse our free templates and ship faster.</p>
        <div className="mt-6">
          <Link href="/templates">
            <Button size="lg">
              Start browsing free templates <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

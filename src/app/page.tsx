import Link from "next/link";
import { ArrowRight, Github, Heart, Zap, Package } from "lucide-react";
import Button from "@/components/Button";
import StatBar from "@/components/StatBar";
import FeatureBlock from "@/components/FeatureBlock";
import CategoryCard from "@/components/CategoryCard";
import NewsletterForm from "@/components/NewsletterForm";
import TemplateCardStatic from "@/components/TemplateCardStatic";
import { templates, categories } from "@/lib/templates";

const featured = templates.filter((t) => t.featured);

export default function HomePage() {
  return (
    <div className="flex flex-col bg-bg-primary">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-28 pt-24 sm:px-12">
        {/* Blobs */}
        <div className="blob-float pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,#6366f1,transparent_70%)] opacity-20 blur-3xl" />
        <div className="blob-float-slow pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,#22c55e,transparent_70%)] opacity-15 blur-3xl" />
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,currentColor_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* Shapes */}
        <div className="pointer-events-none absolute right-[12%] top-[18%] h-3 w-3 rotate-45 rounded-sm bg-yellow-400 opacity-60" />
        <div className="pointer-events-none absolute right-[22%] top-[38%] h-2 w-2 rounded-full bg-pink-500 opacity-50" />
        <div className="pointer-events-none absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-indigo-400 opacity-40" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="fade-up max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-border-base bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> 12 free templates available
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-tx-primary sm:text-7xl">
              Free Web Templates.<br />
              <span className="text-indigo-500">Built for the</span><br />
              <span className="text-indigo-500">Modern Web.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-tx-secondary">
              Production-ready, open-source templates for SaaS, portfolios, landing pages, and startups — free forever.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/templates">
                <Button size="lg">Browse Templates <ArrowRight size={16} /></Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg"><Github size={16} /> View on GitHub</Button>
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {featured.slice(0, 3).map((t, i) => (
              <div
                key={t.id}
                className="fade-up overflow-hidden rounded border border-border-base bg-bg-secondary transition-all duration-200 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img src={t.thumbnail} alt={t.name} className="aspect-[16/10] w-full object-cover" />
                <div className="p-3">
                  <p className="text-sm font-semibold text-tx-primary">{t.name}</p>
                  <p className="text-xs text-tx-tertiary">{t.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border-base bg-bg-secondary px-6 py-12 sm:px-12">
        <StatBar />
      </section>

      {/* Featured Templates */}
      <section className="px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-tx-primary sm:text-4xl">
              Our Best<br />Templates
            </h2>
            <Link href="/templates" className="whitespace-nowrap text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-400">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((t) => <TemplateCardStatic key={t.id} template={t} />)}
          </div>
        </div>
      </section>

      {/* Why DinsCraft */}
      <section className="bg-bg-secondary px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-tx-primary sm:text-5xl">
                Why<br />DinsCraft?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-tx-secondary">
                Everything you need to ship fast, without the bloat.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureBlock icon={Heart}    title="Free Forever"     description="Every template is 100% free. No paywalls, no hidden fees, no license restrictions." />
              <FeatureBlock icon={Package}  title="Production Ready" description="Clean code, responsive design, and best practices baked in from day one." />
              <FeatureBlock icon={Zap}      title="Modern Stack"     description="Built with Next.js, React, and Tailwind CSS — the tools developers actually use." />
              <FeatureBlock icon={Github}   title="Open Source"      description="Fork it, modify it, ship it. Every template lives on GitHub, fully open." />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-tx-primary">Browse by Category</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.name} href={`/templates?category=${encodeURIComponent(cat.name)}`}>
                <CategoryCard name={cat.name} icon={cat.icon} count={cat.count} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(99,102,241,0.2),transparent)]" />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Get notified when<br />new templates drop
          </h2>
          <p className="mt-4 text-base text-zinc-400">No spam. Unsubscribe anytime.</p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>

    </div>
  );
}

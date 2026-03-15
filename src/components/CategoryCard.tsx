"use client";

import { LayoutDashboard, User, Rocket, Zap, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { LayoutDashboard, User, Rocket, Zap };

const accentMap: Record<string, string> = {
  SaaS:           "bg-indigo-500/10 text-indigo-500",
  Portfolio:      "bg-green-500/10 text-green-500",
  "Landing Page": "bg-yellow-500/10 text-yellow-600",
  Startup:        "bg-pink-500/10 text-pink-500",
};

type CategoryCardProps = { name: string; icon: string; count: number; onClick?: () => void };

export default function CategoryCard({ name, icon, count, onClick }: CategoryCardProps) {
  const Icon = iconMap[icon] ?? Rocket;
  const accent = accentMap[name] ?? "bg-zinc-500/10 text-zinc-500";

  return (
    <button
      onClick={onClick}
      className="flex w-full flex-col items-center gap-3 rounded border border-border-base bg-bg-secondary p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong"
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded ${accent}`}>
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-semibold text-tx-primary">{name}</p>
        <p className="text-sm text-tx-secondary">{count} templates</p>
      </div>
    </button>
  );
}

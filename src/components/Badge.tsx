type BadgeProps = {
  children: React.ReactNode;
  variant?: "category" | "tech";
};

const categoryColors: Record<string, string> = {
  SaaS:           "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  Portfolio:      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Landing Page": "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Startup:        "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
};

export default function Badge({ children, variant = "tech" }: BadgeProps) {
  const color =
    variant === "category"
      ? categoryColors[children as string] ?? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400";

  return (
    <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${color}`}>
      {children}
    </span>
  );
}

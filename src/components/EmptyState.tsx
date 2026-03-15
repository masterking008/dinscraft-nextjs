import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
      <SearchX size={40} className="text-zinc-300 dark:text-zinc-600" />
      <p className="font-medium text-zinc-600 dark:text-zinc-400">No templates found.</p>
      <p className="text-sm text-zinc-400 dark:text-zinc-500">Try a different filter or search term.</p>
    </div>
  );
}

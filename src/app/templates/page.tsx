import { Suspense } from "react";
import TemplatesClient from "./TemplatesClient";

export default function TemplatesPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 text-zinc-400">Loading templates...</div>}>
      <TemplatesClient />
    </Suspense>
  );
}

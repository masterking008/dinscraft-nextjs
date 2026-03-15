"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { templates } from "@/lib/templates";
import FilterBar from "@/components/FilterBar";
import TemplateCard from "@/components/TemplateCard";
import EmptyState from "@/components/EmptyState";
import LivePreviewModal from "@/components/LivePreviewModal";
import { Template } from "@/lib/templates";

export default function TemplatesClient() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") ?? "");
  const [tech, setTech] = useState("");
  const [sort, setSort] = useState("newest");
  const [preview, setPreview] = useState<Template | null>(null);

  const filtered = useMemo(() => {
    let list = [...templates];
    if (search) list = list.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));
    if (category) list = list.filter((t) => t.category === category);
    if (tech) list = list.filter((t) => t.tech.includes(tech));
    if (sort === "downloads") list.sort((a, b) => b.downloads - a.downloads);
    else if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list;
  }, [search, category, tech, sort]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">All Templates</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{templates.length} free templates</p>
        </div>

        <FilterBar
          search={search} onSearch={setSearch}
          category={category} onCategory={setCategory}
          tech={tech} onTech={setTech}
          sort={sort} onSort={setSort}
        />

        <div className="mt-8">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t) => (
                <TemplateCard key={t.id} template={t} onPreview={setPreview} />
              ))}
            </div>
          )}
        </div>
      </div>

      <LivePreviewModal template={preview} onClose={() => setPreview(null)} />
    </>
  );
}

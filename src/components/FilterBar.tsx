"use client";

import SearchInput from "./SearchInput";

type FilterBarProps = {
  search: string;
  onSearch: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
  tech: string;
  onTech: (v: string) => void;
  sort: string;
  onSort: (v: string) => void;
};

const selectClass =
  "h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-700 outline-none transition-colors focus:border-indigo-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300";

export default function FilterBar({ search, onSearch, category, onCategory, tech, onTech, sort, onSort }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="min-w-[200px] flex-1">
        <SearchInput value={search} onChange={onSearch} />
      </div>
      <select value={category} onChange={(e) => onCategory(e.target.value)} className={selectClass}>
        <option value="">All Categories</option>
        <option value="SaaS">SaaS</option>
        <option value="Portfolio">Portfolio</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Startup">Startup</option>
      </select>
      <select value={tech} onChange={(e) => onTech(e.target.value)} className={selectClass}>
        <option value="">All Tech</option>
        <option value="Next.js">Next.js</option>
        <option value="React">React</option>
        <option value="HTML/CSS">HTML/CSS</option>
      </select>
      <select value={sort} onChange={(e) => onSort(e.target.value)} className={selectClass}>
        <option value="newest">Newest</option>
        <option value="downloads">Most Downloaded</option>
        <option value="az">A–Z</option>
      </select>
    </div>
  );
}

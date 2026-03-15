import { Download, Star } from "lucide-react";
import Badge from "./Badge";
import { Template } from "@/lib/templates";
import Link from "next/link";

export default function TemplateCardStatic({ template }: { template: Template }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded border border-border-base bg-bg-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong">
      <div className="relative overflow-hidden bg-bg-tertiary" style={{ aspectRatio: "16/10" }}>
        <img
          src={template.thumbnail}
          alt={template.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-tx-primary">{template.name}</h3>
          <Badge variant="category">{template.category}</Badge>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {template.tech.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <div className="flex items-center gap-4 text-xs text-tx-tertiary">
          <span className="flex items-center gap-1"><Star size={12} strokeWidth={1.5} /> {template.stars}</span>
          <span className="flex items-center gap-1"><Download size={12} strokeWidth={1.5} /> {template.downloads.toLocaleString()}</span>
        </div>
        <div className="mt-auto flex gap-2">
          <Link href="/templates" className="flex-1">
            <button className="font-public w-full cursor-pointer rounded border border-indigo-500/40 px-3 py-1.5 text-sm font-medium text-indigo-500 transition-colors duration-150 hover:bg-indigo-500/10">
              Preview
            </button>
          </Link>
          <a href={template.downloadUrl} className="flex-1">
            <button className="font-public w-full cursor-pointer rounded bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-indigo-600">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

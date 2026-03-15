"use client";

import Image from "next/image";
import { Download, Eye, Star } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";
import { Template } from "@/lib/templates";

type TemplateCardProps = {
  template: Template;
  onPreview: (template: Template) => void;
};

export default function TemplateCard({ template, onPreview }: TemplateCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:shadow-lg hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={template.thumbnail}
          alt={template.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-zinc-900 dark:text-white">{template.name}</h3>
          <Badge variant="category">{template.category}</Badge>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {template.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <Star size={12} /> {template.stars}
          </span>
          <span className="flex items-center gap-1">
            <Download size={12} /> {template.downloads.toLocaleString()}
          </span>
        </div>

        <div className="mt-auto flex gap-2">
          <Button variant="secondary" size="sm" className="flex-1" onClick={() => onPreview(template)}>
            <Eye size={14} /> Preview
          </Button>
          <a href={template.downloadUrl} className="flex-1">
            <Button size="sm" className="w-full">
              <Download size={14} /> Download
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { X, Download, Monitor, Smartphone } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import { Template } from "@/lib/templates";

type LivePreviewModalProps = {
  template: Template | null;
  onClose: () => void;
};

export default function LivePreviewModal({ template, onClose }: LivePreviewModalProps) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  if (!template) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950">
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-800 px-4">
        <span className="font-semibold text-white">{template.name}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDevice("desktop")}
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${device === "desktop" ? "bg-indigo-500 text-white" : "text-zinc-400 hover:text-white"}`}
          >
            <Monitor size={16} />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${device === "mobile" ? "bg-indigo-500 text-white" : "text-zinc-400 hover:text-white"}`}
          >
            <Smartphone size={16} />
          </button>
          <a href={template.downloadUrl}>
            <Button size="sm">
              <Download size={14} /> Download
            </Button>
          </a>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-hidden bg-zinc-900 p-4">
        <div
          className="h-full overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-300"
          style={{ width: device === "mobile" ? "390px" : "100%" }}
        >
          <iframe src={template.previewUrl} className="h-full w-full" title={`Preview of ${template.name}`} />
        </div>
      </div>
    </div>
  );
}

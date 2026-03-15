import { LucideIcon } from "lucide-react";

type FeatureBlockProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureBlock({ icon: Icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex flex-col items-start gap-3 rounded border border-border-base bg-bg-tertiary p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-500/10 text-indigo-500">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <h3 className="font-semibold text-tx-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-tx-secondary">{description}</p>
    </div>
  );
}

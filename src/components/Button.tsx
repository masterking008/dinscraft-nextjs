import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:   "bg-btn-primary text-neutral-50 border-transparent hover:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200",
  secondary: "bg-blue text-zinc-900 border border-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700",
  ghost:     "border-transparent text-tx-secondary hover:bg-zinc-100 dark:hover:bg-zinc-800",
};

const sizes = {
  sm: "h-8 px-3 text-xs gap-1",
  md: "h-10 px-4 text-sm gap-1.5",
  lg: "h-11 px-5 text-sm gap-1.5",
};

export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`font-public inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded border font-semibold tracking-tight transition-[background-color,border-color,color,transform,opacity] duration-150 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-[1.5] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const navLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-base bg-bg-primary/80">
      <nav className="mx-auto flex h-18 items-center justify-between px-2 sm:px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-indigo-500">Dins</span>
          <span className="text-xl font-bold text-tx-primary">Craft</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-200 ${
                pathname === href ? "text-indigo-500" : "text-tx-secondary hover:text-tx-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/templates">
            <Button size="md" >Browse Templates</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

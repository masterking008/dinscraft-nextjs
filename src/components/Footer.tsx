import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    heading: "Templates",
    links: [
      { href: "/templates?category=SaaS",         label: "SaaS" },
      { href: "/templates?category=Portfolio",     label: "Portfolio" },
      { href: "/templates?category=Landing+Page",  label: "Landing Page" },
      { href: "/templates?category=Startup",       label: "Startup" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about",   label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "#",        label: "Blog (soon)" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "https://github.com", label: "GitHub" },
      { href: "#",                  label: "Changelog" },
      { href: "#",                  label: "Roadmap" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Use" },
      { href: "#", label: "License (MIT)" },
    ],
  },
];

const socials = [
  { href: "https://github.com",   icon: Github,   label: "GitHub" },
  { href: "https://twitter.com",  icon: Twitter,  label: "Twitter/X" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-base bg-bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl font-bold text-indigo-500">Dins</span>
              <span className="text-xl font-bold text-tx-primary">Craft</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-tx-secondary">
              Free, production-ready web templates built for the modern web. By Dins Technology.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-border-base text-tx-tertiary transition-colors duration-200 hover:text-tx-primary"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-tx-tertiary">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-tx-secondary transition-colors duration-200 hover:text-tx-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border-base pt-8 sm:flex-row">
          <p className="text-xs text-tx-tertiary">© 2026 Dins Technology. All rights reserved.</p>
          <span className="rounded bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
            Made with DinsCraft
          </span>
        </div>
      </div>
    </footer>
  );
}

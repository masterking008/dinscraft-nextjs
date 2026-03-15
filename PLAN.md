# DinsCraft — Build Plan & Checklist

## Design System
| Element | Value |
|---|---|
| Primary font | Inter |
| Heading weight | 700 |
| Body weight | 400 |
| Primary color | `#6366f1` (indigo) |
| Accent | `#22c55e` (green) |
| Dark bg | `#0a0a0a` |
| Light bg | `#ffffff` |
| Border radius | 12px cards, 8px buttons |
| Transition | 200ms ease |

---

## Checklist

### Setup
- [x] Create PLAN.md
- [x] Install dependencies — `lucide-react`, `next-themes`
- [x] Update `globals.css` — design tokens, base styles
- [x] Update `layout.tsx` — ThemeProvider, Navbar, Footer, Inter font

### Components (15)
- [x] `Button` — primary/secondary/ghost variants
- [x] `Badge` — category + tech stack pill
- [x] `ThemeToggle` — dark/light mode button
- [x] `Navbar` — logo, nav links, theme toggle, CTA, sticky + blur
- [x] `Footer` — logo, tagline, links, social icons, copyright
- [x] `StatBar` — 3 stat numbers
- [x] `FeatureBlock` — icon + title + description
- [x] `CategoryCard` — icon + name + count
- [x] `TemplateCard` — thumbnail, name, badge, tags, Preview + Download buttons
- [x] `FilterBar` — search, category filter, tech filter, sort
- [x] `SearchInput` — controlled search input
- [x] `EmptyState` — no results message
- [x] `LivePreviewModal` — fullscreen iframe overlay, mobile/desktop toggle
- [x] `NewsletterForm` — email input + subscribe + success state
- [x] `ContactForm` — name, email, subject dropdown, message, success state

### Bonus
- [x] `TemplateCardStatic` — server-safe card for landing page (no client callbacks)

### Data
- [x] `lib/templates.ts` — mock template data (12 templates, 4 categories)

### Pages
- [x] `app/page.tsx` — Landing Page (Hero, Stats, Featured, Categories, Why, Newsletter)
- [x] `app/templates/page.tsx` — Templates Gallery (header, FilterBar, grid, LivePreviewModal)
- [x] `app/about/page.tsx` — About (hero, story, Dins family, values, CTA)
- [x] `app/contact/page.tsx` — Contact (header, ContactForm, alternatives)

### Build
- [x] Production build passing — all 5 routes static ✓

---

## File Structure
```
src/
├── app/
│   ├── layout.tsx          ← ThemeProvider + Navbar + Footer
│   ├── page.tsx            ← Landing page
│   ├── globals.css
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── templates/
│       ├── page.tsx        ← Suspense wrapper
│       └── TemplatesClient.tsx  ← Client filters + modal
├── components/
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── CategoryCard.tsx
│   ├── ContactForm.tsx
│   ├── EmptyState.tsx
│   ├── FeatureBlock.tsx
│   ├── FilterBar.tsx
│   ├── Footer.tsx
│   ├── LivePreviewModal.tsx
│   ├── Navbar.tsx
│   ├── NewsletterForm.tsx
│   ├── SearchInput.tsx
│   ├── StatBar.tsx
│   ├── TemplateCard.tsx
│   ├── TemplateCardStatic.tsx
│   └── ThemeToggle.tsx
└── lib/
    └── templates.ts        ← 12 mock templates + categories
```

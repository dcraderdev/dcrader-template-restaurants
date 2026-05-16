# dcrader-template-restaurants

> Restaurant / café landing page template — one of 5 industry templates in Donovan's client outreach pipeline.

**Live demo:** https://dcrader-template-restaurants.vercel.app

**Demo restaurant:** Bella Sole — Coastal Italian, La Jolla, San Diego (fictional)

---

## Stack

| Tool | Version |
|------|---------|
| Astro | 6.x |
| Tailwind CSS | v4 (CSS-first config) |
| Deploy | Vercel (static) |
| Node | ≥ 22.12 |

## Personalize in one file

Every piece of content — name, cuisine, address, hours, menu, gallery photos, chef bio, social links, SEO tags — lives in **`src/data/restaurant.ts`**. Swap that file to generate a new prospect demo.

```ts
// src/data/restaurant.ts
export const restaurant = {
  name: 'Your Restaurant',
  tagline: 'Cuisine · City',
  heroHeadline: 'Your tagline\nhere',
  phone: '(555) 555-0000',
  address: { ... },
  hours: [ ... ],
  menu: { categories: [ ... ] },
  gallery: [ ... ],
  // ...
};
```

## Sections

| Section | Notes |
|---------|-------|
| **Nav** | Fixed, transparent over hero → solid on scroll. Mobile hamburger. |
| **Hero** | Full-viewport photo, serif headline, dual CTA. |
| **Info bar** | Address / today's hours / phone — instant mobile lookup. |
| **Menu** | Tabbed categories, dietary labels, `window.print()` → PDF. |
| **Gallery** | CSS masonry + lightbox (keyboard navigable). |
| **About** | Story paragraphs + chef portrait + pull quote. |
| **Reservations** | Form UI (wire up Formspree/your backend) or swap `openTableId` in config to embed OpenTable widget. |
| **Contact** | Google Maps embed, hours by day, social links. |
| **Footer** | Full hours, nav, contact, social, photo credits. |

## Commands

```sh
# Requires Node 22+
nvm use   # reads .nvmrc

npm install
npm run dev      # localhost:4321
npm run build    # ./dist/
npm run preview
```

## Deploy

Connected to Vercel via GitHub. Every push to `main` triggers a production deploy.

Target domain: `restaurants.dcrader.dev` (DNS CNAME → `cname.vercel-dns.com`)

## Photo credits

All photos from [Unsplash](https://unsplash.com/license) — free commercial license. Attribution listed in `src/data/restaurant.ts` comments.

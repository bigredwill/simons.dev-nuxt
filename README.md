# simons.dev

Personal site built with [Astro](https://astro.build), [Preact](https://preactjs.com), and Tailwind CSS 4. Content lives in `content/` as a plain markdown (Obsidian) vault and is rendered as a fully static site.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```

The build outputs static files to `dist/`, ready for Cloudflare Pages (or any static host).

## Notes

- `src/lib/remark-vault-links.ts` rewrites Obsidian-style relative `.md` links and `../public` image paths to site routes at build time.
- `src/lib/slugs.ts` defines the slug rules (lowercase, spaces to dashes) — the same rules the old Nuxt site used, so existing URLs are preserved.
- Work, Studio, and Notes are the primary studio pages; existing project URLs remain available.
- `/resume` renders the founder resume and includes Print / Save PDF. The print layout fits Letter and A4, with browser headers and footers disabled.
- Edit `src/data/resume.ts` to update the resume. Regenerate `public/resume/will-simons-resume.pdf` after changing it so the download matches the page.
- `/admin` is injected only during `astro dev`. The checklist and root reference documents are excluded from production builds.
- Theme selection defaults to the system preference and is saved in browser storage.
- Project filtering uses a small Preact island; shared navigation and resume printing use lightweight scripts.

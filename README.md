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
- Interactive bits (project tag filter, salmon spawner) are small Preact islands; everything else ships zero JS.

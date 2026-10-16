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

## Editing page text

Edit Markdown in `content/pages/` for the main pages:

- `index.md`: homepage introduction and studio link label.
- `notes.md`: notes introduction.
- `studio.md`: studio introduction.
- `studio-story.md`: studio story, image path, and image alt text.
- `studio-contact.md`: contact text and links.

Headings, paragraphs, emphasis, and links go in the Markdown body. Metadata such as page titles, descriptions, and eyebrow labels goes in the YAML frontmatter. Layouts and interactive controls stay in `src/`.

Studio journal entries live in `content/notes/` (including `studio-works.md`); older notes remain in `content/posts/`. Published entries appear in Notes automatically. Project articles remain in `content/projects/`. Page copy is a separate collection and does not generate extra article URLs.

## Notes

- Set `published: draft` (or `draft: true`) in frontmatter to exclude an entry from generated pages, listings, and related links.

- `src/lib/remark-vault-links.ts` rewrites Obsidian-style relative `.md` links and `../public` image paths to site routes at build time.
- `src/lib/slugs.ts` defines the slug rules (lowercase, spaces to dashes) — the same rules the old Nuxt site used, so existing URLs are preserved.
- Index (the homepage) and Studio are the primary navigation items. Notes is temporarily hidden from navigation and keyboard shortcuts; its route and Markdown content are preserved. Index shows selected projects above the rest of the project archive, separated by a divider, with shared tag filters. Both `/work` and `/projects` redirect to `/`. Existing project detail URLs remain available.
- `/admin/resume` is available only during `astro dev` and renders the founder resume and includes Print / Save PDF. The print layout fits Letter and A4, with browser headers and footers disabled.
- Edit `src/data/resume.ts` to update the resume. Regenerate `src/dev/assets/will-simons-resume.pdf` after changing it so the download matches the page.
- `/admin` is injected only during `astro dev`. The checklist, root reference documents, resume page, and resume PDF are excluded from production builds. Access the resume from the admin page; its PDF is served locally at `/admin/resume.pdf`.
- Theme selection defaults to the system preference and is saved in browser storage.
- Project filtering, shared navigation, and resume printing use lightweight scripts.

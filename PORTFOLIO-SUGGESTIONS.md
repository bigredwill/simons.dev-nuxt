# Portfolio Suggestions — simons.dev

Notes on making the site work harder as a portfolio for software engineering roles. Roughly ordered by impact.

## 1. Lead with the strongest engineering story

- **skateboard.fyi is your best asset.** It's a real product with a real stack (Astro, Preact, Cloudflare, D1/Drizzle, OCR pipelines, DIY book scanner hardware). Right now it's one line on the homepage. Turn it into a proper case study page: the problem, the architecture, the interesting decisions (search, image pipeline, auto-tagging), and screenshots. Recruiters and hiring managers rarely click more than one thing — make that one thing count.
- **Surface Glowforge.** Six years at a hardware/software company is a major credibility signal, and it's currently only implied ("[Glowforge]" on the homepage is even a broken/empty link). A short "Work" section — company, role, years, what you shipped — goes a long way.
- Consider a `/resume` page (or a linked PDF) so people can get the traditional artifact in one click.

## 2. Make contact & links effortless

- Email, GitHub, LinkedIn, and Bluesky should be reachable from every page (footer or nav), not buried in `about.md`.
- Your GitHub isn't linked prominently anywhere. Pin the repos you'd want an interviewer to read, and make sure they have READMEs.

## 3. Tighten the project pages into case studies

For the featured software projects (osc.link, Interpolator, Solarpunk Community Map, Jumbotron, skateboard.fyi):

- Use a consistent structure: **what it is → stack → what was hard → outcome**. Several entries are currently notes-to-self ("`~~ Project in progress ~~`").
- Add outcomes/numbers where you have them (users, uptime, pages scanned, load-time improvements). Engineers trust numbers.
- Fill in missing frontmatter: some projects lack `date`, `description`, or `image`, which makes the projects grid uneven.
- Fix the two dead links in the vault: `projects/Mars College.md` (deleted but still linked from `low-workbench` and `train-otaku`) and `projects/This Website.md` (linked from `Web.md`, never existed).

## 4. Separate "software" from "everything else" — without hiding it

The multi-potentialist range (ramps, zines, music, lights) is genuinely differentiating, but a hiring manager skimming for 30 seconds needs to find the code instantly.

- The tag filter on `/projects` helps; consider defaulting the grid to `code` when the referrer is LinkedIn/job-related, or ordering code projects first.
- Alternatively: a compact "Selected software work" strip at the top of `/projects`, with the full grid below.

## 5. Performance & polish (partially done in the Astro rewrite)

- ✅ Static HTML, zero JS on most pages, self-hosted fonts.
- **Images are the remaining problem:** `public/attachments` is ~56 MB, with several 3–5 MB PNGs/JPEGs inline in project pages. Batch-convert to WebP/AVIF at sensible widths (e.g. 1200px max) — `sharp` or `squoosh-cli` can do this in one pass. This is the single biggest remaining win for load time.
- Add `width`/`height` (or aspect-ratio) to content images to eliminate layout shift.
- Add a sitemap (`@astrojs/sitemap`) and an RSS feed for `/posts` — cheap SEO and it signals craft.
- Per-page OG images (even just the project's `image` frontmatter) make shared links look much better.

## 6. Writing as a signal

- The "returning to code" post is honest and compelling — more short technical posts like it (a bug hunt on skateboard.fyi, the OCR pipeline, the Obsidian→site tooling) demonstrate communication skills better than any skills list.
- Date-stamp `/now` updates so the site clearly reads as alive.

## 7. Small credibility details

- Alt text on images (accessibility reads as professionalism).
- A favicon/OG pass so every share card looks intentional.
- Consider a tiny "colophon" (how the site is built + link to its repo, if public) — engineers love this and it's free proof of work.
- If any freelance clients will vouch for you, one or two short quotes on the about page carry real weight.

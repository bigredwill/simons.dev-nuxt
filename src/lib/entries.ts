import type { CollectionEntry } from "astro:content";

/**
 * Like Nuxt Content, fall back to the original filename (or folder name for
 * `index.md`) when an entry has no `title` in its frontmatter.
 */
export function entryTitle(entry: CollectionEntry<"content">): string {
  if (entry.data.title) return entry.data.title;

  const filePath = entry.filePath ?? entry.id;
  const parts = filePath.split("/");
  let name = parts[parts.length - 1].replace(/\.md$/i, "");
  if (name.toLowerCase() === "index" && parts.length > 1) {
    name = parts[parts.length - 2];
  }
  return name.replace(/\.+$/, "");
}

/** YYYY-MM-DD, matching the old site's en-CA formatting. */
export function formatDate(date: Date | undefined): string | null {
  if (!date) return null;
  return date.toISOString().slice(0, 10);
}

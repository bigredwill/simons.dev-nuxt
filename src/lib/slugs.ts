/**
 * Slug rules ported from the old Nuxt `content:file:beforeParse` hook so
 * every existing internal link in the Obsidian vault keeps resolving:
 * lowercase, spaces/`%20` become dashes, dashes collapse, `.md` is dropped.
 */
export function slugifySegment(segment: string): string {
  return segment
    .toLowerCase()
    .replace(/%20/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/\.+$/, "");
}

/** Convert a content-relative file path (e.g. `projects/Triangle Slappy Rail.md`) to a route slug. */
export function pathToSlug(relativePath: string): string {
  const segments = relativePath
    .replace(/\.md$/i, "")
    .split("/")
    .filter(Boolean)
    .map(slugifySegment);

  // `foo/index.md` routes as `foo`
  if (segments.length > 1 && segments[segments.length - 1] === "index") {
    segments.pop();
  }

  return segments.join("/");
}

import path from "node:path";
import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { VFile } from "vfile";
import { pathToSlug } from "./slugs";

/**
 * Ported from the old Nuxt `content:file:beforeParse` hook:
 * - rewrites relative Obsidian-style `*.md` links to site routes
 * - strips `../public` prefixes from image URLs
 */
export function remarkVaultLinks() {
  return (tree: Root, file: VFile) => {
    const filePath = file.history?.[0] ?? file.path ?? "";
    const contentRoot = path.join(file.cwd, "content");
    const rel = path.relative(contentRoot, filePath).split(path.sep).join("/");
    const dir = path.posix.dirname(rel);

    visit(tree, "link", (node) => {
      const url = node.url ?? "";
      if (/^(https?:|mailto:|tel:|#|\/)/i.test(url)) return;

      const [target, hash] = url.split("#");
      if (!target || !/\.md$/i.test(target)) return;

      let decoded = target;
      try {
        decoded = decodeURIComponent(target);
      } catch {
        // keep raw target if it isn't valid percent-encoding
      }

      const resolved = path.posix.normalize(
        path.posix.join(dir === "." ? "" : dir, decoded),
      );
      node.url = `/${pathToSlug(resolved)}${hash ? `#${hash}` : ""}`;
    });

    visit(tree, "image", (node) => {
      const url = node.url ?? "";
      // `../../public/attachments/x.jpg` -> `/attachments/x.jpg`
      const stripped = url.replace(/^.*?\/public\//, "/");
      if (stripped !== url) node.url = stripped;
    });
  };
}

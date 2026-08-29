import { visit } from "unist-util-visit";
import type { Root, Paragraph, PhrasingContent } from "mdast";

/**
 * Minimal replacement for the Nuxt MDC `:highlight[...]{...}` inline syntax
 * used in the vault. Turns the span into a `<mark class="hl">` while keeping
 * any nested markdown (links, emphasis) intact.
 */
export function remarkHighlight() {
  return (tree: Root) => {
    visit(tree, "paragraph", (para: Paragraph) => {
      const hasHighlight = para.children.some(
        (child) => child.type === "text" && child.value.includes(":highlight["),
      );
      if (!hasHighlight) return;

      const out: PhrasingContent[] = [];
      let open = false;

      for (const child of para.children) {
        if (child.type === "text" && child.value.includes(":highlight[")) {
          const idx = child.value.indexOf(":highlight[");
          const before = child.value.slice(0, idx);
          const after = child.value.slice(idx + ":highlight[".length);
          if (before) out.push({ type: "text", value: before });
          out.push({ type: "html", value: '<mark class="hl">' });
          open = true;
          if (after) out.push({ type: "text", value: after });
        } else if (open && child.type === "text" && /\]\{[^}]*\}/.test(child.value)) {
          const match = child.value.match(/\]\{[^}]*\}/)!;
          const before = child.value.slice(0, match.index);
          const after = child.value.slice(match.index! + match[0].length);
          if (before) out.push({ type: "text", value: before });
          out.push({ type: "html", value: "</mark>" });
          open = false;
          if (after) out.push({ type: "text", value: after });
        } else {
          out.push(child);
        }
      }

      if (open) out.push({ type: "html", value: "</mark>" });
      para.children = out;
    });
  };
}

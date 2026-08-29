import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { remarkVaultLinks } from "./src/lib/remark-vault-links";
import { remarkHighlight } from "./src/lib/remark-highlight";

// Fully static output — pages are prerendered at build time so TTFB is just
// static file serving (ideal for Cloudflare Pages later).
export default defineConfig({
  site: "https://simons.dev",
  output: "static",
  integrations: [preact()],
  markdown: {
    remarkPlugins: [remarkVaultLinks, remarkHighlight],
    shikiConfig: {
      theme: "github-dark",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

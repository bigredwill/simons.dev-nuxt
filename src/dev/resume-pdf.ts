import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export const GET: APIRoute = async () => {
  const pdf = await readFile(resolve("src/dev/assets/will-simons-resume.pdf"));
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="will-simons-resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
};

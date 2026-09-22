import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { pathToSlug } from "./lib/slugs";

const content = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./content",
    generateId: ({ entry }) => pathToSlug(entry),
  }),
  schema: z
    .object({
      title: z.string().optional(),
      headline: z.string().optional(),
      description: z.string().nullish(),
      date: z.coerce.date().optional(),
      tags: z
        .union([z.array(z.string()), z.string()])
        .transform((value) =>
          Array.isArray(value) ? value : value ? [value] : [],
        )
        .optional(),
      image: z.string().nullish(),
      featured: z.boolean().optional(),
      url: z.string().optional(),
      location: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { content };

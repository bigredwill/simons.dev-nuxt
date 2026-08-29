import { useState } from "preact/hooks";

export interface ProjectItem {
  slug: string;
  title: string;
  date: string | null;
  tags: string[];
  image: string | null;
  description: string | null;
}

interface Props {
  projects: ProjectItem[];
  tags: string[];
}

export default function ProjectGrid({ projects, tags }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const visible = active
    ? projects.filter((p) => p.tags.includes(active))
    : projects;

  return (
    <div>
      <div class="mb-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(active === tag ? null : tag)}
            class={`cursor-pointer border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-150 ${
              active === tag
                ? "border-ink bg-ink text-bg"
                : "border-line/30 bg-transparent text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul class="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {visible.map((project) => (
          <li key={project.slug}>
            <a
              href={`/${project.slug}`}
              class="group flex h-full flex-col gap-1.5 no-underline"
            >
              <div class="aspect-square overflow-hidden border border-line/25 bg-surface">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    class="h-full w-full object-cover transition-transform duration-150 group-hover:scale-105"
                  />
                ) : (
                  <div class="flex h-full w-full items-center justify-center p-2 text-center font-display lowercase text-dim">
                    {project.title}
                  </div>
                )}
              </div>
              <div class="min-w-0">
                {project.date && (
                  <div class="font-mono text-[10px] tracking-[0.1em] text-dim">
                    {project.date}
                  </div>
                )}
                <div class="truncate text-[13px] font-medium text-ink transition-colors duration-150 group-hover:text-salmon-deep">
                  {project.title}
                </div>
                {project.tags.length > 0 && (
                  <div class="truncate font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
                    {project.tags.join(" · ")}
                  </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Image from "next/image";

export type Project = {
  number: string;
  title: string;
  description: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  githubUrl?: string;
};

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 16 16 8M10 8h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z"
      />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] md:grid-cols-[minmax(260px,0.42fr)_1fr]">
      <div className="relative grid min-h-[240px] place-items-center overflow-hidden border-b border-[var(--line)] bg-[#10131d] md:min-h-[320px] md:border-r md:border-b-0">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <span className="absolute top-5 left-5 z-[2] rounded-md bg-white/85 px-2 py-1 text-xs font-extrabold tracking-[0.14em] text-[#1b1c18] backdrop-blur">
          {project.number}
        </span>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-9">
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] leading-tight font-bold tracking-[-0.045em]">
          {project.title}
        </h2>
        <div className="mt-4 w-full space-y-2 text-justify text-[var(--muted)] [text-align-last:left] [text-justify:inter-character]">
          {project.description.map((description) => (
            <p className="leading-7" key={description}>
              {description}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded-md border border-dashed border-[color-mix(in_srgb,var(--ink)_20%,transparent)] bg-[color-mix(in_srgb,var(--ink)_5%,transparent)] px-2.5 py-1.5 text-xs font-bold text-[var(--ink)]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--line)] pt-5 [&_svg]:size-[15px]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3.5 py-2 text-xs text-[var(--ink)] transition-transform hover:-translate-y-0.5 hover:border-[var(--ink)]"
          >
            Live <ExternalIcon />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3.5 py-2 text-xs text-[var(--ink)] transition-transform hover:-translate-y-0.5 hover:border-[var(--ink)]"
            >
              GitHub <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

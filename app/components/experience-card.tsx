import Image from "next/image";

export type Experience = {
  company: string;
  position: string;
  location?: string;
  image: string;
  description: string[];
  startDate?: string;
  endDate?: string;
  technologies: {
    name: string;
    href: string;
    icon:
      | "express"
      | "javascript"
      | "nextjs"
      | "node"
      | "react"
      | "supabase"
      | "typescript";
  }[];
  isBlur?: boolean;
};

function TechnologyIcon({
  name,
}: {
  name: Experience["technologies"][number]["icon"];
}) {
  if (name === "express") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="var(--ink)" />
        <path
          fill="var(--paper)"
          d="M4.8 15.9 9 10.5 5.2 5.7h2.5l2.6 3.4 2.6-3.4h2.4l-3.8 4.8 4.3 5.4h-2.6l-2.9-3.8-3 3.8H4.8Zm11.5 0 3-4.1 1.3 1.6-1.8 2.5h-2.5Z"
        />
      </svg>
    );
  }

  if (name === "javascript") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="2" fill="#f7df1e" />
        <path
          fill="#171814"
          d="M13.1 18.2c.5.8 1.1 1.3 2 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8s-.9.3-.9.8c0 .6.3.8 1.2 1.1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.4 2.7-3.2 2.7-1.8 0-3-1-3.6-2.3l1.6-.7Zm-6.9.2c.3.5.6 1 1.3 1 .7 0 1.1-.3 1.1-1.4v-6.2h2v6.3c0 2.1-1.2 3.1-3 3.1-1.6 0-2.6-.8-3.1-1.9l1.7-.9Z"
        />
      </svg>
    );
  }

  if (name === "nextjs") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#050505" />
        <path
          fill="white"
          d="M7 6.8h2.1l7.9 10.3-1.7 1.3L8.7 9.7v7.5H7V6.8Zm8.5 0H17v7.1h-1.5V6.8Z"
        />
      </svg>
    );
  }

  if (name === "supabase") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#3ecf8e"
          d="M13.6 2.2 4.1 13.8h8.5l-1.2 8 8.5-11.6h-7.5l1.2-8Z"
        />
        <path fill="#21b978" d="m12.6 13.8-1.2 8 8.5-11.6h-4.7l-2.6 3.6Z" />
      </svg>
    );
  }

  if (name === "react") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <g stroke="#61dafb" strokeWidth="1.35">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
        <circle cx="12" cy="12" r="1.8" fill="#61dafb" />
      </svg>
    );
  }

  if (name === "node") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#68a063" d="M12 1.8 21 7v10L12 22.2 3 17V7l9-5.2Z" />
        <path
          fill="white"
          d="M8 16.8V7.2h2.2l3.7 5.8V7.2H16v9.6h-2.1l-3.8-5.9v5.9H8Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#3178c6" />
      <path
        fill="white"
        d="M5.2 10.3V8.5h7v1.8H9.6V18H7.7v-7.7H5.2Zm7.8 6.5 1-1.2c.7.6 1.5.9 2.3.9.7 0 1.2-.3 1.2-.8 0-.5-.3-.7-1.5-1.2-1.5-.5-2.6-1.2-2.6-2.9 0-1.6 1.3-2.7 3.1-2.7 1.1 0 2.1.4 2.9 1.1l-.9 1.3c-.7-.5-1.3-.7-2-.7-.7 0-1 .3-1 .7 0 .5.3.7 1.6 1.2 1.6.6 2.5 1.4 2.5 2.8 0 1.8-1.4 2.9-3.3 2.9-1.3 0-2.4-.5-3.3-1.4Z"
      />
    </svg>
  );
}

function formatDescription(description: string) {
  return description
    .split(/(\*[^*]+\*)/g)
    .map((part, index) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <strong key={`${part}-${index}`}>{part.slice(1, -1)}</strong>
      ) : (
        part
      ),
    );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] md:p-7">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-12 rounded-md border border-[var(--line)] object-cover"
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h2
                className={`text-lg font-bold ${experience.isBlur ? "blur-[5px]" : ""}`}
              >
                {experience.company}
              </h2>
            </div>
            <p>{experience.position}</p>
          </div>
        </div>

        <div className="flex flex-col text-sm text-[var(--muted)] md:text-right">
          {experience.startDate && (
            <p>
              {experience.startDate}
              {experience.endDate && ` - ${experience.endDate}`}
            </p>
          )}
          {experience.location && <p>{experience.location}</p>}
        </div>
      </div>

      <div>
        <h3 className="mt-4 mb-2 font-semibold">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <a
              key={technology.name}
              href={technology.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-dashed border-[color-mix(in_srgb,var(--ink)_20%,transparent)] bg-[color-mix(in_srgb,var(--ink)_5%,transparent)] px-2 py-1 text-sm text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              <span className="size-4 shrink-0 [&_svg]:block [&_svg]:size-full">
                <TechnologyIcon name={technology.icon} />
              </span>
              <span className="ml-1 text-sm font-bold">{technology.name}</span>
            </a>
          ))}
        </div>
      </div>

      <ul className="list-outside list-disc space-y-1 pl-5 text-justify text-[var(--muted)] marker:text-[var(--ink)] [text-align-last:left] md:[text-justify:inter-character]">
        {experience.description.map((description) => (
          <li className="pl-1 leading-7" key={description}>
            {formatDescription(description)}
          </li>
        ))}
      </ul>
    </article>
  );
}

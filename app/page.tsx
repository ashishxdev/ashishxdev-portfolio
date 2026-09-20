"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "./components/container";

function Skill({
  name,
  href,
  children,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-2 py-1 align-middle text-[0.88em] font-medium text-[var(--ink)] transition-opacity hover:opacity-70"
    >
      <span className="size-4">{children}</span>
      {name}
    </a>
  );
}
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3.5h7l3 3V20H7V3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.5V7h3M9.5 11h5M9.5 14h5M9.5 17h3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TypeScriptIcon() {
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

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="#61dafb" strokeWidth="1.25">
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

function NextIcon() {
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

function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#e44d26" d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z" />
      <path fill="#f16529" d="M12 20.3V3.5h7.3l-1.4 15.3-5.9 1.5Z" />
      <path
        fill="white"
        d="M6.4 6h11.2l-.2 2.2H8.8l.2 2.2h8.2l-.6 6.1-4.6 1.3-4.6-1.3-.3-3.4h2.2l.2 1.7 2.5.7 2.5-.7.2-2.2H6.9L6.4 6Z"
      />
    </svg>
  );
}

function CssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1572b6" d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z" />
      <path fill="#33a9dc" d="M12 20.3V3.5h7.3l-1.4 15.3-5.9 1.5Z" />
      <path
        fill="white"
        d="M6.7 6h10.8l-.2 2.2-6.8 2.8h6.6l-.6 5.5-4.5 1.3-4.5-1.3-.3-3.2h2.2l.2 1.5 2.4.7 2.4-.7.2-1.7H7.1l-.2-2.1 6.8-2.8H6.9L6.7 6Z"
      />
    </svg>
  );
}

function JavaScriptIcon() {
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

function NodeIcon() {
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

function ExpressIcon() {
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

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#47a248"
        d="M12.2 1.4s6.2 5.1 6.2 11.4c0 4.8-2.8 8.2-6.2 9.5-3.4-1.3-6.2-4.7-6.2-9.5 0-6.3 6.2-11.4 6.2-11.4Z"
      />
      <path stroke="#fff" strokeWidth="1.2" d="M12.2 4.2v15.5" />
    </svg>
  );
}

function PostgreSqlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#336791" />
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        d="M8.1 16.7c-1.2-1.5-1.5-4.4-1.1-7 .3-2.1 2-3.4 5-3.4 3.4 0 5 1.4 5 4.3 0 2.2-.7 4.1-2.2 5.1-.8.6-1.8.2-2.2-.6m0 0c-.5-1-.5-2.5-.2-3.8m.2 3.8c.4 2.1-.2 3.6-1.4 4.3m1-8.3c1.1.5 2.1.4 3-.3"
      />
      <circle cx="10.1" cy="9.2" r=".7" fill="white" />
    </svg>
  );
}

function MotionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#7b61ff" />
      <path
        fill="white"
        d="M3.5 16.8 8.2 7h4.1l-4.7 9.8H3.5Zm7.3 0L15.5 7h5l-4.7 9.8h-5Z"
      />
    </svg>
  );
}

const skills = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Express.js", Icon: ExpressIcon },
  { name: "MongoDB", Icon: MongoIcon },
  { name: "PostgreSQL", Icon: PostgreSqlIcon },
  { name: "Motion", Icon: MotionIcon },
];

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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.4 7.9a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.5 20.5h3.8V9.2H3.5v11.3ZM9.6 9.2h3.6v1.6h.1c.5-1 1.7-2 3.5-2 3.8 0 4.5 2.5 4.5 5.7v6h-3.8v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.4H9.8V9.2h-.2Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2.8h3.7l-8.1 9.3L24 21.2h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 2.8h7.6l5.2 6.9 6.1-6.9Zm-1.3 16.8h2L6.5 4.3H4.4l13.2 15.3Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Container className="px-5 md:px-[38px]">
        <section
          className="flex min-h-[620px] items-center px-[2vw] py-[70px] md:min-h-[650px] md:px-[7vw] md:py-[88px]"
          aria-labelledby="hero-title"
        >
          <motion.div
            className="max-w-[980px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mb-[30px] w-max">
              <Image
                className="block h-24 w-24 rounded-[28px] border border-[var(--line)] bg-[var(--violet)] object-cover shadow-[0_14px_35px_rgb(0_0_0/10%)]"
                src="/avatar.jpeg"
                alt="Aashish Rana"
                width={104}
                height={104}
                priority
              />
            </div>
            <h1
              id="hero-title"
              className="m-0 max-w-[980px] text-[50px] leading-[1.02] font-bold tracking-[-0.065em] md:text-[clamp(2.75rem,5.3vw,5.2rem)]"
            >
              Hi, I&apos;m Aashish -{" "}
              <span className="font-semibold text-[var(--muted)]">
                AI Full Stack Developer.
              </span>
            </h1>
            <p className="mt-7 max-w-[820px] text-base leading-[1.78] text-[var(--muted)] md:text-lg">
              I build production ready web products using{" "}
              <Skill href="https://www.typescriptlang.org/" name="TypeScript">
                <TypeScriptIcon />
              </Skill>
              ,{" "}
              <Skill href="https://nextjs.org/" name="Next.js">
                <NextIcon />
              </Skill>
              , and{" "}
              <Skill href="https://postgresql.org/" name="PostgreSQL">
                <PostgreSqlIcon />
              </Skill>
              . I enjoy turning complex ideas into interfaces that feel simple,
              fast, and considered.
            </p>
            <div className="mt-[34px] flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-[49px] items-center justify-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 text-[16px] font-bold transition-transform duration-200 [&_svg]:h-[18px] [&_svg]:w-[18px]"
                href="https://drive.google.com/file/d/1QTcDMtB9H7rewBlWOP0wVqBoSVvizBJv/view?usp=drive_link"
                data-magnetic
              >
                <ResumeIcon /> Resume / CV
              </a>
              <Link
                className="inline-flex min-h-[49px] items-center justify-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 text-[16px] font-bold transition-transform duration-200 [&_svg]:h-[18px] [&_svg]:w-[18px]"
                href="/projects"
                data-magnetic
              >
                Explore my work <ArrowIcon />
              </Link>
              <Link
                className="inline-flex min-h-[49px] items-center justify-center rounded-full border border-[var(--line)] bg-transparent px-5 text-[13px] font-bold transition-transform duration-200"
                href="/contact"
                data-magnetic
              >
                Say Hello!
              </Link>
            </div>
            <div
              className="mt-[26px] flex gap-2.5 [&_svg]:h-5 [&_svg]:w-5"
              aria-label="Social links"
            >
              <a
                href="https://github.com/ashishxdev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--line)] bg-[var(--surface)] text-[#181717] transition-all hover:-translate-y-0.5 hover:border-[#181717] dark:text-white dark:hover:border-white"
                data-magnetic
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/ashishxdev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--line)] bg-[var(--surface)] text-[#0a66c2] transition-all hover:-translate-y-0.5 hover:border-[#0a66c2]"
                data-magnetic
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:ashishrana2004@gmail.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--line)] bg-[var(--surface)] text-[#ea4335] transition-all hover:-translate-y-0.5 hover:border-[#ea4335]"
                data-magnetic
              >
                <MailIcon />
              </a>
              <a
                href="https://x.com/ashishd2dlife"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--ink)]"
                data-magnetic
              >
                <XIcon />
              </a>
            </div>
          </motion.div>
        </section>

        <section
          className="grid min-h-[112px] grid-cols-1 items-center gap-[18px] border-y border-[var(--line)] py-5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-0"
          aria-label="Skills"
        >
          <span className="text-[18px] font-bold tracking-[0.15em] text-[var(--ink)] uppercase">
            Toolkit
          </span>
          <div className="toolkit-marquee">
            <div className="toolkit-track">
              {[false, true].map((duplicate) => (
                <div
                  className="toolkit-set"
                  aria-hidden={duplicate || undefined}
                  key={duplicate ? "duplicate" : "original"}
                >
                  {skills.map(({ name, Icon }) => (
                    <span className="toolkit-card" key={name}>
                      <span className="toolkit-icon">
                        <Icon />
                      </span>
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="flex flex-col items-center justify-center gap-1.5 border-t border-[var(--line)] px-4 py-8 text-center text-xs text-[var(--muted)]">
          <p>Design &amp; Developed by Aashish Rana</p>
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
      </Container>
    </main>
  );
}

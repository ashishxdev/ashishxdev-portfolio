import type { Metadata } from "next";
import { Container } from "../components/container";

export const metadata: Metadata = {
  title: "Contact | Aashish Rana",
  description: "Get in touch with Aashish Rana.",
};

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

export default function ContactPage() {
  return (
    <main>
      <Container className="min-h-[calc(100vh-94px)] px-5 py-16 md:px-[7vw]">
        <div className="space-y-8">
          <header className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Contact
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--muted)]">
              Have a project, opportunity, or idea? Let&apos;s talk about it.
            </p>
          </header>

          <hr className="border-0 border-t border-[var(--line)]" />

          <section
            className="grid overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] md:grid-cols-[0.9fr_1.1fr]"
            aria-labelledby="contact-title"
          >
            <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#171814] p-7 text-[#f4f1e9] md:p-10">
              <div className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-2 -bottom-32 size-80 rounded-full border border-white/10" />
              <div className="relative z-[1]">
                <p className="mb-5 text-[11px] font-bold tracking-[0.17em] text-white/55 uppercase">
                  Have an idea?
                </p>
                <h2
                  id="contact-title"
                  className="max-w-xl text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.9] font-semibold tracking-[-0.07em]"
                >
                  Let&apos;s make it{" "}
                  <span className="font-sans font-normal text-[var(--accent)]">
                    real.
                  </span>
                </h2>
              </div>
              <div className="relative z-[1] mt-12 flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold">
                <span className="size-2 animate-pulse rounded-full bg-[var(--accent)]" />
                Available for new opportunities
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
              <p className="text-xs font-bold tracking-[0.14em] text-[var(--muted)] uppercase">
                Start a conversation
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Tell me what you&apos;re building, the problem you&apos;re
                solving, or the role you have in mind. I&apos;ll get back to you
                as soon as I can.
              </p>

              <a
                className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--ink)]"
                href="mailto:ashishrana2004@gmail.com?subject=Let%27s%20work%20together"
                data-cursor="EMAIL"
              >
                <span className="min-w-0">
                  <span className="block text-xs font-bold text-[var(--muted)]">
                    Email me
                  </span>
                  <span className="mt-1 block truncate text-sm font-medium sm:text-base">
                    ashishrana2004@gmail.com
                  </span>
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-[#171814] [&_svg]:size-5 [&_svg]:transition-transform group-hover:[&_svg]:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                <a
                  href="https://github.com/ashishxdev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--line)] px-3 py-3 text-xs font-bold transition-colors hover:border-[var(--ink)] [&_svg]:size-4"
                >
                  <GithubIcon /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ashishxdev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--line)] px-3 py-3 text-xs font-bold transition-colors hover:border-[#0a66c2] [&_svg]:size-4"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
                <a
                  href="https://x.com/ashishd2dlife"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--line)] px-3 py-3 text-xs font-bold transition-colors hover:border-[var(--ink)] [&_svg]:size-4"
                >
                  <XIcon /> X
                </a>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Container } from "../container";

function ThemeSwitch() {
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="order-2 justify-self-end border-0 bg-transparent p-0 text-[var(--ink)] md:order-3"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span
        className="block h-[30px] w-[52px] rounded-full border border-[var(--line)] bg-[var(--surface)] p-[3px]"
        aria-hidden="true"
      >
        <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)] transition-all duration-500 ease-out dark:translate-x-[22px] dark:rotate-180">
          <svg
            className="h-3.5 w-3.5 dark:hidden"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="3.7" fill="currentColor" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hidden h-3.5 w-3.5 dark:block"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 15.2A8.2 8.2 0 0 1 8.8 4 8.2 8.2 0 1 0 20 15.2Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-[100] px-2.5 pt-2.5 md:px-5 md:pt-3.5">
      <Container className="rounded-[18px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_84%,transparent)] shadow-[0_8px_40px_rgb(0_0_0/5%)] backdrop-blur-lg">
        <nav
          className="grid min-h-[66px] grid-cols-[1fr_auto] items-center px-3 py-2 md:grid-cols-[1fr_auto_1fr] md:pl-3.5"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="order-1 flex w-max items-center gap-2.5"
            data-magnetic
            aria-label="Aashish Rana home"
          >
            <Image
              className="h-[42px] w-[42px] rounded-[13px] border border-[var(--line)] object-cover"
              src="/avatar.jpeg"
              height={44}
              width={44}
              alt="Aashish"
              priority
            />
          </Link>
          <div className="order-3 col-span-2 mt-1 grid w-full grid-cols-4 items-center border-t border-[var(--line)] pt-1 md:order-2 md:col-span-1 md:mt-0 md:flex md:border-0 md:p-1">
            {navItems.map((item, idx) => (
              <Link
                className={`relative px-1 py-2 text-center text-xs font-semibold transition-colors md:px-[13px] md:py-[9px] md:text-lg ${pathname === item.href ? "text-[var(--ink)]" : "text-[var(--muted)]"}`}
                href={item.href}
                key={item.title}
                aria-current={pathname === item.href ? "page" : undefined}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {(hovered === idx ||
                  (hovered === null && pathname === item.href)) && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0 rounded-[9px] bg-[var(--surface)] shadow-[0_3px_12px_rgb(0_0_0/6%)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-[1]">{item.title}</span>
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </nav>
      </Container>
    </header>
  );
};

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { usePointerFine } from "./hooks";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#________";

type ScrambleElement = HTMLElement & {
  scrambleTimer?: ReturnType<typeof setInterval>;
};

function scramble(element: ScrambleElement) {
  const original = element.dataset.text || element.textContent || "";
  element.dataset.text = original;

  let frame = 0;
  const totalFrames = 14;

  if (element.scrambleTimer) clearInterval(element.scrambleTimer);

  element.scrambleTimer = setInterval(() => {
    frame += 1;
    element.textContent = original
      .split("")
      .map((character, index) => {
        if (character === " ") return " ";
        const reveal = frame - index * 2;
        if (reveal > totalFrames / 2) return original[index];
        return SCRAMBLE_CHARS[
          Math.floor(Math.random() * SCRAMBLE_CHARS.length)
        ];
      })
      .join("");

    if (frame > totalFrames + original.length * 2) {
      clearInterval(element.scrambleTimer);
      element.textContent = original;
    }
  }, 28);
}

export default function Cursor() {
  const fine = usePointerFine();
  const pathname = usePathname();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const magnetTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!fine) return;

    document.body.classList.add("has-fine-cursor");

    const showCursor = () => document.body.classList.add("cursor-in-site");
    const hideCursor = () => {
      document.body.classList.remove("cursor-in-site");
      ringRef.current?.classList.remove("cur-ring--hover");
      labelRef.current?.classList.remove("cur-label--on");

      const target = magnetTarget.current;
      if (target) {
        target.classList.remove("magnet-active");
        target.style.transform = "";
        magnetTarget.current = null;
      }
    };

    const move = (event: MouseEvent) => {
      showCursor();
      position.current = { x: event.clientX, y: event.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }

      const target = magnetTarget.current;
      if (target) {
        const bounds = target.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const offsetX = (event.clientX - centerX) * 0.35;
        const offsetY = (event.clientY - centerY) * 0.35;
        target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    let animationFrame: number;
    const renderRing = () => {
      ringPosition.current.x +=
        (position.current.x - ringPosition.current.x) * 0.18;
      ringPosition.current.y +=
        (position.current.y - ringPosition.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosition.current.x}px, ${ringPosition.current.y}px)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${ringPosition.current.x + 26}px, ${ringPosition.current.y - 8}px)`;
      }

      animationFrame = requestAnimationFrame(renderRing);
    };

    animationFrame = requestAnimationFrame(renderRing);

    const enterMagnet = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      magnetTarget.current = element;
      element.classList.add("magnet-active");
    };
    const leaveMagnet = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      magnetTarget.current = null;
      element.classList.remove("magnet-active");
      element.style.transform = "";
    };
    const enterHover = () => ringRef.current?.classList.add("cur-ring--hover");
    const leaveHover = () =>
      ringRef.current?.classList.remove("cur-ring--hover");
    const enterScramble = (event: Event) =>
      scramble(event.currentTarget as ScrambleElement);
    const enterLabel = (event: Event) => {
      const text = (event.currentTarget as HTMLElement).dataset.cursor;
      if (!labelRef.current || !ringRef.current) return;
      labelRef.current.textContent = text ?? "";
      labelRef.current.classList.add("cur-label--on");
    };
    const leaveLabel = () =>
      labelRef.current?.classList.remove("cur-label--on");

    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const hoverables = Array.from(
      document.querySelectorAll<HTMLElement>("a, button"),
    );
    const scramblers = Array.from(
      document.querySelectorAll<ScrambleElement>("[data-scramble]"),
    );
    const labelled = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cursor]"),
    );

    magnets.forEach((element) => {
      element.addEventListener("mouseenter", enterMagnet);
      element.addEventListener("mouseleave", leaveMagnet);
    });
    hoverables.forEach((element) => {
      element.addEventListener("mouseenter", enterHover);
      element.addEventListener("mouseleave", leaveHover);
    });
    scramblers.forEach((element) =>
      element.addEventListener("mouseenter", enterScramble),
    );
    labelled.forEach((element) => {
      element.addEventListener("mouseenter", enterLabel);
      element.addEventListener("mouseleave", leaveLabel);
    });
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      document.body.classList.remove("has-fine-cursor");
      document.body.classList.remove("cursor-in-site");
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      cancelAnimationFrame(animationFrame);

      magnets.forEach((element) => {
        element.removeEventListener("mouseenter", enterMagnet);
        element.removeEventListener("mouseleave", leaveMagnet);
        element.classList.remove("magnet-active");
        element.style.transform = "";
      });
      hoverables.forEach((element) => {
        element.removeEventListener("mouseenter", enterHover);
        element.removeEventListener("mouseleave", leaveHover);
      });
      scramblers.forEach((element) => {
        element.removeEventListener("mouseenter", enterScramble);
        if (element.scrambleTimer) clearInterval(element.scrambleTimer);
      });
      labelled.forEach((element) => {
        element.removeEventListener("mouseenter", enterLabel);
        element.removeEventListener("mouseleave", leaveLabel);
      });
    };
  }, [fine, pathname]);

  if (!fine) return null;

  return (
    <>
      <div id="cur-dot" ref={dotRef} aria-hidden="true" />
      <div id="cur-ring" ref={ringRef} aria-hidden="true" />
      <div id="cur-label" ref={labelRef} aria-hidden="true" />
    </>
  );
}

"use client";

import { useSyncExternalStore } from "react";

const POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToPointerPreference(callback: () => void) {
  const mediaQuery = window.matchMedia(POINTER_QUERY);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getPointerPreference() {
  return window.matchMedia(POINTER_QUERY).matches;
}

function getServerPointerPreference() {
  return false;
}

export function usePointerFine() {
  return useSyncExternalStore(
    subscribeToPointerPreference,
    getPointerPreference,
    getServerPointerPreference,
  );
}

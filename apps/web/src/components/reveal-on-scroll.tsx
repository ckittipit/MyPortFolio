"use client";

import { useRevealAnimation } from "@/src/lib/animations";

export function RevealOnScroll() {
  useRevealAnimation(".reveal");
  return null;
}

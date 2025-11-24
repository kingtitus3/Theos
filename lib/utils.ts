import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ScrollTarget = string | HTMLElement | null;

export const scrollToTarget = (target: ScrollTarget) => {
  if (typeof window === "undefined" || !target) return;
  const element = typeof target === "string" ? document.querySelector(target) : target;
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

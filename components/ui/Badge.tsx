import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full bg-charcoal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal",
      className,
    )}
  >
    {children}
  </span>
);

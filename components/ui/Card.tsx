import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-sm backdrop-blur",
      className,
    )}
  >
    {children}
  </div>
);

"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helperText?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, className, id, ...props }, ref) => {
    const textareaId = id ?? props.name ?? label.replace(/\s+/g, "-").toLowerCase();
    return (
      <label className="flex flex-col gap-2 text-sm font-medium text-charcoal/80" htmlFor={textareaId}>
        {label}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "min-h-[140px] w-full rounded-xl border border-charcoal/10 bg-white/80 px-4 py-3 text-base text-charcoal placeholder:text-charcoal/50 focus:border-accent-brick focus:outline-none focus:ring-2 focus:ring-accent-brick/30",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
          {...props}
        />
        {helperText && !error && <span className="text-xs text-charcoal/60">{helperText}</span>}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </label>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };

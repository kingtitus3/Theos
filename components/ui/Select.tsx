"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  helperText?: string;
  error?: string;
  options: { label: string; value: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, helperText, error, className, id, options, ...props }, ref) => {
    const selectId = id ?? props.name ?? label.replace(/\s+/g, "-").toLowerCase();
    return (
      <label className="flex flex-col gap-2 text-sm font-medium text-charcoal/80" htmlFor={selectId}>
        {label}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "w-full appearance-none rounded-xl border border-charcoal/10 bg-white/80 px-4 py-3 text-base text-charcoal focus:border-accent-brick focus:outline-none focus:ring-2 focus:ring-accent-brick/30",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              className,
            )}
            {...props}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-charcoal/50">
            v
          </span>
        </div>
        {helperText && !error && <span className="text-xs text-charcoal/60">{helperText}</span>}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </label>
    );
  },
);

Select.displayName = "Select";

export { Select };

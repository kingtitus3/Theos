"use client";

import { Button } from "@/components/ui/Button";
import { scrollToTarget } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ScrollToContactButtonProps {
  label: string;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function ScrollToContactButton({
  label,
  className,
  variant = "primary",
  size = "md",
}: ScrollToContactButtonProps) {
  const handleClick = () => {
    scrollToTarget("#contact");
  };

  const buttonVariant =
    variant === "outline" ? "outline" : variant === "ghost" ? "ghost" : "default";

  return (
    <Button
      size={size === "sm" ? "sm" : size === "lg" ? "lg" : undefined}
      variant={buttonVariant === "default" ? undefined : (buttonVariant as any)}
      className={cn(className)}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}



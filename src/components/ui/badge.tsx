import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" &&
          "bg-primary-100 text-accent-800",
        variant === "accent" && "bg-accent-100 text-accent-800",
        variant === "outline" && "border border-primary-300 text-primary-700",
        className,
      )}
      {...props}
    />
  );
}

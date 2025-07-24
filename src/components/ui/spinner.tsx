"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary";
  label?: string;
  fullPage?: boolean;
}

export function Spinner({
  size = "md",
  variant = "default",
  className,
  label,
  fullPage = false,
  ...props
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
    xl: "h-16 w-16 border-4",
  };

  const variantClasses = {
    default: "border-gray-300 border-t-gray-600",
    primary: "border-gray-200 border-t-[#7F65CA]",
    secondary: "border-gray-200 border-t-[#282828]",
  };

  const wrapperClasses = fullPage
    ? "fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50"
    : "flex items-center justify-center";

  return (
    <div
      className={cn(wrapperClasses, className)}
      {...props}
      aria-live="polite"
      role="status"
    >
      <div
        className={cn(
          "animate-spin rounded-full",
          sizeClasses[size],
          variantClasses[variant]
        )}
      />
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
      )}
      {label ? null : <span className="sr-only">Loading...</span>}
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-offset-2";

const variants: Record<string, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.98]",
  outline:
    "border border-slate-300 text-navy-900 hover:border-violet-600 hover:text-violet-700 hover:bg-violet-50 active:scale-[0.98]",
  ghost: "text-navy-900 hover:text-violet-700 hover:bg-violet-50",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

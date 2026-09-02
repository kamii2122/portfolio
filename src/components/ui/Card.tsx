import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
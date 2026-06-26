import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-card bg-surface-card p-6 shadow-card ${hover ? "transition-shadow duration-300 hover:shadow-card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

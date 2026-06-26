interface BadgeProps {
  children: string;
  variant?: "default" | "accent" | "sage";
  className?: string;
}

const variantClasses = {
  default: "bg-cream text-ink-muted",
  accent: "bg-blush/20 text-blush-deep",
  sage: "bg-sage/20 text-sage-deep",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wider uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

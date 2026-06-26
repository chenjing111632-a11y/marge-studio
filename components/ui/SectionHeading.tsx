interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-ink-muted">
          {label}
        </p>
      )}
      <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

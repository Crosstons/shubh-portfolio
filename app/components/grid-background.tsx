type GridBackgroundProps = {
  variant?: "dots" | "lines";
  className?: string;
};

export function GridBackground({
  variant = "dots",
  className = "",
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${variant === "dots" ? "bg-dot-grid" : "bg-line-grid"} ${className}`}
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        opacity: 0.4,
      }}
    />
  );
}

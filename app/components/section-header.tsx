import { Reveal } from "./reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  heading?: string;
};

export function SectionHeader({ index, label, heading }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-[var(--space-md)] mb-[var(--space-3xl)]">
        <span className="hud-index">{index}</span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--border)" }}
        />
        <span className="hud-label">{label}</span>
      </div>
      {heading && (
        <h2
          className="font-display font-bold tracking-tight"
          style={{
            fontSize: "var(--text-3xl)",
            lineHeight: "var(--leading-tight)",
            color: "var(--text-primary)",
            marginBottom: "var(--space-3xl)",
          }}
        >
          {heading}
        </h2>
      )}
    </Reveal>
  );
}

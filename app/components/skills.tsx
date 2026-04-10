import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

const PRIMARY_STACK = [
  { name: "TypeScript", weight: 95 },
  { name: "React 19 / Next.js 16", weight: 92 },
  { name: "Tailwind CSS 4", weight: 88 },
  { name: "TanStack Query v5", weight: 85 },
];

const SKILL_GROUPS = [
  {
    label: "State & Data",
    items: "Zustand / React Hook Form / Zod / TanStack Query",
  },
  {
    label: "Backend",
    items: "Laravel / REST APIs / Strapi 5 CMS / WebSockets",
  },
  {
    label: "Testing",
    items: "Jest / Vitest / fast-check (property-based)",
  },
  {
    label: "Web3 & Protocol",
    items: "ATProto / Blockchain integrations / DApp interfaces",
  },
  {
    label: "Tooling",
    items: "tsup / Storybook / npm Publishing / Razorpay / Stripe",
  },
];

export function Skills() {
  return (
    <section
      style={{ padding: "clamp(var(--space-4xl), 10vw, var(--space-5xl)) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <SectionHeader index="04" label="Capabilities" />

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(var(--space-2xl), 6vw, var(--space-5xl))",
            alignItems: "start",
          }}
        >
          {/* Primary stack — left col */}
          <div>
            <p
              className="hud-label"
              style={{ marginBottom: "var(--space-xl)" }}
            >
              Primary stack
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
              {PRIMARY_STACK.map((skill, i) => (
                <Reveal key={skill.name} delay={i * 0.07}>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-sm)",
                        letterSpacing: "0.04em",
                        color: "var(--text-primary)",
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      {skill.name}
                    </p>
                    {/* Decorative bar — purely visual, no explicit percentage label */}
                    <div
                      style={{
                        height: "1px",
                        background: "var(--border)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      aria-hidden="true"
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "var(--accent-dim)",
                          width: `${skill.weight}%`,
                          transformOrigin: "left",
                          animation: "line-grow 800ms cubic-bezier(0.16,1,0.3,1) both",
                          animationDelay: `${i * 80 + 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Other skills — right col */}
          <div>
            <p
              className="hud-label"
              style={{ marginBottom: "var(--space-xl)" }}
            >
              Also proficient in
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
              {SKILL_GROUPS.map((group, i) => (
                <Reveal key={group.label} delay={i * 0.06}>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--accent-dim)",
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      {group.label}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        lineHeight: "var(--leading-relaxed)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {group.items}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <section
      style={{ padding: "clamp(var(--space-3xl), 6vw, var(--space-4xl)) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--container-narrow)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <SectionHeader index="05" label="Education" />

        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "var(--space-2xl)",
            }}
          >
            {/* Large GPA — data-viz anchor */}
            <div style={{ flexShrink: 0 }}>
              <p
                className="font-display font-bold"
                style={{
                  fontSize: "var(--text-3xl)",
                  lineHeight: 1,
                  color: "var(--accent)",
                }}
                aria-label="CGPA 9.2 out of 10"
              >
                9.2
              </p>
              <p className="hud-label" style={{ marginTop: "var(--space-xs)" }}>
                CGPA / 10
              </p>
            </div>

            {/* Details */}
            <div style={{ paddingTop: "4px" }}>
              <h3
                className="font-display font-semibold"
                style={{
                  fontSize: "var(--text-lg)",
                  lineHeight: "var(--leading-snug)",
                  color: "var(--text-primary)",
                }}
              >
                B.E. Computer Science Engineering
              </h3>
              <p
                style={{
                  marginTop: "var(--space-xs)",
                  fontSize: "var(--text-base)",
                  color: "var(--text-secondary)",
                }}
              >
                New L J Institute of Engineering and Technology
              </p>
              <p
                className="hud-label"
                style={{ marginTop: "var(--space-sm)" }}
              >
                Nov 2021 — May 2025
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

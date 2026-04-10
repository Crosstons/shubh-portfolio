import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

const CONTRIBUTIONS = [
  {
    title: "Job-level tracing in Telegram Miniapp",
    repo: "tg-miniapp",
    pr: "#219",
    href: "https://github.com/storacha/tg-miniapp/pull/219",
  },
  {
    title: "HTTP error handling in ucanto RPC",
    repo: "ucanto",
    pr: "#375",
    href: "https://github.com/storacha/ucanto/pull/375",
  },
  {
    title: "Documentation restructuring across 15+ packages",
    repo: "ucanto",
    pr: "#372",
    href: "https://github.com/storacha/ucanto/pull/372",
  },
];

export function OpenSource() {
  return (
    <section
      style={{ padding: "clamp(var(--space-3xl), 8vw, var(--space-5xl)) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--container-narrow)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <SectionHeader index="03" label="Open Source" />

        <div>
          {CONTRIBUTIONS.map((item, i) => (
            <Reveal key={item.pr} delay={i * 0.07}>
              <a
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                className="os-row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "var(--space-xs) var(--space-xl)",
                  padding: "var(--space-md) var(--space-sm)",
                  borderTop: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  transition: "background var(--duration-fast) var(--ease-out-quart)",
                  borderRadius: "2px",
                  margin: "0 calc(var(--space-sm) * -1)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-secondary)",
                    lineHeight: "var(--leading-snug)",
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.repo}{item.pr}
                </span>
              </a>
            </Reveal>
          ))}
          <div style={{ height: "1px", background: "var(--border-subtle)", marginTop: 0 }} />
        </div>
      </div>

      <style>{`
        .os-row:hover {
          background: var(--surface-raised);
        }
        .os-row:hover span:first-child {
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}

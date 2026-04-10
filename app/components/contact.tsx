import { GridBackground } from "./grid-background";
import { Reveal } from "./reveal";

const CONTACT_DATA = [
  { label: "Email", value: "shubh1608003@gmail.com", href: "mailto:shubh1608003@gmail.com" },
  { label: "Phone", value: "+91-7043844884", href: "tel:+917043844884" },
  { label: "Location", value: "Ahmedabad, India", href: null },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "var(--surface-deep)",
        padding: "clamp(var(--space-4xl), 12vw, var(--space-6xl)) 0",
      }}
    >
      <GridBackground variant="dots" />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        {/* Section label */}
        <Reveal>
          <p
            className="hud-label"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            06 / Contact
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.08}>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "var(--text-3xl)",
              lineHeight: "var(--leading-tight)",
              color: "var(--text-primary)",
              maxWidth: "18ch",
              marginBottom: "var(--space-3xl)",
            }}
          >
            Let&apos;s build something together.
          </h2>
        </Reveal>

        {/* Data block */}
        <Reveal delay={0.16}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, max-content))",
              gap: "var(--space-2xl) var(--space-4xl)",
            }}
          >
            {CONTACT_DATA.map(({ label, value, href }) => (
              <div key={label}>
                <p
                  className="hud-label"
                  style={{ marginBottom: "var(--space-xs)" }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="contact-link"
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      transition: "color var(--duration-fast) var(--ease-out-quart)",
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom coordinate label */}
        <Reveal delay={0.24}>
          <p
            className="hud-label"
            style={{ marginTop: "var(--space-4xl)", opacity: 0.5 }}
            aria-hidden="true"
          >
            23.0225° N, 72.5714° E
          </p>
        </Reveal>
      </div>

      <style>{`
        .contact-link:hover { color: var(--accent); }
      `}</style>
    </section>
  );
}

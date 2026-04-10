"use client";

const NAV_LINKS = [
  { index: "01", label: "Experience", href: "#experience" },
  { index: "02", label: "Projects", href: "#projects" },
  { index: "03", label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between"
      style={{
        padding: "0 var(--space-lg)",
        height: "56px",
        background: "oklch(10% 0.008 80 / 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Logo */}
      <a
        href="#main"
        className="hud-index flex items-center gap-1 no-underline"
        style={{ color: "var(--text-primary)" }}
        aria-label="Shubh Patel — home"
      >
        SP
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent)",
            animation: "blink 1.4s step-end infinite",
            marginLeft: "2px",
            marginBottom: "1px",
          }}
        />
      </a>

      {/* Links + Resume */}
      <div className="nav-right flex items-center" style={{ gap: "var(--space-xl)" }}>
      <ul className="nav-links flex items-center list-none" style={{ gap: "var(--space-xl)", margin: 0, padding: 0 }}>
        {NAV_LINKS.map(({ index, label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link relative no-underline flex items-baseline"
              style={{
                gap: "var(--space-xs)",
                padding: "var(--space-sm) 0",
                color: "var(--text-muted)",
                transition: "color var(--duration-fast) var(--ease-out-quart)",
              }}
            >
              <span
                className="hud-index"
                style={{ color: "inherit", fontSize: "0.65rem" }}
              >
                [{index}]
              </span>
              <span
                className="nav-link-label"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Resume download */}
      <a
        href="/Shubh-Resume-2026.pdf"
        download
        className="resume-btn"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          border: "1px solid var(--accent-dim)",
          borderRadius: "2px",
          padding: "5px 12px",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Résumé
      </a>
      </div>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--duration-fast) var(--ease-out-quart);
        }
        .nav-link:hover,
        .nav-link:focus-visible {
          color: var(--accent);
        }
        .nav-link:hover::after,
        .nav-link:focus-visible::after {
          transform: scaleX(1);
        }
        .resume-btn {
          color: var(--accent);
          transition: background var(--duration-fast) var(--ease-out-quart),
                      color var(--duration-fast) var(--ease-out-quart),
                      border-color var(--duration-fast) var(--ease-out-quart);
        }
        .resume-btn:hover {
          background: var(--accent);
          color: var(--surface-deep);
          border-color: var(--accent);
        }
        @media (max-width: 480px) {
          .nav-link-label { display: none; }
          .nav-links { gap: var(--space-md) !important; }
        }
        @media (max-width: 360px) {
          .resume-btn { display: none; }
        }
      `}</style>
    </nav>
  );
}

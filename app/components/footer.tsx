export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-lg) var(--space-lg)",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-lg)",
        }}
      >
        <p className="hud-label">
          &copy; {new Date().getFullYear()} Shubh Patel
        </p>
        <p className="hud-label" aria-hidden="true">
          Designed &amp; built by SP
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-xs) !important;
          }
        }
      `}</style>
    </footer>
  );
}

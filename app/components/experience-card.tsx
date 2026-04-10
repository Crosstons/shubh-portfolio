"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

type ExperienceCardProps = {
  index: number;
  period: string;
  location: string;
  title: string;
  company: string;
  bullets: (string | React.ReactNode)[];
  tags: string[];
  prominent?: boolean;
};

export function ExperienceCard({
  index,
  period,
  location,
  title,
  company,
  bullets,
  tags,
  prominent = false,
}: ExperienceCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        className="exp-card"
        whileHover={{ backgroundColor: "var(--surface-raised)" }}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(140px, 18%, 200px) 1fr",
          gap: "var(--space-2xl)",
          padding: "var(--space-xl) var(--space-md)",
          margin: "0 calc(var(--space-md) * -1)",
          borderRadius: "3px",
        }}
      >
        {/* Date column */}
        <div style={{ paddingTop: "4px" }}>
          <time
            className="hud-label"
            style={{ display: "block", lineHeight: "var(--leading-relaxed)" }}
          >
            {period}
          </time>
          <span
            className="hud-label"
            style={{ display: "block", marginTop: "var(--space-xs)", opacity: 0.65 }}
          >
            {location}
          </span>
        </div>

        {/* Content column */}
        <div>
          <h3
            className="font-display font-semibold"
            style={{
              fontSize: prominent ? "var(--text-xl)" : "var(--text-lg)",
              lineHeight: "var(--leading-snug)",
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              marginTop: "var(--space-2xs)",
              fontSize: "var(--text-base)",
              fontWeight: 500,
              color: "var(--accent-dim)",
            }}
          >
            {company}
          </p>

          <ul
            style={{
              marginTop: "var(--space-md)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
              listStyle: "none",
              padding: 0,
              maxWidth: "62ch",
            }}
          >
            {bullets.map((bullet, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "var(--space-sm)",
                  fontSize: "var(--text-base)",
                  lineHeight: "var(--leading-normal)",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-sm)",
                    color: "var(--accent-dim)",
                    marginTop: "2px",
                    flexShrink: 0,
                    userSelect: "none",
                  }}
                  aria-hidden="true"
                >
                  —
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p
            style={{
              marginTop: "var(--space-md)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.06em",
              color: "var(--text-muted)",
            }}
          >
            {tags.join(" / ")}
          </p>
        </div>
      </motion.article>

      <style>{`
        @media (max-width: 600px) {
          .exp-card {
            grid-template-columns: 1fr !important;
            gap: var(--space-sm) !important;
          }
        }
      `}</style>
    </Reveal>
  );
}

"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";
import { HorizontalRule } from "./horizontal-rule";

type ProjectCardProps = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  demoHref?: string;
  sourceHref?: string;
  isLast?: boolean;
};

function ProjectLink({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  const isExternal = href !== "#";
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: primary ? "var(--accent)" : "var(--text-muted)",
        textDecoration: "none",
      }}
      whileHover="hovered"
      initial="rest"
    >
      {label}
      <motion.svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        aria-hidden="true"
        variants={{
          rest: { x: 0, opacity: 0.7 },
          hovered: { x: 3, opacity: 1 },
        }}
        transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
      >
        <path
          d="M1 5.5h9M6 1.5l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.a>
  );
}

export function ProjectCard({
  number,
  title,
  subtitle,
  description,
  tags,
  demoHref = "#",
  sourceHref = "#",
  isLast = false,
}: ProjectCardProps) {
  return (
    <>
      <Reveal>
        <motion.article
          className="proj-card"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr clamp(220px, 32%, 340px)",
            gap: "var(--space-3xl)",
            padding: "var(--space-2xl) var(--space-md)",
            margin: "0 calc(var(--space-md) * -1)",
            borderRadius: "3px",
            alignItems: "start",
            position: "relative",
          }}
          whileHover="hovered"
          initial="rest"
        >
          {/* Left — content */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-md)" }}>
              <motion.span
                className="hud-index"
                style={{ fontSize: "var(--text-base)", flexShrink: 0 }}
                aria-hidden="true"
                variants={{
                  rest: { color: "var(--accent-dim)" },
                  hovered: { color: "var(--accent)" },
                }}
                transition={{ duration: 0.2 }}
              >
                {number}
              </motion.span>

              <motion.h3
                className="font-display font-semibold"
                style={{
                  fontSize: "var(--text-xl)",
                  lineHeight: "var(--leading-snug)",
                }}
                variants={{
                  rest: { color: "var(--text-primary)" },
                  hovered: { color: "var(--accent)" },
                }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
            </div>

            <p
              className="hud-label"
              style={{
                marginTop: "var(--space-xs)",
                marginLeft: "calc(1em + var(--space-md))",
              }}
            >
              {subtitle}
            </p>

            <p
              style={{
                marginTop: "var(--space-md)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-normal)",
                color: "var(--text-secondary)",
                maxWidth: "55ch",
              }}
            >
              {description}
            </p>

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

            <div
              style={{
                display: "flex",
                gap: "var(--space-xl)",
                marginTop: "var(--space-lg)",
              }}
            >
              <ProjectLink href={demoHref} label="Live Demo" primary />
              <ProjectLink href={sourceHref} label="Source" />
            </div>
          </div>

          {/* Right — image placeholder */}
          <motion.div
            className="proj-preview"
            style={{
              aspectRatio: "16/9",
              border: "1px dashed var(--border)",
              borderRadius: "2px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-xs)",
            }}
            variants={{
              rest: { backgroundColor: "var(--surface-raised)" },
              hovered: { backgroundColor: "var(--surface-overlay)" },
            }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <span className="hud-label" style={{ opacity: 0.45 }}>
              Preview
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                opacity: 0.45,
              }}
            >
              coming soon
            </span>
          </motion.div>

          {/* Full-card background overlay — behind content */}
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "3px",
              pointerEvents: "none",
              zIndex: -1,
            }}
            variants={{
              rest: { backgroundColor: "transparent" },
              hovered: { backgroundColor: "var(--surface-raised)" },
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.article>
      </Reveal>

      {!isLast && <HorizontalRule />}

      <style>{`
        @media (max-width: 768px) {
          .proj-card {
            grid-template-columns: 1fr !important;
            gap: var(--space-xl) !important;
          }
          .proj-preview {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

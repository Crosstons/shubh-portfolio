"use client";

import { motion, useReducedMotion } from "motion/react";
import { GridBackground } from "./grid-background";

const STAGGER = 0.1;

function FadeUp({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: reduced ? 0 : delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        minHeight: "100svh",
        paddingTop: "56px", /* nav height */
        background: "var(--surface-deep)",
      }}
      aria-label="Introduction"
    >
      {/* Grid background */}
      <GridBackground variant="dots" />

      {/* Radial vignette overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 80%, transparent 0%, var(--surface-deep) 75%)",
        }}
      />

      {/* Content */}
      <div
        className="relative"
        style={{
          maxWidth: "var(--container-max)",
          width: "100%",
          margin: "0 auto",
          padding: "clamp(var(--space-3xl), 8vw, var(--space-6xl)) var(--space-lg)",
        }}
      >
        {/* Coordinate label */}
        <FadeUp delay={0}>
          <p
            className="hud-label"
            style={{ marginBottom: "var(--space-xl)", color: "var(--text-muted)" }}
          >
            AHM.IN&nbsp;&nbsp;//&nbsp;&nbsp;2025&nbsp;&nbsp;//&nbsp;&nbsp;FULL-STACK
          </p>
        </FadeUp>

        {/* Role tag */}
        <FadeUp delay={STAGGER}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Software Developer
          </p>
        </FadeUp>

        {/* Name — the centrepiece */}
        <FadeUp delay={STAGGER * 2}>
          <h1
            className="font-display font-bold tracking-tight"
            style={{
              fontSize: "var(--text-4xl)",
              lineHeight: "var(--leading-tight)",
              color: "var(--text-primary)",
              maxWidth: "14ch",
            }}
          >
            Shubh<br />Patel
          </h1>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={STAGGER * 3}>
          <p
            style={{
              marginTop: "var(--space-2xl)",
              fontSize: "var(--text-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--text-secondary)",
              maxWidth: "52ch",
            }}
          >
            I build production-grade web applications with TypeScript, React,
            and Next.js. Architected a 7-app platform with 560+ components
            powering India&apos;s grassroots football ecosystem. Open source
            contributor to decentralized protocol tooling.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={STAGGER * 4}>
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "var(--space-md)", marginTop: "var(--space-2xl)" }}
          >
            <a
              href="mailto:shubh1608003@gmail.com"
              className="cta-primary inline-flex items-center"
              style={{
                gap: "var(--space-xs)",
                padding: "var(--space-sm) var(--space-lg)",
                background: "var(--accent)",
                color: "var(--surface-deep)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                borderRadius: "2px",
                textDecoration: "none",
                transition: "filter var(--duration-fast) var(--ease-out-quart), transform var(--duration-fast) var(--ease-out-quart)",
              }}
            >
              Get in touch
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://github.com/Crosstons"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost inline-flex items-center"
              style={{
                gap: "var(--space-xs)",
                padding: "var(--space-sm) var(--space-lg)",
                color: "var(--text-secondary)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                border: "1px solid var(--border)",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "color var(--duration-fast) var(--ease-out-quart), border-color var(--duration-fast) var(--ease-out-quart)",
              }}
            >
              GitHub
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shubh-patel-288349224/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost inline-flex items-center"
              style={{
                gap: "var(--space-xs)",
                padding: "var(--space-sm) var(--space-lg)",
                color: "var(--text-secondary)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                border: "1px solid var(--border)",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "color var(--duration-fast) var(--ease-out-quart), border-color var(--duration-fast) var(--ease-out-quart)",
              }}
            >
              LinkedIn
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </FadeUp>


      </div>

      <style>{`
        .cta-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .cta-ghost:hover { color: var(--text-primary); border-color: var(--accent-dim); }
      `}</style>
    </section>
  );
}

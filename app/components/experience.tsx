import { Fragment } from "react";
import { SectionHeader } from "./section-header";
import { ExperienceCard } from "./experience-card";
import { GridBackground } from "./grid-background";

const EXPERIENCE = [
  {
    period: "Jun 2024 — Present",
    location: "Ahmedabad",
    title: "Frontend Developer Lead & Co-Founder",
    company: "Club Duelz",
    prominent: true,
    bullets: [
      "Architected 7 independent Next.js applications serving India's grassroots football ecosystem across auth, player, organization, admin, and marketing portals.",
      <Fragment key="npm-library">
        Published{" "}
        <code
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.82em",
            background: "var(--accent-subtle)",
            color: "var(--accent)",
            padding: "1px 6px",
            borderRadius: "2px",
          }}
        >
          @duelz-labs/common
        </code>{" "}
        npm library — 56 components, 28 API modules, 55+ TanStack Query hooks, 4 Zustand stores.
      </Fragment>,
      "Built real-time WebSocket live match scoring system with auto-reconnect and pitch visualization.",
      "Implemented cookie-based JWT authentication across subdomains with Google OAuth and OTP verification.",
      "Integrated Razorpay payments, QR ticketing, and Strapi CMS for e-commerce APIs.",
    ],
    tags: ["Next.js 16", "TypeScript", "React 19", "Zustand", "TanStack Query", "WebSockets", "Tailwind 4"],
  },
  {
    period: "Jan 2025 — Aug 2025",
    location: "Remote",
    title: "Guild Member, Cohort 2 & 3",
    company: "Protocol Labs Dev Guild",
    prominent: false,
    bullets: [
      "Delivered production features for Storacha decentralized storage ecosystem.",
      "Led documentation restructuring across 15+ package monorepo (ucanto).",
      "Fixed HTTP error handling in ucanto RPC, improving API reliability.",
      "Mentored developers in a 50+ member global community.",
    ],
    tags: ["React", "Node.js", "Web3", "ATProto", "Open Source"],
  },
  {
    period: "Jan 2025 — Sep 2025",
    location: "Ahmedabad",
    title: "Full Stack Developer",
    company: "Concetto Labs",
    prominent: false,
    bullets: [
      "Developed Laravel backend services for a food delivery platform.",
      "Implemented WebSocket-based live driver tracking and order assignment.",
      "Integrated Stripe Connect payouts for automated driver earnings.",
      "Optimized API response times and database performance.",
    ],
    tags: ["Laravel", "PHP", "WebSockets", "Stripe", "PostgreSQL"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden"
      style={{ padding: "clamp(var(--space-4xl), 10vw, var(--space-6xl)) 0" }}
    >
      <GridBackground variant="lines" className="opacity-30" />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <SectionHeader index="01" label="Experience" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company}>
              <ExperienceCard index={i} {...exp} />
              {i < EXPERIENCE.length - 1 && (
                <div
                  style={{ height: "1px", background: "var(--border-subtle)", margin: "0" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

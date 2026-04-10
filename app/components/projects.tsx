import { SectionHeader } from "./section-header";
import { ProjectCard } from "./project-card";

const PROJECTS = [
  {
    number: "01",
    title: "Club Duelz",
    subtitle: "Multi-app platform · India",
    description:
      "Full-stack platform spanning 7 applications for India's grassroots football ecosystem. Centralized npm component library, tournament brackets, live WebSocket scoring, Razorpay ticketing, DAU analytics, and ML-based NSFW detection.",
    tags: ["Next.js 16", "TypeScript", "Zustand", "TanStack Query", "Razorpay", "WebSockets"],
    demoHref: "https://www.clubduelz.in/",
  },
  {
    number: "02",
    title: "Bluesky Backup Webapp",
    subtitle: "Storacha · Open Source",
    description:
      "Core maintainer of a full-stack ATProto backup application with automated scheduling and zero-data-loss reconnection logic. Collaborated with 10+ contributors across the open source ecosystem.",
    tags: ["React", "Node.js", "ATProto", "Storacha", "TypeScript"],
    sourceHref: "https://github.com/storacha/bluesky-backup-webapp-server",
  },
  {
    number: "03",
    title: "ATProto Visualization",
    subtitle: "React Component Library",
    description:
      "Type-safe React component library for ATProto data visualization. Tree-shakeable Vite-bundled modules with strict ESLint and full TypeScript coverage enforced across the entire API surface.",
    tags: ["React", "TypeScript", "Vite", "ATProto", "ESLint"],
    sourceHref: "https://github.com/storacha/atproto-react-viz",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "clamp(var(--space-4xl), 10vw, var(--space-6xl)) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <SectionHeader index="02" label="Projects" heading="Selected Work" />

        <div>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.number}
              {...project}
              isLast={i === PROJECTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-[var(--space-lg)] py-[var(--space-md)] flex items-center justify-between backdrop-blur-md bg-[var(--surface-base)]/80 border-b border-[var(--border-subtle)]">
        <span className="font-display text-[var(--text-sm)] font-semibold tracking-wide uppercase text-[var(--text-secondary)]">
          SP
        </span>
        <div className="flex items-center gap-[var(--space-lg)]">
          {["Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[var(--text-sm)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main id="main" className="flex-1">
        {/* ─── Hero ─── */}
        <section className="min-h-svh flex flex-col justify-end px-[var(--space-lg)] pb-[var(--space-4xl)] pt-[var(--space-4xl)] max-w-[1100px] mx-auto">
          <div className="animate-fade-up" style={{ "--stagger": 0 } as React.CSSProperties}>
            <p className="text-[var(--text-sm)] font-medium text-[var(--accent)] tracking-widest uppercase mb-[var(--space-lg)]">
              Software Developer
            </p>
          </div>
          <h1
            className="font-display text-[var(--text-3xl)] font-bold leading-[var(--leading-tight)] tracking-tight max-w-[18ch] animate-fade-up"
            style={{ "--stagger": 1 } as React.CSSProperties}
          >
            Shubh Patel
          </h1>
          <p
            className="mt-[var(--space-xl)] text-[var(--text-lg)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)] max-w-[55ch] animate-fade-up"
            style={{ "--stagger": 2 } as React.CSSProperties}
          >
            I build production-grade web applications with TypeScript, React, and Next.js.
            Architected a 7-app platform with 560+ components powering India&apos;s grassroots
            football ecosystem. Open source contributor to decentralized protocol tooling.
          </p>
          <div
            className="flex flex-wrap items-center gap-[var(--space-md)] mt-[var(--space-2xl)] animate-fade-up"
            style={{ "--stagger": 3 } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-[var(--space-xs)] px-[var(--space-lg)] py-[var(--space-sm)] bg-[var(--accent)] text-[var(--surface-base)] text-[var(--text-sm)] font-semibold rounded-sm transition-all hover:brightness-110"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://github.com/shubh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[var(--space-xs)] px-[var(--space-lg)] py-[var(--space-sm)] text-[var(--text-secondary)] text-[var(--text-sm)] font-medium border border-[var(--border)] rounded-sm transition-all hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              GitHub
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <a
              href="https://linkedin.com/in/shubh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[var(--space-xs)] px-[var(--space-lg)] py-[var(--space-sm)] text-[var(--text-secondary)] text-[var(--text-sm)] font-medium border border-[var(--border)] rounded-sm transition-all hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              LinkedIn
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </section>

        {/* ─── Experience ─── */}
        <section id="experience" className="px-[var(--space-lg)] py-[var(--space-4xl)] max-w-[1100px] mx-auto">
          <h2 className="font-display text-[var(--text-xs)] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-[var(--space-3xl)]">
            Experience
          </h2>

          <div className="flex flex-col gap-[var(--space-3xl)]">
            {/* Club Duelz */}
            <article className="grid grid-cols-1 gap-[var(--space-md)] md:grid-cols-[200px_1fr] md:gap-[var(--space-2xl)]">
              <div className="flex flex-col">
                <time className="text-[var(--text-sm)] text-[var(--text-muted)] tabular-nums">
                  Jun 2024 &mdash; Present
                </time>
                <span className="text-[var(--text-xs)] text-[var(--text-muted)] mt-[var(--space-2xs)]">
                  Ahmedabad
                </span>
              </div>
              <div>
                <h3 className="font-display text-[var(--text-xl)] font-semibold leading-[var(--leading-snug)]">
                  Frontend Developer Lead & Co-Founder
                </h3>
                <p className="text-[var(--accent-dim)] text-[var(--text-base)] font-medium mt-[var(--space-2xs)]">
                  Club Duelz
                </p>
                <ul className="mt-[var(--space-md)] flex flex-col gap-[var(--space-sm)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--text-secondary)] max-w-[65ch]">
                  <li>Architected 7 independent Next.js applications serving India&apos;s grassroots football ecosystem across auth, player, organization, admin, and marketing portals.</li>
                  <li>Published <code className="text-[var(--text-sm)] text-[var(--accent)] bg-[var(--accent-subtle)] px-[6px] py-[2px] rounded-sm">@duelz-labs/common</code> npm library with 56 components, 28 API modules, 55+ TanStack Query hooks, and 4 Zustand stores.</li>
                  <li>Built real-time WebSocket live match scoring system with auto-reconnect and pitch visualization.</li>
                  <li>Implemented cookie-based JWT authentication across subdomains with Google OAuth and OTP verification.</li>
                  <li>Integrated Razorpay payments, QR ticketing, and Strapi CMS for e-commerce APIs.</li>
                </ul>
                <div className="mt-[var(--space-md)] flex flex-wrap gap-[var(--space-xs)]">
                  {["Next.js 16", "TypeScript", "React 19", "Zustand", "TanStack Query", "WebSockets", "Tailwind CSS"].map((tag) => (
                    <span key={tag} className="text-[var(--text-xs)] text-[var(--text-muted)] border border-[var(--border-subtle)] px-[var(--space-xs)] py-[var(--space-2xs)] rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Protocol Labs */}
            <article className="grid grid-cols-1 gap-[var(--space-md)] md:grid-cols-[200px_1fr] md:gap-[var(--space-2xl)]">
              <div className="flex flex-col">
                <time className="text-[var(--text-sm)] text-[var(--text-muted)] tabular-nums">
                  Jan 2025 &mdash; Aug 2025
                </time>
                <span className="text-[var(--text-xs)] text-[var(--text-muted)] mt-[var(--space-2xs)]">
                  Remote
                </span>
              </div>
              <div>
                <h3 className="font-display text-[var(--text-xl)] font-semibold leading-[var(--leading-snug)]">
                  Guild Member, Cohort 2 & 3
                </h3>
                <p className="text-[var(--accent-dim)] text-[var(--text-base)] font-medium mt-[var(--space-2xs)]">
                  Protocol Labs Dev Guild
                </p>
                <ul className="mt-[var(--space-md)] flex flex-col gap-[var(--space-sm)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--text-secondary)] max-w-[65ch]">
                  <li>Delivered production features for Storacha decentralized storage ecosystem.</li>
                  <li>Led documentation restructuring across 15+ package monorepo (ucanto).</li>
                  <li>Fixed HTTP error handling in ucanto RPC, improving API reliability.</li>
                  <li>Mentored developers in a 50+ member global community.</li>
                </ul>
                <div className="mt-[var(--space-md)] flex flex-wrap gap-[var(--space-xs)]">
                  {["React", "Node.js", "Web3", "ATProto", "Open Source"].map((tag) => (
                    <span key={tag} className="text-[var(--text-xs)] text-[var(--text-muted)] border border-[var(--border-subtle)] px-[var(--space-xs)] py-[var(--space-2xs)] rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Concetto Labs */}
            <article className="grid grid-cols-1 gap-[var(--space-md)] md:grid-cols-[200px_1fr] md:gap-[var(--space-2xl)]">
              <div className="flex flex-col">
                <time className="text-[var(--text-sm)] text-[var(--text-muted)] tabular-nums">
                  Jan 2025 &mdash; Sep 2025
                </time>
                <span className="text-[var(--text-xs)] text-[var(--text-muted)] mt-[var(--space-2xs)]">
                  Ahmedabad
                </span>
              </div>
              <div>
                <h3 className="font-display text-[var(--text-xl)] font-semibold leading-[var(--leading-snug)]">
                  Full Stack Developer
                </h3>
                <p className="text-[var(--accent-dim)] text-[var(--text-base)] font-medium mt-[var(--space-2xs)]">
                  Concetto Labs
                </p>
                <ul className="mt-[var(--space-md)] flex flex-col gap-[var(--space-sm)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--text-secondary)] max-w-[65ch]">
                  <li>Developed Laravel backend services for a food delivery platform.</li>
                  <li>Implemented WebSocket-based live driver tracking and order assignment.</li>
                  <li>Integrated Stripe Connect payouts for automated driver earnings.</li>
                  <li>Optimized API response times and database performance.</li>
                </ul>
                <div className="mt-[var(--space-md)] flex flex-wrap gap-[var(--space-xs)]">
                  {["Laravel", "PHP", "WebSockets", "Stripe", "PostgreSQL"].map((tag) => (
                    <span key={tag} className="text-[var(--text-xs)] text-[var(--text-muted)] border border-[var(--border-subtle)] px-[var(--space-xs)] py-[var(--space-2xs)] rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section id="projects" className="px-[var(--space-lg)] py-[var(--space-4xl)] max-w-[1100px] mx-auto">
          <h2 className="font-display text-[var(--text-xs)] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-[var(--space-3xl)]">
            Projects
          </h2>

          <div className="flex flex-col gap-[var(--space-2xl)]">
            {/* Club Duelz Platform */}
            <article className="group relative py-[var(--space-xl)] border-t border-[var(--border)]">
              <div className="flex flex-col gap-[var(--space-md)] md:flex-row md:items-start md:justify-between md:gap-[var(--space-2xl)]">
                <div className="flex-1 max-w-[55ch]">
                  <h3 className="font-display text-[var(--text-xl)] font-semibold leading-[var(--leading-snug)] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]" style={{ transitionDuration: "var(--duration-fast)" }}>
                    Club Duelz
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-[var(--space-2xs)]">
                    Multi-app platform
                  </p>
                  <p className="mt-[var(--space-md)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--text-secondary)]">
                    Full-stack platform spanning 7 applications for India&apos;s grassroots football ecosystem. Features include a centralized npm component library, tournament brackets, live WebSocket scoring, Razorpay ticketing, DAU analytics, and ML-based NSFW detection.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[var(--space-xs)] md:flex-col md:items-end shrink-0">
                  {["Next.js 16", "TypeScript", "Zustand", "TanStack Query"].map((tag) => (
                    <span key={tag} className="text-[var(--text-xs)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Bluesky Backup */}
            <article className="group relative py-[var(--space-xl)] border-t border-[var(--border)]">
              <div className="flex flex-col gap-[var(--space-md)] md:flex-row md:items-start md:justify-between md:gap-[var(--space-2xl)]">
                <div className="flex-1 max-w-[55ch]">
                  <h3 className="font-display text-[var(--text-xl)] font-semibold leading-[var(--leading-snug)] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]" style={{ transitionDuration: "var(--duration-fast)" }}>
                    Bluesky Backup Webapp
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-[var(--space-2xs)]">
                    Storacha &middot; Open Source
                  </p>
                  <p className="mt-[var(--space-md)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--text-secondary)]">
                    Core maintainer of a full-stack application for ATProto backup pipelines with automated scheduling and zero-data-loss reconnection. Collaborated with 10+ contributors in the open source ecosystem.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[var(--space-xs)] md:flex-col md:items-end shrink-0">
                  {["React", "Node.js", "ATProto", "Storacha"].map((tag) => (
                    <span key={tag} className="text-[var(--text-xs)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* ATProto Visualization */}
            <article className="group relative py-[var(--space-xl)] border-t border-[var(--border)]">
              <div className="flex flex-col gap-[var(--space-md)] md:flex-row md:items-start md:justify-between md:gap-[var(--space-2xl)]">
                <div className="flex-1 max-w-[55ch]">
                  <h3 className="font-display text-[var(--text-xl)] font-semibold leading-[var(--leading-snug)] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]" style={{ transitionDuration: "var(--duration-fast)" }}>
                    ATProto React Visualization
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-[var(--space-2xs)]">
                    Component Library
                  </p>
                  <p className="mt-[var(--space-md)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--text-secondary)]">
                    Type-safe React component library for ATProto data visualization. Tree-shakeable Vite-bundled modules with strict ESLint and full TypeScript coverage.
                  </p>
                </div>
                <div className="flex flex-wrap gap-[var(--space-xs)] md:flex-col md:items-end shrink-0">
                  {["React", "TypeScript", "Vite", "ATProto"].map((tag) => (
                    <span key={tag} className="text-[var(--text-xs)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ─── Open Source ─── */}
        <section className="px-[var(--space-lg)] py-[var(--space-4xl)] max-w-[1100px] mx-auto">
          <h2 className="font-display text-[var(--text-xs)] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-[var(--space-3xl)]">
            Open Source
          </h2>

          <div className="flex flex-col gap-[var(--space-lg)]">
            {[
              {
                title: "Job-level tracing in Telegram Miniapp",
                repo: "tg-miniapp #219",
              },
              {
                title: "HTTP error handling in ucanto RPC",
                repo: "ucanto #375",
              },
              {
                title: "Documentation restructuring across 15+ packages",
                repo: "ucanto #372",
              },
            ].map((contrib) => (
              <div
                key={contrib.repo}
                className="flex flex-col gap-[var(--space-2xs)] py-[var(--space-sm)] sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-[var(--text-base)] text-[var(--text-secondary)]">
                  {contrib.title}
                </span>
                <span className="text-[var(--text-sm)] text-[var(--text-muted)] font-mono tabular-nums shrink-0">
                  {contrib.repo}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className="px-[var(--space-lg)] py-[var(--space-4xl)] max-w-[1100px] mx-auto">
          <h2 className="font-display text-[var(--text-xs)] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-[var(--space-3xl)]">
            Capabilities
          </h2>

          <div className="grid grid-cols-1 gap-[var(--space-2xl)] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Frontend",
                items: "React 19, Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Radix UI, Framer Motion",
              },
              {
                label: "State & Data",
                items: "Zustand, TanStack Query v5, React Hook Form, Zod",
              },
              {
                label: "Backend",
                items: "Laravel, REST APIs, Strapi 5 CMS, WebSockets",
              },
              {
                label: "Testing",
                items: "Jest, Vitest, Property-based Testing (fast-check)",
              },
              {
                label: "Web3",
                items: "Blockchain integrations, DApp interfaces, ATProto",
              },
              {
                label: "Tooling",
                items: "Git, npm Publishing, tsup, Storybook, Razorpay, Stripe",
              },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="text-[var(--text-sm)] font-semibold text-[var(--accent)] mb-[var(--space-sm)]">
                  {group.label}
                </h3>
                <p className="text-[var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Education ─── */}
        <section className="px-[var(--space-lg)] py-[var(--space-2xl)] max-w-[1100px] mx-auto">
          <h2 className="font-display text-[var(--text-xs)] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-[var(--space-xl)]">
            Education
          </h2>
          <div className="flex flex-col gap-[var(--space-2xs)] sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-display text-[var(--text-lg)] font-semibold leading-[var(--leading-snug)]">
                B.E. Computer Science Engineering
              </h3>
              <p className="text-[var(--text-base)] text-[var(--text-secondary)] mt-[var(--space-2xs)]">
                New L J Institute of Engineering and Technology
              </p>
            </div>
            <div className="flex items-baseline gap-[var(--space-md)] shrink-0">
              <span className="text-[var(--text-sm)] text-[var(--accent)]">
                9.2 / 10.0
              </span>
              <time className="text-[var(--text-sm)] text-[var(--text-muted)] tabular-nums">
                Nov 2021 &mdash; May 2025
              </time>
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="px-[var(--space-lg)] py-[var(--space-4xl)] max-w-[1100px] mx-auto">
          <h2 className="font-display text-[var(--text-xs)] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-[var(--space-xl)]">
            Contact
          </h2>
          <p className="font-display text-[var(--text-2xl)] font-bold leading-[var(--leading-tight)] max-w-[20ch]">
            Let&apos;s build something together.
          </p>
          <div className="mt-[var(--space-2xl)] flex flex-col gap-[var(--space-md)] sm:flex-row sm:items-center sm:gap-[var(--space-xl)]">
            <a
              href="mailto:shubh1608003@gmail.com"
              className="text-[var(--text-base)] text-[var(--accent)] font-medium transition-colors hover:text-[var(--text-primary)]"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              shubh1608003@gmail.com
            </a>
            <span className="hidden sm:block text-[var(--text-muted)]">/</span>
            <a
              href="tel:+917043844884"
              className="text-[var(--text-base)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              +91-7043844884
            </a>
            <span className="hidden sm:block text-[var(--text-muted)]">/</span>
            <span className="text-[var(--text-base)] text-[var(--text-secondary)]">
              Ahmedabad, India
            </span>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="px-[var(--space-lg)] py-[var(--space-xl)] border-t border-[var(--border-subtle)] max-w-[1100px] mx-auto w-full">
        <p className="text-[var(--text-xs)] text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Shubh Patel
        </p>
      </footer>
    </div>
  );
}

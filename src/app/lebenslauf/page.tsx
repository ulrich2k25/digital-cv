import { resume } from "@/data/resume";

const skillLabels: Record<string, string> = {
  programmingLanguages: "Programmiersprachen",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Datenbanken",
  toolsDevOps: "Tools & DevOps",
  otherTechnologies: "Weitere Technologien",
};

export default function LebenslaufPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-8 text-white md:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="relative mb-24 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-950 p-7 md:p-12">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            {/* Top bar */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.35em] text-green-400">
                Lebenslauf
              </p>

              <a
                href="/"
                className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:bg-white/[0.03] hover:text-white"
              >
                ← Portfolio
              </a>
            </div>

            {/* Identity */}
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
                  {resume.personal.name}
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
                  {resume.personal.title}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Badge highlight>Full-Stack Development</Badge>
                  <Badge>Wirtschaftsinformatik</Badge>
                  <Badge>Kaiserslautern</Badge>
                </div>
              </div>

              {/* Contact */}
              <div className="min-w-[260px] rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Kontakt
                </p>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${resume.personal.email}`}
                    className="block text-gray-300 transition hover:text-green-400"
                  >
                    {resume.personal.email}
                  </a>

                  <a
                    href={`tel:${resume.personal.phone}`}
                    className="block text-gray-300 transition hover:text-green-400"
                  >
                    {resume.personal.phone}
                  </a>

                  <p className="text-gray-400">{resume.personal.location}</p>
                </div>
              </div>
            </div>

            {/* External links */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <ExternalLink href={resume.personal.github}>
                GitHub ↗
              </ExternalLink>

              <ExternalLink href={resume.personal.linkedin}>
                LinkedIn ↗
              </ExternalLink>
            </div>
          </div>
        </header>

        {/* =====================================================
            PROFIL
        ===================================================== */}
        <section className="mb-24">
          <SectionLabel>Profil</SectionLabel>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                Full-Stack Entwicklung mit Fokus auf moderne Softwarelösungen.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
                {resume.profile}
              </p>
            </div>

            <div className="grid gap-3">
              <FocusCard
                label="Schwerpunkt"
                title="Full-Stack Development"
                description="Moderne Frontend- und Backend-Entwicklung entlang des gesamten Software-Lebenszyklus."
              />

              <FocusCard
                label="Interesse"
                title="Softwarearchitektur"
                description="Strukturierte APIs, skalierbare Anwendungen und wartbare Softwaresysteme."
              />

              <FocusCard
                label="Technologien"
                title="Data & AI"
                description="Datenanalyse, Automatisierung und KI-gestützte Workflows."
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            BERUFSERFAHRUNG
        ===================================================== */}
        <section className="mb-24">
          <SectionHeader
            label="Erfahrung"
            title="Berufserfahrung"
            description="Praktische Erfahrung in der professionellen Softwareentwicklung."
          />

          <div className="mt-10 space-y-6">
            {resume.experience.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-green-400/25 hover:bg-white/[0.04] md:p-8"
              >
                <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-green-400 via-cyan-400/40 to-transparent opacity-60" />

                <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-green-400">
                      {item.period}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-400">{item.company}</p>

                    <TaskList tasks={item.tasks} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROJEKTE
        ===================================================== */}
        <section className="mb-24">
          <SectionHeader
            label="Praxis"
            title="Projekte"
            description="Ausgewählte Hochschul- und Softwareprojekte mit unterschiedlichen technischen Schwerpunkten."
          />

          <div className="mt-10 grid gap-5">
            {resume.projects.map((project, index) => (
              <article
                key={`${project.title}-${project.period}`}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/25 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                      Projekt {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-green-400">
                      {project.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {project.title}
                    </h3>

                    {project.organization && (
                      <p className="mt-2 text-gray-400">
                        {project.organization}
                      </p>
                    )}

                    <TaskList tasks={project.tasks} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            AUSBILDUNG
        ===================================================== */}
        <section className="mb-24">
          <SectionHeader label="Akademischer Weg" title="Ausbildung" />

          <div className="mt-10 space-y-5">
            {resume.education.map((item) => (
              <article
                key={`${item.degree}-${item.period}`}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-green-400">
                      {item.period}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-gray-400">{item.institution}</p>

                    <TaskList tasks={item.details} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGIEN
        ===================================================== */}
        <section className="mb-24">
          <SectionHeader
            label="Tech Stack"
            title="Technische Kenntnisse"
            description="Technologien und Werkzeuge aus Studium, Berufserfahrung und eigenen Softwareprojekten."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(resume.skills).map(([category, values]) => (
              <div
                key={category}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-green-400/25 hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-green-400">
                  {skillLabels[category] ?? category}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-gray-300 transition group-hover:border-white/15"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            SPRACHEN + PERSÖNLICHE KOMPETENZEN
        ===================================================== */}
        <section className="mb-24 grid gap-12 lg:grid-cols-2">
          {/* Languages */}
          <div>
            <SectionLabel>Sprachen</SectionLabel>

            <div className="mt-6 space-y-3">
              {resume.languages.map((item) => (
                <div
                  key={item.language}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4"
                >
                  <p className="font-medium">{item.language}</p>

                  <p className="text-sm text-gray-400">{item.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal competencies */}
          <div>
            <SectionLabel>Persönliche Kompetenzen</SectionLabel>

            <div className="mt-6 flex flex-wrap gap-3">
              {resume.personalCompetencies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INTERESSEN + SONSTIGES
        ===================================================== */}
        <section className="grid gap-12 border-t border-white/10 py-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Interessen</SectionLabel>

            <div className="mt-6 flex flex-wrap gap-3">
              {resume.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Sonstiges</SectionLabel>

            <div className="mt-6 space-y-2">
              {resume.other.map((item) => (
                <p key={item} className="text-gray-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="mt-8 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>{resume.personal.name}</p>

          <a href="/" className="transition hover:text-green-400">
            Portfolio ansehen →
          </a>
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-400">
      {children}
    </p>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-gray-400">{description}</p>
      )}
    </div>
  );
}

function Badge({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <span
      className={
        highlight
          ? "rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300"
          : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
      }
    >
      {children}
    </span>
  );
}

function FocusCard({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-green-400/25 hover:bg-white/[0.04]">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
        {label}
      </p>

      <h3 className="mt-2 text-lg font-semibold transition group-hover:text-green-400">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>
    </div>
  );
}

function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {tasks.map((task) => (
        <li key={task} className="flex gap-3 leading-7 text-gray-300">
          <span className="mt-[1px] shrink-0 text-green-400">•</span>

          <span>{task}</span>
        </li>
      ))}
    </ul>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-green-400/30 hover:bg-green-400/[0.04] hover:text-green-400"
    >
      {children}
    </a>
  );
}

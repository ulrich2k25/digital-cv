import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Ausgewählte Projekte
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Eine Auswahl meiner relevantesten Softwareprojekte aus
            Full-Stack-Entwicklung, künstlicher Intelligenz, Datenanalyse und
            objektorientierter Programmierung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex overflow-hidden rounded-2xl border border-white/10 bg-gray-950 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-[0_15px_40px_rgba(34,197,94,0.08)]"
            >
              <div className="flex w-full flex-col">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <h3 className="text-lg font-semibold transition group-hover:text-green-400">
                      {project.title}
                    </h3>

                    {"projectName" in project && project.projectName && (
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                        {project.projectName}
                      </p>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
                    >
                      GitHub ↗
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

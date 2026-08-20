export default function About() {
  const skills = {
    Frontend: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    Backend: ["NestJS", "Node.js", "REST APIs", "JWT"],
    "Data & Datenbanken": ["PostgreSQL", "MongoDB", "Python"],
    "Tools & DevOps": ["Git", "Docker", "Jenkins", "Jira"],
  };

  return (
    <section id="about" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
            Profil
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">Über mich</h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Beschreibung */}
          <div>
            <p className="text-lg leading-8 text-gray-300">
              Ich studiere Wirtschaftsinformatik mit Schwerpunkt
              Softwareentwicklung und verfüge über praktische Erfahrung in der
              Full-Stack-Entwicklung. Dabei entwickle ich sowohl moderne
              Benutzeroberflächen als auch Backend-Systeme und REST APIs.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              In meiner bisherigen Tätigkeit als Werkstudent war ich unter
              anderem an der Migration einer bestehenden Webanwendung von
              AngularJS zu modernem Angular beteiligt. Darüber hinaus gehören
              Git-basierte Entwicklungsprozesse, Code Reviews, Tests und
              technische Dokumentation zu meiner praktischen Erfahrung.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              In eigenen Projekten beschäftige ich mich zusätzlich mit
              Full-Stack-Anwendungen, KI-gestützter Automatisierung und
              datengetriebenen Lösungen. Besonders interessieren mich moderne
              Softwarearchitekturen und die Entwicklung skalierbarer digitaler
              Anwendungen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                Full-Stack Development
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Software Architecture
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Data & AI
              </span>
            </div>
          </div>

          {/* Technologien */}
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([category, technologies]) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-gray-950 p-5 transition duration-300 hover:border-green-400/30"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200 transition hover:border-green-400/40 hover:text-green-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

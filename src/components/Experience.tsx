export default function Experience() {
  const experience = [
    {
      period: "07/2025 – 06/2026",
      title: "Werkstudent Softwareentwicklung",
      place: "Veenion Open Ordering GmbH · Kaiserslautern",
      description: [
        "Migration einer bestehenden Webanwendung von AngularJS zu modernem Angular.",
        "Arbeit mit Git-Branches, Pull Requests und Code Reviews.",
        "Implementierung neuer Features sowie Erstellung von Tests und technischer Dokumentation.",
        "Zusammenarbeit in einem agilen Entwicklungsprozess und Lösung von Merge-Konflikten.",
      ],
    },
  ];

  const education = [
    {
      period: "03/2023 – heute",
      title: "B.Sc. Wirtschaftsinformatik",
      place: "Hochschule Kaiserslautern · Zweibrücken",
      description: [
        "Fachlicher Fokus auf Softwareentwicklung, Webanwendungen, Datenbanken und Informationssysteme.",
      ],
    },
    {
      period: "09/2016 – 02/2020",
      title: "Bachelor in Rechtswissenschaften",
      place: "Universität Duala · Kamerun",
      description: [
        "Schwerpunkte: Öffentliches Recht, Privatrecht und Grundlagen des Wirtschaftsrechts.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-3">
            Werdegang
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Erfahrung & Ausbildung
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Berufserfahrung</h3>

            <div className="relative border-l border-gray-800">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 pb-10">
                  <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg shadow-green-500/30"></div>

                  <span className="text-sm text-green-400 font-medium">
                    {item.period}
                  </span>

                  <h4 className="text-xl font-semibold mt-2">{item.title}</h4>

                  <p className="text-gray-400 mt-1">{item.place}</p>

                  <ul className="mt-5 space-y-3 text-gray-300 leading-7">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-green-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Ausbildung</h3>

            <div className="relative border-l border-gray-800">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 pb-10 last:pb-0">
                  <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg shadow-blue-500/20"></div>

                  <span className="text-sm text-green-400 font-medium">
                    {item.period}
                  </span>

                  <h4 className="text-xl font-semibold mt-2">{item.title}</h4>

                  <p className="text-gray-400 mt-1">{item.place}</p>

                  <ul className="mt-5 space-y-3 text-gray-300 leading-7">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-green-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

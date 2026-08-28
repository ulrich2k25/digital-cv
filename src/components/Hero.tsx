export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-5 sm:px-6 pt-20 sm:pt-24"
    >
      <div className="relative max-w-4xl w-full text-center">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-green-500 opacity-20 blur-3xl rounded-full"></div>
        </div>

        <p className="relative text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 mb-4">
          Digitales Portfolio
        </p>

        <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Djomeni Pouke
        </h1>

        <h2 className="relative mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium leading-snug">
          Student der Wirtschaftsinformatik · Softwareentwickler
        </h2>

        <p className="relative mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-7 sm:leading-8">
          Ich entwickle moderne Full-Stack-Webanwendungen – vom Frontend über
          Backend-Systeme und APIs bis zur Datenbank. Dabei lege ich Wert auf
          skalierbare Architekturen, sauberen Code und durchdachte digitale
          Lösungen.
        </p>

        <div className="relative mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
          >
            Projekte ansehen
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-600 text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}

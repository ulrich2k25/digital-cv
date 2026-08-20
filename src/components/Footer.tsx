export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="text-center font-semibold md:text-left">
            Djomeni Pouke
          </p>

          <p className="mt-1 text-sm text-gray-500">
            © {year} · Digitales Portfolio
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/ulrich2k25"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ulrich-pouke"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a href="#contact" className="transition hover:text-white">
            Kontakt
          </a>

          <a href="#home" className="transition hover:text-green-400">
            Nach oben ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

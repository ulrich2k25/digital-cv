"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Die Nachricht konnte nicht gesendet werden.",
        );
      }

      setStatus("success");
      setFeedback("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
      form.reset();
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Beim Senden der Nachricht ist ein Fehler aufgetreten.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-3">
            Kontakt
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Lassen Sie uns ins Gespräch kommen
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-7">
            Sie interessieren sich für mein Profil oder möchten mehr über meine
            Projekte erfahren? Schreiben Sie mir gerne eine Nachricht.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ihr Name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-green-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  E-Mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@unternehmen.de"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-green-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-gray-300 mb-2"
              >
                Betreff
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Worum geht es?"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Nachricht
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Ihre Nachricht..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-green-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
            </button>

            {feedback && (
              <p
                className={`text-center text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

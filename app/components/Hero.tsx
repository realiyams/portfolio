"use client";

import Image from "next/image";

type Locale = "id" | "en";

const content = {
  id: {
    greeting: "Halo, saya",
    role: "Fullstack Developer",
    description:
      "Fullstack developer dengan pengalaman membangun aplikasi mobile dan backend secara end-to-end, termasuk sistem berbasis lokasi, autentikasi, pembayaran, serta pengolahan data untuk kebutuhan analisis dan pengambilan keputusan.",
    cta: "Lihat Proyek",
    link: "proyek",
  },
  en: {
    greeting: "Hi, I'm",
    role: "Fullstack Developer",
    description:
      "A fullstack developer with experience building end-to-end mobile and backend applications, including location-based systems, authentication, payments, and data processing for analysis and decision-making.",
    cta: "View Projects",
    link: "projects",
  },
};


export default function Hero({ locale }: { locale: Locale }) {
  const t = content[locale] ?? content.id;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* PHOTO */}
        <div className="flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl"></div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <Image
                src="/img/profile/profile.jpg"
                alt="Ilham Cahya Ramadhan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="md:order-1">
          <p className="text-neutral-400 mb-4">
            {t.greeting}
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Ilham Cahya Ramadhan
            <span className="text-cyan-400">.</span>
          </h1>

          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-400 mt-2">
            {t.role}
          </h2>

          <p className="max-w-xl mt-6 text-neutral-400 leading-relaxed">
            {t.description}
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => scrollToSection(t.link)}
              className="cursor-pointer inline-flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-md text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {t.cta}
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

type Locale = "id" | "en";

const contactContent: Record<
  Locale,
  {
    id: string;
    title: string;
    description: string;
    emailCta: string;
    downloadCv: string;
  }
> = {
  id: {
    id: "hubungi",
    title: "Hubungi Saya",
    description:
      "Saya terbuka untuk peluang kerja, kolaborasi, maupun proyek freelance. Jika Anda memiliki ide proyek atau sekadar ingin berdiskusi, silakan hubungi saya.",
    emailCta: "Kirim Email",
    downloadCv: "Unduh CV",
  },
  en: {
    id: "contact",
    title: "Contact Me",
    description:
      "I am open to job opportunities, collaborations, and freelance projects. If you have an idea or just want to discuss something, feel free to reach out.",
    emailCta: "Send Email",
    downloadCv: "Download CV",
  },
};


export default function Contact({ locale }: { locale: Locale }) {

  const t = contactContent[locale];

  return (
    <section id={t.id} className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {t.title}
        </h2>

        <p className="text-neutral-400 max-w-xl mx-auto mb-10">
          {t.description}
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamcr20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-neutral-700 px-8 py-3 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            {t.emailCta}
            <span>→</span>
          </a>
        </div>

        {/* Secondary Links */}
        <div className="flex justify-center gap-6 text-sm text-neutral-400">
          <a
            href="https://github.com/realiyams"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ilham-cahya-933172207/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="/CV_Ilham_Cahya_Ramadhan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            {t.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}

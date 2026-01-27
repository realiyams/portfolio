type Locale = "id" | "en";

const aboutContent: Record<
  Locale,
  {
    id: string;
    title: string;
    paragraphs: string[];
    skills: string[];
    closing: string;
  }
> = {
  id: {
    id: "tentang",
    title: "Tentang",
    paragraphs: [
      "Saya adalah seorang fullstack developer yang terbiasa membangun aplikasi dari awal hingga siap digunakan. Saya mengerjakan seluruh proses pengembangan, mulai dari antarmuka pengguna, logika bisnis, API, hingga integrasi dan deployment.",
      "Fokus utama saya adalah membangun solusi yang praktis dan dapat digunakan dalam dunia nyata. Saya memiliki pengalaman mengembangkan aplikasi mobile menggunakan React Native serta layanan backend menggunakan Laravel, dengan perhatian khusus pada struktur kode, keamanan, dan performa.",
      "Dalam pengembangan software, saya mengutamakan kejelasan, kesederhanaan, dan keberlanjutan jangka panjang. Saya percaya bahwa sistem yang baik adalah sistem yang mudah dipahami, mudah dirawat, dan siap berkembang seiring kebutuhan.",
    ],
    skills: [
      "Pengembangan aplikasi end-to-end",
      "Frontend & backend development",
      "REST API & sistem autentikasi",
      "Mobile-first & performance-aware design",
      "Clean architecture & maintainable code",
    ],
    closing:
      "Terbuka untuk peluang kerja, kolaborasi, maupun diskusi seputar pengembangan produk dan pemecahan masalah melalui teknologi.",
  },

  en: {
    id: "about",
    title: "About",
    paragraphs: [
      "I am a fullstack developer experienced in building applications from scratch to production-ready. I handle the entire development process, from user interfaces and business logic to APIs, integrations, and deployment.",
      "My main focus is creating practical solutions that can be used in real-world scenarios. I have hands-on experience developing mobile applications with React Native and backend services using Laravel, with particular attention to code structure, security, and performance.",
      "In software development, I prioritize clarity, simplicity, and long-term maintainability. I believe a good system is one that is easy to understand, easy to maintain, and ready to grow as requirements evolve.",
    ],
    skills: [
      "End-to-end application development",
      "Frontend & backend development",
      "REST APIs & authentication systems",
      "Mobile-first & performance-aware design",
      "Clean architecture & maintainable code",
    ],
    closing:
      "Open to job opportunities, collaborations, and discussions about product development and problem-solving through technology.",
  },
};

export default function About({ locale }: { locale: Locale }) {
  const t = aboutContent[locale];

  return (
    <section id={t.id} className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          {t.title}
        </h2>

        <div className="text-neutral-400 leading-relaxed space-y-6">
          {t.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          {/* Core Skills */}
          <ul className="grid gap-2 text-sm text-neutral-300">
            {t.skills.map((skill, index) => (
              <li key={index}>• {skill}</li>
            ))}
          </ul>

          <p className="text-neutral-500">
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

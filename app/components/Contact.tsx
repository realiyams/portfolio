export default function Contact() {
  return (
    <section id="hubungi" className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Hubungi Saya
        </h2>

        <p className="text-neutral-400 max-w-xl mx-auto mb-10">
          Saya terbuka untuk peluang kerja, kolaborasi, maupun proyek freelance.
          Jika Anda memiliki ide proyek atau sekadar ingin berdiskusi,
          silakan hubungi saya.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamcr20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-neutral-700 px-8 py-3 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Kirim Email
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
            className="hover:text-cyan-400 transition"
          >
            Unduh CV
          </a>
        </div>
      </div>
    </section>
  );
}

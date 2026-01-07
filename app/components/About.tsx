export default function About() {
  return (
    <section id="tentang" className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          Tentang
        </h2>

        <div className="text-neutral-400 leading-relaxed space-y-6">
          <p>
            Saya adalah seorang fullstack developer yang terbiasa membangun
            aplikasi dari awal hingga siap digunakan. Saya mengerjakan seluruh
            proses pengembangan, mulai dari antarmuka pengguna, logika bisnis,
            API, hingga integrasi dan deployment.
          </p>

          <p>
            Fokus utama saya adalah membangun solusi yang praktis dan dapat
            digunakan dalam dunia nyata. Saya memiliki pengalaman mengembangkan
            aplikasi mobile menggunakan React Native serta layanan backend
            menggunakan Laravel, dengan perhatian khusus pada struktur kode,
            keamanan, dan performa.
          </p>

          <p>
            Dalam pengembangan software, saya mengutamakan kejelasan,
            kesederhanaan, dan keberlanjutan jangka panjang. Saya percaya bahwa
            sistem yang baik adalah sistem yang mudah dipahami, mudah dirawat,
            dan siap berkembang seiring kebutuhan.
          </p>

          {/* Keahlian Utama */}
          <ul className="grid gap-2 text-sm text-neutral-300">
            <li>• Pengembangan aplikasi end-to-end</li>
            <li>• Frontend & backend development</li>
            <li>• REST API & sistem autentikasi</li>
            <li>• Mobile-first & performance-aware design</li>
            <li>• Clean architecture & maintainable code</li>
          </ul>

          <p className="text-neutral-500">
            Terbuka untuk peluang kerja, kolaborasi, maupun diskusi seputar
            pengembangan produk dan pemecahan masalah melalui teknologi.
          </p>
        </div>
      </div>
    </section>
  );
}

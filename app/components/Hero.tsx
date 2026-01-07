import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* PHOTO (mobile first) */}
        <div className="flex justify-center md:order-2">
          <div className="relative">
            {/* Accent glow */}
            <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl"></div>

            {/* Photo */}
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
            Halo, saya
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Ilham Cahya Ramadhan
            <span className="text-cyan-400">.</span>
          </h1>

          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-400 mt-2">
            Fullstack Developer
          </h2>

          <p className="max-w-xl mt-6 text-neutral-400 leading-relaxed">
            Fullstack developer dengan pengalaman membangun aplikasi mobile dan
            backend secara end-to-end, termasuk sistem berbasis lokasi,
            autentikasi, pembayaran, serta pengolahan data untuk kebutuhan
            analisis dan pengambilan keputusan.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-md text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Lihat Proyek
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

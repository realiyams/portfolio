type Locale = "id" | "en";

type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: { title: string; url: string }[];
  image: string;
};

export const projectsByLocale: Record<Locale, Project[]> = {
  id: [
    {
      title: "Aplikasi Laundry",
      description:
        "Pembangunan aplikasi platform penyedia layanan jasa laundry online.",
      tech: [
        "React",
        "React Native",
        "Mapbox",
        "Turf.js",
        "OAuth 2.0",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "Dompdf",
        "Midtrans",
      ],
      links: [
        { title: "Lihat Aplikasi", url: "https://github.com/realiyams/laundryApp" },
        {
          title: "Lihat Aplikasi Kurir",
          url: "https://github.com/realiyams/laundryAppKurir",
        },
        { title: "Lihat Backend", url: "https://github.com/realiyams/laundry" },
      ],
      image: "/img/projects/Laundry_App.jpg",
    },

    {
      title: "Sistem Informasi Klinik",
      description:
        "Sistem penentuan waktu dan jumlah pengadaan obat menggunakan metode Reorder Point di Klinik Tiga Mandiri.",
      tech: ["Python", "Pandas", "MySQL", "Laravel", "Bootstrap", "Dompdf"],
      links: [
        {
          title: "Lihat Repository",
          url: "https://github.com/realiyams/sistem-informasi-klinik",
        },
      ],
      image: "/img/projects/Sistem_Informasi_Klinik.jpg",
    },

    {
      title: "Aplikasi Tracking Pendaki Gunung",
      description:
        "Pembangunan aplikasi rekomendasi tracking pendaki gunung berbasis Android.",
      tech: [
        "React",
        "React Native",
        "Mapbox",
        "Turf.js",
        "SQLite",
        "Socket.IO",
        "Express.js",
        "OAuth 2.0",
      ],
      links: [
        {
          title: "Lihat Repository",
          url: "https://github.com/realiyams/pendakian",
        },
      ],
      image: "/img/projects/Pendakian.jpg",
    },

    {
      title: "Aplikasi Pencarian Rute Terdekat",
      description:
        "Aplikasi penentu rute terdekat di lingkungan Universitas Komputer Indonesia menggunakan algoritma A*.",
      tech: [
        "React",
        "Vite",
        "Mapbox",
        "Mapbox Directions API",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
      links: [
        {
          title: "Lihat Frontend",
          url: "https://github.com/realiyams/mapboxFrontend",
        },
        {
          title: "Lihat Backend",
          url: "https://github.com/realiyams/mapboxBackend",
        },
      ],
      image: "/img/projects/Aplikasi_Pencarian_Rute_Terdekat.png",
    },
  ],

  en: [
    {
      title: "Laundry Application",
      description:
        "Development of an online laundry service platform.",
      tech: [
        "React",
        "React Native",
        "Mapbox",
        "Turf.js",
        "OAuth 2.0",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "Dompdf",
        "Midtrans",
      ],
      links: [
        { title: "View App", url: "https://github.com/realiyams/laundryApp" },
        {
          title: "View Courier App",
          url: "https://github.com/realiyams/laundryAppKurir",
        },
        { title: "View Backend", url: "https://github.com/realiyams/laundry" },
      ],
      image: "/img/projects/Laundry_App.jpg",
    },

    {
      title: "Clinic Information System",
      description:
        "A system for determining the timing and quantity of medical supplies using the Reorder Point method.",
      tech: ["Python", "Pandas", "MySQL", "Laravel", "Bootstrap", "Dompdf"],
      links: [
        {
          title: "View Repository",
          url: "https://github.com/realiyams/sistem-informasi-klinik",
        },
      ],
      image: "/img/projects/Sistem_Informasi_Klinik.jpg",
    },

    {
      title: "Mountain Hiker Tracking Application",
      description:
        "Development of an Android-based mountain hiker tracking recommendation application.",
      tech: [
        "React",
        "React Native",
        "Mapbox",
        "Turf.js",
        "SQLite",
        "Socket.IO",
        "Express.js",
        "OAuth 2.0",
      ],
      links: [
        {
          title: "View Repository",
          url: "https://github.com/realiyams/pendakian",
        },
      ],
      image: "/img/projects/Pendakian.jpg",
    },

    {
      title: "Shortest Route Finder Application",
      description:
        "An application to determine the shortest route within Universitas Komputer Indonesia using the A* algorithm.",
      tech: [
        "React",
        "Vite",
        "Mapbox",
        "Mapbox Directions API",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
      links: [
        {
          title: "View Frontend",
          url: "https://github.com/realiyams/mapboxFrontend",
        },
        {
          title: "View Backend",
          url: "https://github.com/realiyams/mapboxBackend",
        },
      ],
      image: "/img/projects/Aplikasi_Pencarian_Rute_Terdekat.png",
    },
  ],
};

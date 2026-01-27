import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400" },
    { path: "../fonts/Inter-Medium.woff2", weight: "500" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700" },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ilham Cahya Ramadhan | Developer",
  description: "Fullstack Developer Portfolio",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} bg-neutral-950 text-neutral-100 font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

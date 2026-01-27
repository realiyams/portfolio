import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "id" }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-16">
        <Hero locale={locale} />
        <Projects locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>
    </>
  );
}

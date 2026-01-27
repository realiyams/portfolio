import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar locale="en" />
      <main className="pt-16">
        <Hero locale="en" />
        <Projects locale="en" />
        <About locale="en" />
        <Contact locale="en" />
      </main>
    </>
  );
}

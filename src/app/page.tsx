import Backdrop from "@/components/Backdrop/Backdrop";
import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Marquee from "@/components/Marquee/Marquee";
import Stack from "@/components/Stack/Stack";
import Experience from "@/components/Experience/Experience";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Stack />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

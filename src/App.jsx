import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { Work } from "@/sections/Work";
import { Experience } from "@/sections/Experience";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    // reducedMotion="user": honour the OS setting by dropping transforms, keeping opacity fades.
    // LazyMotion + `m` components ship only the DOM animation features we use.
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:px-4 focus:py-2 focus:rounded-full focus:bg-paper focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Work />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
        <div className="grain" aria-hidden="true" />
      </div>
    </MotionConfig>
    </LazyMotion>
  );
}

export default App;

import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experience} from "@/sections/Experience";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";
import {ScrollProgress} from "@/components/ScrollProgress";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-silver-100 focus:text-navy-900"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

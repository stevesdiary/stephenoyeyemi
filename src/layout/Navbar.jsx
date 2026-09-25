import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav link for whichever section sits in the middle of the viewport
  useEffect(() => {
    const sections = ["about", "projects", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between" aria-label="Primary">
        <a href="#" className="group flex items-center gap-2 text-xl font-semibold tracking-tight">
          <span className="relative grid place-items-center w-9 h-9 rounded-lg border border-silver-300/20 bg-navy-800 font-mono text-sm text-silver-100 transition-transform duration-500 group-hover:rotate-[8deg]">
            SO
          </span>
          <span className="hidden sm:inline text-silver-100">
            Stephen<span className="text-silver-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-1.5 py-1.5 flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  href={link.href}
                  key={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-navy-900 bg-silver-200"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact" tabIndex={-1}>
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2.5 rounded-lg text-foreground cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`animate-fade-in text-lg py-3 border-b border-border/60 transition-colors ${
                  activeSection === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" tabIndex={-1} className="mt-4">
              <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

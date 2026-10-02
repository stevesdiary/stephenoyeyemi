import { useEffect, useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import { LocalTime } from "@/components/LocalTime";
import { navLinks, profile } from "@/data/content";
import { ease } from "@/lib/motion";

const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const { scrollY } = useScroll();

  // Get out of the way while reading down; come back as soon as the reader scrolls up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 320 && !open);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <m.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled || open ? "bg-ink/80 backdrop-blur-md border-line" : "border-transparent"
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: ease.out }}
    >
      <nav className="shell h-16 flex items-center justify-between" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-3 font-medium tracking-tight">
          <span className="grid place-items-center size-8 rounded-full bg-paper text-ink font-mono text-[0.6875rem] font-semibold transition-colors duration-300 group-hover:bg-signal">
            SO
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                  active === link.href ? "text-paper" : "text-muted hover:text-paper"
                }`}
              >
                <span className={`font-mono text-[0.625rem] ${active === link.href ? "text-signal" : "text-faint"}`}>
                  0{i + 1}
                </span>
                <span className="link-draw">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 label">
          <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" aria-hidden="true" />
          {profile.location.split(",")[0]} <LocalTime timeZone={profile.timeZone} label={profile.timeZoneLabel} />
        </div>

        <button
          type="button"
          className="md:hidden relative size-10 -mr-2 grid place-items-center"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Menu</span>
          <m.span
            className="absolute h-px w-5 bg-paper"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
            transition={{ duration: 0.3, ease: ease.out }}
          />
          <m.span
            className="absolute h-px w-5 bg-paper"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
            transition={{ duration: 0.3, ease: ease.out }}
          />
        </button>
      </nav>

    </m.header>

      {/* Sibling of the header: its transform and backdrop-filter would otherwise trap this fixed overlay */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-ink"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: ease.out }}
          >
            <ul className="shell pt-10 space-y-2">
              {navLinks.map((link, i) => (
                <m.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: ease.out, delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-3 text-5xl font-semibold tracking-tight border-b border-line"
                  >
                    <span className="font-mono text-xs text-signal">0{i + 1}</span>
                    {link.label}
                  </a>
                </m.li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

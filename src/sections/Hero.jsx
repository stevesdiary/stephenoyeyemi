import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { prefersReducedMotion } from "@/hooks/useInView";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Git",
  "Prisma",
  "Sequelize",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "AWS",
  "Docker",
  "React",
  "Tailwind CSS",
  "Next.js",
  "Redis",
  "MySQL",
];

const roles = ["scalable APIs", "payment systems", "microservices", "backend platforms"];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/stephenoyeyemi/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/stevesdiary", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/stevesdiary_", label: "X (Twitter)" },
];

const yearsExp = new Date().getFullYear() - 2022;

const dots = [...Array(24)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? 2 : 1,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}));

const headline = [
  { text: "Engineering" },
  { text: "reliable", silver: true },
  { text: "backends," },
  { break: true },
  { text: "built", serif: true },
  { text: "with", serif: true },
  { text: "precision.", serif: true },
];

// Stagger each word's entrance; line breaks don't consume a slot
let wordCount = 0;
const headlineWords = headline.map((word) =>
  word.break ? word : { ...word, delay: 120 + wordCount++ * 90 }
);

// Cycles through `roles`, crossfading each one in.
const RotatingRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid align-bottom">
      {/* Reserve width of the longest word so surrounding text doesn't jump */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">backend platforms</span>
      <span
        key={index}
        className="col-start-1 row-start-1 text-silver-100 font-medium animate-word-in"
      >
        {roles[index]}
      </span>
    </span>
  );
};

export const Hero = () => {
  const portraitRef = useRef(null);

  const handlePointerMove = (e) => {
    const el = portraitRef.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const resetTilt = () => {
    if (portraitRef.current) portraitRef.current.style.transform = "";
  };

  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      {/* Background — the teal photo is desaturated and tinted navy */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}hero-background.jpg`}
          alt=""
          className="w-full h-full object-cover opacity-35 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-navy-800 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* Aurora glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-navy-600/40 blur-[120px] animate-aurora" />
        <div
          className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-silver-400/10 blur-[120px] animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      {/* Floating silver particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-silver-200 opacity-50"
            style={{
              width: dot.size * 3,
              height: dot.size * 3,
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass font-mono text-xs tracking-wide text-silver-200">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-silver-100 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-silver-100" />
                </span>
                Software Engineer · Node.js Specialist
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
                {headlineWords.map((word, i) => {
                  if (word.break) return <br key={i} className="hidden sm:block" />;
                  return (
                    <span
                      key={i}
                      className={`inline-block mr-[0.25em] animate-word-in ${
                        word.serif ? "font-serif italic font-normal text-silver-300" : ""
                      } ${word.silver ? "text-silver" : ""}`}
                      style={{ animationDelay: `${word.delay}ms` }}
                    >
                      {word.text}
                    </span>
                  );
                })}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in animation-delay-600">
                Hi, I'm Stephen Oyeyemi — I design and build <RotatingRole /> with
                Node.js, Express.js and TypeScript. Systems that stay fast, secure
                and online under real-world load.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-800">
              <a href="#contact" tabIndex={-1}>
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </a>
              <a
                href="https://docs.google.com/document/d/1au5iPuvaO7r77buS1WIUpeccLZHtwv_OfvgX58GOf8M/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <AnimatedBorderButton />
              </a>
            </div>

            <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "950ms" }}>
              <span className="text-sm text-muted-foreground mr-1">Follow me</span>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full glass text-silver-300 hover:text-navy-900 hover:bg-silver-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — profile image */}
          <div
            className="relative animate-fade-in animation-delay-400 hidden lg:block"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
          >
            <div className="relative max-w-md mx-auto">
              {/* Orbit rings */}
              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-full border border-dashed border-silver-300/15 animate-spin-slow"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-20 rounded-full border border-silver-300/5"
              />

              <div
                ref={portraitRef}
                className="relative glass rounded-3xl p-2 glow-border transition-transform duration-300 ease-out will-change-transform"
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile-steve.png`}
                  alt="Stephen Oyeyemi"
                  width="448"
                  height="560"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Available badge */}
                <div className="absolute -bottom-5 -right-5 glass-strong border border-silver-300/15 rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <span className="relative flex w-2.5 h-2.5">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                      <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/* Years badge */}
                <div
                  className="absolute -top-5 -left-5 glass-strong border border-silver-300/15 rounded-xl px-4 py-3 animate-float"
                  style={{ animationDelay: "-2.5s" }}
                >
                  <div className="text-2xl font-semibold text-silver">
                    {yearsExp}+
                    <span className="text-xs text-silver-300 font-normal"> years exp.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-24 animate-fade-in" style={{ animationDelay: "1100ms" }}>
          <p className="eyebrow mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden marquee-mask">
            <div className="flex w-max animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-3 flex items-center gap-8">
                  <span className="text-xl font-medium text-silver-400/50 hover:text-silver-100 transition-colors duration-300">
                    {skill}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-silver-400/30" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1300ms" }}>
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-silver-100 transition-colors"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

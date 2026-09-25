import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";

const experiences = [
  {
    role: "Backend Application Developer",
    company: "ProvidusUnity Bank Ltd.",
    // type: "Contract",
    location: "Lagos, Nigeria",
    period: "Apr 2025 — Present",
    highlights: [
      "Automated Diaspora Mortgage loan application process with a cross-functional team, reducing processing time by 90% and improving digital inclusion for diaspora customers.",
      "Engineered a secure Anonymous Feedback Portal enabling confidential staff submissions with real-time issue tracking and resolution workflows.",
      "Integrated multiple merchant APIs for ProviBill electricity payment service with failover mechanisms, eliminating downtime and increasing customer satisfaction by 20%.",
      "Built scalable Onboarding Portal API automating staff enrollment across multiple services, cutting onboarding time by 90% with secure bulk data processing.",
    ],
    tags: ["Node.js", "TypeScript", "Express.js", "MicrosoftSQL", "REST APIs", "JWT", "PGP", "ProcessMaker"],
  },
  {
    role: "Backend Software Engineer",
    company: "Talenvo",
    type: "Freelance",
    location: "Remote",
    period: "Dec 2024 — Mar 2025",
    highlights: [
      "Architected complete server-side infrastructure for EduBridge, a low-data educational platform serving out-of-school children, optimised for minimal bandwidth while maintaining high performance.",
      "Developed backend system for HealthBridge, a healthcare appointment booking platform with location-based services connecting patients to the nearest providers and specialists.",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "Aella Microfinance Bank",
    // type: "Staff",
    location: "Lagos, Nigeria",
    period: "Jul 2022 — Dec 2024",
    highlights: [
      "Designed and implemented a critical transaction validation service processing 13M+ monthly transactions for 2M+ active users, achieving 99.9% uptime and reducing error rates by 40%.",
      "Spearheaded automated transaction retry system that reduced manual finance team workload by 90%, saving 10 hours weekly and improving business customer satisfaction to 95%.",
      "Refactored event service architecture, delivering 50% improved response times and a 30% increase in user engagement through query optimisation and caching strategies.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Sequelize ORM", "Microservices"],
  },
  {
    role: "Engineering Intern",
    company: "Aella Microfinance Bank",
    type: "",
    location: "Lagos, Nigeria",
    period: "Jan 2022 — Jun 2022",
    highlights: [
      "Designed and implemented a RESTful Visitor Management API reducing check-in/check-out time by 45% through efficient data processing and streamlined workflows.",
      "Contributed to codebase optimisation efforts, achieving 20% faster application response times through refactoring and performance improvements.",
    ],
    tags: ["Node.js", "JavaScript", "Express.js", "REST APIs"],
  },
];

// Tracks how far (0→1) the timeline has scrolled past 60% of the viewport,
// and which dots the drawn line has reached.
const useTimelineProgress = (dotRefs) => {
  const ref = useRef(null);
  const [state, setState] = useState({ progress: 0, reached: [] });

  useEffect(() => {
    let frame;
    const update = () => {
      frame = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      const reached = dotRefs.current.map((dot) => {
        if (!dot) return false;
        const dotTop = dot.getBoundingClientRect().top - rect.top;
        return dotTop / rect.height <= progress;
      });
      setState({ progress, reached });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [dotRefs]);

  return [ref, state.progress, state.reached];
};

export const Experience = () => {
  const dotRefs = useRef([]);
  const [timelineRef, progress, reached] = useTimelineProgress(dotRefs);

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-1/4 -right-40 w-[30rem] h-[30rem] rounded-full bg-navy-600/30 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Career" title="Work Experience" />

        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line: faint track + silver fill that follows scroll */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px origin-top bg-gradient-to-b from-silver-100 via-silver-300 to-navy-400"
            style={{ transform: `scaleY(${progress})` }}
          />

          <ol className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div
                    ref={(el) => { dotRefs.current[i] = el; }}
                    aria-hidden="true"
                    className={`absolute left-4 md:left-1/2 top-7 w-3 h-3 -translate-x-1.5 rounded-full border transition-all duration-500 ${
                      reached[i]
                        ? "bg-silver-100 border-silver-100 timeline-glow scale-125"
                        : "bg-background border-silver-400/40"
                    }`}
                  />

                  {/* Card */}
                  <Reveal
                    direction={isLeft ? "left" : "right"}
                    className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-10" : "md:pl-10"}`}
                  >
                    <SpotlightCard className="glass rounded-2xl p-6 transition-all duration-500 hover:border-silver-300/30 hover:-translate-y-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                        <div>
                          <h3 className="font-semibold text-lg leading-tight">{exp.role}</h3>
                          <p className="text-silver-200 text-sm font-medium mt-1">
                            {exp.company}
                            {exp.type && (
                              <span className="text-muted-foreground font-normal"> · {exp.type}</span>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                        </div>
                        <span className="font-mono text-[0.7rem] text-silver-300 glass px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="mt-4 mb-5 space-y-2.5">
                        {exp.highlights.map((point, j) => (
                          <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 shrink-0 rotate-45 bg-silver-400" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </Reveal>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

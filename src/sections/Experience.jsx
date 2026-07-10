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

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Work Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary timeline-glow -translate-x-1.5" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 animate-fade-in ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">
                          {exp.company}
                          {exp.type && (
                            <span className="text-muted-foreground font-normal"> · {exp.type}</span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                      </div>
                      <span className="text-xs text-muted-foreground glass px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-3 mb-4 space-y-2">
                      {exp.highlights.map((point, j) => (
                        <li key={j} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

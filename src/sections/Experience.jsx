const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Company",
    period: "2023 — Present",
    description:
      "Building scalable REST APIs and microservices serving thousands of users daily. Leading backend architecture decisions, conducting code reviews, and mentoring junior engineers on best practices.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    role: "Backend Developer",
    company: "Startup Inc.",
    period: "2022 — 2023",
    description:
      "Developed and maintained high-performance Express.js APIs for a SaaS platform. Implemented real-time features with WebSockets, optimized database queries, and reduced API response times by 40%.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis"],
  },
  {
    role: "Junior Developer",
    company: "Agency Co.",
    period: "2021 — 2022",
    description:
      "Built full-stack web applications for clients across multiple industries. Integrated third-party APIs, worked in agile delivery cycles, and shipped features on tight deadlines.",
    tags: ["JavaScript", "Node.js", "MySQL"],
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
                className={`relative flex gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary timeline-glow -translate-x-1.5" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 animate-fade-in ${
                    i % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground glass px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
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

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

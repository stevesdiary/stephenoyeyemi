import { Code2, Database, GitBranch, Globe, Layers, Lightbulb, Rocket, Server, Terminal, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, efficient code with proper documentation and testing.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimising for speed with logical approaches and delivering scalable solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Effective communication and teamwork to achieve project goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with the latest technologies and best practices.",
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "13M+", label: "Transactions / Month" },
  { value: "2M+", label: "Active Users Served" },
  { value: "99.9%", label: "Uptime Achieved" },
];

const skills = [
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Express.js", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "Redis", icon: Database },
  { name: "Sequelize ORM", icon: Database },
  { name: "REST APIs", icon: Globe },
  { name: "Microservices", icon: Globe },
  { name: "Docker", icon: Server },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "JWT Auth", icon: Terminal },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Who I Am</h2>
        </div>

        {/* Bio + photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative animate-fade-in">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                style={{ background: "var(--color-primary)" }}
              />
              <img
                src="/profile-photo.png"
                alt="Stephen Oyeyemi"
                className="relative w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in animation-delay-200">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Software Engineer specializing in{' '}
                <span className="text-primary">backend systems</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Stephen Oyeyemi, a passionate Software Engineer based in Nigeria with over 4 years of
                experience building scalable, high-performance web applications. I specialize in Node.js,
                Express.js, and TypeScript — crafting clean APIs and robust backend architectures that
                power great products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive at the intersection of great engineering and meaningful user experiences. When I'm
                not writing code, I'm exploring new technologies, contributing to open-source, and sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary glow-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in animation-delay-300">
          {highlights.map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="animate-fade-in animation-delay-400">
          <h3 className="text-center text-xl font-semibold mb-8 text-muted-foreground">
            Tech Stack &amp; Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

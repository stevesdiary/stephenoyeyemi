import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SpotlightCard } from '@/components/SpotlightCard';
import { CountUp } from '@/components/CountUp';
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

const yearsOfExperience = new Date().getFullYear() - 2022;

const stats = [
  { value: `${yearsOfExperience}+`, label: "Years Experience" },
  { value: "13M+", label: "Transactions / Month" },
  { value: "2M+", label: "Active Users Served" },
  { value: "99.9%", label: "Uptime Achieved" },
];

const skills = [
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Express.js", icon: Layers },
  { name: "Fastify", icon: Layers },
  { name: "Nest.js", icon: Layers},
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Microsoft SQL Server", icon: Database },
  { name: "AWS S3", icon: Database },
  { name: "AWS Lambda", icon: Server },
  { name: "Cloudflare", icon: Server },
  { name: "Redis", icon: Database },
  { name: "BullMQ", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Sequelize ORM", icon: Database },
  { name: "Drizzle", icon: Database },
  { name: "Prisma ORM", icon: Database },
  { name: "REST APIs", icon: Globe },
  { name: "Microservices", icon: Globe },
  { name: "Docker", icon: Server },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "JWT Auth", icon: Terminal },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-navy-600/30 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="About Me" title="Who I Am" />

        {/* Bio + photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal direction="left" className="relative order-first">
            <div className="relative max-w-sm mx-auto lg:mx-0 group">
              <div className="absolute -inset-4 rounded-3xl bg-navy-400/20 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              {/* Offset silver frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-silver-300/25 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}profile-steve.png`}
                  alt="Stephen Oyeyemi"
                  width="384"
                  height="384"
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal className="space-y-4" delay={100}>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Software Engineer specializing in{' '}
                <span className="font-serif italic font-normal text-silver-200">backend systems</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Stephen Oyeyemi, a passionate Software Engineer based in Nigeria with over 4 years of
                experience building scalable, high-performance web applications. I specialize in Node.js,
                Express.js, and TypeScript — crafting clean APIs and robust backend architectures that
                power great products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive at the intersection of great engineering and meaningful user experiences. When I'm
                not writing code, I'm exploring new technologies, reading, contributing to open-source, and sharing
                knowledge with the developer community.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} direction="scale" delay={200 + i * 80}>
                  <SpotlightCard className="glass rounded-xl p-5 text-center h-full transition-colors duration-300 hover:border-silver-300/30">
                    <CountUp value={stat.value} className="block text-3xl md:text-4xl font-semibold text-silver" />
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <SpotlightCard className="group glass rounded-2xl p-6 h-full transition-all duration-500 hover:-translate-y-1 hover:border-silver-300/30">
                <div className="w-12 h-12 mb-5 grid place-items-center rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 border border-silver-300/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-6 h-6 text-silver-100" aria-hidden="true" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Tech stack */}
        <div>
          <Reveal as="h3" className="text-center eyebrow mb-8">
            Tech Stack &amp; Tools
          </Reveal>
          <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <Reveal
                as="li"
                key={skill.name}
                direction="scale"
                delay={i * 30}
              >
                <span className="group flex items-center gap-2 px-4 py-2 glass rounded-full text-silver-200 hover:text-navy-900 hover:bg-silver-200 hover:border-silver-200 transition-colors duration-300 cursor-default">
                  <skill.icon className="w-4 h-4 text-silver-400 group-hover:text-navy-700 transition-colors duration-300" aria-hidden="true" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

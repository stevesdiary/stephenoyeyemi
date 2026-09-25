import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";

const projects = [
  {
    id: 1,
    title: "TRAKA Logistics",
    description:
      "A logistics application featuring a backend API, mobile app, and web page for administrative management — streamlining operations and tracking across the supply chain.",
    image: `${import.meta.env.BASE_URL}Traka-project.png`,
    tags: [
      "Node.js",
      "React Native",
      "PostgreSQL",
      "ReactJs",
      "Redis",
      "Express",
      "Sequelize ORM",
      "TypeScript",
    ],
    liveUrl: "https://tkweb-co00.onrender.com",
  },
  {
    id: 2,
    title: "Lockwise - Real Estate Management Platform",
    description:
      "A real estate management platform with security access features — enabling property management, tenant oversight, and secure access control.",
    image: `${import.meta.env.BASE_URL}Lockwise-project.png`,
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "ReactJs",
      "Sequelize ORM",
      "TypeScript",
    ],
    liveUrl: "https://lockwise-landing-page.onrender.com",
  },
  {
    id: 3,
    title: "SchoolOS - School Management Platform",
    description:
      "A school management platform for private schools with a mobile app for parents — providing real-time updates, payment processing, and student performance tracking.",
    image: `${import.meta.env.BASE_URL}SchoolOS-project1.png`,
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "ReactJs",
      "Flutter",
      "Prisma ORM",
      "TypeScript",
    ],
    liveUrl: "https://smp-client.onrender.com",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with seller management, product catalog, order processing, Stripe payments, return handling, and real-time push notifications.",
    image: `${import.meta.env.BASE_URL}fashion-ecommerce-project.png`,
    tags: [
      "Node.js",
      "Express",
      "Redis",
      "PostgreSQL",
      "Sequelize ORM",
      "Stripe",
      "AWS S3",
      "Firebase",
    ],
    liveUrl: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

  return (
    <SpotlightCard
      as="article"
      className="group glass rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-silver-300/30 hover:shadow-[0_30px_60px_-20px_rgba(74,103,176,0.45)]"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-50" />
        <span className="absolute top-4 left-4 font-mono text-xs text-silver-200 glass-strong border border-silver-300/15 px-2.5 py-1 rounded-full">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col justify-between p-6 flex-1">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6">
          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-silver-100 hover:text-white group/link"
            >
              <span className="relative">
                Live Demo
                <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-silver-100 transition-transform duration-300 group-hover/link:scale-x-100" />
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" aria-hidden="true" /> Private project
            </span>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] rounded-full bg-navy-600/30 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          eyebrow="My Work"
          title="Selected Projects"
          description="A selection of projects I've built — from APIs to full-stack applications."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 120} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

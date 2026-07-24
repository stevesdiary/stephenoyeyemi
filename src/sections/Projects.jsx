import { ExternalLink } from "lucide-react";

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
    title: "Luxe - Fashion E-commerce Platform",
    description:
      "A full-featured e-commerce platform for fashion brands with seller management, product catalog, order processing, Stripe payments, return handling, and real-time push notifications.",
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

const ProjectCard = ({ project }) => (
  <div className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 group flex flex-col">
    <div className="overflow-hidden h-52">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="flex flex-col justify-between p-6 flex-1">
      <div className="space-y-3">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 pt-5">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Selected Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A selection of projects I've built — from APIs to full-stack
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

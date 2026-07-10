import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform API",
    description:
      "A full-featured REST API for an e-commerce platform supporting product management, user authentication, cart operations, and payment processing with Stripe integration.",
    image: `${import.meta.env.BASE_URL}project1.png`,
    tags: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/stevesdiary",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Chat Service",
    description:
      "A scalable WebSocket-based chat service with room management, message persistence, and user presence tracking built to handle thousands of concurrent connections.",
    image: `${import.meta.env.BASE_URL}Project2.png`,
    tags: ["Node.js", "Socket.io", "Redis", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/stevesdiary",
    featured: false,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A collaborative task management API with role-based access control, real-time notifications, and team workspace features designed for distributed teams.",
    image: `${import.meta.env.BASE_URL}Project3.png`,
    tags: ["TypeScript", "Express.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/stevesdiary",
    featured: false,
  },
];

const ProjectCard = ({ project, featured = false }) => (
  <div
    className={`glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 group ${
      featured ? "lg:grid lg:grid-cols-2" : "flex flex-col"
    }`}
  >
    <div
      className={`overflow-hidden ${featured ? "h-full min-h-[280px]" : "h-52"}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div
      className={`flex flex-col justify-between ${featured ? "p-8" : "p-6 flex-1"}`}
    >
      <div className="space-y-3">
        {featured && (
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Featured Project
          </span>
        )}
        <h3
          className={`font-bold group-hover:text-primary transition-colors ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
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
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" /> Code
        </a>
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
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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

        <div className="space-y-8">
          {featured && <ProjectCard project={featured} featured />}
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

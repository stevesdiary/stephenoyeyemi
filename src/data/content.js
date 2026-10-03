// Single source of truth for all site copy. Sections render from this file,
// so updating the portfolio never requires touching layout code.

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export const CAREER_START_YEAR = 2022;
export const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

export const profile = {
  name: "Stephen Oyeyemi",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  timeZone: "Africa/Lagos",
  timeZoneLabel: "WAT",
  email: "stephenoyeyemi@gmail.com",
  cvUrl:
    "https://docs.google.com/document/d/1au5iPuvaO7r77buS1WIUpeccLZHtwv_OfvgX58GOf8M/export?format=pdf",
  portrait: asset("profile-steve.webp"),
  available: true,
};

export const socials = [
  { label: "GitHub", handle: "@stevesdiary", href: "https://github.com/stevesdiary" },
  { label: "LinkedIn", handle: "in/stephenoyeyemi", href: "https://www.linkedin.com/in/stephenoyeyemi/" },
  { label: "X", handle: "@stevesdiary_", href: "https://x.com/stevesdiary_" },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const metrics = [
  { value: "13M+", label: "Transactions validated per month" },
  { value: "2M+", label: "Active users served" },
  { value: "99.9%", label: "Uptime on critical services" },
  { value: `${yearsOfExperience}+`, label: "Years shipping to production" },
];

export const projects = [
  {
    title: "TRAKA Logistics",
    role: "Solo, full stack",
    summary:
      "Logistics platform with a backend API, a React Native driver app and an admin console for real-time shipment tracking across the supply chain.",
    challenge: "Real-time tracking",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "React Native"],
    image: asset("Traka-project.png"),
    href: "https://tkweb-co00.onrender.com",
  },
  {
    title: "Lockwise",
    role: "Solo, backend-first",
    summary:
      "Real estate management platform with property, tenant and secure physical access control built around a strict permission model.",
    challenge: "Access-control logic",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Sequelize"],
    image: asset("Lockwise-project.png"),
    href: "https://lockwise-landing-page.onrender.com",
  },
  {
    title: "SchoolOS",
    role: "Solo, full stack",
    summary:
      "School management platform for private schools, with a Flutter parent app for live updates, fee payments and student performance tracking.",
    stack: ["Node.js", "Prisma", "PostgreSQL", "Flutter", "React"],
    image: asset("SchoolOS-project1.png"),
    href: "https://smp-client.onrender.com",
  },
  {
    title: "Commerce Platform",
    role: "Backend engineer, team of 8",
    summary:
      "Marketplace backend covering seller management, catalogue, orders, Stripe payments, returns and real-time push notifications.",
    stack: ["Node.js", "PostgreSQL", "Redis", "Stripe", "AWS S3"],
    image: asset("fashion-ecommerce-project.webp"),
    href: null,
  },
];

export const experience = [
  {
    role: "Backend Application Developer",
    company: "ProvidusUnity Bank",
    location: "Lagos, NG",
    start: "Apr 2025",
    end: "Present",
    points: [
      "Automated the Diaspora Mortgage loan application flow with a cross-functional team, cutting processing time by 90%.",
      "Integrated multiple merchant APIs for the ProviBill electricity payment service with failover, eliminating downtime and lifting customer satisfaction by 20%.",
      "Built the staff Onboarding Portal API with secure bulk data processing, reducing onboarding time by 90%.",
      "Engineered a confidential Anonymous Feedback Portal with real-time issue tracking and resolution workflows.",
    ],
    stack: ["Node.js", "TypeScript", "Express", "MSSQL", "PGP", "ProcessMaker"],
  },
  {
    role: "Backend Software Engineer",
    company: "Talenvo",
    location: "Remote",
    start: "Dec 2024",
    end: "Mar 2025",
    points: [
      "Architected the server side of EduBridge, a low-data learning platform for out-of-school children, tuned for minimal bandwidth.",
      "Built the HealthBridge booking backend with location-based matching of patients to the nearest providers.",
    ],
    stack: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    company: "Aella Microfinance Bank",
    location: "Lagos, NG",
    start: "Jul 2022",
    end: "Dec 2024",
    points: [
      "Designed the transaction validation service processing 13M+ monthly transactions for 2M+ users at 99.9% uptime, reducing error rates by 40%.",
      "Led an automated transaction retry system that removed 90% of manual finance-team work and saved 10 hours every week.",
      "Refactored the event service with query optimisation and caching for 50% faster responses.",
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Engineering Intern",
    company: "Aella Microfinance Bank",
    location: "Lagos, NG",
    start: "Jan 2022",
    end: "Jun 2022",
    points: [
      "Shipped a RESTful Visitor Management API that cut check-in and check-out time by 45%.",
      "Contributed refactors that made the application respond 20% faster.",
    ],
    stack: ["Node.js", "JavaScript", "Express"],
  },
];

export const principles = [
  {
    title: "Boring on purpose",
    body: "Proven tools, explicit contracts, predictable failure modes. Novelty belongs in the product, not the plumbing.",
  },
  {
    title: "Measure, then optimise",
    body: "Profiles and query plans before opinions. The slow part is rarely where the team thinks it is.",
  },
  {
    title: "Fail loudly, recover quietly",
    body: "Idempotent handlers, retries with backoff and alerts that mean something, so incidents stay small.",
  },
];

export const stack = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  { group: "Runtimes & frameworks", items: ["Node.js", "Express", "Fastify", "NestJS"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis", "BullMQ"] },
  { group: "ORMs", items: ["Prisma", "Drizzle", "Sequelize"] },
  { group: "Cloud & infra", items: ["AWS Lambda", "AWS S3", "Cloudflare", "Docker", "CI/CD"] },
  { group: "Also ships", items: ["React", "Next.js", "React Native", "Flutter"] },
];

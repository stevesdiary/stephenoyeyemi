import { Code2, icons, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, efficient code with proper documentation and testing."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimising for speed with logical approaches and delivering scalable solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Effective communication and teamwork to achieve project goals."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with the latest techhnologues and best practices"
  }
]
export const About = () => {
  return 
    <section id="about" className="py-32 relative overflow-hidden">
      <div>
        <div>{ /*Left Column */ }</div>
        <div>
          <span>About Me</span>
        </div>
      </div>
    </section>
};
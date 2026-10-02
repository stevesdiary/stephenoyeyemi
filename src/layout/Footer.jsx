import { ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/content";

export const Footer = () => (
  <footer className="border-t border-line">
    <div className="shell py-10 grid gap-6 md:grid-cols-3 md:items-center label">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="flex gap-6 md:justify-center">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-paper transition-colors">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" className="group inline-flex items-center gap-2 md:justify-self-end hover:text-paper transition-colors">
        Back to top
        <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    </div>
  </footer>
);

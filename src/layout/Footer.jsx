import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/stephenoyeyemi/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/stevesdiary", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/stevesdiary_", label: "X (Twitter)" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-navy-950/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-silver-300/40 to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="grid place-items-center w-10 h-10 rounded-lg border border-silver-300/20 bg-navy-800 font-mono text-sm text-silver-100 hover:rotate-[8deg] transition-transform duration-500">
            SO
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-silver-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full hover:bg-silver-200 hover:text-navy-900 hover:-translate-y-0.5 transition-all duration-300 text-muted-foreground"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Stephen Oyeyemi. All rights reserved.
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-silver-100 transition-colors"
          >
            Back to top <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

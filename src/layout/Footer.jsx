import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="text-xl font-bold text-primary">
          SO<span className="text-highlight">.</span>
        </a>

        <p className="text-sm text-muted-foreground">
          &copy; {year} Stephen Oyeyemi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/stephenoyeyemi/" },
            { icon: Github, href: "https://github.com/stevesdiary" },
            { icon: Twitter, href: "https://x.com/stevesdiary_" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 text-muted-foreground"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

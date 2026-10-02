import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SpotlightCard } from '@/components/SpotlightCard';

// Formspree form endpoint (https://formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdlvpal";

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-navy-600/35 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12 relative">
          {/* Contact form */}
          <Reveal direction="left" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5 glass rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm placeholder:text-silver-500 focus:outline-none focus:border-silver-300 focus:ring-4 focus:ring-silver-300/10 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm placeholder:text-silver-500 focus:outline-none focus:border-silver-300 focus:ring-4 focus:ring-silver-300/10 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="Project collaboration"
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm placeholder:text-silver-500 focus:outline-none focus:border-silver-300 focus:ring-4 focus:ring-silver-300/10 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm placeholder:text-silver-500 focus:outline-none focus:border-silver-300 focus:ring-4 focus:ring-silver-300/10 transition-all duration-300 resize-none"
              />
            </div>

            <Button size="lg" className="w-full justify-center" disabled={status === "sending" || status === "sent"}>
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                <>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /> Send Message
                </>
              )}
            </Button>

            {status === "error" && (
              <p role="alert" className="text-red-300 text-sm text-center">Something went wrong. Please try again.</p>
            )}
            {status === "sent" && (
              <p role="status" className="text-emerald-300 text-sm text-center">Thank you! I'll get back to you soon.</p>
            )}
          </form>
          </Reveal>

          {/* Static contact info */}
          <Reveal direction="right" delay={120} className="lg:col-span-2 space-y-6">
            <SpotlightCard className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">Connect with me</h3>
              <p className="text-muted-foreground text-sm">
                Prefer to reach out directly? Find me on LinkedIn or explore my code on GitHub.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:stephenoyeyemi@gmail.com"
                  className="group flex items-center gap-3 p-3 glass rounded-xl hover:border-silver-300/30 hover:bg-white/5 hover:translate-x-1 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-silver-300 group-hover:text-white transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium truncate">Send email</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/stephenoyeyemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 glass rounded-xl hover:border-silver-300/30 hover:bg-white/5 hover:translate-x-1 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-silver-300 group-hover:text-white transition-colors shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium">in/stephenoyeyemi</p>
                  </div>
                </a>
                <a
                  href="https://github.com/stevesdiary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 glass rounded-xl hover:border-silver-300/30 hover:bg-white/5 hover:translate-x-1 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-silver-300 group-hover:text-white transition-colors shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium">@stevesdiary</p>
                  </div>
                </a>
              </div>
            </SpotlightCard>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Currently open to new opportunities — full-time, freelance, or part-time.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                Available for hire
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/Button';

// Replace YOUR_FORM_ID with your Formspree form ID from formspree.io
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
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5 glass rounded-2xl p-8 animate-fade-in">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                name="subject"
                required
                placeholder="Project collaboration"
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button size="lg" className="w-full justify-center" disabled={status === "sending" || status === "sent"}>
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </Button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
            {status === "sent" && (
              <p className="text-primary text-sm text-center">Thank you! I'll get back to you soon.</p>
            )}
          </form>

          {/* Static contact info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in animation-delay-200">
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">Connect with me</h3>
              <p className="text-muted-foreground text-sm">
                Prefer to reach out directly? Find me on LinkedIn or explore my code on GitHub.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:stephenoyeyemi@gmail.com"
                  className="flex items-center gap-3 p-3 glass rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium truncate">stephenoyeyemi@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/stephenoyeyemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 glass rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium">in/stephenoyeyemi</p>
                  </div>
                </a>
                <a
                  href="https://github.com/stevesdiary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 glass rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium">@stevesdiary</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Currently open to new opportunities — full-time, freelance, or consulting.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for hire
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SplitLines } from "@/components/SplitLines";
import { LocalTime } from "@/components/LocalTime";
import { profile, socials } from "@/data/content";

// Formspree form endpoint (https://formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdlvpal";

const statusCopy = {
  sending: "Sending...",
  sent: "Message sent",
};

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 label hover:text-paper transition-colors"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={copied ? "done" : "copy"}
          className="inline-flex items-center gap-2"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {copied ? <Check className="size-3.5 text-ok" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
          {copied ? "Copied to clipboard" : "Copy address"}
        </m.span>
      </AnimatePresence>
    </button>
  );
};

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 border-t border-line" aria-labelledby="contact-title">
      <div className="shell">
        <Reveal className="flex items-center gap-4 label mb-10 md:mb-14" y={8}>
          <span className="text-signal tabular-nums">04</span>
          <span>Contact</span>
        </Reveal>

        <SplitLines
          as="h2"
          id="contact-title"
          inView
          lines={["Got a system that", <span key="a" className="text-signal">needs to stay up?</span>]}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold tracking-[-0.045em] leading-[0.95]"
        />

        <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-16 lg:gap-8">
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <p className="label mb-3">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="link-draw text-xl sm:text-2xl md:text-3xl font-medium tracking-tight break-all"
              >
                {profile.email}
              </a>
              <div className="mt-3">
                <CopyEmail />
              </div>
            </div>

            <ul className="border-t border-line">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-line"
                  >
                    <span className="label">{s.label}</span>
                    <span className="flex items-center gap-2 text-paper/90 group-hover:text-signal transition-colors">
                      {s.handle}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="label">
              Local time <span className="text-paper"><LocalTime timeZone={profile.timeZone} label={profile.timeZoneLabel} /></span>
              . I usually reply within a working day.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <label className="block">
                  <span className="label">Name</span>
                  <input name="name" required autoComplete="name" placeholder="Ada Lovelace" className="field" />
                </label>
                <label className="block">
                  <span className="label">Email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="ada@company.com" className="field" />
                </label>
              </div>
              <label className="block">
                <span className="label">What are you building?</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="A payments API that needs to handle 10x next quarter..."
                  className="field resize-none"
                />
              </label>

              <div className="flex flex-wrap items-center gap-6">
                <Button type="submit" disabled={status === "sending" || status === "sent"}>
                  {statusCopy[status] ?? "Send message"}
                  {status === "sent" ? (
                    <Check className="size-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                  )}
                </Button>
                <p role="status" className="text-sm">
                  {status === "sent" && <span className="text-ok">Thanks. I&rsquo;ll be in touch soon.</span>}
                  {status === "error" && (
                    <span className="text-signal">
                      That didn&rsquo;t go through. Email me directly instead.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import { m } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { RequestTrace } from "@/components/RequestTrace";
import { SplitLines } from "@/components/SplitLines";
import { metrics, profile } from "@/data/content";
import { duration, ease } from "@/lib/motion";

const headline = [
  "Backend engineer",
  "for systems that",
  <span key="accent" className="text-signal">can&rsquo;t go down.</span>,
];

const enter = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.slow, ease: ease.out, delay },
});

export const Hero = () => (
  <section className="relative pt-32 md:pt-40" aria-labelledby="hero-title">
    {/* Faint horizon glow in the accent colour; the only gradient on the page */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(60%_50%_at_75%_10%,rgb(255_90_31/0.10),transparent_70%)]"
    />

    <div className="shell relative">
      <m.p className="label flex flex-wrap gap-x-6 gap-y-1 mb-8 md:mb-12" {...enter(0)}>
        <span>{profile.role}</span>
        <span>Node.js · TypeScript</span>
        <span>{profile.location}</span>
      </m.p>

      <SplitLines
        lines={headline}
        delay={0.1}
        id="hero-title"
        className="font-semibold tracking-[-0.045em] leading-[0.92] text-[clamp(2.375rem,10vw,8.5rem)]"
      />

      <div className="mt-12 md:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-5 space-y-8">
          <m.p className="text-lg md:text-xl leading-relaxed text-paper/80 max-w-xl" {...enter(0.55)}>
            I&rsquo;m {profile.name}. I design and run the APIs behind payments, lending and
            logistics in Node.js and TypeScript, with a bias for boring, observable,
            well-tested systems.
          </m.p>

          <m.div className="flex flex-wrap gap-3" {...enter(0.65)}>
            <Button href="#contact">
              Start a conversation
              <ArrowDownRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:translate-y-0.5" aria-hidden="true" />
            </Button>
            <Button href={profile.cvUrl} variant="ghost">
              Download CV
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
            </Button>
          </m.div>

          {profile.available && (
            <m.p className="label flex items-center gap-2" {...enter(0.75)}>
              <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" aria-hidden="true" />
              Open to full-time and contract roles
            </m.p>
          )}
        </div>

        <m.div
          className="lg:col-span-6 lg:col-start-7"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: ease.out, delay: 0.7 }}
        >
          <RequestTrace />
        </m.div>
      </div>

      <dl className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 border-t border-line">
        {metrics.map((metric, i) => (
          <m.div
            key={metric.label}
            className={`py-6 md:py-8 pr-4 border-b border-line lg:border-b-0 ${i % 2 ? "pl-4 md:pl-6 border-l" : ""} ${i > 0 ? "lg:pl-6 lg:border-l" : ""}`}
            {...enter(0.9 + i * 0.06)}
          >
            <dt className="label mb-3">{metric.label}</dt>
            <dd className="text-4xl md:text-5xl font-semibold tracking-tight">
              <Counter value={metric.value} />
            </dd>
          </m.div>
        ))}
      </dl>
    </div>
  </section>
);

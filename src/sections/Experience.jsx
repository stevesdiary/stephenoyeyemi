import { useRef } from "react";
import { m, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { experience, yearsOfExperience } from "@/data/content";

// Pulls quantified outcomes ("90%", "13M+") forward so a skim still lands the impact.
const METRIC = /(\d+(?:\.\d+)?(?:%|M\+))/g;

const Highlighted = ({ text }) =>
  text.split(METRIC).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-medium text-paper">
        {part}
      </strong>
    ) : (
      part
    )
  );

export const Experience = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="py-28 md:py-40 bg-ink-sunken" aria-labelledby="experience-title">
      <div className="shell">
        <SectionHeader
          id="experience-title"
          index="02"
          label="Experience"
          title={[`${yearsOfExperience} years in`, "production."]}
          aside="Fintech and banking for most of it, where a bug is a reconciliation problem and downtime has a cost per minute."
        />

        <div ref={listRef} className="relative">
          {/* Scroll-linked rule: draws down the timeline as the reader progresses */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-line hidden md:block" aria-hidden="true">
            <m.div className="absolute inset-0 origin-top bg-signal" style={{ scaleY: progress }} />
          </div>

          <ol className="space-y-16 md:space-y-24">
            {experience.map((job) => (
              <li key={`${job.company}-${job.start}`} className="grid md:grid-cols-12 gap-x-8 gap-y-4 md:pl-10">
                <Reveal className="md:col-span-3 label space-y-1" y={12}>
                  <p className="text-paper tabular-nums">
                    {job.start} <span className="text-faint">to</span> {job.end}
                  </p>
                  <p>{job.location}</p>
                </Reveal>

                <Reveal className="md:col-span-9 lg:col-span-8" delay={0.08}>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {job.role} <span className="text-muted font-normal">at {job.company}</span>
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="grid grid-cols-[1.25rem_1fr] text-muted leading-relaxed">
                        <span className="text-faint font-mono" aria-hidden="true">+</span>
                        <span>
                          <Highlighted text={point} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-mono text-xs text-faint">{job.stack.join("  /  ")}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { AnimatePresence, m, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/content";
import { ease } from "@/lib/motion";

const PREVIEW_W = 360;
const PREVIEW_H = 240;

// Desktop-only floating screenshot that trails the cursor across the list.
// Springs give it weight so it lags slightly, like a card being dragged.
// It sits to the right of the pointer so it never covers the text being read.
const usePreviewFollower = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 260, damping: 28, mass: 0.6 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(Math.min(e.clientX - rect.left + 32, rect.width - PREVIEW_W));
    y.set(e.clientY - rect.top - PREVIEW_H / 2);
  };

  return { sx, sy, onPointerMove };
};

const ProjectRow = ({ project, index, onActivate }) => {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Reveal as="li" delay={index * 0.05} y={16}>
      <Wrapper
        {...linkProps}
        onPointerEnter={() => onActivate(index)}
        className="group grid grid-cols-12 gap-x-4 gap-y-4 py-8 md:py-10 border-b border-line transition-colors duration-300 hover:border-line-strong"
      >
        <span className="col-span-2 md:col-span-1 label tabular-nums pt-2 transition-colors duration-300 group-hover:text-signal">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="col-span-10 md:col-span-6 lg:col-span-5">
          <h3 className="flex items-center gap-3 text-2xl md:text-4xl font-semibold tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2">
            {project.title}
            {project.href ? (
              <ArrowUpRight className="size-6 text-muted transition-all duration-300 group-hover:text-signal group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            ) : (
              <Lock className="size-4 text-faint" aria-label="Private project" />
            )}
          </h3>
          <p className="mt-3 text-muted leading-relaxed max-w-lg">{project.summary}</p>
        </div>

        {/* Inline screenshot on touch / small screens where there is no cursor to follow */}
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="col-span-12 md:hidden w-full aspect-[16/10] object-cover object-top rounded-lg border border-line"
        />

        <dl className="col-span-12 md:col-span-5 lg:col-span-6 md:col-start-8 lg:col-start-7 grid grid-cols-2 gap-4 content-start md:pt-2">
          <div>
            <dt className="label mb-1.5">Role</dt>
            <dd className="text-sm">{project.role}</dd>
          </div>
          {project.challenge && (
            <div>
              <dt className="label mb-1.5">Hard part</dt>
              <dd className="text-sm">{project.challenge}</dd>
            </div>
          )}
          <div className="col-span-2">
            <dt className="label mb-1.5">Stack</dt>
            <dd className="font-mono text-xs text-paper/70">{project.stack.join("  /  ")}</dd>
          </div>
        </dl>
      </Wrapper>
    </Reveal>
  );
};

export const Work = () => {
  const [active, setActive] = useState(null);
  const { sx, sy, onPointerMove } = usePreviewFollower();

  return (
    <section id="work" className="py-28 md:py-40" aria-labelledby="work-title">
      <div className="shell">
        <SectionHeader
          id="work-title"
          index="01"
          label="Selected work"
          title="Things I’ve shipped."
          aside="Mostly solo builds where I owned the API, the data model and the deploy. Live links where the client allows it."
        />

        <div
          className="relative"
          onPointerMove={onPointerMove}
          onPointerLeave={() => setActive(null)}
        >
          <ol className="border-t border-line">
            {projects.map((project, i) => (
              <ProjectRow key={project.title} project={project} index={i} onActivate={setActive} />
            ))}
          </ol>

          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 hidden md:pointer-fine:block"
            style={{ x: sx, y: sy, width: PREVIEW_W, height: PREVIEW_H }}
          >
            <AnimatePresence>
              {active !== null && (
                <m.div
                  key="preview"
                  className="relative size-full overflow-hidden rounded-xl border border-line-strong shadow-2xl shadow-black/60"
                  initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: ease.out }}
                >
                  {projects.map((p, i) => (
                    <m.img
                      key={p.title}
                      src={p.image}
                      alt=""
                      className="absolute inset-0 size-full object-cover object-top"
                      initial={false}
                      animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.08 }}
                      transition={{ duration: 0.45, ease: ease.out }}
                    />
                  ))}
                </m.div>
              )}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
};

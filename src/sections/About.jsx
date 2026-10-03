import { m } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { principles, profile, stack } from "@/data/content";
import { ease } from "@/lib/motion";

export const About = () => (
  <section id="about" className="py-28 md:py-40" aria-labelledby="about-title">
    <div className="shell">
      <SectionHeader id="about-title" index="03" label="About" title={["The person", "behind the pager."]} />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        <figure className="lg:col-span-4">
          {/* Clip-path wipe reveals the portrait top to bottom on first view */}
          <m.div
            className="group overflow-hidden rounded-xl border border-line"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.2, ease: ease.out }}
          >
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width="900"
              height="916"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover grayscale contrast-110 transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
            />
          </m.div>
          <figcaption className="label mt-3">Fig. 1: Stephen, probably thinking about indexes.</figcaption>
        </figure>

        <div className="lg:col-span-7 lg:col-start-6 space-y-16">
          <Reveal className="space-y-5 text-lg md:text-xl leading-relaxed text-paper/80">
            <p>
              I&rsquo;m a software engineer in {profile.location} who ended up specialising in the
              unglamorous half of the stack: the services that move money, validate transactions and
              keep running when traffic doesn&rsquo;t behave.
            </p>
            <p className="text-muted">
              I work best on small teams with real ownership. Give me a vague requirement and a
              production database, and I&rsquo;ll come back with a design doc, a migration plan and
              the tests that prove it.
            </p>
          </Reveal>

          <div>
            <Reveal as="h3" className="label mb-6" y={8}>How I work</Reveal>
            <ol className="grid sm:grid-cols-3 gap-8 sm:gap-6">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.08} className="border-t border-line pt-5">
                  <span className="label text-signal tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-3 font-semibold tracking-tight">{p.title}</h4>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal as="h3" className="label mb-6" y={8}>Stack</Reveal>
            <dl className="border-t border-line">
              {stack.map((row, i) => (
                <Reveal
                  key={row.group}
                  delay={i * 0.04}
                  y={8}
                  className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-line"
                >
                  <dt className="label pt-0.5">{row.group}</dt>
                  <dd className="text-paper/90">{row.items.join(", ")}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
);

import { SplitLines } from "@/components/SplitLines";
import { Reveal } from "@/components/Reveal";

// Editorial section opener: index number + label on a hairline, then a large title.
export const SectionHeader = ({ index, label, title, aside, id }) => (
  <header className="mb-14 md:mb-20">
    <Reveal className="flex items-center gap-4 label border-t border-line pt-4 mb-10 md:mb-14" y={8}>
      <span className="text-signal tabular-nums">{index}</span>
      <span>{label}</span>
    </Reveal>
    <div className="grid lg:grid-cols-12 gap-6 items-end">
      <SplitLines
        as="h2"
        id={id}
        inView
        lines={Array.isArray(title) ? title : [title]}
        className="lg:col-span-8 text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.95]"
      />
      {aside && (
        <Reveal as="p" delay={0.2} className="lg:col-span-4 text-muted leading-relaxed max-w-md">
          {aside}
        </Reveal>
      )}
    </div>
  </header>
);

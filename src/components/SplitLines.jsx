import { m } from "motion/react";
import { duration, ease } from "@/lib/motion";

// Masked line-by-line reveal for display headings. Each line slides up from
// behind its own clipping box, the way a printed headline is set line by line.
export const SplitLines = ({ lines, as = "h1", className = "", delay = 0, inView = false, ...props }) => {
  const Tag = m[as];
  const trigger = inView
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "0px 0px -10% 0px" } }
    : { initial: "hidden", animate: "visible" };

  return (
    <Tag className={className} {...trigger} transition={{ staggerChildren: 0.09, delayChildren: delay }} {...props}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <m.span
            className="block"
            variants={{
              hidden: { y: "105%" },
              visible: { y: 0, transition: { duration: duration.slow * 1.25, ease: ease.out } },
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  );
};

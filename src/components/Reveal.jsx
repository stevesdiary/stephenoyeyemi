import { m } from "motion/react";
import { duration, ease, viewportOnce } from "@/lib/motion";

// Fades and lifts its children in the first time they enter the viewport.
export const Reveal = ({ as = "div", delay = 0, y = 24, className = "", children, ...props }) => {
  const Tag = m[as];

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: duration.slow, ease: ease.out, delay }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

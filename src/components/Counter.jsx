import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

// Counts the numeric part of values like "13M+" or "99.9%" up from zero once
// visible. Writes straight to the DOM node to avoid a React render per frame.
export const Counter = ({ value, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  const match = /^([\d.]+)(.*)$/.exec(value);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match?.[1].split(".")[1]?.length ?? 0;
  const isNumeric = Boolean(match);

  useEffect(() => {
    const node = ref.current;
    if (!node || !isNumeric || !inView) return;
    if (reduceMotion) {
      node.textContent = value;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: ease.out,
      onUpdate: (v) => {
        node.textContent = `${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, isNumeric, target, decimals, suffix, value]);

  return (
    <span className={`tabular-nums ${className}`} aria-label={value}>
      <span ref={ref} aria-hidden="true">
        {match ? `${(0).toFixed(decimals)}${suffix}` : value}
      </span>
    </span>
  );
};

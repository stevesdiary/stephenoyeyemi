import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "@/hooks/useInView";

// Animates the numeric part of a value like "13M+" or "99.9%" when it scrolls into view.
export const CountUp = ({ value, duration = 1600, className = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const match = /^([\d.]+)(.*)$/.exec(value);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    if (prefersReducedMotion()) {
      setCurrent(target);
      return;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setCurrent(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={value}>
      <span aria-hidden="true">
        {current.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
};

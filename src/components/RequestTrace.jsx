import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

// A stylised distributed trace of a transaction-validation request: the kind
// of system this portfolio is about, shown rather than described.
const SPANS = [
  { name: "POST /transactions/validate", start: 0, dur: 0, depth: 0 },
  { name: "auth.verifyToken", start: 3, dur: 14, depth: 1 },
  { name: "redis GET idempotency", start: 19, dur: 4, depth: 1 },
  { name: "rules.evaluate", start: 25, dur: 58, depth: 1 },
  { name: "pg SELECT account", start: 29, dur: 31, depth: 2 },
  { name: "pg SELECT limits", start: 62, dur: 17, depth: 2 },
  { name: "queue.publish ledger", start: 86, dur: 22, depth: 1 },
  { name: "webhook.notify", start: 111, dur: 27, depth: 1 },
];

const DRAW_SECONDS = 1.6;
const CYCLE_MS = 6000;

const jitter = (n, spread) => n * (1 - spread + Math.random() * spread * 2);

// Produces a fresh trace with slightly varied timings so each loop reads as a
// new request instead of a canned animation.
const makeTrace = () => {
  const scale = jitter(1, 0.12);
  const spans = SPANS.map((s) => ({
    ...s,
    start: Math.round(s.start * scale),
    dur: Math.max(2, Math.round(jitter(s.dur, 0.1) * scale)),
  }));
  const total = Math.max(...spans.map((s) => s.start + s.dur)) + 4;
  spans[0].dur = total;

  const children = spans.slice(1);
  const slowest = children.reduce((a, b) => (b.dur > a.dur ? b : a));

  return {
    id: `req_${Math.random().toString(16).slice(2, 8)}`,
    total,
    spans: spans.map((s) => ({ ...s, critical: s === slowest })),
  };
};

export const RequestTrace = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const [trace, setTrace] = useState(makeTrace);

  // Replay with a new request while visible; stop when off-screen or reduced motion.
  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") setTrace(makeTrace());
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);

  return (
    <figure
      ref={ref}
      className="rounded-2xl border border-line bg-ink-raised/80 backdrop-blur-sm overflow-hidden"
      aria-label="Animated trace of an API request passing through auth, cache, database and queue services"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-line">
        <div className="flex items-center gap-2 label min-w-0">
          <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" aria-hidden="true" />
          <span>Trace</span>
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={trace.id}
              className="text-paper/70 normal-case tracking-normal truncate"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
            >
              {trace.id}
            </m.span>
          </AnimatePresence>
        </div>
        <span className="label shrink-0">
          <span className="text-ok">200 OK</span> · <span className="tabular-nums text-paper">{trace.total} ms</span>
        </span>
      </div>

      <ol className="px-5 py-4 space-y-2.5" aria-hidden="true">
        {trace.spans.map((span) => {
          const left = (span.start / trace.total) * 100;
          const width = (span.dur / trace.total) * 100;
          const delay = (span.start / trace.total) * DRAW_SECONDS;
          const tone = span.depth === 0 ? "bg-paper/85" : span.critical ? "bg-signal" : "bg-muted/60";

          return (
            <li
              key={span.name}
              className="grid grid-cols-[minmax(0,9.5rem)_1fr_2.75rem] sm:grid-cols-[minmax(0,12rem)_1fr_3rem] items-center gap-3"
            >
              <span
                className={`font-mono text-[0.6875rem] truncate ${span.critical ? "text-paper" : "text-muted"}`}
                style={{ paddingLeft: `${span.depth * 0.75}rem` }}
              >
                {span.name}
              </span>
              <span className="relative h-2 rounded-full bg-line/50">
                <m.span
                  key={`${trace.id}-${span.name}`}
                  className={`absolute inset-y-0 rounded-full origin-left ${tone}`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: Math.max((span.dur / trace.total) * DRAW_SECONDS, 0.2), delay, ease: ease.out }}
                />
              </span>
              <span className="font-mono text-[0.6875rem] text-right tabular-nums text-muted">{span.dur}ms</span>
            </li>
          );
        })}
      </ol>

      <figcaption className="flex items-center justify-between px-5 py-3 border-t border-line label">
        <span className="flex items-center gap-2">
          <span className="w-3 h-1 rounded-full bg-signal" aria-hidden="true" /> Critical path
        </span>
        <span>p99 budget 250 ms</span>
      </figcaption>
    </figure>
  );
};

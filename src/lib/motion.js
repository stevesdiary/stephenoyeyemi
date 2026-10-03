// Motion tokens. Every animation on the site draws from these so timing
// feels like one system rather than a collection of effects.

export const ease = {
  out: [0.16, 1, 0.3, 1], // expo-out: fast start, long settle
  inOut: [0.65, 0, 0.35, 1],
};

export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.8,
};

export const stagger = 0.06;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } },
};

export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" };

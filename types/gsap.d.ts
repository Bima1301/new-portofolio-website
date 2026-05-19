interface GsapTimeline {
  to: (target: unknown, vars: Record<string, unknown>) => GsapTimeline;
  from: (
    target: unknown,
    vars: Record<string, unknown>,
    position?: string
  ) => GsapTimeline;
}

declare const gsap: {
  timeline: () => GsapTimeline;
};

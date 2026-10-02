import { Reveal } from "@/components/Reveal";

export const SectionHeading = ({ eyebrow, title, description }) => (
  <Reveal className="text-center mb-16">
    <span className="eyebrow inline-flex items-center gap-3">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-silver-400" />
      {eyebrow}
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-silver-400" />
    </span>
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">
      <span className="text-silver">{title}</span>
    </h2>
    {description && (
      <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">{description}</p>
    )}
  </Reveal>
);

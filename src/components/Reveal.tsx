import type { ComponentPropsWithoutRef, CSSProperties, ElementType, Ref } from "react";
import { useInView } from "@/hooks/useInView";
import type { CSSVars } from "@/types";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

const offsets: Record<RevealDirection, CSSVars> = {
  up: { "--ry": "28px" },
  down: { "--ry": "-28px" },
  left: { "--rx": "-40px", "--ry": "0px" },
  right: { "--rx": "40px", "--ry": "0px" },
  scale: { "--ry": "12px", "--rs": "0.95" },
};

type RevealOwnProps<T extends ElementType> = {
  /** Element or component to render as. Defaults to `div`. */
  as?: T;
  direction?: RevealDirection;
  /** Entrance delay in milliseconds. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

// Fades/slides its children in the first time they scroll into view.
export const Reveal = <T extends ElementType = "div">({
  as,
  direction = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}: RevealProps<T>) => {
  const Tag = (as ?? "div") as ElementType;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      data-visible={inView}
      className={`reveal ${className}`}
      style={{ ...offsets[direction], "--delay": `${delay}ms`, ...style } satisfies CSSVars}
      {...props}
    >
      {children}
    </Tag>
  );
};

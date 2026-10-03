import type { ComponentPropsWithoutRef, ElementType, PointerEvent } from "react";

type SpotlightCardOwnProps<T extends ElementType> = {
  /** Element or component to render as. Defaults to `div`. */
  as?: T;
  className?: string;
};

type SpotlightCardProps<T extends ElementType> = SpotlightCardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SpotlightCardOwnProps<T>>;

// Card with a soft light that follows the pointer (see .spotlight in index.css).
export const SpotlightCard = <T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: SpotlightCardProps<T>) => {
  const Tag = (as ?? "div") as ElementType;

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag onPointerMove={handlePointerMove} className={`spotlight ${className}`} {...props}>
      {children}
    </Tag>
  );
};

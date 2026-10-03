import { useInView } from "@/hooks/useInView";

const offsets = {
  up: { "--ry": "28px" },
  down: { "--ry": "-28px" },
  left: { "--rx": "-40px", "--ry": "0px" },
  right: { "--rx": "40px", "--ry": "0px" },
  scale: { "--ry": "12px", "--rs": "0.95" },
};

// Fades/slides its children in the first time they scroll into view.
export const Reveal = ({ as = "div", direction = "up", delay = 0, className = "", style, children, ...props }) => {
  const Tag = as;
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={`reveal ${className}`}
      style={{ ...offsets[direction], "--delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

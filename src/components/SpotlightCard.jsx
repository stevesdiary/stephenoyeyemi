// Card with a soft light that follows the pointer (see .spotlight in index.css).
export const SpotlightCard = ({ as = "div", className = "", children, ...props }) => {
  const Tag = as;

  const handlePointerMove = (e) => {
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

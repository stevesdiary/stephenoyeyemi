const variants = {
  primary:
    "bg-paper text-ink hover:bg-signal",
  ghost:
    "text-paper border border-line-strong hover:border-paper",
};

// Renders an <a> when given href, otherwise a <button>. Avoids the invalid
// <a><button/></a> nesting and keeps one focus stop per control.
export const Button = ({ href, variant = "primary", className = "", children, ...props }) => {
  const classes = `group/btn inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`;

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

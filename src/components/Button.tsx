

export const Button = ({className ="", size = "default", children, ...props}) => {
  const baseClasses = "group/btn relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-200 focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-gradient-to-b from-white to-silver-300 text-navy-900 shadow-[0_8px_30px_-8px_rgba(195,204,219,0.45)] hover:shadow-[0_12px_40px_-8px_rgba(195,204,219,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      {/* Light sweep on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-0 group-hover/btn:translate-x-[400%] transition-transform duration-700 ease-out"
      />
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

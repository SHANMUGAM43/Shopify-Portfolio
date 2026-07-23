interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "outline" | "subtle";
  className?: string;
}

export function Badge({ children, variant = "purple", className = "" }: BadgeProps) {
  const variants = {
    purple: "bg-purple-500/15 text-purple-300 border border-purple-500/25",
    outline: "border border-zinc-700 text-zinc-400",
    subtle: "bg-white/5 text-zinc-400",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

"use client";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
  target?: string;
}

export default function CTAButton({
  variant = "primary",
  size = "md",
  className = "",
  text = "Get Your Quote",
  target = "booking-form",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-500";

  const variantClasses = {
    primary: "bg-gold-500 hover:bg-gold-400 text-ink-900 shadow-sm hover:shadow-lg",
    secondary: "bg-gold-500 hover:bg-gold-400 text-ink-900 shadow-sm hover:shadow-lg",
    outline:
      "border border-neutral-300 dark:border-neutral-600 text-ink-900 dark:text-white hover:border-ink-900 dark:hover:border-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handleClick = () => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label="Scroll to booking form"
    >
      {text}
    </button>
  );
}

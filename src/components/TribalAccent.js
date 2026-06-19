"use client";

/**
 * Warli / Gond-inspired line motifs used sparingly as premium brand accents
 * (kept under ~10% of any view per the design system). All strokes use
 * `currentColor`, so callers control color/opacity via CSS.
 *
 * variant: "divider" | "sun" | "dots"
 */
export default function TribalAccent({
  variant = 'divider',
  className,
  style,
  'aria-hidden': ariaHidden = true,
}) {
  const common = { className, style, 'aria-hidden': ariaHidden, fill: 'none' };

  if (variant === 'sun') {
    return (
      <svg viewBox="0 0 120 120" {...common}>
        <circle cx="60" cy="60" r="18" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="60" r="7" fill="currentColor" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x1 = 60 + Math.cos(a) * 26;
          const y1 = 60 + Math.sin(a) * 26;
          const x2 = 60 + Math.cos(a) * 40;
          const y2 = 60 + Math.sin(a) * 40;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  }

  if (variant === 'dots') {
    return (
      <svg viewBox="0 0 140 20" {...common}>
        {Array.from({ length: 11 }).map((_, i) => (
          <circle key={i} cx={10 + i * 12} cy="10" r={i % 2 ? 2 : 3.5} fill="currentColor" />
        ))}
      </svg>
    );
  }

  // divider — triangles + connecting line (Warli motif)
  return (
    <svg viewBox="0 0 240 24" {...common}>
      <line x1="0" y1="12" x2="240" y2="12" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 12 + i * 27;
        const up = i % 2 === 0;
        return (
          <path
            key={i}
            d={
              up
                ? `M${x} 5 L${x + 7} 17 L${x - 7} 17 Z`
                : `M${x} 19 L${x + 7} 7 L${x - 7} 7 Z`
            }
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}

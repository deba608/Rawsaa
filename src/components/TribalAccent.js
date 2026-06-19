"use client";

import { motion } from 'framer-motion';

/**
 * Warli / Gond-inspired line motifs used as premium brand accents.
 * Animated using framer-motion.
 *
 * variant: "divider" | "sun" | "dots"
 */
export default function TribalAccent({
  variant = 'divider',
  className,
  style,
  'aria-hidden': ariaHidden = true,
  animate = true,
}) {
  const common = { className, style, 'aria-hidden': ariaHidden, fill: 'none' };

  const containerVariants = animate
    ? {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: 0.2 },
        },
      }
    : {};

  const lineVariants = animate
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 1.5, ease: 'easeInOut' },
        },
      }
    : {};

  const dotVariants = animate
    ? {
        hidden: { scale: 0, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
      }
    : {};

  const Wrapper = animate ? motion.svg : 'svg';
  const motionProps = animate
    ? {
        variants: containerVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-50px' },
      }
    : {};

  if (variant === 'sun') {
    return (
      <Wrapper viewBox="0 0 120 120" {...common} {...motionProps}>
        <motion.circle
          cx="60"
          cy="60"
          r="18"
          stroke="currentColor"
          strokeWidth="2"
          variants={lineVariants}
        />
        <motion.circle cx="60" cy="60" r="7" fill="currentColor" variants={dotVariants} />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x1 = 60 + Math.cos(a) * 26;
          const y1 = 60 + Math.sin(a) * 26;
          const x2 = 60 + Math.cos(a) * 40;
          const y2 = 60 + Math.sin(a) * 40;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={lineVariants}
            />
          );
        })}
      </Wrapper>
    );
  }

  if (variant === 'dots') {
    return (
      <Wrapper viewBox="0 0 140 20" {...common} {...motionProps}>
        {Array.from({ length: 11 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={10 + i * 12}
            cy="10"
            r={i % 2 ? 2 : 3.5}
            fill="currentColor"
            variants={dotVariants}
          />
        ))}
      </Wrapper>
    );
  }

  // divider — triangles + connecting line (Warli motif)
  return (
    <Wrapper viewBox="0 0 240 24" {...common} {...motionProps}>
      <motion.line
        x1="0"
        y1="12"
        x2="240"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={lineVariants}
      />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 12 + i * 27;
        const up = i % 2 === 0;
        return (
          <motion.path
            key={i}
            d={
              up
                ? `M${x} 5 L${x + 7} 17 L${x - 7} 17 Z`
                : `M${x} 19 L${x + 7} 7 L${x - 7} 7 Z`
            }
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            variants={lineVariants}
          />
        );
      })}
    </Wrapper>
  );
}

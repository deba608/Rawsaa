"use client";

import { motion } from 'framer-motion';

/**
 * Lightweight scroll-reveal wrapper using Framer Motion's `whileInView`.
 * Honors reduced-motion automatically via Framer's reducedMotion handling.
 */
export default function ScrollReveal({
  children,
  as = 'div',
  delay = 0,
  y = 32,
  className,
  once = true,
  amount = 0.25,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

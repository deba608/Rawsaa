"use client";

import Image from 'next/image';
import styles from './BottleVisual.module.css';

/**
 * Renders a flavor's bottle. When a flavor has no render yet (`image: null`,
 * e.g. a future seasonal flavor) it draws a generated gradient "bottle" using
 * the flavor palette so the layout never breaks or 404s. Add the PNG to the
 * data later and the real render takes over automatically.
 */
export default function BottleVisual({ flavor, sizes, priority = false }) {
  if (flavor.image) {
    return (
      <Image
        src={flavor.image}
        alt={`RAWSA ${flavor.name} bottle`}
        fill
        sizes={sizes ?? '(max-width: 768px) 60vw, 320px'}
        className={styles.img}
        priority={priority}
      />
    );
  }

  return (
    <div className={styles.fallback} role="img" aria-label={`RAWSA ${flavor.name} bottle`}>
      <div
        className={styles.fallbackBottle}
        style={{
          background: `linear-gradient(160deg, ${flavor.primary}, ${flavor.gradient})`,
        }}
      >
        <span className={styles.fallbackCap} />
        <span className={styles.fallbackLabel}>
          <em>RAWSA</em>
          {flavor.name}
        </span>
        <span className={styles.fallbackEmoji} aria-hidden="true">
          {flavor.emoji}
        </span>
      </div>
    </div>
  );
}

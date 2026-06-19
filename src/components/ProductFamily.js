"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useFlavor } from '@/context/FlavorContext';
import BottleVisual from './BottleVisual';
import styles from './ProductFamily.module.css';

export default function ProductFamily() {
  const { flavors, activeFlavor, setFlavor } = useFlavor();

  return (
    <section className={`section ${styles.section}`} id="family">
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <span className="eyebrow">One Family</span>
          <h2 className="section-title">Six flavours. One soul.</h2>
          <p className="section-desc">
            Every RAWSA shares the same promise — real fruit, nothing artificial.
            Tap a bottle to feel the family shift.
          </p>
        </div>

        <div className={styles.stage}>
          <div className={styles.feature}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                className={styles.featureBottle}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <BottleVisual flavor={activeFlavor} sizes="(max-width: 768px) 50vw, 280px" />
              </motion.div>
            </AnimatePresence>
            <div className={styles.featureText}>
              <h3 className={styles.featureName}>{activeFlavor.name}</h3>
              <p className={styles.featureTagline}>{activeFlavor.tagline}</p>
            </div>
          </div>

          <div className={styles.lineup} role="tablist" aria-label="Product family">
            {flavors.map((flavor) => {
              const active = activeFlavor.id === flavor.id;
              return (
                <button
                  key={flavor.id}
                  role="tab"
                  aria-selected={active}
                  className={`${styles.lineItem} ${active ? styles.lineActive : ''}`}
                  style={{ '--item-primary': flavor.primary }}
                  onClick={() => setFlavor(flavor.id)}
                >
                  <span className={styles.lineBottle}>
                    <BottleVisual flavor={flavor} sizes="120px" />
                  </span>
                  <span className={styles.lineName}>{flavor.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

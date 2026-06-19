"use client";

import { motion } from 'framer-motion';
import { flavors } from '@/lib/flavors';
import { useFlavor } from '@/context/FlavorContext';
import BottleVisual from './BottleVisual';
import TribalAccent from './TribalAccent';
import styles from './FlavorsGallery.module.css';

export default function FlavorsGallery() {
  const { setFlavor } = useFlavor();

  return (
    <section className={`section ${styles.section}`} id="flavors">
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <span className="eyebrow">Our Flavours</span>
          <h2 className="section-title">A flavour for every mood.</h2>
          <p className="section-desc">
            Six bold, fruit-forward refreshers — each with its own character,
            all unmistakably RAWSA.
          </p>
        </div>

        <div className={styles.grid}>
          {flavors.map((flavor, i) => (
            <motion.article
              key={flavor.id}
              className={styles.card}
              style={{
                '--card-primary': flavor.primary,
                '--card-tint': flavor.tint,
                '--card-gradient': flavor.gradient,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 3) * 0.08,
              }}
              onMouseEnter={() => setFlavor(flavor.id)}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardEmoji} aria-hidden="true">
                  {flavor.emoji}
                </span>
                <span className={styles.cardIndex}>
                  0{i + 1}
                </span>
              </div>

              <div className={styles.bottleWrap}>
                <BottleVisual
                  flavor={flavor}
                  sizes="(max-width: 600px) 70vw, (max-width: 1000px) 40vw, 300px"
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{flavor.name}</h3>
                <p className={styles.cardFruit}>{flavor.fruit}</p>
                <p className={styles.cardDesc}>{flavor.description}</p>
                <div className={styles.notes}>
                  {flavor.notes.map((n) => (
                    <span key={n} className={styles.note}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <TribalAccent variant="dots" className={styles.cardAccent} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from 'framer-motion';
import styles from './Lifestyle.module.css';

const SCENES = [
  { key: 'sports', title: 'Game On', tag: 'Sports & Energy', emoji: '🏏', span: 'tall' },
  { key: 'travel', title: 'On The Road', tag: 'Travel & Exploration', emoji: '🧳', span: 'wide' },
  { key: 'college', title: 'Campus Fuel', tag: 'College Life', emoji: '🎒', span: '' },
  { key: 'friends', title: 'Good Company', tag: 'Friends & Gatherings', emoji: '🎉', span: '' },
  { key: 'outdoor', title: 'Into The Wild', tag: 'Outdoor Adventures', emoji: '⛰️', span: 'wide' },
];

export default function Lifestyle() {
  return (
    <section className={`section ${styles.section}`} id="lifestyle">
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <span className="eyebrow">The RAWSA Life</span>
          <h2 className="section-title">Bold flavours for every chapter.</h2>
          <p className="section-desc">
            Wherever the day takes you, RAWSA is the refreshment that keeps pace.
          </p>
        </div>

        <div className={styles.bento}>
          {SCENES.map((s, i) => (
            <motion.article
              key={s.key}
              className={`${styles.tile} ${s.span ? styles[s.span] : ''}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              <span className={styles.tileEmoji} aria-hidden="true">
                {s.emoji}
              </span>
              <div className={styles.tileText}>
                <span className={styles.tileTag}>{s.tag}</span>
                <h3 className={styles.tileTitle}>{s.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

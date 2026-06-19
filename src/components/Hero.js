"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFlavor } from '@/context/FlavorContext';
import BottleVisual from './BottleVisual';
import styles from './Hero.module.css';

const ROTATE_MS = 3600;

// Subtle floating fruit accents (kept understated for a premium feel).
const FRUITS = [
  { top: '10%', left: '4%', size: 34, dur: 8, delay: 0 },
  { top: '68%', left: '8%', size: 26, dur: 9.5, delay: 0.7 },
  { top: '16%', right: '5%', size: 30, dur: 10, delay: 0.4 },
];

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { flavors, activeFlavor, setFlavor } = useFlavor();
  const sectionRef = useRef(null);
  const [interacted, setInteracted] = useState(false);
  const [inView, setInView] = useState(true);

  const playing = !interacted && inView;

  // Pause the auto-showcase once the hero scrolls out of view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-rotate through every flavour so the hero showcases the full range.
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => {
      const i = flavors.findIndex((f) => f.id === activeFlavor.id);
      setFlavor(flavors[(i + 1) % flavors.length].id);
    }, ROTATE_MS);
    return () => clearTimeout(id);
  }, [playing, activeFlavor, flavors, setFlavor]);

  const pickFlavor = (id) => {
    setInteracted(true);
    setFlavor(id);
  };

  return (
    <section className={styles.hero} id="hero" ref={sectionRef}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* ---- Copy ---- */}
        <div className={styles.content}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <span className={styles.badgeDot} />
            RAWSA <em>by Stoneman Foodtech</em>
          </motion.span>

          <motion.h1
            className={`hero-headline ${styles.headline}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            Refresh
            <br />
            <span className={styles.accentWord}>Naturally.</span>
          </motion.h1>

          <motion.p
            className={styles.subhead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
          >
            Bold fruit flavours inspired by nature, crafted for everyday
            refreshment.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            <a href="#flavors" className="btn btn-primary">
              Explore Flavours
            </a>
            <a href="#contact" className="btn btn-secondary">
              Become a Distributor
            </a>
          </motion.div>

          <motion.dl
            className={styles.facts}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            <div>
              <dt>5</dt>
              <dd>Fruit Flavours</dd>
            </div>
            <div>
              <dt>0</dt>
              <dd>Added Sugar</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Real Fruit</dd>
            </div>
          </motion.dl>
        </div>

        {/* ---- Product stage ---- */}
        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <div className={styles.disc} aria-hidden="true" />
          <div className={styles.ring} aria-hidden="true" />

          <div className={styles.fruits} aria-hidden="true">
            {FRUITS.map((f, i) => (
              <motion.span
                key={i}
                className={styles.fruit}
                style={{ top: f.top, left: f.left, right: f.right, fontSize: f.size }}
                animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
                transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {activeFlavor.emoji}
              </motion.span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlavor.id}
              className={styles.bottle}
              initial={{ opacity: 0, y: 50, rotateY: 60 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: -40, rotateY: -60 }}
              transition={{ duration: 0.55, type: 'spring', bounce: 0.3 }}
            >
              <motion.div
                className={styles.bottleFloat}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <BottleVisual flavor={activeFlavor} priority sizes="(max-width: 1024px) 55vw, 340px" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlavor.id}
              className={styles.flavorTag}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <span className={styles.flavorTagName}>{activeFlavor.name}</span>
              <span className={styles.flavorTagSub}>{activeFlavor.tagline}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---- Visual bottle rail (switcher) ---- */}
      <motion.div
        className={styles.rail}
        role="tablist"
        aria-label="Choose a flavour"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
      >
        {flavors.map((flavor) => {
          const active = activeFlavor.id === flavor.id;
          return (
            <button
              key={flavor.id}
              role="tab"
              aria-selected={active}
              aria-label={flavor.name}
              onClick={() => pickFlavor(flavor.id)}
              className={`${styles.railItem} ${active ? styles.railActive : ''}`}
              style={{ '--item-primary': flavor.primary }}
            >
              <span className={styles.railThumb}>
                <BottleVisual flavor={flavor} sizes="80px" />
              </span>
              <span className={styles.railName}>{flavor.name}</span>
              {active && (
                <motion.span layoutId="heroRailIndicator" className={styles.railUnderline}>
                  {playing && (
                    <span
                      key={flavor.id}
                      className={styles.railFill}
                      style={{ animationDuration: `${ROTATE_MS}ms` }}
                    />
                  )}
                </motion.span>
              )}
            </button>
          );
        })}
      </motion.div>
    </section>
  );
}

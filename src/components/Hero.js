"use client";

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useFlavor } from '@/context/FlavorContext';
import BottleVisual from './BottleVisual';
import styles from './Hero.module.css';

const ROTATE_MS = 4000;
const ease = [0.16, 1, 0.3, 1];

// Floating fruit accents. `depth` drives how far each drifts with the cursor
// (parallax) — larger = closer to the viewer.
const FRUITS = [
  { top: '6%', left: '2%', size: 46, dur: 8, delay: 0, depth: 34 },
  { top: '70%', left: '6%', size: 32, dur: 9.5, delay: 0.7, depth: 22 },
  { top: '12%', right: '4%', size: 40, dur: 10, delay: 0.4, depth: 28 },
  { top: '78%', right: '10%', size: 28, dur: 8.5, delay: 1.1, depth: 18 },
];

// A single parallax fruit that reacts to the shared cursor motion values.
function ParallaxFruit({ f, emoji, mx, my }) {
  const x = useTransform(mx, [-0.5, 0.5], [-f.depth, f.depth]);
  const y = useTransform(my, [-0.5, 0.5], [-f.depth, f.depth]);
  return (
    <motion.span
      className={styles.fruit}
      style={{ top: f.top, left: f.left, right: f.right, fontSize: f.size, x, y }}
    >
      <motion.span
        style={{ display: 'inline-block' }}
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {emoji}
      </motion.span>
    </motion.span>
  );
}

export default function Hero() {
  const { flavors, activeFlavor, setFlavor } = useFlavor();
  const sectionRef = useRef(null);
  const [interacted, setInteracted] = useState(false);
  const [inView, setInView] = useState(true);

  const playing = !interacted && inView;

  // --- Cursor-driven 3D tilt ---------------------------------------------
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const shadowX = useTransform(sx, [-0.5, 0.5], [38, -38]);
  const shadowBlur = useTransform(sy, [-0.5, 0.5], [44, 64]);
  const boxShadow = useTransform(
    [shadowX, shadowBlur],
    ([x, b]) => `${x}px 46px ${b}px rgba(0,0,0,0.34)`
  );
  // Disc drifts gently the opposite way for depth.
  const discX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const discY = useTransform(sy, [-0.5, 0.5], [14, -14]);

  const handlePointer = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetPointer = () => {
    mx.set(0);
    my.set(0);
  };

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
    <section
      className={styles.hero}
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointer}
      onPointerLeave={resetPointer}
    >
      {/* Warm ambient washes tied to the active flavour */}
      <div className={styles.blobA} aria-hidden="true" />
      <div className={styles.blobB} aria-hidden="true" />
      <span className={styles.watermark} aria-hidden="true">RAWSA</span>

      <div className={`container ${styles.inner}`}>
        {/* ---- Copy ---- */}
        <div className={styles.content}>
          <motion.span
            className={styles.kicker}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <span className={styles.kickerDot} />
            RAWSA <em>by Stoneman Foodtech</em>
          </motion.span>

          <h1 className={styles.headline}>
            <motion.span
              className={styles.headTop}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
            >
              Taste the
            </motion.span>
            <AnimatePresence mode="wait">
              <motion.span
                className={styles.headAccent}
                key={activeFlavor.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.5, ease }}
              >
                {activeFlavor.fruit}
              </motion.span>
            </AnimatePresence>
            <motion.span
              className={styles.headBottom}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.22 }}
            >
              you remember.
            </motion.span>
          </h1>

          <motion.p
            className={styles.subhead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.32 }}
          >
            Bold fruit flavours pressed from real fruit — no added sugar, just
            the honest, nostalgic refreshment of an Indian summer.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.42 }}
          >
            <a href="#flavors" className={styles.ctaPrimary}>
              Explore Flavours
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className={styles.ctaGhost}>
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

        {/* ---- Product stage (the hero) ---- */}
        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <motion.div
            className={styles.disc}
            style={{ x: discX, y: discY }}
            aria-hidden="true"
          />
          <motion.div
            className={styles.discInner}
            style={{ x: discX, y: discY }}
            aria-hidden="true"
          />
          <div className={styles.ring} aria-hidden="true" />

          <div className={styles.fruits} aria-hidden="true">
            {FRUITS.map((f, i) => (
              <ParallaxFruit key={i} f={f} emoji={activeFlavor.emoji} mx={sx} my={sy} />
            ))}
          </div>

          <div className={styles.bottleWrap}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                className={styles.bottle}
                style={{ rotateX, rotateY, transformPerspective: 1100 }}
                initial={{ opacity: 0, y: 60, rotateY: 45 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -50, rotateY: -45 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.28 }}
              >
                <motion.div
                  className={styles.bottleFloat}
                  style={{ boxShadow }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BottleVisual
                    flavor={activeFlavor}
                    priority
                    sizes="(max-width: 1024px) 65vw, 440px"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

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

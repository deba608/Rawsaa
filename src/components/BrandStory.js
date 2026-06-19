"use client";

import ScrollReveal from './ScrollReveal';
import TribalAccent from './TribalAccent';
import styles from './BrandStory.module.css';

const STATS = [
  { value: '6', label: 'Fruit Flavours' },
  { value: '0', label: 'Added Sugar' },
  { value: '100%', label: 'Real Fruit Taste' },
];

export default function BrandStory() {
  return (
    <section className={`section ${styles.section}`} id="story">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className="eyebrow">Our Story</span>
            <h2 className={`section-title ${styles.title}`}>
              Inspired by nature.
              <br />
              Powered by freshness.
            </h2>
            <TribalAccent variant="sun" className={styles.sun} />
          </div>

          <div className={styles.right}>
            <ScrollReveal as="p" className={styles.lead}>
              RAWSA began with a simple belief — that a fruit drink should taste
              like the fruit it&apos;s named after. Nothing more, nothing
              borrowed.
            </ScrollReveal>

            <ScrollReveal as="p" className={styles.body} delay={0.05}>
              Rooted in India&apos;s rich agricultural heritage, we source bold,
              sun-ripened fruit and bottle it with modern foodcraft so every sip
              carries the character of where it came from. From the Alphonso
              groves of the west coast to the tangy tamarind of roadside stalls,
              our flavours are a love letter to the way India already loves to
              refresh.
            </ScrollReveal>

            <ScrollReveal as="blockquote" className={styles.quote} delay={0.1}>
              &ldquo;Real fruit. Real refreshment. Made for the everyday.&rdquo;
            </ScrollReveal>

            <ScrollReveal as="p" className={styles.body} delay={0.15}>
              Backed by the scale and quality systems of{' '}
              <strong>Stoneman Foodtech</strong>, RAWSA is built to grow — a
              modern beverage house where new seasonal flavours can join the
              family without ever losing what makes us, us.
            </ScrollReveal>

            <div className={styles.stats}>
              {STATS.map((s, i) => (
                <ScrollReveal key={s.label} className={styles.stat} delay={0.1 + i * 0.08}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

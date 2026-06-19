"use client";

import { Sprout, Ban, Droplets, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TribalAccent from './TribalAccent';
import styles from './WhyRawsa.module.css';

const BENEFITS = [
  {
    icon: Ban,
    title: 'No Added Sugar',
    body: 'Sweetness that comes from the fruit itself — never spooned in.',
  },
  {
    icon: Droplets,
    title: 'No Artificial Sweeteners',
    body: 'Zero synthetic substitutes. Just clean, honest flavour.',
  },
  {
    icon: Leaf,
    title: 'No Added Colours',
    body: 'The colour you see is the colour of real, ripe fruit.',
  },
  {
    icon: Sprout,
    title: 'Real Fruit Taste',
    body: 'Pressed from genuine fruit for a taste that tastes true.',
  },
];

export default function WhyRawsa() {
  return (
    <section className={`section ${styles.section}`} id="why-rawsa">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <span className="eyebrow">Why RAWSA</span>
            <h2 className={`section-title ${styles.title}`}>
              We left out everything
              <br />
              you don&apos;t want.
            </h2>
            <p className="section-desc">
              Refreshment shouldn&apos;t come with a list of compromises. RAWSA
              is built on four simple promises — the things we proudly leave out,
              and the one thing we never will.
            </p>
            <TribalAccent variant="divider" className={styles.divider} />
          </div>

          <ul className={styles.list}>
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <ScrollReveal
                  as="li"
                  key={b.title}
                  className={styles.item}
                  delay={i * 0.08}
                >
                  <span className={styles.itemNum}>0{i + 1}</span>
                  <span className={styles.iconWrap}>
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className={styles.itemTitle}>{b.title}</h3>
                    <p className={styles.itemBody}>{b.body}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

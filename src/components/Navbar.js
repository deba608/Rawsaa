"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#flavors', label: 'Flavours' },
  { href: '#why-rawsa', label: 'Why RAWSA' },
  { href: '#story', label: 'Our Story' },
  { href: '#lifestyle', label: 'Lifestyle' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo} aria-label="RAWSA home">
        <Image
          src="/assets/RAWSA_logo.png"
          alt=""
          width={44}
          height={44}
          className={styles.brandImage}
        />
        <span className={styles.brandText}>
          <span className={styles.brandTitle}>RAWSA</span>
          <span className={styles.brandSubtitle}>by Stoneman Foodtech</span>
        </span>
      </a>

      <nav className={styles.links} aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className={styles.link}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={styles.ctaLink}>
          Distributor Program
        </a>
      </nav>

      <button
        className={styles.menuBtn}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              Distributor Program
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

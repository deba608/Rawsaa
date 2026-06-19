"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#flavors', label: 'Flavours' },
  { href: '#why-rawsa', label: 'Why RAWSA' },
  { href: '#family', label: 'Products' },
  { href: '#story', label: 'Our Story' },
  { href: '#contact', label: 'Distributor' },
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
    <header className={styles.outer}>
      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} aria-label="RAWSA home">
          <Image
            src="/assets/RAWSA_logo.png"
            alt="RAWSA"
            width={120}
            height={40}
            className={styles.brandImage}
          />
          <span className={styles.brandSubtitle}>BY STONEMAN FOODTECH</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.ctaLink}>
          Distributor Enquiry
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

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
              Distributor Enquiry
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

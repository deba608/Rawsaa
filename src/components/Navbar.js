"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar} id="navbar">
      <div className={styles.logo}>
        <Image 
          src="/assets/RAWSA_logo.png" 
          alt="RAWSA Logo" 
          width={50} 
          height={50} 
          className={styles.brandImage}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className={styles.brandTitle}>RAWSA</span>
          <span className={styles.brandSubtitle}>by Stoneman Foodtech</span>
        </div>
      </div>
      <nav className={styles.links}>
        <a href="#flavors" className={styles.link}>Flavours</a>
        <a href="#why-rawsa" className={styles.link}>Why Us</a>
        <a href="#story" className={styles.link}>Our Story</a>
        <a href="#lifestyle" className={styles.link}>Lifestyle</a>
        <a href="#contact" className={`${styles.link} ${styles.ctaLink}`}>Distributor Program</a>
      </nav>
    </header>
  );
}

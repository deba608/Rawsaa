"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const flavors = [
  { id: 'orange', name: 'Orange', color: '#FFF3E6', image: '/assets/Orange.png' },
  { id: 'mango', name: 'Mango', color: '#FFFBE6', image: '/assets/Mango.png' },
  { id: 'appy', name: 'Appy Rush', color: '#E8F5E9', image: '/assets/AppyRush.png' },
  { id: 'guava', name: 'Pink Guava', color: '#FFF0F2', image: '/assets/PinkGuava.png' },
  { id: 'tamarind', name: 'Sweet Tamarind', color: '#F5EFEF', image: '/assets/SweetTamarinda.png' },
  { id: 'mixed', name: 'Mixed Fruit', color: '#FDF2F2', image: '/assets/MixedFruit.png' }
];

export default function Hero() {
  const [activeFlavor, setActiveFlavor] = useState(flavors[0]);

  return (
    <section 
      className={styles.heroSection} 
      id="hero"
      style={{ backgroundColor: activeFlavor.color }}
    >
      <div className={styles.bgBlob}></div>
      
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>RAWSA by Stoneman Foodtech</span>
        <h1 className="hero-headline">Refresh Naturally.</h1>
        <p className={styles.heroSubheadline}>
          Bold fruit flavours inspired by nature, crafted for everyday refreshment.
        </p>
        
        <div className={styles.heroCtas}>
          <a href="#flavors" className="btn btn-primary">Explore Flavours</a>
          <a href="#contact" className="btn btn-secondary">Become a Distributor</a>
        </div>

        <div className={styles.flavorSwitcher}>
          {flavors.map((flavor) => (
            <button
              key={flavor.id}
              onClick={() => setActiveFlavor(flavor)}
              className={`${styles.flavorBtn} ${activeFlavor.id === flavor.id ? styles.active : ''}`}
            >
              {flavor.name}
              {activeFlavor.id === flavor.id && (
                <motion.div 
                  layoutId="activeFlavorIndicator" 
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.heroVisual}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor.id}
            initial={{ opacity: 0, y: 50, rotateY: 90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            exit={{ opacity: 0, y: -50, rotateY: -90 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className={styles.bottleContainer}
          >
            <Image 
              src={activeFlavor.image} 
              alt={`${activeFlavor.name} Bottle`}
              fill
              className={styles.bottleImage}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

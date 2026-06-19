"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlavorsGallery from '@/components/FlavorsGallery';
import WhyRawsa from '@/components/WhyRawsa';
import BrandStory from '@/components/BrandStory';
import Lifestyle from '@/components/Lifestyle';
import ProductFamily from '@/components/ProductFamily';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  // Initialize Lenis smooth scroll in the browser
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <FlavorsGallery />
        <WhyRawsa />
        <BrandStory />
        <Lifestyle />
        <ProductFamily />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

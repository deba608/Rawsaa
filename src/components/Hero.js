"use client";

import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <span className="hero-badge">RAWSA by Stoneman Foodtech</span>
        <h1 className="hero-headline">Refresh Naturally.</h1>
        <p className="hero-subheadline">
          Bold fruit flavours inspired by nature, crafted for everyday refreshment.
        </p>
        <div className="hero-ctas">
          <a href="#flavors" className="btn btn-primary">Explore Flavours</a>
          <a href="#contact" className="btn btn-secondary">Become a Distributor</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="bottle-showcase-container">
          <span className="placeholder-text">Bottle Animation Showcase</span>
        </div>
      </div>
    </section>
  );
}

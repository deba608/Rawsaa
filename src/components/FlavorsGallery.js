"use client";

import React from 'react';

export default function FlavorsGallery() {
  return (
    <section className="flavors-gallery-section" id="flavors">
      <div className="section-header">
        <h2 className="section-title">Our Flavours</h2>
        <p className="section-desc">Experience the vibrant taste of premium Indian fruits.</p>
      </div>
      <div className="flavors-grid">
        <div className="flavor-placeholder-card">Orange</div>
        <div className="flavor-placeholder-card">Mango</div>
        <div className="flavor-placeholder-card">Appy Rush</div>
        <div className="flavor-placeholder-card">Pink Guava</div>
        <div className="flavor-placeholder-card">Sweet Tamarind</div>
        <div className="flavor-placeholder-card">Mixed Fruit</div>
      </div>
    </section>
  );
}

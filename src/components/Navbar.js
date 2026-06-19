"use client";

import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar" id="navbar">
      <div className="navbar-logo">
        <span className="brand-title">RAWSA</span>
        <span className="brand-subtitle">by Stoneman Foodtech</span>
      </div>
      <nav className="navbar-links">
        <a href="#flavors">Flavors</a>
        <a href="#why-rawsa">Why Us</a>
        <a href="#story">Our Story</a>
        <a href="#lifestyle">Lifestyle</a>
        <a href="#contact" className="cta-link">Distributor Program</a>
      </nav>
    </header>
  );
}

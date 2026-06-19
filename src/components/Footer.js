"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h3 className="footer-logo">RAWSA</h3>
        <p className="footer-subtext">by Stoneman Foodtech</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RAWSA. All rights reserved.</p>
      </div>
    </footer>
  );
}

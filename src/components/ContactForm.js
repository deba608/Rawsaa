"use client";

import React from 'react';

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Partner With Us</h2>
        <p className="section-desc">Bring RAWSA to your region.</p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" required />
        </div>
        <button type="submit" className="btn btn-submit">Submit Inquiry</button>
      </form>
    </section>
  );
}

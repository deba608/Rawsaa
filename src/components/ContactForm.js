"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './ContactForm.module.css';

const INQUIRY_TYPES = [
  { id: 'distributor', label: 'Distributor' },
  { id: 'retail', label: 'Retail Inquiry' },
  { id: 'partnership', label: 'Business Partnership' },
  { id: 'general', label: 'General' },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  location: '',
  message: '',
};

export default function ContactForm() {
  const [inquiry, setInquiry] = useState('distributor');
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Tell us a little about your inquiry.';
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend yet — simulate a successful lead capture.
      setSubmitted(true);
    }
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <aside className={styles.aside}>
            <span className="eyebrow">Partner With Us</span>
            <h2 className={`section-title ${styles.title}`}>
              Bring RAWSA to your region.
            </h2>
            <p className="section-desc">
              Whether you&apos;re stocking shelves or building a distribution
              network, we&apos;d love to talk. Tell us what you have in mind and
              our team will be in touch.
            </p>

            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:hello@rawsa.in">hello@rawsa.in</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Distribution</span>
                <a href="mailto:distributors@rawsa.in">distributors@rawsa.in</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Address</span>
                <span>
                  Stoneman Food and Beverages Pvt Ltd<br />
                  Ground Floor, Plot No. 946/2999<br />
                  Prasanti Vihar, Barmunda<br />
                  Bhubaneswar – 751003, Odisha
                </span>
              </li>
            </ul>
          </aside>

          <div className={styles.formWrap}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <span className={styles.successIcon}>
                    <Check size={32} strokeWidth={2.5} />
                  </span>
                  <h3>Thank you, {form.name.split(' ')[0]}!</h3>
                  <p>
                    Your {INQUIRY_TYPES.find((t) => t.id === inquiry)?.label.toLowerCase()}{' '}
                    inquiry is on its way to our team. We&apos;ll get back to you
                    shortly.
                  </p>
                  <button className="btn btn-secondary" onClick={reset}>
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <fieldset className={styles.types}>
                    <legend className={styles.legend}>I&apos;m reaching out as a…</legend>
                    <div className={styles.typeRow}>
                      {INQUIRY_TYPES.map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          className={`${styles.typeBtn} ${inquiry === t.id ? styles.typeActive : ''}`}
                          onClick={() => setInquiry(t.id)}
                          aria-pressed={inquiry === t.id}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className={styles.row}>
                    <Field
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      error={errors.name}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      error={errors.email}
                      required
                    />
                  </div>

                  <div className={styles.row}>
                    <Field label="Phone" name="phone" value={form.phone} onChange={update} />
                    <Field
                      label="Company / Store"
                      name="company"
                      value={form.company}
                      onChange={update}
                    />
                  </div>

                  <Field
                    label="City / Region"
                    name="location"
                    value={form.location}
                    onChange={update}
                  />

                  <div className={styles.field}>
                    <label htmlFor="message">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={update}
                      aria-invalid={!!errors.message}
                      placeholder="Tell us about your business and what you're looking for…"
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit Inquiry
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, required }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        required={required}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

"use client";

import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setSending(true);
    // Replace with your actual form submission logic
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
  };

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        :root {
          --orange: #FF4D00;
          --orange-dim: rgba(255,77,0,0.15);
          --orange-glow: rgba(255,77,0,0.35);
          --bg: #0A0A0A;
          --surface: #111111;
          --border: rgba(255,255,255,0.07);
          --text: #EFEFEF;
          --muted: rgba(239,239,239,0.45);
        }

        .contact-page {
          background: var(--bg);
          color: var(--text);
          font-family: 'Barlow', sans-serif;
          min-height: 100vh;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          height: 52vh;
          min-height: 320px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #0A0A0A 0%,
            #161616 40%,
            #1a1007 100%
          );
        }
        /* Decorative grid */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,77,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,77,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent);
        }
        /* Orange radial glow */
        .hero-glow {
          position: absolute;
          right: -5%;
          top: -10%;
          width: 55%;
          height: 120%;
          background: radial-gradient(ellipse, rgba(255,77,0,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        /* Hero image placeholder — replace src with your actual image */
        .hero-img {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 100%;
          width: 45%;
          object-fit: cover;
          object-position: top center;
          mask-image: linear-gradient(to left, black 60%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 60%, transparent 100%);
          opacity: 0.85;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 5vw 3rem;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }
        .hero-eyebrow {
          font-family: 'Barlow', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: var(--orange);
        }
        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          margin: 0;
        }
        .hero-title span {
          color: var(--orange);
        }
        .hero-meta {
          margin-top: 1.5rem;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .hero-meta a {
          font-size: 0.82rem;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hero-meta a:hover { color: var(--orange); }

        /* ── Main Layout ── */
        .main-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 5vw 6rem;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 6rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .main-wrap { grid-template-columns: 1fr; gap: 3rem; padding: 3rem 5vw 4rem; }
          .hero-img { width: 50%; opacity: 0.5; }
        }

        /* ── Left Column — Info ── */
        .info-col {}
        .section-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 1.5rem;
        }
        .info-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.5rem);
          line-height: 1;
          letter-spacing: 0.03em;
          margin: 0 0 1.5rem;
        }
        .info-heading span { color: var(--orange); }
        .info-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 2.5rem;
        }

        /* Contact cards */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 2.5rem;
        }
        .contact-card {
          background: var(--surface);
          padding: 1.1rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: background 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .contact-card:not(:last-child) {
          border-bottom: 1px solid var(--border);
        }
        .contact-card:hover { background: rgba(255,77,0,0.06); }
        .card-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--orange-dim);
          border: 1px solid var(--orange-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--orange);
          font-size: 0.9rem;
        }
        .card-label {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.1rem;
        }
        .card-value {
          font-size: 0.88rem;
          font-weight: 500;
        }

        /* Social row */
        .social-row {
          display: flex;
          gap: 0.75rem;
        }
        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          text-decoration: none;
          font-size: 0.85rem;
        }
        .social-btn:hover {
          border-color: var(--orange);
          color: var(--orange);
          background: var(--orange-dim);
        }

        /* ── Right Column — Form ── */
        .form-col {}
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        .form-group {
          position: relative;
          border-bottom: 1px solid var(--border);
          border-right: 1px solid var(--border);
        }
        .form-group:nth-child(even) { border-right: none; }
        .form-group.full {
          grid-column: 1 / -1;
          border-right: none;
        }
        .form-group.full:last-of-type { border-bottom: none; }

        .field-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 1rem 1.4rem 0;
          transition: color 0.2s;
          pointer-events: none;
        }
        .form-group.is-focused .field-label { color: var(--orange); }

        .field-input,
        .field-select,
        .field-textarea {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text);
          font-family: 'Barlow', sans-serif;
          font-size: 0.93rem;
          font-weight: 400;
          padding: 0.4rem 1.4rem 1rem;
          box-sizing: border-box;
          -webkit-appearance: none;
        }
        .field-select option { background: #111; color: var(--text); }
        .field-textarea {
          resize: none;
          height: 140px;
          line-height: 1.6;
        }
        /* Focus bar */
        .focus-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: var(--orange);
          transition: width 0.3s ease;
        }
        .form-group.is-focused .focus-bar { width: 100%; }

        /* Form footer */
        .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .form-disclaimer {
          font-size: 0.75rem;
          color: var(--muted);
          line-height: 1.5;
          max-width: 260px;
        }
        .submit-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--orange);
          color: #fff;
          font-family: 'Barlow', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          padding: 0.9rem 2rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          min-width: 160px;
          justify-content: center;
        }
        .submit-btn:hover:not(:disabled) {
          background: #ff6120;
          transform: translateY(-1px);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        /* Spinner */
        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success state */
        .success-panel {
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3rem 2rem;
          text-align: center;
          background: var(--surface);
        }
        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--orange-dim);
          border: 1px solid var(--orange-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--orange);
          font-size: 1.4rem;
        }
        .success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.06em;
          margin: 0 0 0.5rem;
        }
        .success-body {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.7;
        }

        /* ── Stats strip ── */
        .stats-strip {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 2.5rem 5vw;
          display: flex;
          justify-content: center;
          gap: clamp(2rem, 8vw, 8rem);
          flex-wrap: wrap;
          margin: 0 auto;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: var(--orange);
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .stat-label {
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 0.2rem;
        }
      `}</style>

      <div className="contact-page">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="hero-glow" />
          {/*
            Replace the src below with your actual hero image:
            <img src="/images/hero-contact.png" alt="" className="hero-img" />
          */}
          <div style={{
            position: 'absolute', right: 0, bottom: 0,
            width: '42%', height: '100%',
            background: 'linear-gradient(135deg, rgba(255,77,0,0.04), rgba(255,77,0,0.01))',
            borderLeft: '1px solid rgba(255,77,0,0.08)',
          }} />

          <div className="hero-content">
            <p className="hero-eyebrow">Get in touch</p>
            <h1 className="hero-title">
              LET&apos;S BRING YOUR<br />
              IDEAS TO <span>REAL</span> LIFE
            </h1>
            <div className="hero-meta">
              <a href="mailto:theiqonex@gmail.com">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                theiqonex@gmail.com
              </a>
              <a href="tel:+94769828585">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +94 7698 28585
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="stats-strip">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "4+", label: "Years Experience" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "24h", label: "Response Time" },
          ].map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="main-wrap">

          {/* Left: Info */}
          <div className="info-col">
            <p className="section-label">Contact us</p>
            <h2 className="info-heading">
              START YOUR<br /><span>PROJECT</span><br />TODAY
            </h2>
            <p className="info-body">
              We&apos;re a passionate team of designers and developers turning ambitious ideas into digital reality. Tell us what you&apos;re building — we&apos;ll make it happen.
            </p>

            {/* Contact Cards */}
            <div className="contact-cards">
              <a href="mailto:theiqonex@gmail.com" className="contact-card">
                <div className="card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="card-label">Email</div>
                  <div className="card-value">theiqonex@gmail.com</div>
                </div>
              </a>
              <a href="tel:+94769828585" className="contact-card">
                <div className="card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="card-label">Phone</div>
                  <div className="card-value">+94 7698 28585</div>
                </div>
              </a>
              <div className="contact-card">
                <div className="card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/></svg>
                </div>
                <div>
                  <div className="card-label">Based in</div>
                  <div className="card-value">Colombo, Sri Lanka 🇱🇰</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="social-row">
              {[
                { label: "Instagram", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
                { label: "LinkedIn", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: "Behance", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 6h7a3 3 0 0 1 0 6H2"/><path d="M2 12h8a3 3 0 0 1 0 6H2"/><path d="M16 6h6M15 9c0-2 1.5-3 3.5-3S22 8 22 9.5H15"/><path d="M22 12c0 2-1.5 3.5-3.5 3.5S15 13.5 15 12"/></svg> },
                { label: "Twitter / X", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l16 16M4 20L20 4"/></svg> },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="social-btn">{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="form-col">
            <p className="section-label">Send a message</p>

            {sent ? (
              <div className="success-panel">
                <div className="success-icon">✓</div>
                <h3 className="success-title">MESSAGE SENT</h3>
                <p className="success-body">
                  Thanks for reaching out! We&apos;ll review your project details<br />
                  and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="form-grid">
                  {/* Name */}
                  <FormField label="Name *" name="name" type="text" placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    focused={focused} onFocus={setFocused} />
                  {/* Email */}
                  <FormField label="Email *" name="email" type="email" placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                    focused={focused} onFocus={setFocused} />
                  {/* Phone */}
                  <FormField label="Phone (optional)" name="phone" type="tel" placeholder="+94 xxx xxx xxx"
                    value={form.phone} onChange={handleChange}
                    focused={focused} onFocus={setFocused} />
                  {/* Project type (NEW) */}
                  <SelectField label="Project Type" name="projectType"
                    value={form.projectType} onChange={handleChange}
                    focused={focused} onFocus={setFocused}
                    options={[
                      { value: "", label: "Select type" },
                      { value: "web", label: "Web Design & Dev" },
                      { value: "mobile", label: "Mobile App" },
                      { value: "brand", label: "Branding & Identity" },
                      { value: "ui", label: "UI/UX Design" },
                      { value: "other", label: "Other" },
                    ]} />
                  {/* Budget (NEW) */}
                  <SelectField label="Budget Range" name="budget"
                    value={form.budget} onChange={handleChange}
                    focused={focused} onFocus={setFocused}
                    options={[
                      { value: "", label: "Select budget" },
                      { value: "under1k", label: "Under $1,000" },
                      { value: "1k-5k", label: "$1,000 – $5,000" },
                      { value: "5k-15k", label: "$5,000 – $15,000" },
                      { value: "15k+", label: "$15,000+" },
                      { value: "discuss", label: "Let's discuss" },
                    ]} />
                  {/* Placeholder to balance grid */}
                  <div style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }} />
                  {/* Message */}
                  <TextareaField label="What are you planning to build? *" name="message"
                    placeholder="Describe your project, goals, timeline..."
                    value={form.message} onChange={handleChange}
                    focused={focused} onFocus={setFocused} />
                </div>

                <div className="form-footer">
                  <p className="form-disclaimer">
                    We reply within 24 hours. Your information is kept private and never shared.
                  </p>
                  <button
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={sending || !form.name || !form.email || !form.message}
                  >
                    {sending ? (
                      <><div className="spinner" /> Sending…</>
                    ) : (
                      <>Send Message <span style={{ fontSize: '1rem' }}>→</span></>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Field Sub-components ──────────────────────────────────────────────────────

function FormField({
  label, name, type, placeholder, value, onChange, focused, onFocus,
}: {
  label: string; name: string; type: string; placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focused: string | null;
  onFocus: (n: string | null) => void;
}) {
  const isFocused = focused === name;
  return (
    <div className={`form-group${isFocused ? " is-focused" : ""}`}>
      <label className="field-label" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        value={value} onChange={onChange}
        className="field-input"
        onFocus={() => onFocus(name)}
        onBlur={() => onFocus(null)}
        autoComplete="off"
      />
      <div className="focus-bar" />
    </div>
  );
}

function SelectField({
  label, name, value, onChange, focused, onFocus, options,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  focused: string | null; onFocus: (n: string | null) => void;
  options: { value: string; label: string }[];
}) {
  const isFocused = focused === name;
  return (
    <div className={`form-group${isFocused ? " is-focused" : ""}`}>
      <label className="field-label" htmlFor={name}>{label}</label>
      <select
        id={name} name={name} value={value}
        onChange={onChange}
        className="field-select"
        onFocus={() => onFocus(name)}
        onBlur={() => onFocus(null)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <div className="focus-bar" />
    </div>
  );
}

function TextareaField({
  label, name, placeholder, value, onChange, focused, onFocus,
}: {
  label: string; name: string; placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  focused: string | null; onFocus: (n: string | null) => void;
}) {
  const isFocused = focused === name;
  return (
    <div className={`form-group full${isFocused ? " is-focused" : ""}`}>
      <label className="field-label" htmlFor={name}>{label}</label>
      <textarea
        id={name} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        className="field-textarea"
        onFocus={() => onFocus(name)}
        onBlur={() => onFocus(null)}
      />
      <div className="focus-bar" />
    </div>
  );
}
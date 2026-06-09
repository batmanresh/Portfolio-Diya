import React from 'react';

export default function Hero() {
  return (
    <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#FAFAFA', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '400px', height: '400px', backgroundColor: '#FCE7F3', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.6, pointerEvents: 'none' }} />
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
        <p style={{ fontSize: '12px', uppercase: 'true', letterSpacing: '3px', color: '#6B7280', fontWeight: 500, textTransform: 'uppercase', marginBottom: '24px' }}>
          Diya Shresth &mdash; Marketing Strategist
        </p>
        <h1 style={{ fontSize: 'calc(2.5rem + 3.5vw)', fontWeight: '400', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 48px 0', letterSpacing: '-1px' }}>
          I Build Campaigns <br />
          <span style={{ fontStyle: 'italic', color: '#F472B6' }}>People Remember</span> <br />
          and Brands People Trust.
        </h1>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#work" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
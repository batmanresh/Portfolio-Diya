import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F3F4F6' }}>
      <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <h2 style={{ fontSize: '40px', fontWeight: '400', margin: 0 }}>The Philosophy</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{ fontSize: '26px', fontWeight: '300', lineHeight: 1.5, color: '#374151', margin: 0 }}>
            Marketing isn't about shouting louder; it's about <span style={{ backgroundColor: '#FCE7F3', padding: '0 4px', borderRadius: '4px' }}>tuning into human behavior</span>. I bridge the gap between creative intuition and performance-driven strategy.
          </p>
          <div className="grid-2" style={{ gap: '24px' }}>
            <div style={{ padding: '32px', backgroundColor: '#FAFAFA', borderRadius: '16px', border: '1px solid #F3F4F6' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#059669', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>// STRATEGY</span>
              <p style={{ color: '#4B5563', margin: 0, fontSize: '15px', lineHeight: 1.6 }}>Deep market research, demographic insights, and positioning logic that give creative concepts a solid foundation to convert.</p>
            </div>
            <div style={{ padding: '32px', backgroundColor: '#FAFAFA', borderRadius: '16px', border: '1px solid #F3F4F6' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#DB2777', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>// STORYTELLING</span>
              <p style={{ color: '#4B5563', margin: 0, fontSize: '15px', lineHeight: 1.6 }}>Crafting emotional narratives across channels that make audiences pause, interact, remember, and advocate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
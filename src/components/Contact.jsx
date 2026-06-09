import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #EEEEEE' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-2" style={{ gap: '64px', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: 'calc(2rem + 2vw)', fontWeight: '400', margin: '0 0 24px 0', lineHeight: 1.2 }}>
              Let’s make something <span style={{ fontStyle: 'italic' }}>unforgettable</span>.
            </h2>
            <p style={{ color: '#6B7280', fontSize: '18px', fontWeight: '300', margin: 0, lineHeight: 1.6 }}>
              Currently accepting selective consulting partnerships, strategic agency positions, and creative speaking engagements.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
            <a href="mailto:hello@diyashresth.com" className="contact-card">
              <div style={{ fontSize: '20px' }}>✉</div>
              <div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px' }}>Direct Drop</div>
                <div style={{ color: '#1A1A1A', fontWeight: '500' }}>hello@diyashresth.com</div>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div style={{ fontSize: '20px', color: '#0077B5' }}>Linked<span>In</span></div>
              <div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px' }}>Professional Network</div>
                <div style={{ color: '#1A1A1A', fontWeight: '500' }}>linkedin.com/in/diyashresth</div>
              </div>
            </a>
          </div>
        </div>
        <div style={{ paddingTop: '32px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'between', fontSize: '12px', color: '#9CA3AF' }}>
          <div>© 2026 Diya Shresth. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
}
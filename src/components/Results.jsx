import React from 'react';

const METRICS = [
  { value: "140%", label: "Average Organic Engagement Increase" },
  { value: "4.2M+", label: "Cross-Channel Impressions Generated" },
  { value: "22+", label: "Completed Multi-Platform Campaign Cycles" },
  { value: "88%", label: "Audience Trust & Retention Growth Rate" }
];

export default function Results() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '600px', marginBottom: '80px' }}>
          <span style={{ fontSize: '11px', color: '#34D399', letterSpacing: '2px', fontWeight: '700' }}>// BY THE NUMBERS</span>
          <h2 style={{ fontSize: '40px', fontWeight: '400', color: '#FFFFFF', marginTop: '12px', margin: 0 }}>Proven Strategies. Quantifiable ROI.</h2>
        </div>
        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{ borderLeft: '1px solid #374151', paddingLeft: '24px' }}>
              <div style={{ fontSize: '56px', color: '#FBCFE8', fontWeight: '400', letterSpacing: '-1px' }}>{m.value}</div>
              <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '8px', marginBottom: 0, fontWeight: '300', lineHeight: 1.5 }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
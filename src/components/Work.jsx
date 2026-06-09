import React from 'react';

const PROJECTS = [
  { title: "The Conscious Rebrand", category: "Brand Strategy", tag: "Creative Direction", color: "#FDF2F8" },
  { title: "Aura Social System", category: "Social Media Campaigns", tag: "Growth Strategy", color: "#ECFDF5" },
  { title: "Kinship Content Engine", category: "Content Marketing", tag: "SEO & Copy", color: "#F9FAFB" },
  { title: "NextGen Launch Strategy", category: "Marketing Campaigns", tag: "Paid Media", color: "#EFF6FF" },
  { title: "Narrative Driven Ads", category: "Advertising Campaigns", tag: "Video Production", color: "#FFF7ED" },
  { title: "The Modern Pipeline", category: "Digital Marketing", tag: "Email & Funnels", color: "#F5F3FF" }
];

export default function Work() {
  return (
    <section id="work" className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto 64px auto' }}>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#9CA3AF', marginBottom: '8px' }}>Selected Portfolios</p>
        <h2 style={{ fontSize: '48px', fontWeight: '400', margin: 0 }}>Featured Campaigns</h2>
      </div>
      <div className="grid-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {PROJECTS.map((p, i) => (
          <div key={i} className="project-card">
            <div>
              <div style={{ width: '100%', height: '180px', backgroundColor: p.color, borderRadius: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#9CA3AF', letterSpacing: '1px', textTransform: 'uppercase' }}>
                [ Campaign Concept View ]
              </div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '1px' }}>{p.category}</span>
              <h3 style={{ fontSize: '22px', fontWeight: '400', margin: '6px 0 0 0', color: '#1A1A1A' }}>{p.title}</h3>
            </div>
            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #F9FAFB' }}>
              <span style={{ fontSize: '11px', backgroundColor: '#F3F4F6', padding: '4px 12px', borderRadius: '999px', fontWeight: '500', color: '#4B5563' }}>{p.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
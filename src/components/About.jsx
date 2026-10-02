import React from 'react';
import { getContent } from '../content/content';

export default function About() {
  const { note, intro, body, skills } = getContent('about');
  return (
    <section id="about" style={{ padding: 'clamp(80px, 10vw, 140px) 8%', backgroundColor: 'rgba(244, 114, 182, 0.04)', color: '#1c1d21' }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-left {
          position: sticky;
          top: 100px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(244, 114, 182, 0.15);
          margin-top: 8px;
        }
        .skill-cell {
          padding: 24px 20px 24px 0;
          border-bottom: 1px solid rgba(244, 114, 182, 0.1);
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-left {
            position: static !important;
            top: auto !important;
          }
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="about-grid">

        {/* Left */}
        <div className="about-left">
          <span style={{
            fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px',
            color: '#F472B6', display: 'block', marginBottom: '20px',
            fontFamily: 'monospace', fontWeight: '600'
          }}>
            ✦ About
          </span>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: '300',
            margin: '0 0 24px 0',
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#1c1d21',
            letterSpacing: '-0.5px',
            lineHeight: 1.2
          }}>
            I make brands<br />
            matter to the<br />
            <span style={{ fontStyle: 'italic', color: '#F472B6' }}>right people.</span>
          </h2>
          <p style={{
            fontSize: '15px', color: '#777772', lineHeight: 1.7,
            fontWeight: '300', margin: 0
          }}>
            {note}
          </p>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{
            fontSize: 'clamp(17px, 2vw, 22px)',
            fontWeight: '300', lineHeight: 1.65, color: '#1c1d21', margin: 0,
            fontFamily: '"Times New Roman", Times, Georgia, serif'
          }}>
            {intro}
          </p>

          <p style={{ fontSize: '15px', fontWeight: '300', lineHeight: 1.75, color: '#555752', margin: 0 }}>
            {body}
          </p>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-cell">
                <h4 style={{
                  margin: '0 0 12px 0',
                  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '10px', color: '#F472B6', fontWeight: '600',
                  letterSpacing: '1px', textTransform: 'uppercase'
                }}>
                  {skill.label}
                </h4>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {skill.items.map((item, j) => (
                    <li key={j} style={{
                      fontSize: '13px', color: '#555752', lineHeight: 1.9,
                      fontWeight: '300', display: 'flex', alignItems: 'center', gap: '8px'
                    }}>
                      <span style={{ color: '#F472B6', fontSize: '7px', flexShrink: 0 }}>●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
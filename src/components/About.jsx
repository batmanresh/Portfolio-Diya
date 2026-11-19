import React from 'react';
import { getContent } from '../content/content';

export default function About() {
  const { note, intro, body, skills } = getContent('about');
  return (
    <section id="about" style={{ padding: 'clamp(80px, 10vw, 140px) 8%', backgroundColor: '#fff3f7', color: '#352733' }}>
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
          border-top: 1px solid #efd5e1;
          margin-top: 8px;
        }
        .skill-cell {
          padding: 24px 20px 24px 0;
          border-bottom: 1px solid #f3e2e9;
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
            color: '#d978a3', display: 'block', marginBottom: '20px',
            fontFamily: 'monospace', fontWeight: '600'
          }}>
            ✦ About
          </span>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: '300',
            margin: '0 0 24px 0',
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#352733',
            letterSpacing: '-0.5px',
            lineHeight: 1.2
          }}>
            I make brands<br />
            matter to the<br />
            <span style={{ fontStyle: 'italic', color: '#d978a3' }}>right people.</span>
          </h2>
          <p style={{
            fontSize: '15px', color: '#806f7b', lineHeight: 1.7,
            fontWeight: '300', margin: 0
          }}>
            {note}
          </p>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{
            fontSize: 'clamp(17px, 2vw, 22px)',
            fontWeight: '300', lineHeight: 1.65, color: '#352733', margin: 0,
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
                  fontSize: '10px', color: '#d978a3', fontWeight: '600',
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
                      <span style={{ color: '#d978a3', fontSize: '7px', flexShrink: 0 }}>●</span>
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
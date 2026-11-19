import React, { useState, useEffect, useRef } from 'react';
import { getContent } from '../content/content';

function AnimatedCounter({ targetValue, duration = 1800 }) {
  const [count, setCount] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    const el = elementRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const numericTarget = parseInt(targetValue.replace(/[^0-9.]/g, ''), 10);
    const suffix = targetValue.replace(/[0-9.]/g, '');
    if (isNaN(numericTarget)) { setCount(targetValue); return; }
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      let currentCount;
      if (targetValue.includes('.')) {
        const rawFloat = parseFloat(targetValue.replace(/[^\d.]/g, ''));
        currentCount = (easeProgress * rawFloat).toFixed(1);
      } else {
        currentCount = Math.floor(easeProgress * numericTarget);
      }
      setCount(`${currentCount}${suffix}`);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, targetValue, duration]);

  return <span ref={elementRef}>{count}</span>;
}

const styles = `
  @media (max-width: 768px) {
    .experience-grid {
      grid-template-columns: 1fr !important;
      gap: 0 !important;
    }
    .experience-left {
      position: static !important;
      top: unset !important;
      margin-bottom: 48px !important;
    }
    .experience-item {
      grid-template-columns: 1fr !important;
      gap: 0 !important;
      padding-left: 24px !important;
      border-left: 2px solid #e8cbd8 !important;
      position: relative !important;
    }
    .experience-dot-col {
      display: none !important;
    }
    .experience-year-col {
      margin-bottom: 4px !important;
    }
    .experience-item::before {
      content: '';
      position: absolute;
      left: -5px;
      top: 44px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #dfbfd0;
    }
    .timeline-line {
      display: none !important;
    }
    .metrics-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 32px !important;
    }
    .testimonials-grid {
      grid-template-columns: 1fr !important;
    }
    .section-padding {
      padding: 80px 6% !important;
    }
    .metrics-padding {
      padding: 80px 6% !important;
    }
  }

  @media (max-width: 480px) {
    .metrics-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

export default function Results() {
  const [hoveredExp, setHoveredExp] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const { metrics: METRICS, testimonials: TESTIMONIALS, experience: EXPERIENCE } = getContent('results');
  const { linkedin } = getContent('contact');

  return (
    <section id="resume" style={{ backgroundColor: '#f8f5f0', color: '#241d20', margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <style>{styles}</style>

      {/* METRICS SECTION */}
      <div className="metrics-padding" style={{ backgroundColor: '#111112', color: '#FFFFFF', padding: '140px 8%', borderTop: '1px solid #222225' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px', marginBottom: '80px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#806f7b', marginBottom: '20px', display: 'block', fontWeight: '600', fontFamily: 'monospace' }}>
              ✦ By The Numbers
            </span>
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: '300', lineHeight: '1.15', fontFamily: '"Times New Roman", Times, Georgia, serif', letterSpacing: '-1px', color: '#FFFFFF', margin: 0 }}>
              Work that moved<br />
              <span style={{ color: '#c3a3a6', fontStyle: 'italic' }}>the needle.</span>
            </h2>
          </div>

          <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px' }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ borderLeft: '1px solid #333336', paddingLeft: '28px' }}>
                <div style={{ fontSize: 'clamp(40px, 5vw, 58px)', color: '#FFFFFF', fontWeight: '300', letterSpacing: '-1.5px', fontFamily: '"Times New Roman", Times, Georgia, serif', lineHeight: 1 }}>
                  <AnimatedCounter targetValue={m.value} />
                </div>
                <p style={{ fontSize: '13.5px', color: '#c3a3a6', marginTop: '12px', marginBottom: '6px', fontWeight: '400', lineHeight: 1.5 }}>
                  {m.label}
                </p>
                <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#806f7b', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {m.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="section-padding" style={{ backgroundColor: '#fffaf5', padding: '120px 8%', borderTop: '1px solid #d9d0c8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#a45e77', marginBottom: '20px', display: 'block', fontWeight: '600', fontFamily: 'monospace' }}>
            ✦ Professional Endorsements
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '300', fontFamily: '"Times New Roman", Times, Georgia, serif', letterSpacing: '-0.5px', color: '#241d20', margin: '0 0 56px 0' }}>
            From the strategists and leaders who worked with me.
          </h2>

          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {TESTIMONIALS.map((t, i) => {
              const isHovered = hoveredTestimonial === i;
              return (
                <a
                  key={i}
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredTestimonial(i)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    textAlign: 'left',
                    padding: '40px',
                    backgroundColor: '#FFFFFF',
                    border: isHovered ? '1px solid #0077B5' : '1px solid #E8E8E3',
                    borderRadius: '4px',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                    boxShadow: isHovered ? '0 16px 32px rgba(0, 119, 181, 0.04)' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <span style={{ fontSize: '48px', color: '#0077B5', lineHeight: 0.5, fontFamily: 'Georgia, serif', opacity: 0.15 }}>
                      "
                    </span>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: isHovered ? '1px solid #0077B5' : '1px solid #E2E2DC',
                      backgroundColor: isHovered ? '#0077B5' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      flexShrink: 0
                    }}>
                      <svg style={{ width: '15px', height: '15px', fill: isHovered ? '#FFFFFF' : '#888882', transition: 'all 0.3s ease' }} viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </div>

                  <p style={{
                    fontSize: '14px',
                    color: '#333330',
                    lineHeight: 1.7,
                    fontWeight: '300',
                    margin: '0 0 28px 0',
                    fontStyle: 'italic'
                  }}>
                    {t.quote}
                  </p>

                  <div style={{ borderTop: '1px solid #F0F0EC', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        flexShrink: 0,
                        border: '1px solid #E8E8E3'
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#241d20' }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: '#806f7b', lineHeight: 1.4, marginTop: '2px' }}>{t.title}</div>
                      <div style={{ fontSize: '9px', color: '#0077B5', marginTop: '4px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '500' }}>{t.relation}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="section-padding" style={{ padding: '140px 8%', borderTop: '1px solid #D2D2CA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="experience-grid" style={{ display: 'grid', gridTemplateColumns: '35% 65%', gap: '40px' }}>

            {/* Left sticky column */}
            <div className="experience-left" style={{ position: 'sticky', top: '140px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: 'fit-content' }}>
              <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#a45e77', marginBottom: '24px', fontWeight: '600', fontFamily: 'monospace' }}>
                ✦ Experience
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 38px)', fontWeight: '300', lineHeight: '1.25', fontFamily: '"Times New Roman", Times, Georgia, serif', letterSpacing: '-0.5px', color: '#241d20', margin: '0 0 20px 0' }}>
                Where I've<br />
                <span style={{ color: '#a45e77', fontStyle: 'italic' }}>built things.</span>
              </h2>
              <p style={{ fontSize: '14px', color: '#555552', lineHeight: 1.6, margin: '0 0 40px 0', fontWeight: '400', maxWidth: '280px' }}>
                Full-stack marketing — strategy, creative, and execution in one person.
              </p>

          </a>
            </div>

            {/* Right timeline column */}
            <div style={{ position: 'relative' }}>
              {/* Desktop-only vertical line */}
              <div className="timeline-line" style={{ position: 'absolute', left: '104px', top: '40px', bottom: '40px', width: '1px', backgroundColor: '#e8cbd8', zIndex: 1 }} />

              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                {EXPERIENCE.map((exp, i) => {
                  const isHovered = hoveredExp === i;
                  return (
                    <div
                      key={i}
                      className="experience-item"
                      onMouseEnter={() => setHoveredExp(i)}
                      onMouseLeave={() => setHoveredExp(null)}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '85px 38px 1fr',
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        borderTop: i === 0 ? 'none' : '1px solid #D2D2CA',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {/* Year */}
                      <div className="experience-year-col" style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '3px' }}>
                        <span style={{
                          fontSize: '11px',
                          color: isHovered ? '#111112' : '#806f7b',
                          fontWeight: isHovered ? '500' : '400',
                          fontFamily: 'monospace',
                          transition: 'color 0.2s',
                          whiteSpace: 'nowrap'
                        }}>
                          {exp.year}
                        </span>
                      </div>

                      {/* Dot */}
                      <div className="experience-dot-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '7px' }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: isHovered ? '#111112' : '#dfbfd0',
                          transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          zIndex: 3
                        }} />
                      </div>

                      {/* Content */}
                      <div style={{ paddingLeft: '6px' }}>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: '400', lineHeight: '1.25', fontFamily: '"Times New Roman", Times, Georgia, serif', color: '#241d20', letterSpacing: '-0.1px' }}>
                          {exp.role}
                        </h4>
                        <div style={{ fontFamily: 'monospace', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#6A6A62', marginBottom: '14px', fontWeight: '500' }}>
                          {exp.company}
                        </div>
                        <p style={{ margin: 0, fontSize: '13.5px', color: '#555552', lineHeight: '1.7', fontWeight: '300', letterSpacing: '0.1px', opacity: isHovered ? 1 : 0.9, transition: 'opacity 0.2s' }}>
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
import React, { useState } from 'react';

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  // Cloudinary-hosted logos — auto-optimized delivery (q_auto,f_auto keeps file size minimal)
  const clients = [
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164704/logo1_vrznlj.png",
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164705/logo2_apwghu.png",
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164706/logo3_cj0so0.png",
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164706/logo4_q8atau.png",
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164707/logo5_chd6r9.png",
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164707/logo6_vrsgzm.png",
    "https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164708/logo7_ocmhe1.png",
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FAF9F6',
        position: 'relative',
        overflow: 'hidden',
        padding: '50px 8% 60px 8%',
        boxSizing: 'border-box'
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-8%',
          width: '480px',
          height: '480px',
          backgroundColor: '#F472B6',
          borderRadius: '50%',
          filter: 'blur(160px)',
          opacity: 0.18,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '4px',
            color: '#8A8A82',
            fontWeight: 500,
            textTransform: 'uppercase',
            marginBottom: '32px',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#F472B6' }}>✦</span> Diya Shrestha — Social Media & Brand Strategist · Kathmandu, NP
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(38px, 6.5vw, 78px)',
            fontWeight: '300',
            lineHeight: '1.1',
            color: '#111111',
            margin: '0 0 28px 0',
            letterSpacing: '-2px',
            fontFamily: '"Times New Roman", Times, Georgia, serif',
          }}
        >
          I grow brands<br />
          on social — <span style={{ fontStyle: 'italic', color: '#F472B6' }}>with strategy,</span><br />
          not just content.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: '#555752',
            fontWeight: '300',
            lineHeight: 1.6,
            margin: '0 0 48px 0',
            maxWidth: '580px',
            fontFamily: '"Times New Roman", Times, Georgia, serif',
          }}
        >
          From brand positioning to TikTok growth to full GTM execution — I've done it for global and local brands across Nepal. I'm looking to bring that to a team full-time.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '72px' }}>
          <a
            href="#work"
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '0.3px',
              transition: 'all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1)',
              backgroundColor: primaryHover ? '#F472B6' : '#111111',
              color: primaryHover ? '#111111' : '#FFFFFF',
              border: primaryHover ? '1px solid #F472B6' : '1px solid #111111',
              transform: primaryHover ? 'translateY(-1px)' : 'none',
            }}
          >
            See My Work
          </a>

          <a
            href="#contact"
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '400',
              letterSpacing: '0.2px',
              transition: 'all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1)',
              backgroundColor: 'transparent',
              color: secondaryHover ? '#F472B6' : '#111111',
              border: secondaryHover ? '1px solid #F472B6' : '1px solid #E2E2DA',
              transform: secondaryHover ? 'translateY(-1px)' : 'none',
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* CLIENT BELT TRACK */}
        <div style={{ marginTop: '56px', position: 'relative' }}>
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '3px',
              color: '#ADADAD',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              marginBottom: '32px',
            }}
          >
            Brands I've worked with
          </p>

          <div 
            style={{ 
              position: 'relative', 
              overflow: 'hidden',
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)',
              left: 0,
            }}
          >
            {/* Fade Edges Overlays */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '150px',
                height: '100%',
                background: 'linear-gradient(to right, #FAF9F6 60%, transparent)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '150px',
                height: '100%',
                background: 'linear-gradient(to left, #FAF9F6 60%, transparent)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Marquee Track with Wide Spacing */}
            <div
              className="marquee"
              style={{
                display: 'flex',
                gap: '112px',
                minWidth: '100%', 
                width: 'max-content',
                animation: 'scroll 38s linear infinite', 
                alignItems: 'center',
                padding: '10px 0',
              }}
            >
              {[...clients, ...clients].map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: '60px',
                    height: '60px', 
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                  }}
                >
                  <img
                    src={src}
                    alt={`client logo ${i % clients.length + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      mixBlendMode: 'multiply', 
                      opacity: 0.75,
                      clipPath: 'circle(50% at 50% 50%)',
                      WebkitClipPath: 'circle(50% at 50% 50%)',
                    }}
                  />
                </div>
              ))}
            </div>

            <style>{`
              .marquee:hover {
                animation-play-state: paused;
              }

              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 56px)); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
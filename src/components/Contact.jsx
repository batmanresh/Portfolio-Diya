import React, { useState } from 'react';
import { getContent } from '../content/content';

export default function Contact() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [copied, setCopied] = useState(false);

  const { email: emailAddress, linkedin } = getContent('contact');
  const linkedinLabel = linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  const handleEmailAction = (e) => {
    e.preventDefault();
    
    // 1. Instantly copy to clipboard (Flawless on iOS, Android, and Desktop)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
    } else {
      // Robust fallback for older legacy mobile webviews
      const textArea = document.createElement('textarea');
      textArea.value = emailAddress;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }

    // 2. Reset the UI text after a brief delay
    setTimeout(() => setCopied(false), 2500);

    // 3. Smoothly attempt to launch the device's native mail app as a convenience
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}`;
    }, 300);
  };

  return (
    <section id="contact" style={{ padding: '140px 8%', backgroundColor: '#f8f5f0', borderTop: '1px solid #d9d0c8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          marginBottom: '80px'
        }}>
          {/* Left Side: Keeping your exact copywriting cleanly separated */}
          <div>
            <span style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#a45e77',
              display: 'block',
              marginBottom: '20px',
              fontFamily: 'monospace',
              fontWeight: '600'
            }}>
              ✦ Let's Talk
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 50px)',
              fontWeight: '400',
              margin: '0 0 20px 0',
              lineHeight: 1.2,
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              letterSpacing: '-1px'
            }}>
              I'm looking for<br />
              my next full-time<br />
              <span style={{ fontStyle: 'italic', color: '#a45e77' }}>role.</span>
            </h2>
            <p style={{ color: '#766a62', fontSize: '16px', fontWeight: '300', margin: '0 0 16px 0', lineHeight: 1.7, maxWidth: '420px' }}>
              Social media strategy, brand marketing, or content — if you're building something that needs a marketer who owns the full picture, let's talk.
            </p>
            <p style={{ color: '#8f7d76', fontSize: '13px', fontWeight: '300', margin: 0, lineHeight: 1.6, maxWidth: '380px' }}>
              Open to corporate & agency roles, in-house brand teams, and remote positions. Now based in Dubai, UAE.
            </p>
          </div>

          {/* Right Side: Channels Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            
            {/* Unified Email Card Component */}
            <button
              onClick={handleEmailAction}
              onMouseEnter={() => setHoveredIdx(0)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '24px',
                backgroundColor: '#FFFFFF',
                border: hoveredIdx === 0 ? (copied ? '1px solid #10B981' : '1px solid #a45e77') : '1px solid #d9d0c8',
                transform: hoveredIdx === 0 ? 'translateY(-2px)' : 'none',
                boxShadow: hoveredIdx === 0 ? '0 12px 24px rgba(0, 0, 0, 0.05)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1)',
                width: '100%',
                boxSizing: 'border-box',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'inherit'
              }}
            >
              <div style={{
                fontSize: '22px',
                color: copied ? '#10B981' : '#a45e77',
                width: '32px',
                transition: 'color 0.2s ease',
                marginRight: '20px'
              }}>
                {copied ? '✓' : '✉'}
              </div>
              <div>
                <div style={{ 
                  fontSize: '10px', 
                  color: copied ? '#10B981' : '#9CA3AF', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px', 
                  fontFamily: 'monospace', 
                  marginBottom: '3px',
                  transition: 'color 0.2s ease'
                }}>
                  {copied ? 'Copied' : 'Email'}
                </div>
                <div style={{ 
                  color: copied ? '#10B981' : '#241d20', 
                  fontWeight: '500', 
                  fontSize: '15px',
                  transition: 'color 0.2s ease'
                }}>
                  {copied ? 'Address copied to clipboard!' : emailAddress}
                </div>
              </div>
            </button>

            {/* LinkedIn Card Link */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIdx(1)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '24px',
                backgroundColor: '#FFFFFF',
                border: hoveredIdx === 1 ? '1px solid #a45e77' : '1px solid #d9d0c8',
                textDecoration: 'none',
                transform: hoveredIdx === 1 ? 'translateY(-2px)' : 'none',
                boxShadow: hoveredIdx === 1 ? '0 12px 24px rgba(0, 0, 0, 0.05)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1)',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#0077B5',
                width: '32px',
                fontFamily: 'sans-serif'
              }}>
                in
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'monospace', marginBottom: '3px' }}>
                  LinkedIn
                </div>
                <div style={{ color: '#241d20', fontWeight: '500', fontSize: '15px' }}>
                  {linkedinLabel}
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Footer Area */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid #d9d0c8',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#9CA3AF',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>© 2026 Diya Shrestha. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#a45e77', display: 'inline-block' }} />
            <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>DUBAI, UAE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
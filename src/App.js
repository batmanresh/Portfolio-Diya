import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WorkCollage from './components/WorkCollage';
import About from './components/About';
import Work from './components/Work';
import Results from './components/Results';
import Contact from './components/Contact';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LEAN DATA ARRAY: No asset paths here anymore
  const campaigns = [
    {
      id: "camp-01",
      title: "Ai-cha Nepal",
      category: "Brand Strategy & GTM",
      timeline: "2024",
      tagline: "National Marketing Manager · Global Brand Entry"
    },
    {
      id: "camp-02",
      title: "ING Group / Herald College",
      category: "TikTok & Social Growth",
      timeline: "2023",
      tagline: "Social Strategy · Millions of Views"
    },
    {
      id: "camp-03",
      title: "Naamche & Utopia",
      category: "Brand & Content",
      timeline: "2023 — 2024",
      tagline: "Social Media Strategy & Creative Direction"
    }
  ];

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div style={{ boxSizing: 'border-box', margin: 0, padding: 0, backgroundColor: '#fbfbfa' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; background-color: #fbfbfa; -webkit-font-smoothing: antialiased; overflow-x: hidden; color: #1c1d21; }
        .nav-link-item { position: relative; padding: 6px 0; display: inline-block; }
        .nav-link-item::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px;
          background-color: #F472B6; transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link-item:hover::after { width: 100%; }
        .nav-link-item:hover { color: #1c1d21 !important; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: flex !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>

      <div style={{ position: 'fixed', top: 0, left: 0, width: `${scrollProgress}%`, height: '2px', backgroundColor: '#F472B6', zIndex: 1100, transition: 'width 0.1s ease-out' }} />

      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(251, 251, 250, 0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', zIndex: 1000, borderBottom: '1px solid #e8e8e3', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%' }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '22px', fontWeight: '400', letterSpacing: '-0.5px', color: '#1c1d21' }}>
            diya<span style={{ fontStyle: 'italic', fontWeight: '500', color: '#F472B6' }}>s.</span>
          </div>
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.href} className="nav-link-item" style={{ fontSize: '13px', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.3px', color: '#555752', textDecoration: 'none', fontWeight: '400', transition: 'color 0.2s' }}>{item.label}</a>
          ))}
          <a href="#contact" style={{ fontSize: '12px', fontWeight: '500', color: '#111111', textDecoration: 'none', padding: '10px 22px', border: '1px solid #111111', borderRadius: '20px', letterSpacing: '0.3px', transition: 'all 0.25s ease', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }} onMouseEnter={e => { e.target.style.backgroundColor = '#F472B6'; e.target.style.borderColor = '#F472B6'; e.target.style.color = '#fff'; }} onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.borderColor = '#111111'; e.target.style.color = '#111111'; }}>Hire Me</a>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
          <span style={{ width: '22px', height: '1px', backgroundColor: '#1c1d21', display: 'block', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ width: '22px', height: '1px', backgroundColor: '#1c1d21', display: 'block', opacity: mobileMenuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
          <span style={{ width: '22px', height: '1px', backgroundColor: '#1c1d21', display: 'block', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </header>

      {mobileMenuOpen && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, backgroundColor: 'rgba(251, 251, 250, 0.98)', backdropFilter: 'blur(20px)', zIndex: 999, borderBottom: '1px solid #E8E8E3', padding: '24px 8%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '18px', color: '#1c1d21', textDecoration: 'none', fontFamily: '"Times New Roman", serif', fontWeight: '300', letterSpacing: '-0.3px' }}>{item.label}</a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', fontWeight: '500', color: '#F472B6', textDecoration: 'none', fontFamily: '-apple-system, sans-serif', marginTop: '8px' }}>Hire Me →</a>
        </div>
      )}

      <main style={{ paddingTop: '62px' }}>
        <Hero />
        <WorkCollage campaigns={campaigns} />
        <About />
        <div id="production-deep-dive">
          <Work />
        </div>
        <Results />
        <Contact />
      </main>
    </div>
  );
}
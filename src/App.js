import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Results from './components/Results';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      {/* Navigation Header */}
      <header className="nav-header">
        <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>
          ds<span style={{ color: '#F472B6' }}>.</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Work />
        <Results />
        <Contact />
      </main>
    </div>
  );
}
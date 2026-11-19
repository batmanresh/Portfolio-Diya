import React from 'react';
import {getContent} from '../content/content';

export default function Hero(){
  const {eyebrow,intro,logos=[]}=getContent('hero');
  return <section id="hero" className="hero-cover">
    <style>{`
      .hero-cover{position:relative;overflow:hidden;min-height:calc(100vh - 78px);background:#eee8e0;color:#241d20;padding:clamp(50px,7vw,100px) clamp(20px,6.5vw,100px) 34px}
      .hero-cover:after{content:'୨୧';position:absolute;right:7%;top:17%;font:clamp(100px,17vw,245px)/1 var(--serif);color:#d7b6b5;opacity:.5;transform:rotate(-12deg);pointer-events:none}
      .hero-cover-inner{max-width:1440px;margin:auto;position:relative;z-index:1}
      .hero-cover-top{display:flex;justify-content:space-between;gap:18px;border-bottom:1px solid #c8bdb3;padding-bottom:14px;font:9px var(--sans);letter-spacing:1.8px;text-transform:uppercase;color:#766a62}
      .hero-cover-grid{display:grid;grid-template-columns:minmax(0,1fr) 230px;gap:30px;align-items:end;padding:clamp(65px,10vw,140px) 0 clamp(65px,9vw,120px)}
      .hero-cover-kicker{font:9px var(--sans);letter-spacing:2.2px;text-transform:uppercase;color:#9d5d73}
      .hero-cover-title{font:400 clamp(66px,12.3vw,174px)/.77 var(--serif);letter-spacing:-.085em;margin:22px 0 28px;max-width:1100px}
      .hero-cover-title em{font-weight:400;color:#a45e77}
      .hero-cover-copy{max-width:560px;font:italic clamp(17px,1.8vw,22px)/1.55 var(--serif);color:#75645e;margin:0}
      .hero-cover-side{padding:0 0 7px 22px;border-left:1px solid #c8bdb3}
      .hero-cover-side strong{display:block;font:italic 28px/1.05 var(--serif);font-weight:400;color:#9d5d73;margin-bottom:12px}
      .hero-cover-side p{font:10px/1.8 var(--sans);letter-spacing:.3px;color:#756a62;margin:0}
      .hero-cover-actions{display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-top:34px}
      .hero-cover-actions a{font:9px var(--sans);letter-spacing:1.4px;text-transform:uppercase;text-decoration:none}
      .hero-cover-actions .hero-primary{background:#241d20;color:#f8f5f0;padding:15px 20px}
      .hero-cover-actions .hero-secondary{color:#725e59;border-bottom:1px solid #a98f85;padding:8px 0}
      .hero-cover-footer{display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;border-top:1px solid #c8bdb3;padding-top:18px}
      .hero-cover-footer-label{font:8px var(--sans);letter-spacing:1.8px;text-transform:uppercase;color:#85776e}
      .hero-cover-brands{display:flex;align-items:center;gap:clamp(12px,2.4vw,28px);flex-wrap:wrap}
      .hero-cover-brands img{width:42px;height:38px;object-fit:contain;filter:grayscale(1);opacity:.65}
      @media(max-width:760px){.hero-cover-grid{grid-template-columns:1fr;gap:32px;padding:80px 0}.hero-cover-side{max-width:300px}.hero-cover:after{right:-4%;top:12%}}
      @media(max-width:480px){.hero-cover-title{font-size:clamp(60px,17vw,90px)}.hero-cover-top span:last-child{display:none}.hero-cover-footer-label:last-child{display:none}}
    `}</style>
    <div className="hero-cover-inner">
      <div className="hero-cover-top"><span>Diya Shrestha / Portfolio</span><span>Creative direction · Brand strategy · Digital storytelling</span><span>Dubai, UAE / 2026</span></div>
      <div className="hero-cover-grid">
        <div>
          <div className="hero-cover-kicker">{eyebrow || 'A creative marketer with a strategic point of view'}</div>
          <h1 className="hero-cover-title">A point of<br/><em>view</em> for<br/>brands in motion.</h1>
          <p className="hero-cover-copy">{intro || 'I build brand stories through strategy, visual thinking and content that makes people feel something.'}</p>
          <div className="hero-cover-actions"><a className="hero-primary" href="#work">Explore the work ↗</a><a className="hero-secondary" href="#about">A little about me</a></div>
        </div>
        <aside className="hero-cover-side"><strong>Strategy is the idea.<br/>Story is the feeling.</strong><p>From the first audience insight to the final frame — connecting creative instinct with commercial thinking.</p></aside>
      </div>
      <div className="hero-cover-footer"><span className="hero-cover-footer-label">A few brands along the way</span><div className="hero-cover-brands">{logos.slice(0,7).map((logo,i)=>logo.image?<img key={i} src={logo.image} alt="Brand mark" loading="lazy"/>:null)}</div><span className="hero-cover-footer-label">Issue Nº 01 / Selected practice</span></div>
    </div>
  </section>;
}

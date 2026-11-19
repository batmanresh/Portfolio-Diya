import React from 'react';
import {getContent} from '../content/content';
export default function Hero(){
 const {eyebrow,intro,logos=[]}=getContent('hero');
 return <section id="hero" className="hero-editorial">
 <style>{`
 .hero-editorial{position:relative;overflow:hidden;min-height:690px;padding:clamp(88px,12vw,150px) clamp(24px,8vw,120px) 74px;background:radial-gradient(ellipse at 84% 22%,#f9dce8 0,transparent 32%),linear-gradient(130deg,#fffaf5 0%,#fff1f6 58%,#f3edfb 100%)}
 .hero-editorial:before{content:'✳';position:absolute;right:9%;top:12%;font-size:clamp(90px,16vw,220px);color:#edb7ce;opacity:.42;transform:rotate(14deg)}
 .hero-inner{position:relative;z-index:1;max-width:1280px;margin:auto}
 .hero-kicker{display:flex;align-items:center;gap:12px;color:#9a7186;font-size:10px;letter-spacing:2.4px;text-transform:uppercase;font-weight:700}
 .hero-kicker:before{content:'';width:34px;height:1px;background:#d987aa}
 .hero-title{font:400 clamp(58px,10vw,140px)/.94 var(--serif);letter-spacing:-4px;max-width:1050px;margin:32px 0 26px;color:#30242e}
 .hero-title em{color:#d66d9b;font-weight:400}
 .hero-copy{font-size:clamp(14px,1.5vw,18px);line-height:1.85;color:#765f6c;max-width:560px}
 .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin:34px 0 76px}.hero-cta a{padding:14px 22px;border-radius:999px;text-decoration:none;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700}
 .hero-cta .primary{background:#30242e;color:white;box-shadow:0 12px 28px #56334a22}.hero-cta .secondary{border:1px solid #dcb7c9;color:#76576a;background:#fff9}
 .hero-foot{display:flex;align-items:center;justify-content:space-between;gap:25px;flex-wrap:wrap;border-top:1px solid #e8cfdb;padding-top:22px}
 .hero-brands{display:flex;align-items:center;gap:clamp(14px,3vw,34px);flex-wrap:wrap}.hero-brands img{width:44px;height:44px;object-fit:contain;filter:grayscale(1);opacity:.72}
 .hero-foot-label{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#a18392}
 @media(max-width:600px){.hero-title{letter-spacing:-2px}.hero-editorial:before{right:-5%;top:9%}.hero-cta{margin-bottom:52px}}
 `}</style>
 <div className="hero-inner">
  <div className="hero-kicker">{eyebrow||'Digital marketing strategist · Creative thinker · Dubai'}</div>
  <h1 className="hero-title">Making brands<br/>feel <em>impossible</em><br/>to ignore<span style={{color:'#e5a0bd'}}>.</span></h1>
  <p className="hero-copy">{intro||'Strategy-led storytelling, social-first campaigns and creative direction that turn ideas into momentum.'}</p>
  <div className="hero-cta"><a className="primary" href="#work">Explore selected work ↗</a><a className="secondary" href="#contact">Let’s create something</a></div>
  <div className="hero-foot"><span className="hero-foot-label">A few lovely brands along the way</span><div className="hero-brands">{logos.slice(0,7).map((l,i)=>l.image?<img key={i} src={l.image} alt="Brand mark" loading="lazy"/>:null)}</div><span className="hero-foot-label">Strategy / Story / Impact</span></div>
 </div><span aria-hidden="true" style={{position:'absolute',right:'6%',bottom:'9%',fontSize:36,transform:'rotate(-12deg)'}}>🎀</span>
 </section>
}

import React,{useEffect,useState} from 'react';
import Hero from './components/Hero';
import WorkCollage from './components/WorkCollage';
import About from './components/About';
import Work from './components/Work';
import Results from './components/Results';
import Contact from './components/Contact';

export default function App(){
 const [progress,setProgress]=useState(0),[menu,setMenu]=useState(false);
 useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?window.scrollY/max*100:0)};window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 const links=[['About','#about'],['Selected work','#work'],['Experience','#resume'],['Contact','#contact']];
 return <div className="portfolio-shell">
  <style>{`
   .site-progress{position:fixed;z-index:1200;top:0;left:0;height:3px;background:linear-gradient(90deg,#f4a7c5,#c88be7);transition:width .12s}
   .site-nav{height:78px;position:fixed;z-index:1100;inset:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(22px,6vw,92px);background:rgba(248,245,240,.94);backdrop-filter:blur(18px);border-bottom:1px solid rgba(207,196,187,.7)}
   .site-logo{font:italic 27px var(--serif);text-decoration:none;letter-spacing:-1.2px}.site-logo span{color:#a45e77}
   .site-links{display:flex;align-items:center;gap:clamp(18px,3vw,42px)}.site-links a{font-size:11px;text-transform:uppercase;letter-spacing:1.4px;text-decoration:none;color:#6f5b68;transition:color .2s}.site-links a:hover{color:#8e4e68}
   .site-hire{padding:12px 21px;border-radius:999px;background:#30242d;color:white!important}.site-hire:hover{background:#dc78a4!important;color:white!important}
   .site-menu{display:none;border:0;background:none;font-size:25px;color:#30242d}
   @media(max-width:720px){.site-links{display:none}.site-menu{display:block}.site-mobile{position:fixed;z-index:1090;top:78px;left:0;right:0;padding:22px 26px 28px;background:#f8f5f0;border-bottom:1px solid #d9d0c8;display:grid;gap:18px}.site-mobile a{text-decoration:none;font-size:14px;letter-spacing:1px;text-transform:uppercase}}
  `}</style>
  <div className="site-progress" style={{width:progress+'%'}}/>
  <header className="site-nav"><a className="site-logo" href="#hero">diya<span>shr.</span> <small style={{font:'9px var(--sans)',letterSpacing:2,color:'#a88c9b'}}>PORTFOLIO</small></a>
   <nav className="site-links">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}<a className="site-hire" href="#contact">Let’s talk ↗</a></nav>
   <button className="site-menu" aria-label="Toggle navigation" onClick={()=>setMenu(v=>!v)}>{menu?'×':'☰'}</button>
  </header>
  {menu&&<nav className="site-mobile">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setMenu(false)}>{label}</a>)}<a href="#contact" onClick={()=>setMenu(false)}>Let’s talk ↗</a></nav>}
  <main style={{paddingTop:78}}><Hero/><WorkCollage/><About/><Work/><Results/><Contact/></main>
 </div>
}

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
   .site-progress{position:fixed;z-index:1200;top:0;left:0;height:4px;background:linear-gradient(90deg,#ff2993,#ff9acb,#c9a5ff);transition:width .12s;box-shadow:0 1px 8px #ff299366}
   .site-nav{height:78px;position:fixed;z-index:1100;inset:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,6vw,88px);background:rgba(255,248,252,.92);backdrop-filter:blur(18px);border-bottom:1px solid #f1c8df}
   .site-logo{font:900 25px var(--display);text-decoration:none;letter-spacing:-1.5px}.site-logo span{color:#ff2993}
   .site-links{display:flex;align-items:center;gap:clamp(16px,2.5vw,34px)}.site-links a{font:800 10px var(--sans);text-transform:uppercase;letter-spacing:1px;text-decoration:none;color:#72566a;transition:color .2s,transform .2s}.site-links a:hover{color:#ff2993;transform:translateY(-2px)}
   .site-hire{padding:12px 20px;border-radius:999px;background:#ff2993;color:white!important;box-shadow:0 4px 0 #e7197c}.site-hire:hover{background:#291522!important;color:white!important}
   .site-menu{display:none;border:0;background:#ff2993;color:white;border-radius:50%;width:42px;height:42px;font-size:23px}
   .site-mobile{position:fixed;z-index:1090;top:78px;left:0;right:0;padding:22px 26px 28px;background:#fff8fc;border-bottom:1px solid #f1c8df;display:grid;gap:18px}.site-mobile a{text-decoration:none;font:800 13px var(--sans);letter-spacing:1px;text-transform:uppercase}
   @media(max-width:720px){.site-links{display:none}.site-menu{display:block}}
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

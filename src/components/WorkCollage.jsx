import React from 'react';
import { getContent } from '../content/content';

const fallbackItems = [
  { title: 'Ai-cha Food Nepal', category: 'Brand launch · F&B', src: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164715/vanilla_gpieo7.mp4', type: 'video', shape: 'wide' },
  { title: 'ING Group', category: 'Social storytelling', src: '/assets/asset_04.mp4', type: 'video', shape: 'portrait' },
  { title: 'Naamche & Utopia', category: 'Brand direction', src: '/assets/asset_07.mp4', type: 'video', shape: 'square' },
];
export default function WorkCollage() {
 const saved=getContent('showcase')||{}, items=saved.items?.length?saved.items:fallbackItems;
 return <section id="visual-lookbook" className="featured-showcase">
  <div className="featured-head"><div><span className="featured-kicker">✳ A little visual diary</span><h2>Featured <em>showcase</em></h2></div><span className="featured-note">SELECTED MOMENTS · 01—{String(items.length).padStart(2,'0')}</span></div>
  <div className="featured-track">{items.map((item,i)=>{const src=item.src||item.media||'';const type=item.type&&item.type!=='auto'?item.type:(item.kind==='video'||/\.(mp4|webm|mov)(\?.*)?$/i.test(src)?'video':'image');const shape=item.shape||item.orientation||(i%3===1?'portrait':i%3===2?'square':'wide');return <article className={`featured-card shape-${shape}`} key={item.id||i}>
   <div className="featured-media">{type==='video'?<video src={src} poster={item.thumbnail||undefined} autoPlay muted loop playsInline preload="metadata"/>:<img src={src} alt={item.title||'Featured creative work'} loading="lazy"/>}<span className="featured-index">0{i+1}</span><span className="featured-bow" aria-hidden="true">୨୧</span></div>
   <div className="featured-caption"><div><span>{item.category||'Creative direction'}</span><h3>{item.title||'Untitled story'}</h3></div><span className="featured-arrow">↗</span></div>
   {item.href&&<a className="featured-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title||'featured work'}`}/>}
  </article>})}</div>
  <div className="featured-foot"><span>STORYBOARDS, SHOOTS & SOCIAL STORIES</span><span>SCROLL TO EXPLORE ↓</span></div>
  <style>{`
   .featured-showcase{padding:clamp(58px,8vw,108px) 8%;background:#f7eaf0;color:#292329;overflow:hidden;position:relative}
   .featured-head{display:flex;justify-content:space-between;align-items:end;gap:20px;max-width:1400px;margin:0 auto 34px}
   .featured-kicker{font:10px monospace;letter-spacing:2px;text-transform:uppercase;color:#a45d80}
   .featured-head h2{font:400 clamp(34px,5vw,62px)/1.05 'Playfair Display',Georgia,serif;margin:12px 0 0;letter-spacing:-1.8px}.featured-head h2 em{color:#c36e98;font-weight:400}
   .featured-note,.featured-foot{font:9px monospace;letter-spacing:1.6px;color:#9d8190}
   .featured-track{max-width:1400px;margin:auto;display:grid;grid-template-columns:1.35fr .85fr 1fr;align-items:center;gap:clamp(14px,2vw,28px)}
   .featured-card{position:relative;min-width:0}.featured-card:nth-child(2){transform:translateY(34px)}
   .featured-media{height:clamp(220px,34vw,470px);position:relative;overflow:hidden;background:#ead9e1;border:8px solid #fff;box-shadow:0 18px 50px #71465b18}
   .shape-portrait .featured-media{height:clamp(260px,39vw,520px)}.shape-square .featured-media{height:clamp(210px,29vw,390px)}
   .featured-media img,.featured-media video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.2,.8,.2,1)}
   .featured-card:hover .featured-media img,.featured-card:hover .featured-media video{transform:scale(1.04)}
   .featured-index{position:absolute;top:12px;left:14px;font:10px monospace;color:#fff;text-shadow:0 1px 5px #000}.featured-bow{position:absolute;right:12px;top:8px;color:#fff;font-size:27px;text-shadow:0 1px 5px #000}
   .featured-caption{display:flex;justify-content:space-between;align-items:center;padding:14px 4px}.featured-caption span:first-child{font:9px monospace;letter-spacing:1.2px;text-transform:uppercase;color:#a45d80}
   .featured-caption h3{font:400 clamp(17px,2vw,23px) 'Playfair Display',Georgia,serif;margin:5px 0}.featured-arrow{font-size:22px;color:#b35e86}.featured-link{position:absolute;inset:0}
   .featured-foot{max-width:1400px;margin:26px auto 0;display:flex;justify-content:space-between}
   @media(max-width:760px){.featured-head{align-items:start;flex-direction:column}.featured-note{display:none}.featured-track{grid-template-columns:1fr;gap:12px}.featured-card:nth-child(2){transform:none}.featured-media,.shape-portrait .featured-media,.shape-square .featured-media{height:68vw;max-height:420px}.featured-foot{font-size:8px;gap:12px}}
  `}</style>
 </section>;
}
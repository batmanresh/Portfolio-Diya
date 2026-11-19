import React from 'react';
import {getContent} from '../content/content';

const isVideo=src=>/\\.(mp4|webm|mov|ogg)(\\?.*)?$/i.test(String(src||'').split('?')[0])||String(src||'').includes('/video/upload/');
function ShowcaseMedia({item}) {
 const src=item.src||item.preview||item.url;
 const video=item.type==='video'||(item.type!=='image'&&isVideo(src));
 return video
  ? <video src={src} poster={item.thumbnail||undefined} muted loop autoPlay playsInline preload="metadata" aria-label={item.title||'Featured campaign film'}/>
  : <img src={item.thumbnail||src} alt={item.title||'Featured creative work'} loading="lazy"/>;
}

export default function WorkCollage(){
 const config=getContent('showcase');
 const {items=[],topLeft='THE CREATIVE JOURNAL',topRight='A rotating edit of selected work',kicker='A closer look at the work',titleLineOne='Ideas in',titleLineTwo='good company.',intro='Campaigns, films and visual stories made with curiosity, intention and a little bit of play.',footerLeft='A mix of strategy, storytelling & making',footerRight='Keep scrolling to explore'}=config;
 const pieces=items.filter(x=>x&&(x.src||x.preview||x.url));
 const palette={background:config.bgColor||'#f2eef8',ink:config.textColor||'#30283d',accent:config.accentColor||'#c86f83',card:config.cardColor||'#e4ddeb'};
 return <section id="visual-lookbook" className="showcase-journal" style={{'--journal-bg':palette.background,'--journal-ink':palette.ink,'--journal-accent':palette.accent,'--journal-card':palette.card}}>
  <style>{`
   .showcase-journal{position:relative;overflow:hidden;background:var(--journal-bg);color:var(--journal-ink);padding:clamp(64px,8vw,112px) 0 clamp(44px,6vw,76px);isolation:isolate}
   .journal-inner{max-width:1600px;margin:auto;padding:0 clamp(20px,6vw,88px)}
   .journal-top{display:flex;justify-content:space-between;gap:18px;padding-bottom:16px;border-bottom:1px solid color-mix(in srgb,var(--journal-ink) 20%,transparent);font:600 9px var(--sans);letter-spacing:1.5px;text-transform:uppercase;opacity:.7}
   .journal-heading{display:grid;grid-template-columns:minmax(0,1fr) minmax(220px,310px);align-items:end;gap:40px;padding:clamp(36px,5vw,64px) 0 clamp(34px,4vw,54px)}
   .journal-kicker{font:600 10px var(--sans);letter-spacing:1.8px;text-transform:uppercase;color:var(--journal-accent)}
   .journal-title{font:500 clamp(52px,8vw,108px)/.91 var(--display);letter-spacing:-.065em;margin:15px 0 0;max-width:900px}
   .journal-title em{font-family:Georgia,serif;font-weight:400;letter-spacing:-.07em;color:var(--journal-accent)}
   .journal-intro{font:400 14px/1.85 var(--sans);max-width:300px;margin:0 0 5px;opacity:.78}
   .journal-rail-wrap{position:relative}
   .journal-rail{display:flex;gap:clamp(14px,2vw,26px);overflow-x:auto;overflow-y:hidden;padding:0 clamp(20px,6vw,88px) 28px;scroll-snap-type:x mandatory;scroll-padding-left:clamp(20px,6vw,88px);overscroll-behavior-inline:contain;scrollbar-width:thin;scrollbar-color:var(--journal-accent) color-mix(in srgb,var(--journal-ink) 12%,transparent)}
   .journal-rail::-webkit-scrollbar{height:5px}.journal-rail::-webkit-scrollbar-track{background:color-mix(in srgb,var(--journal-ink) 12%,transparent)}.journal-rail::-webkit-scrollbar-thumb{background:var(--journal-accent);border-radius:20px}
   .journal-card{position:relative;flex:0 0 clamp(300px,55vw,760px);height:clamp(350px,52vw,620px);overflow:hidden;background:var(--journal-card);scroll-snap-align:start;isolation:isolate}
   .journal-card:nth-child(3n+2){flex-basis:clamp(270px,39vw,540px);height:clamp(350px,45vw,540px);margin-top:clamp(18px,4vw,54px)}
   .journal-card:nth-child(3n){flex-basis:clamp(300px,48vw,660px);height:clamp(350px,49vw,580px)}
   .journal-card img,.journal-card video{width:100%;height:100%;display:block;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.2,1);background:var(--journal-card)}
   .journal-card:hover img,.journal-card:hover video{transform:scale(1.035)}
   .journal-card:after{content:'';position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(24,18,34,.72));pointer-events:none}
   .journal-card-index{position:absolute;z-index:2;top:18px;left:18px;padding:9px 11px;background:var(--journal-bg);color:var(--journal-ink);font:600 8px var(--sans);letter-spacing:1.2px}
   .journal-card-copy{position:absolute;z-index:2;left:clamp(18px,3vw,34px);right:clamp(18px,3vw,34px);bottom:clamp(20px,3vw,34px);color:#fff}
   .journal-card-copy small{display:block;font:600 9px var(--sans);letter-spacing:1.5px;text-transform:uppercase;color:#f5dbe4;margin-bottom:10px}
   .journal-card-copy strong{display:block;font:500 clamp(22px,3vw,38px)/1.06 var(--display);letter-spacing:-.035em;max-width:540px}
   .journal-empty{min-height:360px;display:grid;place-items:center;flex:0 0 min(80vw,900px);border:1px dashed color-mix(in srgb,var(--journal-ink) 35%,transparent);font:400 15px var(--sans);opacity:.65}
   .journal-bottom{display:flex;justify-content:space-between;gap:18px;padding-top:18px;border-top:1px solid color-mix(in srgb,var(--journal-ink) 20%,transparent);font:600 9px var(--sans);letter-spacing:1.2px;text-transform:uppercase;opacity:.7}
   @media(max-width:720px){.journal-heading{grid-template-columns:1fr;gap:20px}.journal-intro{max-width:390px}.journal-card{flex-basis:82vw;height:112vw;max-height:520px}.journal-card:nth-child(3n+2){flex-basis:72vw;height:100vw;max-height:470px}.journal-card:nth-child(3n){flex-basis:78vw;height:108vw;max-height:500px}.journal-top,.journal-bottom{font-size:8px}.journal-top span:last-child,.journal-bottom span:last-child{max-width:44%;text-align:right}}
   @media(prefers-reduced-motion:reduce){.journal-card img,.journal-card video{transition:none}}
  `}</style>
  <div className="journal-inner">
   <div className="journal-top"><span>{topLeft}</span><span>{topRight}</span></div>
   <div className="journal-heading"><div><div className="journal-kicker">{kicker}</div><h2 className="journal-title">{titleLineOne}<br/><em>{titleLineTwo}</em></h2></div><p className="journal-intro">{intro}</p></div>
  </div>
  <div className="journal-rail-wrap"><div className="journal-rail">{pieces.length?pieces.map((item,i)=><article className="journal-card" key={item.id||i}><ShowcaseMedia item={item}/><span className="journal-card-index">SELECTED FRAME&nbsp; {String(i+1).padStart(2,'0')}</span><div className="journal-card-copy"><small>{item.category||'Creative direction'}</small><strong>{item.title||'A moment in the making'}</strong></div></article>):<div className="journal-empty">Your next favourite project will live here.</div>}</div></div>
  <div className="journal-inner"><div className="journal-bottom"><span>{footerLeft}</span><span>{footerRight} &nbsp; ↗</span></div></div>
 </section>;
}

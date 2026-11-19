import React from 'react';
import {getContent} from '../content/content';
const isVideo=src=>/\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(String(src||'').split('?')[0])||String(src||'').includes('/video/upload/');
function ShowcaseMedia({item}){const src=item.src||item.preview||item.url,video=item.type==='video'||(item.type!=='image'&&isVideo(src));return video?<video src={src} poster={item.thumbnail||undefined} muted loop autoPlay playsInline preload="metadata" aria-label={item.title||'Featured campaign film'}/>:<img src={item.thumbnail||src} alt={item.title||'Featured creative work'} loading="lazy"/>}
export default function WorkCollage(){
 const {items=[]}=getContent('showcase'),pieces=items.filter(x=>x&&(x.src||x.preview||x.url)).slice(0,8);
 return <section id="visual-lookbook" className="showcase-play"><style>{`
 .showcase-play{--hot:#b85f82;position:relative;overflow:hidden;background:#30232b;color:#fbf8f6;padding:clamp(70px,9vw,120px) clamp(18px,6vw,88px);isolation:isolate}
 .showcase-play:before{content:'';position:absolute;z-index:-1;right:-5vw;top:-10vw;width:38vw;height:38vw;border:1px solid #ffffff18;border-radius:50%;pointer-events:none}
 .showcase-inner{max-width:1440px;margin:auto}.showcase-top{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid #ffffff38;padding-bottom:14px;font:600 9px var(--sans);letter-spacing:1.4px;text-transform:uppercase;color:#d8c8cf}
 .showcase-title-row{display:flex;align-items:end;justify-content:space-between;gap:30px;padding:38px 0 42px}.showcase-kicker{font:600 10px var(--sans);letter-spacing:1.7px;text-transform:uppercase;color:#d9a9bb}
 .showcase-title{font:500 clamp(50px,7vw,92px)/.98 var(--display);letter-spacing:-.045em;margin:14px 0 0;max-width:900px}.showcase-title em{font-style:italic;color:#d99bb2}
 .showcase-intro{font:400 14px/1.8 var(--sans);color:#d6cbd0;max-width:270px;margin:0 0 5px}
 .showcase-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(100px,12vw,170px);gap:clamp(10px,1.5vw,20px);align-items:stretch}
 .showcase-tile{position:relative;min-width:0;overflow:hidden;border-radius:2px;background:#51414a;color:#30232b;isolation:isolate;transition:opacity .25s}
 .showcase-tile:nth-child(6n+1){grid-column:span 7;grid-row:span 3}.showcase-tile:nth-child(6n+2){grid-column:span 5;grid-row:span 2}.showcase-tile:nth-child(6n+3){grid-column:span 5;grid-row:span 2}.showcase-tile:nth-child(6n+4){grid-column:span 4;grid-row:span 2}.showcase-tile:nth-child(6n+5){grid-column:span 4;grid-row:span 2}.showcase-tile:nth-child(6n){grid-column:span 4;grid-row:span 2}
 .showcase-tile:hover{z-index:2}.showcase-tile img,.showcase-tile video{width:100%;height:100%;display:block;object-fit:cover;transition:transform .65s cubic-bezier(.2,.7,.2,1)}.showcase-tile:hover img,.showcase-tile:hover video{transform:scale(1.035)}
 .showcase-tile:after{content:'';position:absolute;inset:50% 0 0;background:linear-gradient(transparent,#1d151bb5);pointer-events:none}
 .showcase-tile-meta{position:absolute;z-index:2;left:18px;right:18px;bottom:17px}.showcase-tile-meta small{display:inline-block;color:#f3c5d5;font:600 8px var(--sans);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:8px}.showcase-tile-meta strong{display:block;font:500 clamp(16px,2vw,24px)/1.1 var(--display);letter-spacing:-.015em;color:white}
 .showcase-tile-index{position:absolute;z-index:2;top:14px;left:14px;background:#fbf8f6;color:#30232b;border-radius:2px;padding:8px 10px;font:600 8px var(--sans);letter-spacing:1px}
 .showcase-empty{grid-column:1/-1;min-height:320px;display:grid;place-items:center;border:1px solid #ffffff50;border-radius:2px;font:400 16px var(--sans);color:#d8c8cf}
 .showcase-bottom{display:flex;justify-content:space-between;gap:16px;margin-top:25px;padding-top:16px;border-top:1px solid #ffffff38;font:600 9px var(--sans);letter-spacing:1.2px;text-transform:uppercase;color:#d8c8cf}
 @media(max-width:760px){.showcase-title-row{display:block}.showcase-intro{margin-top:20px}.showcase-grid{grid-template-columns:repeat(6,minmax(0,1fr));grid-auto-rows:clamp(95px,18vw,145px)}.showcase-tile:nth-child(n){grid-column:span 3;grid-row:span 2}.showcase-tile:nth-child(3n+1){grid-column:span 6;grid-row:span 3}.showcase-tile-meta{left:12px;right:12px;bottom:12px}.showcase-bottom{font-size:8px}}
 @media(max-width:460px){.showcase-grid{grid-auto-rows:100px}.showcase-tile:nth-child(n){grid-column:span 3;grid-row:span 2}.showcase-tile:nth-child(3n+1){grid-column:span 6;grid-row:span 3}.showcase-tile-meta strong{font-size:15px}.showcase-bottom span:last-child{display:none}}
`}</style><div className="showcase-inner">
 <div className="showcase-top"><span>01 / THE VISUAL PLAYGROUND</span><span>Selected campaigns · content · creative</span></div>
 <div className="showcase-title-row"><div><div className="showcase-kicker">A considered edit of selected work</div><h2 className="showcase-title">A visual<br/><em>point of view.</em></h2></div><p className="showcase-intro">A selection of campaigns, films and visual stories shaped by strategy, craft and a clear point of view.</p></div>
 <div className="showcase-grid">{pieces.length?pieces.map((item,i)=><article className="showcase-tile" key={item.id||i}><ShowcaseMedia item={item}/><span className="showcase-tile-index">FRAME {String(i+1).padStart(2,'0')}</span><div className="showcase-tile-meta"><small>{item.category||'Creative direction'}</small><strong>{item.title||'A moment in the making'}</strong></div></article>):<div className="showcase-empty">Selected work will appear here as it is added.</div>}</div>
 <div className="showcase-bottom"><span>Strategy, storytelling &amp; execution</span><span>Scroll for the project files ↓</span></div></div></section>;
}

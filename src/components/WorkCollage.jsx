import React from 'react';
import {getContent} from '../content/content';
const isVideo=src=>/\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(String(src||'').split('?')[0])||String(src||'').includes('/video/upload/');
function ShowcaseMedia({item}){const src=item.src||item.preview||item.url,video=item.type==='video'||(item.type!=='image'&&isVideo(src));return video?<video src={src} poster={item.thumbnail||undefined} muted loop autoPlay playsInline preload="metadata" aria-label={item.title||'Featured campaign film'}/>:<img src={item.thumbnail||src} alt={item.title||'Featured creative work'} loading="lazy"/>}
export default function WorkCollage(){
 const {items=[]}=getContent('showcase'),pieces=items.filter(x=>x&&(x.src||x.preview||x.url)).slice(0,8);
 return <section id="visual-lookbook" className="showcase-play"><style>{`
 .showcase-play{--hot:#ff2993;position:relative;overflow:hidden;background:#ff2993;color:#fff;padding:clamp(70px,9vw,125px) clamp(18px,6vw,88px);isolation:isolate}
 .showcase-play:before{content:'✳';position:absolute;z-index:-1;right:-.05em;top:-.2em;font:900 clamp(220px,43vw,620px)/1 var(--display);color:#ff75b9;opacity:.48;animation:showcaseSpin 35s linear infinite}
 .showcase-inner{max-width:1440px;margin:auto}.showcase-top{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid #ffffff70;padding-bottom:14px;font:800 9px var(--sans);letter-spacing:1.5px;text-transform:uppercase}
 .showcase-title-row{display:flex;align-items:end;justify-content:space-between;gap:30px;padding:38px 0 42px}.showcase-kicker{font:800 10px var(--sans);letter-spacing:2px;text-transform:uppercase;color:#ffe1ef}
 .showcase-title{font:900 clamp(58px,10vw,140px)/.82 var(--display);letter-spacing:-.09em;margin:14px 0 0;max-width:900px}.showcase-title em{font-style:normal;color:#291522;text-shadow:3px 3px 0 #ffb5d7}
 .showcase-intro{font:600 14px/1.7 var(--sans);color:#fff0f7;max-width:270px;margin:0 0 5px}
 .showcase-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(100px,12vw,170px);gap:clamp(10px,1.5vw,20px);align-items:stretch}
 .showcase-tile{position:relative;min-width:0;overflow:hidden;border-radius:20px;background:#ffd1e7;color:#291522;box-shadow:7px 7px 0 #a91662;isolation:isolate;transform:rotate(var(--tilt,0deg));transition:transform .35s,box-shadow .35s}
 .showcase-tile:nth-child(6n+1){grid-column:span 7;grid-row:span 3;--tilt:-1deg}.showcase-tile:nth-child(6n+2){grid-column:span 5;grid-row:span 2;--tilt:1deg}.showcase-tile:nth-child(6n+3){grid-column:span 5;grid-row:span 2;--tilt:-.5deg}.showcase-tile:nth-child(6n+4){grid-column:span 4;grid-row:span 2;--tilt:1deg}.showcase-tile:nth-child(6n+5){grid-column:span 4;grid-row:span 2;--tilt:-1deg}.showcase-tile:nth-child(6n){grid-column:span 4;grid-row:span 2;--tilt:.5deg}
 .showcase-tile:hover{transform:translateY(-7px) rotate(0) scale(1.01);box-shadow:11px 13px 0 #a91662;z-index:2}
 .showcase-tile img,.showcase-tile video{width:100%;height:100%;display:block;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1);filter:saturate(1.12)}.showcase-tile:hover img,.showcase-tile:hover video{transform:scale(1.06)}
 .showcase-tile:after{content:'';position:absolute;inset:45% 0 0;background:linear-gradient(transparent,#291522a8);pointer-events:none}
 .showcase-tile-meta{position:absolute;z-index:2;left:18px;right:18px;bottom:17px}.showcase-tile-meta small{display:inline-block;background:#ff2993;color:white;border-radius:20px;padding:6px 9px;font:800 8px var(--sans);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px}.showcase-tile-meta strong{display:block;font:800 clamp(16px,2.2vw,27px)/1.05 var(--display);letter-spacing:-.03em;color:white}
 .showcase-tile-index{position:absolute;z-index:2;top:14px;left:14px;background:#fff8fc;color:#291522;border-radius:30px;padding:8px 11px;font:900 8px var(--sans);letter-spacing:1px}
 .showcase-empty{grid-column:1/-1;min-height:320px;display:grid;place-items:center;border:2px dashed #ffffff90;border-radius:22px;font:800 20px var(--sans);color:white}
 .showcase-bottom{display:flex;justify-content:space-between;gap:16px;margin-top:25px;padding-top:16px;border-top:1px solid #ffffff70;font:800 9px var(--sans);letter-spacing:1.3px;text-transform:uppercase;color:#ffe1ef}
 @keyframes showcaseSpin{to{transform:rotate(360deg)}}
 @media(max-width:760px){.showcase-title-row{display:block}.showcase-intro{margin-top:20px}.showcase-grid{grid-template-columns:repeat(6,minmax(0,1fr));grid-auto-rows:clamp(95px,18vw,145px)}.showcase-tile:nth-child(n){grid-column:span 3;grid-row:span 2;transform:none}.showcase-tile:nth-child(3n+1){grid-column:span 6;grid-row:span 3}.showcase-tile-meta{left:12px;right:12px;bottom:12px}.showcase-bottom{font-size:8px}}
 @media(max-width:460px){.showcase-grid{grid-auto-rows:100px}.showcase-tile:nth-child(n){grid-column:span 3;grid-row:span 2}.showcase-tile:nth-child(3n+1){grid-column:span 6;grid-row:span 3}.showcase-tile-meta strong{font-size:15px}.showcase-bottom span:last-child{display:none}}
 @media(prefers-reduced-motion:reduce){.showcase-play:before{animation:none}.showcase-tile{transition:none}}
 `}</style><div className="showcase-inner">
 <div className="showcase-top"><span>01 / THE VISUAL PLAYGROUND</span><span>Things I made · things I love</span></div>
 <div className="showcase-title-row"><div><div className="showcase-kicker">A little peek into my creative brain ✳</div><h2 className="showcase-title">Good ideas<br/>look <em>good.</em></h2></div><p className="showcase-intro">A living moodboard of campaigns, films, visuals and little moments. All the colour, craft and chaos that make a brand feel alive.</p></div>
 <div className="showcase-grid">{pieces.length?pieces.map((item,i)=><article className="showcase-tile" key={item.id||i}><ShowcaseMedia item={item}/><span className="showcase-tile-index">FRAME {String(i+1).padStart(2,'0')}</span><div className="showcase-tile-meta"><small>{item.category||'Creative direction'}</small><strong>{item.title||'A moment in the making'}</strong></div></article>):<div className="showcase-empty">The next visual story is loading ✳</div>}</div>
 <div className="showcase-bottom"><span>Made with curiosity &amp; a little extra pink</span><span>Scroll for the project files ↓</span></div></div></section>;
}

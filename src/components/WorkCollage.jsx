import React from 'react';
import {getContent} from '../content/content';
const isVideo=src=>/\.(mp4|webm|mov|ogg)(\?.*)?$/i.test((src||'').split('?')[0])||String(src||'').includes('/video/upload/');
function Media({item}){const src=item.src||item.preview||item.url;const video=item.type==='video'||(item.type!=='image'&&isVideo(src));return video?<video src={src} poster={item.thumbnail||undefined} muted loop autoPlay playsInline preload="metadata"/>:<img src={item.thumbnail||src} alt={item.title||'Featured creative work'} loading="lazy"/>}
export default function WorkCollage(){
 const data=getContent('showcase'),items=data.items||[];
 return <section id="visual-lookbook" className="showcase">
 <style>{`
 .showcase{position:relative;overflow:hidden;padding:clamp(64px,8vw,112px) clamp(20px,6vw,88px) 90px;background:#332632;color:#fff8f5}
 .showcase:before{content:'୨୧';position:absolute;right:5%;top:2%;font-size:100px;color:#e5a2c0;opacity:.3;transform:rotate(12deg)}
 .showcase-head{max-width:1280px;margin:0 auto 38px;display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap}
 .showcase-kicker{font-size:10px;letter-spacing:2.4px;text-transform:uppercase;color:#f2a9c8;font-weight:700}
 .showcase-title{font:400 clamp(36px,6vw,74px)/1 var(--serif);margin:12px 0 0;letter-spacing:-1.5px}
 .showcase-note{max-width:280px;color:#d4bdcb;font-size:12px;line-height:1.8}
 .showcase-grid{max-width:1280px;margin:auto;display:grid;grid-template-columns:1.3fr .8fr .8fr;grid-template-rows:245px 225px;gap:14px}
 .showcase-item{position:relative;overflow:hidden;border-radius:5px;background:#5a4655;isolation:isolate}
 .showcase-item:first-child{grid-row:span 2}.showcase-item:nth-child(4){grid-column:2 / 4}
 .showcase-item img,.showcase-item video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.2,.7,.2,1);filter:saturate(.92)}
 .showcase-item:hover img,.showcase-item:hover video{transform:scale(1.045)}
 .showcase-item:after{content:'';position:absolute;inset:30% 0 0;background:linear-gradient(transparent,#211720c9);pointer-events:none}
 .showcase-caption{position:absolute;z-index:2;left:20px;right:18px;bottom:18px}
 .showcase-caption small{font-size:9px;letter-spacing:1.7px;text-transform:uppercase;color:#f4b7d0}
 .showcase-caption strong{display:block;font:22px var(--serif);margin-top:5px;font-weight:400}
 .showcase-empty{grid-column:1/-1;border:1px dashed #a98b9d;border-radius:12px;display:grid;place-items:center;min-height:230px;color:#e7c8d8}
 @media(max-width:760px){.showcase-grid{grid-template-columns:1fr 1fr;grid-template-rows:230px 180px 180px}.showcase-item:first-child{grid-column:1/-1;grid-row:auto}.showcase-item:nth-child(4){grid-column:auto}}
 @media(max-width:460px){.showcase-grid{grid-template-columns:1fr;grid-template-rows:repeat(4,220px)}.showcase-item:first-child,.showcase-item:nth-child(4){grid-column:auto}}
 `}</style>
 <div className="showcase-head"><div><div className="showcase-kicker">✳ A little visual diary</div><h2 className="showcase-title">Featured <i>showcase</i></h2></div><p className="showcase-note">Campaign moments, moving images and little details that make a brand feel like a world of its own.</p></div>
 <div className="showcase-grid">{items.length?items.slice(0,5).map((item,i)=><article className="showcase-item" key={item.id||i}><Media item={item}/><div className="showcase-caption"><small>{item.category||'Creative direction'}</small><strong>{item.title||'A moment in the making'}</strong></div></article>):<div className="showcase-empty">Add your first photo or video from the admin studio 🎀</div>}</div>
 </section>
}

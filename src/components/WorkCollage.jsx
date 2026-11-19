import React from 'react';
import {getContent} from '../content/content';

const isVideo = src => /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(String(src||'').split('?')[0]) || String(src||'').includes('/video/upload/');

function ShowcaseMedia({item}) {
  const src = item.src || item.preview || item.url;
  const video = item.type === 'video' || (item.type !== 'image' && isVideo(src));
  return video
    ? <video src={src} poster={item.thumbnail || undefined} muted loop autoPlay playsInline preload="metadata" aria-label={item.title || 'Featured campaign film'} />
    : <img src={item.thumbnail || src} alt={item.title || 'Featured creative work'} loading="lazy" />;
}

export default function WorkCollage() {
  const {items=[]} = getContent('showcase');
  const pieces = items.filter(item => item && (item.src || item.preview || item.url)).slice(0,5);

  return (
    <section id="visual-lookbook" className="lookbook">
      <style>{`
        .lookbook{position:relative;overflow:hidden;background:#fff5f8;color:#30232d;padding:clamp(72px,9vw,132px) clamp(20px,6.5vw,100px) clamp(82px,10vw,145px);border-top:1px solid #dfd5ce}
        .lookbook:before{content:'✿';position:absolute;right:-.025em;top:8%;font:italic clamp(150px,28vw,420px)/.8 var(--serif);letter-spacing:-.09em;color:#e9dfd8;pointer-events:none}
        .lookbook-inner{position:relative;z-index:1;max-width:1440px;margin:auto}
        .lookbook-topline{display:flex;justify-content:space-between;align-items:center;gap:20px;padding-bottom:15px;border-bottom:1px solid #bfb3aa;font:9px var(--sans);letter-spacing:2px;text-transform:uppercase;color:#756a65}
        .lookbook-heading{display:grid;grid-template-columns:1fr minmax(180px,300px);gap:30px;align-items:end;padding:38px 0 48px}
        .lookbook-kicker{font:10px var(--sans);letter-spacing:2.5px;text-transform:uppercase;color:#a65e77}
        .lookbook-heading h2{font:600 clamp(42px,7vw,92px)/1.02 var(--sans);letter-spacing:-.065em;margin:18px 0 0;max-width:900px}
        .lookbook-heading h2 em{font-weight:600;color:#c45f91}
        .lookbook-intro{font:500 15px/1.75 var(--sans);color:#71635f;margin:0 0 5px}
        .lookbook-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-template-rows:clamp(210px,29vw,410px) clamp(170px,21vw,300px);gap:clamp(10px,1.5vw,22px)}
        .lookbook-piece{position:relative;min-width:0;overflow:hidden;background:#f0dce8;color:#fff}
        .lookbook-piece:nth-child(1){grid-column:1/8;grid-row:1/3}
        .lookbook-piece:nth-child(2){grid-column:8/13;grid-row:1}
        .lookbook-piece:nth-child(3){grid-column:8/13;grid-row:2}
        .lookbook-piece:nth-child(4){grid-column:1/7;grid-row:3}
        .lookbook-piece:nth-child(5){grid-column:7/13;grid-row:3}
        .lookbook-grid{grid-template-rows:clamp(210px,29vw,410px) clamp(170px,21vw,300px) clamp(170px,20vw,280px)}
        .lookbook-piece img,.lookbook-piece video{width:100%;height:100%;display:block;object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1);filter:saturate(1.08)}
        .lookbook-piece:hover img,.lookbook-piece:hover video{transform:scale(1.035)}
        .lookbook-piece:after{content:'';position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(22,16,17,.7));pointer-events:none}
        .lookbook-piece-meta{position:absolute;z-index:2;left:clamp(14px,2vw,28px);right:16px;bottom:clamp(14px,2vw,25px)}
        .lookbook-piece-meta small{display:block;font:9px var(--sans);letter-spacing:1.8px;text-transform:uppercase;color:#f2d9dc;margin-bottom:7px}
        .lookbook-piece-meta strong{font:400 clamp(18px,2.2vw,31px)/1.05 var(--serif);letter-spacing:-.02em}
        .lookbook-piece:first-child .lookbook-piece-meta strong{font-size:clamp(28px,4vw,58px);max-width:520px;display:block}
        .lookbook-piece-number{position:absolute;z-index:2;top:15px;left:17px;font:9px var(--sans);letter-spacing:1.8px;color:#fff}
        .lookbook-empty{grid-column:1/-1;grid-row:1/4;min-height:400px;display:grid;place-items:center;border:1px dashed #b9aaa1;color:#766963;font:italic 22px var(--serif)}
        .lookbook-bottom{display:flex;justify-content:space-between;gap:20px;padding-top:18px;margin-top:18px;border-top:1px solid #bfb3aa;color:#776a64;font:9px var(--sans);letter-spacing:1.7px;text-transform:uppercase}
        @media(max-width:760px){
          .lookbook-heading{grid-template-columns:1fr;gap:16px;padding:30px 0}
          .lookbook-intro{max-width:330px}
          .lookbook-grid{grid-template-columns:1fr 1fr;grid-template-rows:320px 190px 190px 190px}
          .lookbook-piece:nth-child(1){grid-column:1/3;grid-row:1}
          .lookbook-piece:nth-child(2){grid-column:1;grid-row:2}
          .lookbook-piece:nth-child(3){grid-column:2;grid-row:2}
          .lookbook-piece:nth-child(4){grid-column:1/3;grid-row:3}
          .lookbook-piece:nth-child(5){grid-column:1/3;grid-row:4}
          .lookbook-piece:first-child .lookbook-piece-meta strong{font-size:36px}
        }
        @media(max-width:460px){.lookbook-grid{grid-template-rows:280px 175px 175px 175px 175px}.lookbook-piece:nth-child(4),.lookbook-piece:nth-child(5){grid-column:1/3}.lookbook-bottom{font-size:8px}}
      `}</style>
      <div className="lookbook-inner">
        <div className="lookbook-topline"><span>Diya Shrestha / Visual journal</span><span>Selected frames · 001—005</span></div>
        <div className="lookbook-heading">
          <div><div className="lookbook-kicker">The visual edit / A collection in motion</div><h2>In the <em>frame.</em></h2></div>
          <p className="lookbook-intro">A visual diary of ideas taking shape — campaign worlds, moving images, little details and the feeling behind the work.</p>
        </div>
        <div className="lookbook-grid">
          {pieces.length ? pieces.map((item,i) => (
            <article className="lookbook-piece" key={item.id || i}>
              <ShowcaseMedia item={item} />
              <span className="lookbook-piece-number">FRAME / {String(i+1).padStart(2,'0')}</span>
              <div className="lookbook-piece-meta"><small>{item.category || 'Creative direction'}</small><strong>{item.title || 'A moment in the making'}</strong></div>
            </article>
          )) : <div className="lookbook-empty">The next visual story is being prepared.</div>}
        </div>
        <div className="lookbook-bottom"><span>Image, movement &amp; meaning</span><span>Scroll to explore the work ↓</span></div>
      </div>
    </section>
  );
}

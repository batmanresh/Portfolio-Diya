import React, { useState, useEffect } from 'react';
import { getContent } from '../content/content';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const T = {
  bg:        '#FFF9FB',
  bgAlt:     '#FBEFF4',
  bgCard:    '#FFFFFF',
  border:    '#EEDCE5',
  pink:      '#C66B94',
  text:      '#1c1d21',
  textSub:   '#555752',
  textMuted: '#9CA3AF',
  overlay:   'rgba(250,249,246,0.97)',
};

// ─── CLOUDINARY HELPER ────────────────────────────────────────────────────────
// Injects Cloudinary transformation params into a URL so Cloudinary
// automatically serves a compressed, correctly formatted file.
// Only applied to Cloudinary URLs — local /assets/ paths are untouched.
function cdnOpt(url, opts = 'q_auto,f_auto') {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/${opts}/`);
}

function buildAssets(items, prefix) {
  return items.map((item, i) => ({
    id:          `${prefix}${i + 1}`,
    caption:     item.caption,
    href:        item.href,
    preview:     cdnOpt(item.preview, 'q_auto,f_auto,vc_auto'),
    thumbnail:   item.thumbnail || '',
    type:        item.type || (item.preview && /\.(png|jpe?g|gif|webp|avif)$/i.test(item.preview.split('?')[0]) ? 'image' : 'video'),
    orientation: item.orientation || 'landscape',
    tags:        item.tags || [],
    subcat:      item.tags ? item.tags[0] : 'Content',
  }));
}

// ─── GLOBAL VIDEO COORDINATOR ─────────────────────────────────────────────────
const _vis = new Map(), _subs = new Set();
function reportVisibility(id, r) {
  r <= 0 ? _vis.delete(id) : _vis.set(id, r);
  let win = null, best = 0;
  _vis.forEach((v, k) => { if (v > best) { best = v; win = k; } });
  _subs.forEach(cb => cb(win));
}
function subscribeActive(cb) { _subs.add(cb); return () => _subs.delete(cb); }

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const CSS = `
  @keyframes shimmer {
    0%   { background-position: -400% center; }
    100% { background-position:  400% center; }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes pulseDot {
    0%,100% { opacity:0.3; transform:scale(0.8); }
    50%      { opacity:1;   transform:scale(1.2); }
  }
  @keyframes spinRing {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* Shimmer — pink-cream sweep matching brand palette */
  .sk {
    background: linear-gradient(
      90deg,
      #F2EEF2 0%, #FAF0F7 30%, #FFE8F5 50%, #FAF0F7 70%, #F2EEF2 100%
    );
    background-size: 400% 100%;
    animation: shimmer 1.8s ease-in-out infinite;
  }

  /* Cards */
  .ind-tab {
    font-family: monospace; font-size: 10px; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 8px 18px; border-radius: 24px;
    cursor: pointer; border: 1px solid; transition: all 0.22s ease;
    background: transparent; white-space: nowrap;
  }
  .industry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    gap: 18px; margin-top: 36px;
  }
  .ind-card {
    position: relative; overflow: hidden; cursor: pointer;
    min-height: 340px; border-radius: 3px;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .ind-card:hover { box-shadow: 0 20px 50px rgba(0,0,0,0.14); }

  /* Gallery */
  .gl { animation: fadeUp 0.3s ease forwards; }
  .gl-l::-webkit-scrollbar { width:2px; }
  .gl-l::-webkit-scrollbar-thumb { background: var(--c); }
  .gl-r::-webkit-scrollbar { width:3px; }
  .gl-r::-webkit-scrollbar-track { background:#F4F3F0; }
  .gl-r::-webkit-scrollbar-thumb { background:#DDD8DD; border-radius:2px; }
  .gl-r::-webkit-scrollbar-thumb:hover { background: var(--c); }

  .gl-close {
    background: transparent; border: 1px solid #E8E8E3;
    color: #555752; font-family: monospace; font-size: 10px;
    letter-spacing: 1.5px; cursor: pointer; padding: 9px 20px;
    border-radius: 24px; transition: all 0.2s ease; white-space: nowrap;
  }
  .gl-close:hover { border-color: var(--c); color: var(--c); background: var(--cl); }

  /* Subcat filter — left panel vertical */
  .sc-menu { display:flex; flex-direction:column; gap:3px; }
  .sc-item {
    font-family:monospace; font-size:10px; letter-spacing:0.5px;
    text-transform:uppercase; text-align:left;
    padding:9px 12px; border-radius:6px; cursor:pointer;
    border:1px solid transparent; background:transparent;
    transition:all 0.18s ease; width:100%; color:#9CA3AF;
    display:flex; align-items:center; justify-content:space-between;
  }
  .sc-item:hover { color:#555752; background:rgba(244,114,182,0.05); border-color:#E8E8E3; }
  .sc-item.on { background:var(--cl); border-color:var(--c); color:var(--c); font-weight:600; }

  /* Top bar horizontal subcat tabs */
  .sc-tab {
    font-family:monospace; font-size:9px; letter-spacing:1px;
    text-transform:uppercase; padding:5px 12px; border-radius:16px;
    cursor:pointer; border:1px solid; transition:all 0.18s; background:transparent;
    white-space:nowrap; flex-shrink:0;
  }
  .sc-tabs { display:flex; gap:5px; overflow-x:auto; }
  .sc-tabs::-webkit-scrollbar { display:none; }

  /* Video masonry */
  .vg { column-count:3; column-gap:12px; padding:20px 22px; }
  .vg > div { margin-bottom:12px; width:100%; display:inline-block; break-inside:avoid; }

  /* Mobile */
  @media (max-width:900px) { .vg { column-count:2; column-gap:10px; padding:14px 16px; } .vg > div { margin-bottom:10px; } }
  @media (max-width:800px) {
    .gl { grid-template-columns:1fr !important; }
    .gl-l { display:none !important; }
    .gl-mob { display:flex !important; }
    .vg { column-count:2; }
  }
  @media (min-width:801px) { .gl-mob { display:none !important; } }
  @media (max-width:480px) { .vg { column-count:1 !important; } }
  @media (max-width:560px) { .industry-grid { grid-template-columns:1fr; } .ind-tab { font-size:9px; padding:6px 12px; } }
`;

// ─── VIDEO CARD ───────────────────────────────────────────────────────────────
function VideoCard({ asset, color }) {
  const [hovered,     setHovered]     = useState(false);
  const [tagsOpen,    setTagsOpen]    = useState(false);
  const [failed,      setFailed]      = useState(false);
  const [active,      setActive]      = useState(false);
  const [appeared,    setAppeared]    = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // true once first frame available
  const vRef  = React.useRef(null);
  const wRef  = React.useRef(null);
  const cid   = React.useRef(asset.id).current;
  const isP   = asset.orientation === 'portrait';
  const isVideo = asset.type !== 'image';
  const extra = asset.tags ? asset.tags.slice(1) : [];
  //const cl    = color + '18';

  // Fade-in on first appearance
  React.useEffect(() => {
    const el = wRef.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAppeared(true); o.disconnect(); }
    }, { threshold: 0.05 });
    o.observe(el); return () => o.disconnect();
  }, []);

  // Report to coordinator
  React.useEffect(() => {
    const el = wRef.current; if (!el) return;
    const steps = Array.from({ length: 11 }, (_, i) => i / 10);
    const o = new IntersectionObserver(
      ([e]) => reportVisibility(cid, e.intersectionRatio),
      { threshold: steps }
    );
    o.observe(el);
    return () => { o.disconnect(); reportVisibility(cid, 0); };
  }, [cid]);

  React.useEffect(() => subscribeActive(id => setActive(id === cid)), [cid]);

  React.useEffect(() => {
    const v = vRef.current; if (!v || !isVideo) return;
    (hovered || active) ? v.play().catch(() => {}) : v.pause();
  }, [hovered, active, isVideo]);

  // Shimmer placeholder — shown before card is near viewport (lazy load)
  if (!appeared) {
    return (
      <div ref={wRef}>
        <div style={{ width:'100%', paddingTop: isP ? '177.78%' : '56.25%', position:'relative', borderRadius:'10px', overflow:'hidden' }}>
          <div className="sk" style={{ position:'absolute', inset:0 }} />
        </div>
      </div>
    );
  }

  return (
    <div ref={wRef} style={{ animation:'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}>
      <a href={asset.href} target="_blank" rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={e => {
          const touch = window.matchMedia('(hover:none)').matches;
          if (extra.length && !tagsOpen && touch) { e.preventDefault(); setTagsOpen(true); }
        }}
        style={{
          display:'block', textDecoration:'none', position:'relative',
          borderRadius:'10px', overflow:'hidden',
          border:`1px solid ${hovered ? color : '#E8E8E3'}`,
          boxShadow: hovered ? `0 14px 36px ${color}28` : '0 2px 8px rgba(0,0,0,0.05)',
          transition:'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
          transform: hovered ? 'translateY(-4px)' : 'none',
          backgroundColor:'#F5EFF5',
        }}
      >
        <div style={{ width:'100%', paddingTop: isP ? '177.78%' : '56.25%', position:'relative', overflow:'hidden' }}>
          {/* Shimmer — shown ONLY while video is loading from Cloudinary.
              Once the first frame is available (onLoadedData), shimmer fades out
              and the video frame acts as a static poster when not playing. */}
          {isVideo && !failed && !videoLoaded && (
            <div className="sk" style={{ position:'absolute', inset:0, zIndex:1 }} />
          )}

          {!failed && !isVideo ? (
            <img src={asset.preview} alt={asset.caption || ''} loading="lazy" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:2 }} />
          ) : !failed ? (
            <video ref={vRef} poster={asset.thumbnail || undefined}
              src={asset.preview}
              muted loop playsInline
              preload="metadata"
              onError={() => setFailed(true)}
              onLoadedData={() => setVideoLoaded(true)}
              style={{
                position:'absolute', inset:0, width:'100%', height:'100%',
                objectFit:'cover', zIndex:2,
                opacity: videoLoaded ? 1 : 0,
                transition:'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1), filter 0.4s',
                transform: hovered ? 'scale(1.02)' : 'scale(1)',
                filter: hovered ? 'brightness(1.06)' : 'brightness(1)',
              }}
            />
          ) : (
            /* Failed state — styled placeholder linking to Instagram */
            <div style={{
              position:'absolute', inset:0, zIndex:2,
              background:`linear-gradient(135deg, #F5EEF5 0%, ${color}12 50%, #FAF5FA 100%)`,
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px',
            }}>
              <div style={{ width:'40px', height:'40px', borderRadius:'50%', border:`1.5px solid ${color}50`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" opacity="0.7">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill={color} stroke="none"/>
                </svg>
              </div>
              <span style={{ fontFamily:'monospace', fontSize:'8px', color:'#ADADAD', letterSpacing:'1px', textTransform:'uppercase' }}>
                View on Instagram ↗
              </span>
            </div>
          )}

          {/* Gradient for text legibility — always on top of video */}
          <div style={{
            position:'absolute', inset:0, zIndex:3, pointerEvents:'none',
            background:'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.18) 45%, transparent 100%)',
          }} />

          {/* Instagram icon — top right */}
          <div style={{
            position:'absolute', top:'10px', right:'10px', zIndex:5,
            width:'26px', height:'26px', borderRadius:'50%',
            background: hovered ? 'linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)' : 'rgba(255,255,255,0.9)',
            backdropFilter:'blur(8px)',
            display:'flex', alignItems:'center', justifyContent:'center',
            transition:'all 0.25s', boxShadow:'0 1px 6px rgba(0,0,0,0.12)',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke={hovered ? 'white' : '#666'} strokeWidth="2.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill={hovered ? 'white' : '#666'} stroke="none"/>
            </svg>
          </div>

          {/* Primary tag + expandable tags — top left */}
          <div
            onClick={e => { e.preventDefault(); e.stopPropagation(); setTagsOpen(o => !o); }}
            style={{
              position:'absolute', top:'10px', left:'10px', right:'46px',
              zIndex:5, display:'flex', flexWrap:'wrap', gap:'4px',
              cursor: extra.length ? 'pointer' : 'default',
            }}
          >
            <span style={{
              backgroundColor: color, color:'#fff',
              padding:'4px 10px', borderRadius:'20px',
              fontFamily:'monospace', fontSize:'8px', letterSpacing:'0.5px', textTransform:'uppercase',
              display:'inline-flex', alignItems:'center', gap:'4px',
              boxShadow:`0 2px 6px ${color}44`,
            }}>
              {asset.subcat}
              {extra.length > 0 && (
                <span style={{ fontSize:'7px', backgroundColor:'rgba(255,255,255,0.28)', borderRadius:'8px', padding:'1px 5px' }}>
                  {tagsOpen ? '−' : `+${extra.length}`}
                </span>
              )}
            </span>
            {tagsOpen && extra.map((t, i) => (
              <span key={i} style={{
                backgroundColor:'rgba(255,255,255,0.92)', color:'#555752',
                padding:'4px 9px', borderRadius:'20px',
                fontFamily:'monospace', fontSize:'7px', letterSpacing:'0.3px', textTransform:'uppercase',
                animation:'fadeUp 0.18s ease forwards',
                boxShadow:'0 1px 4px rgba(0,0,0,0.1)', backdropFilter:'blur(4px)',
              }}>{t}</span>
            ))}
          </div>

          {/* Caption — bottom, always above gradient */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'14px', zIndex:4 }}>
            <p style={{ margin:'0 0 3px', fontSize:'12px', color:'#fff', fontWeight:'500', lineHeight:1.3, textShadow:'0 1px 4px rgba(0,0,0,0.5)' }}>
              {asset.caption}
            </p>
            <span style={{ fontSize:'9px', fontFamily:'monospace', letterSpacing:'0.5px', transition:'color 0.2s', color: hovered ? color : 'rgba(255,255,255,0.6)' }}>
              Watch on Instagram ↗
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}


// ─── GALLERY OVERLAY ─────────────────────────────────────────────────────────
function Gallery({ industry, onClose }) {
  const { color, subcats, assets } = industry;
  const [activeSubcat, setActiveSubcat] = useState('All');
  const cl = color + '15';

  const allSubcats = subcats.length > 0 ? ['All', ...subcats] : [];
  const filtered = activeSubcat === 'All'
    ? assets
    : assets.filter(a => a.tags && a.tags.includes(activeSubcat));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const k = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k); };
  }, [onClose]);


  return (
    <div className="gl" style={{
      position:'fixed', inset:0, zIndex:9999,
      backgroundColor: T.bg,
      display:'grid', gridTemplateColumns:'340px 1fr',
      '--c': color, '--cl': cl,
    }}>
      <style>{CSS}</style>

      {/* ── LEFT PANEL (desktop) ── */}
      <div className="gl-l" style={{
        backgroundColor: T.bgAlt, borderRight:`1px solid ${T.border}`,
        overflowY:'auto', display:'flex', flexDirection:'column',
        '--c': color, '--cl': cl,
      }}>
        <div style={{ padding:'32px 26px 0', flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'22px' }}>
            <span style={{ fontFamily:'monospace', fontSize:'11px', color, fontWeight:'700', letterSpacing:'2px' }}>
              {industry.index}
            </span>
            <div style={{ height:'1px', flex:1, backgroundColor: T.border }} />
          </div>

          <h2 style={{ margin:'0 0 4px', fontSize:'clamp(20px,2vw,26px)', fontWeight:'300', fontFamily:'"Times New Roman",Georgia,serif', color: T.text, lineHeight:1.2, letterSpacing:'-0.4px' }}>
            {industry.label}
          </h2>
          {industry.role && (
            <p style={{ margin:'0 0 3px', fontSize:'11px', color, fontFamily:'monospace', letterSpacing:'0.5px' }}>
              {industry.client}
            </p>
          )}
          <p style={{ margin:'0 0 18px', fontSize:'12px', color: T.textMuted, fontWeight:'300' }}>
            {industry.role}
          </p>
          <p style={{ margin:'0 0 16px', fontSize:'13px', color: T.textSub, lineHeight:1.75, fontWeight:'300' }}>
            {industry.summary}
          </p>

          {industry.result && (
            <div style={{ padding:'12px 16px', backgroundColor: color + '10', borderLeft:`3px solid ${color}`, borderRadius:'0 6px 6px 0', marginBottom:'22px' }}>
              <span style={{ fontSize:'9px', fontFamily:'monospace', color, letterSpacing:'1.5px', textTransform:'uppercase', display:'block', marginBottom:'5px' }}>Result</span>
              <p style={{ margin:0, fontSize:'13px', color: T.text, lineHeight:1.6, fontWeight:'300' }}>{industry.result}</p>
            </div>
          )}

          {allSubcats.length > 1 && (
            <div style={{ marginBottom:'20px' }}>
              <p style={{ margin:'0 0 10px', fontSize:'9px', fontFamily:'monospace', color: T.textMuted, letterSpacing:'2px', textTransform:'uppercase' }}>
                Filter by type
              </p>
              <div className="sc-menu" style={{ '--c': color, '--cl': cl }}>
                {allSubcats.map(cat => {
                  const on = activeSubcat === cat;
                  return (
                    <button key={cat} className={`sc-item${on ? ' on' : ''}`}
                      onClick={() => setActiveSubcat(cat)}
                      style={{ '--c': color, '--cl': cl }}
                    >
                      <span>{cat}</span>
                      {on && <span style={{ width:'5px', height:'5px', borderRadius:'50%', backgroundColor: color, flexShrink:0 }} />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div style={{ height:'1px', backgroundColor: T.border, margin:'0 26px' }} />
        <div style={{ padding:'16px 26px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px' }}>
          <span style={{ fontFamily:'monospace', fontSize:'9px', color: T.textMuted, letterSpacing:'1.5px', textTransform:'uppercase' }}>
            {filtered.length} clips
          </span>
          <button className="gl-close" style={{ '--c': color, '--cl': cl }} onClick={onClose}>✕ Close</button>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="gl-r" style={{ backgroundColor: T.bg, overflowY:'auto', position:'relative', '--c': color }}>

        {/* Sticky top bar */}
        <div style={{
          position:'sticky', top:0, zIndex:5,
          backgroundColor: T.overlay, backdropFilter:'blur(16px)',
          borderBottom:`1px solid ${T.border}`,
          padding:'11px 20px',
          display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', minWidth:0, flexShrink:1 }}>
            <span style={{ fontFamily:'monospace', fontSize:'10px', color, fontWeight:'700', flexShrink:0 }}>{industry.index}</span>
            <span style={{ fontFamily:'monospace', fontSize:'9px', color: T.textMuted, letterSpacing:'1px', textTransform:'uppercase', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
              {industry.label}
            </span>
          </div>

          {allSubcats.length > 1 && (
            <div className="sc-tabs" style={{ flex:1 }}>
              {allSubcats.map(cat => {
                const on = activeSubcat === cat;
                return (
                  <button key={cat} className="sc-tab"
                    onClick={() => setActiveSubcat(cat)}
                    style={{ color: on ? '#fff' : T.textMuted, borderColor: on ? color : T.border, backgroundColor: on ? color : 'transparent' }}
                  >{cat}</button>
                );
              })}
            </div>
          )}

          <button className="gl-close" style={{ '--c': color, '--cl': cl, flexShrink:0 }} onClick={onClose}>✕</button>
        </div>

        {/* Mobile info block */}
        <div className="gl-mob" style={{ flexDirection:'column', padding:'20px', borderBottom:`1px solid ${T.border}`, backgroundColor: T.bgAlt }}>
          <p style={{ margin:'0 0 12px', fontSize:'13px', color: T.textSub, lineHeight:1.6, fontWeight:'300' }}>{industry.summary}</p>
          {industry.result && (
            <div style={{ padding:'10px 14px', backgroundColor: color + '10', borderLeft:`3px solid ${color}`, borderRadius:'0 4px 4px 0' }}>
              <span style={{ fontSize:'9px', fontFamily:'monospace', color, letterSpacing:'1.5px', textTransform:'uppercase', display:'block', marginBottom:'4px' }}>Result</span>
              <p style={{ margin:0, fontSize:'12px', color: T.text, lineHeight:1.55, fontWeight:'300' }}>{industry.result}</p>
            </div>
          )}
        </div>

        {/* Video grid */}
        {filtered.length > 0 ? (
          <div className="vg">
            {filtered.map(a => <VideoCard key={a.id} asset={a} color={color} />)}
          </div>
        ) : (
          <div style={{ padding:'80px 20px', textAlign:'center' }}>
            <p style={{ fontFamily:'monospace', fontSize:'10px', color: T.textMuted, letterSpacing:'2px', textTransform:'uppercase' }}>
              No clips in this category yet
            </p>
          </div>
        )}

        <div style={{ padding:'48px 0', textAlign:'center', borderTop:`1px solid ${T.border}`, marginTop:'16px' }}>
          <button className="gl-close" style={{ '--c': color, '--cl': cl }} onClick={onClose}>↑ Back to top · Close</button>
        </div>
      </div>
    </div>
  );
}

// ─── INDUSTRY CARD ────────────────────────────────────────────────────────────
function IndustryCard({ industry, onClick }) {
  const [hovered,   setHovered]   = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isEmpty = !industry.assets || industry.assets.length === 0;

  return (
    <div
      className="ind-card"
      onClick={() => onClick(industry)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ border:`1.5px solid ${hovered ? industry.color : T.border}` }}
    >
      {/* LAYER 1 — Shimmer (z:1) — visible while cover photo loads from Cloudinary */}
      <div className="sk" style={{ position:'absolute', inset:0, zIndex:1, transition:'opacity 0.5s ease', opacity: imgLoaded ? 0 : 1 }} />

      {/* LAYER 2 — Cover image (z:2) — fades in once loaded */}
      <div style={{
        position:'absolute', inset:0, zIndex:2,
        opacity: imgLoaded ? 1 : 0,
        transition:'opacity 0.5s ease, transform 1.8s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
      }}>
        <img src={industry.cover} alt="" loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
        />
      </div>

      {/* LAYER 3 — Gradient (z:3) — ALWAYS visible, ensures text legibility
          whether we're showing the shimmer or the photo underneath */}
      <div style={{
        position:'absolute', inset:0, zIndex:3, pointerEvents:'none',
        background:'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.32) 52%, rgba(0,0,0,0.06) 100%)',
      }} />

      {/* LAYER 4 — SOON badge (z:4) */}
      {isEmpty && (
        <div style={{
          position:'absolute', top:'14px', right:'14px', zIndex:4,
          backgroundColor:'rgba(255,255,255,0.9)', border:`1px solid ${T.border}`,
          padding:'3px 9px', borderRadius:'10px',
          fontFamily:'monospace', fontSize:'8px', color: T.textSub, letterSpacing:'1px',
        }}>SOON</div>
      )}

      {/* LAYER 5 — Text (z:5) — ALWAYS on top, never hidden by shimmer or image */}
      <div style={{ position:'absolute', inset:0, zIndex:5, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'18px 20px' }}>
        {/* Index number */}
        <span style={{ fontFamily:'monospace', fontSize:'11px', color: industry.color, fontWeight:'700', letterSpacing:'2px', textShadow:'0 1px 4px rgba(0,0,0,0.5)' }}>
          {industry.index}
        </span>

        {/* Bottom text block */}
        <div>
          {/* Category label above title */}
          <span style={{ display:'block', fontFamily:'monospace', fontSize:'9px', color: industry.color, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'6px', textShadow:'0 1px 3px rgba(0,0,0,0.4)', opacity:0.9 }}>
            {/* subtle category tag */}
          </span>

          <h3 style={{
            margin:'0 0 6px',
            fontSize:'clamp(18px, 2vw, 23px)', fontWeight:'400',
            fontFamily:'"Times New Roman", Georgia, serif',
            color:'#ffffff', lineHeight:1.2, letterSpacing:'-0.2px',
            textShadow:'0 2px 8px rgba(0,0,0,0.5)',
          }}>
            {industry.label}
          </h3>

          <p style={{ margin:'0 0 14px', fontSize:'12px', color:'rgba(255,255,255,0.68)', fontWeight:'300', lineHeight:1.5, textShadow:'0 1px 3px rgba(0,0,0,0.3)' }}>
            {industry.headline}
          </p>

          {/* CTA pill — appears on hover */}
          <div style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(6px)', transition:'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
            <span style={{
              display:'inline-block', fontFamily:'monospace', fontSize:'10px',
              color: isEmpty ? 'rgba(255,255,255,0.7)' : '#fff',
              backgroundColor: isEmpty ? 'rgba(255,255,255,0.15)' : industry.color,
              padding:'7px 18px', borderRadius:'20px', letterSpacing:'1px', textTransform:'uppercase',
              boxShadow: isEmpty ? 'none' : `0 4px 16px ${industry.color}60`,
              backdropFilter: isEmpty ? 'blur(4px)' : 'none',
            }}>
              {isEmpty ? 'Coming Soon' : 'Open Gallery ↗'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [openGallery,  setOpenGallery]  = useState(null);

  // Industries come from the admin panel; number and id them by position.
  const INDUSTRIES = getContent('work').industries.map((ind, i) => ({
    ...ind,
    id:      ind.id || `industry-${i + 1}`,
    index:   String(i + 1).padStart(2, '0'),
    subcats: ind.subcats || [],
    assets:  buildAssets(ind.videos || [], `${ind.id || i}-`),
  }));

  const displayed = activeFilter === 'ALL'
    ? INDUSTRIES
    : INDUSTRIES.filter(ind => ind.id === activeFilter);

  return (
    <section id="work" style={{ padding:'clamp(80px, 10vw, 140px) 8%', backgroundColor: T.bg }}>
      <style>{CSS}</style>

      <div style={{ maxWidth:'1300px', margin:'0 auto' }}>

        {/* Section header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'24px', marginBottom:'40px' }}>
          <div>
            <span style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'2px', color: T.pink, display:'block', marginBottom:'14px', fontFamily:'monospace', fontWeight:'600' }}>
              ✦ Selected Work
            </span>
            <h2 style={{ fontSize:'clamp(28px, 4vw, 46px)', fontWeight:'300', margin:0, fontFamily:'"Times New Roman", Times, Georgia, serif', color: T.text, letterSpacing:'-0.5px', lineHeight:1.2 }}>
              The thinking behind the pretty.
            </h2>
          </div>
          <p style={{ fontSize:'13px', color: T.textSub, fontWeight:'300', margin:0, maxWidth:'240px', lineHeight:1.6, textAlign:'right' }}>
            Explore the campaigns, photographs and films behind each brand story.
          </p>
        </div>

        {/* Industry filter tabs */}
        <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
          <button className="ind-tab" onClick={() => setActiveFilter('ALL')}
            style={{ color: activeFilter === 'ALL' ? '#fff' : T.textSub, borderColor: activeFilter === 'ALL' ? T.pink : T.border, backgroundColor: activeFilter === 'ALL' ? T.pink : 'transparent' }}>
            All Industries
          </button>
          {INDUSTRIES.map(ind => {
            const on = activeFilter === ind.id;
            return (
              <button key={ind.id} className="ind-tab" onClick={() => setActiveFilter(ind.id)}
                style={{ color: on ? '#fff' : T.textSub, borderColor: on ? ind.color : T.border, backgroundColor: on ? ind.color : 'transparent' }}>
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ marginTop:'28px', marginBottom:'4px', display:'flex', alignItems:'center', gap:'12px' }}>
          <div style={{ width:'5px', height:'5px', borderRadius:'50%', backgroundColor: T.pink, flexShrink:0 }} />
          <span style={{ fontFamily:'monospace', fontSize:'10px', color: T.textMuted, letterSpacing:'2px', textTransform:'uppercase' }}>
            {activeFilter === 'ALL' ? `${INDUSTRIES.length} industries` : INDUSTRIES.find(i => i.id === activeFilter)?.label}
          </span>
          <div style={{ flex:1, height:'1px', backgroundColor: T.border }} />
        </div>

        {/* Industry cards */}
        <div className="industry-grid">
          {displayed.map(ind => <IndustryCard key={ind.id} industry={ind} onClick={setOpenGallery} />)}
        </div>

      </div>

      {openGallery && (
        <Gallery
          industry={openGallery}
          onClose={() => setOpenGallery(null)}
        />
      )}
    </section>
  );
}
import React, { useState, useEffect } from 'react';

// ─── INSTAGRAM LINKS ──────────────────────────────────────────────────────────
const IG = {
  fnb: [
    { href: 'https://www.instagram.com/p/C_x3o3HtBPi/', preview: '/assets/previews/fnb-1.mp4' },
    { href: 'https://www.instagram.com/p/DAEAdrytoil/', preview: '/assets/previews/fnb-2.mp4' },
    { href: 'https://www.instagram.com/p/DBM1CGHO9PI/', preview: '/assets/previews/fnb-3.mp4' },
  ],
  education: [
    {
      href: 'https://www.instagram.com/tv/Ca1N3OwFzRA/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164687/education1_jxvtic.mp4',
      orientation: 'landscape',
      caption: 'Honoring the Women Who Built This Place',
      tags: ['Campaign Marketing', 'Brand Strategy', 'Experiential Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/CxqHwsjN7Fg/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164681/education2_wtky2j.mp4',
      orientation: 'landscape',
      caption: 'The Unboxing That Sold the Story',
      tags: ['Influencer Marketing', 'Brand Strategy', 'Ad Campaigns'],
    },
    {
      href: 'https://www.instagram.com/p/CmbMvevB5V7/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164681/education3_pvohza.mp4',
      orientation: 'landscape',
      caption: 'The Walk Across the Stage',
      tags: ['Ad Campaigns', 'Brand Strategy', 'Promotional Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/C5nnVntt0GP/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164691/education4_kmq9ts.mp4',
      orientation: 'portrait',
      caption: 'What Campus Life Actually Looks Like',
      tags: ['Brand Strategy', 'Campaign Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/C0baMn2NHyz/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164694/education5_n7syzq.mp4',
      orientation: 'landscape',
      caption: 'Four Years, One Moment',
      tags: ['Ad Campaigns', 'Brand Strategy', 'Lead Generation'],
    },
    {
      href: 'https://www.instagram.com/p/Crk_-7yuwg4/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164703/education6_cvmwxs.mp4',
      orientation: 'landscape',
      caption: 'Energy You Can Feel Through the Screen',
      tags: ['Experiential Marketing', 'Brand Strategy'],
    },
    {
      href: 'https://www.instagram.com/p/CpgvofyIh-k/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164703/education7_yqvupx.mp4',
      orientation: 'portrait',
      caption: 'A Thank You, Caught on Camera',
      tags: ['Experiential Marketing', 'Campaign Marketing', 'Brand Strategy'],
    },
    {
      href: 'https://www.instagram.com/tv/ClTO1_RNOzd/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164705/education8_shkx96.mp4',
      orientation: 'landscape',
      caption: 'Making Higher Education Reachable',
      tags: ['Lead Generation', 'Ad Campaigns', 'Promotional Marketing'],
    },
  ],
  events: [
    {
      href: 'https://www.instagram.com/p/DU25tpnk59x/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164695/events1_ihussq.mp4',
      orientation: 'landscape',
      caption: 'The Ritual Before the Vows',
      tags: ['Experiential Marketing', 'Brand Strategy', 'Campaign Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/DWJPq32TC0C/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164693/events3_axq7zy.mp4',
      orientation: 'portrait',
      caption: 'A Quiet Moment, Captured Loud',
      tags: ['Experiential Marketing', 'Engagement Strategy', 'Campaign Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/DWd1-epzsAG/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164696/events4_ivxmyr.mp4',
      orientation: 'portrait',
      caption: 'Set, Styled, Ready',
      tags: ['Brand Strategy', 'Promotional Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/DXWrauVFUuA/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164702/events6_q1hqnk.mp4',
      orientation: 'portrait',
      caption: 'Every Detail On Display',
      tags: ['Brand Strategy', 'Experiential Marketing', 'Promotional Marketing'],
    },
    {
      href: 'https://www.instagram.com/p/CrDEvbWPaQY/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164710/events7_keblkm.mp4',
      orientation: 'portrait',
      caption: 'Sabin Rai Live — The Crowd Reacts',
      tags: ['Entertainment Marketing', 'Experiential Marketing', 'Engagement Strategy'],
    },
    {
      href: 'https://www.instagram.com/p/CyqIsfxMSDC/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164706/events8_j3rczc.mp4',
      orientation: 'landscape',
      caption: 'A Production Built for the Brand',
      tags: ['Ad Campaigns', 'Experiential Marketing', 'Brand Strategy'],
    },
    {
      href: 'https://www.instagram.com/p/Crk_-7yuwg4/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164715/events9_wqauxs.mp4',
      orientation: 'landscape',
      caption: 'Sabin Rai On Stage, In Full Scale',
      tags: ['Ad Campaigns', 'Experiential Marketing', 'Entertainment Marketing'],
    },
  ],
  realestate: [
    {
      href: 'https://www.instagram.com/p/DCzbZLqAlRa/',
      preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164710/realstate1_simcef.mp4',
      orientation: 'landscape',
      caption: 'Where the Right Buyer Sees Themselves',
      tags: ['Brand Strategy', 'Content'],
    },
    { href: 'https://www.instagram.com/p/DC8MnOAN4ZI/', preview: '/assets/previews/re-2.mp4' },
  ],
};

// ─── SUB-CATEGORY ASSIGNMENT ──────────────────────────────────────────────────
// Auto-assigned by clip number. Change the `subcat` values to remap.
// subcat must match a key in the industry's `subcats` array.
function buildAssets(items, prefix, captionBase, subcatList) {
  return items.map((item, i) => ({
    id: `${prefix}${i + 1}`,
    caption: item.caption || `${captionBase} — Vol. ${String(i + 1).padStart(2, '0')}`,
    href: item.href,
    preview: item.preview,
    orientation: item.orientation || 'landscape',
    tags: item.tags || null,
    // cycles through subcats evenly when no explicit tags are set
    subcat: item.tags ? item.tags[0] : subcatList[i % subcatList.length],
  }));
}

// ─── INDUSTRY DATA ────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    id: 'fnb',
    index: '01',
    label: 'F&B Marketing',
    headline: 'Content that sells before the first bite.',
    client: 'Ai-cha',
    color: '#F472B6',
    cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=90',
    role: 'National Marketing Manager',
    summary: 'Full-funnel marketing for a global F&B brand entering Nepal — from brand positioning to paid ads, in-store activation, and social content.',
    result: '80–90 quality leads generated. Full numbers updating soon.',
    subcats: ['Ad Campaigns', 'Content', 'Brand Strategy'],
    get assets() {
      return buildAssets(IG.fnb, 'fnb-', 'F&B Campaign', this.subcats);
    },
  },
  {
    id: 'education',
    index: '02',
    label: 'Education Marketing',
    headline: 'Millions of views. Three institutions. One strategy.',
    client: 'ING Group — Herald College, Islington College, Kavya School',
    color: '#7C6AF7',
    cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90',
    role: 'Social Media & Marketing Strategist',
    summary: 'Built the complete social and content engine for three educational institutions simultaneously — TikTok growth, ad direction, storyboarding, and reels production.',
    result: 'Millions of organic TikTok views across all three institutions.',
    subcats: ['Campaign Marketing', 'Brand Strategy', 'Experiential Marketing', 'Influencer Marketing', 'Ad Campaigns', 'Promotional Marketing', 'Lead Generation'],
    get assets() {
      return buildAssets(IG.education, 'edu-', 'Education Reel', this.subcats);
    },
  },
  {
    id: 'events',
    index: '03',
    label: 'Event Marketing',
    headline: 'Capturing the room, not just the event.',
    client: 'Classic Projects & KaPa',
    color: '#C76FE0',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90',
    role: 'Brand Head & Content Lead',
    summary: 'From the first floral detail to the headline act, every frame was mine to direct. Self-shot photography, on-site content capture, and the brand strategy holding it all together — across weddings, institutional events, and live performances.',
    result: 'A consistent brand presence across every event format — intimate ceremonies to full-scale productions.',
    subcats: ['Experiential Marketing', 'Brand Strategy', 'Campaign Marketing', 'Engagement Strategy', 'Promotional Marketing', 'Entertainment Marketing', 'Ad Campaigns'],
    get assets() {
      return buildAssets(IG.events, 'eve-', 'Event Reel', this.subcats);
    },
  },
  {
    id: 'realestate',
    index: '04',
    label: 'Real Estate Campaigns',
    headline: 'Clean visuals that let the space speak.',
    client: 'Naamche',
    color: '#1D9E75',
    cover: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=90',
    role: 'Brand & Social Strategist',
    summary: 'Brand identity and social content for a real estate brand — visual guidelines, content system, and social media strategy across platforms.',
    result: 'Cohesive brand language across all digital and physical touchpoints.',
    subcats: ['Brand Strategy', 'Content'],
    get assets() {
      return buildAssets(IG.realestate, 're-', 'Real Estate Reel', this.subcats);
    },
  },
  {
    id: 'design',
    index: '05',
    label: 'Design & Creative',
    headline: 'Strategy behind the aesthetic.',
    client: 'Utopia',
    color: '#EF9F27',
    cover: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=90',
    role: 'Social Media Strategist',
    summary: 'Social media strategy and reels content engine for a design agency — brand voice, content calendar, and platform consistency.',
    result: 'Consistent reels output and engagement lift.',
    subcats: ['Content', 'Brand Strategy'],
    assets: [],
  },
  {
    id: 'hospitality',
    index: '06',
    label: 'Hospitality Marketing',
    headline: 'Premium stays deserve premium content.',
    client: 'Coming soon',
    color: '#64A8D8',
    cover: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=90',
    role: null,
    summary: 'Hospitality and boutique hotel campaigns coming soon.',
    result: null,
    subcats: [],
    assets: [],
  },
  {
    id: 'lifestyle',
    index: '07',
    label: 'Lifestyle Campaigns',
    headline: 'Culture-first content with commercial results.',
    client: 'Coming soon',
    color: '#F59E8A',
    cover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=90',
    role: null,
    summary: 'Lifestyle brand and cultural content work coming soon.',
    result: null,
    subcats: [],
    assets: [],
  },
];

// ─── VIDEO CARD ───────────────────────────────────────────────────────────────
// ─── SINGLE-ACTIVE-VIDEO COORDINATOR ─────────────────────────────────────────
// Free hosting = no CDN video optimization, so we must never let more than
// ONE video play at a time. Every VideoCard reports its visibility ratio here;
// this module picks the single most-visible card and tells everyone else to pause.
const videoVisibility = new Map(); // id -> ratio
const videoListeners = new Set();  // callbacks to notify on change

function reportVisibility(id, ratio) {
  if (ratio <= 0) {
    videoVisibility.delete(id);
  } else {
    videoVisibility.set(id, ratio);
  }
  let winnerId = null;
  let bestRatio = 0;
  videoVisibility.forEach((r, key) => {
    if (r > bestRatio) { bestRatio = r; winnerId = key; }
  });
  videoListeners.forEach(cb => cb(winnerId));
}

function subscribeActiveVideo(cb) {
  videoListeners.add(cb);
  return () => videoListeners.delete(cb);
}

function VideoCard({ asset, color }) {
  const [hovered, setHovered] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [isActiveVideo, setIsActiveVideo] = useState(false);
  const videoRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const cardId = React.useRef(asset.id || Math.random().toString(36)).current;
  const isPortrait = asset.orientation === 'portrait';
  const extraTags = asset.tags ? asset.tags.slice(1) : [];
  const hasExtraTags = extraTags.length > 0;
  const [hasAppeared, setHasAppeared] = useState(false);

  // One-time fade-in the moment the card first scrolls into view —
  // separate from the playback observer so it fires immediately at a low
  // threshold rather than waiting for the stricter playback thresholds.
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fadeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAppeared(true);
          fadeObserver.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    fadeObserver.observe(el);
    return () => fadeObserver.disconnect();
  }, []);

  // Report this card's visibility ratio to the shared coordinator.
  // Only the single card with the highest ratio across the WHOLE grid is
  // ever told to play — every other card stays paused, no matter how many
  // happen to be in the viewport at once.
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => reportVisibility(cardId, entry.intersectionRatio),
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      reportVisibility(cardId, 0); // remove from registry on unmount
    };
  }, [cardId]);

  React.useEffect(() => {
    return subscribeActiveVideo((winnerId) => {
      setIsActiveVideo(winnerId === cardId);
    });
  }, [cardId]);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Desktop: hover always wins (lets people preview on purpose).
    // Otherwise: only the single most-visible card in the entire grid plays.
    const shouldPlay = hovered || isActiveVideo;
    if (shouldPlay) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [hovered, isActiveVideo]);

  const handleCardClick = (e) => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (hasExtraTags && !tagsOpen && isTouch) {
      e.preventDefault();
      setTagsOpen(true);
    }
  };

  return (
    <div ref={wrapRef} style={{
      position: 'relative', breakInside: 'avoid',
      opacity: hasAppeared ? 1 : 0,
      transform: hasAppeared ? 'translateY(0)' : 'translateY(14px)',
      transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <a
        href={asset.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCardClick}
        style={{
          position: 'relative', display: 'block', textDecoration: 'none',
          background: '#0D0D0F', border: `1px solid ${hovered ? color : '#1A1A1E'}`,
          borderRadius: '10px', overflow: 'hidden',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.5)` : 'none',
        }}
      >
        {/* Aspect box — portrait 9:16, landscape 16:9. No leftover empty space. */}
        <div style={{
          position: 'relative', width: '100%',
          paddingTop: isPortrait ? '177.78%' : '56.25%',
          backgroundColor: '#050506', overflow: 'hidden',
        }}>
          {asset.preview && !previewFailed && hasAppeared ? (
            <video
              ref={videoRef}
              className="card-video"
              src={asset.preview}
              muted loop playsInline preload="none"
              onError={() => setPreviewFailed(true)}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease',
                transform: hovered ? 'scale(1.02)' : 'scale(1)',
                filter: hovered ? 'brightness(1.08)' : 'brightness(1)',
              }}
            />
          ) : !hasAppeared ? (
            // Nothing is requested over the network until the card is nearly
            // in view — this is what keeps initial page load light even with
            // 15+ video cards on a free hosting plan.
            <div style={{ position: 'absolute', inset: 0, backgroundColor: '#050506' }} />
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(145deg, #070708 0%, ${color}18 60%, #0D0D0F 100%)`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: `1px dashed ${color}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill={color} opacity="0.5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: '8px', color: '#3a3a3a', letterSpacing: '1.5px' }}>
                PREVIEW PENDING
              </span>
            </div>
          )}

          {/* gradient vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.1) 45%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Instagram icon — top right, clear of tags */}
          <div style={{
            position: 'absolute', top: '10px', right: '10px', zIndex: 3,
            width: '26px', height: '26px', borderRadius: '50%',
            background: hovered ? 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)' : 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none"/>
            </svg>
          </div>

          {/* Tag row — top left, single line, clean wrap, no overlap */}
          <div
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTagsOpen(o => !o); }}
            style={{
              position: 'absolute', top: '10px', left: '10px', right: '44px', zIndex: 4,
              display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'flex-start',
              cursor: hasExtraTags ? 'pointer' : 'default',
            }}
          >
            <span style={{
              backgroundColor: color + '35', border: `1px solid ${color}66`,
              padding: '4px 9px', borderRadius: '20px',
              fontFamily: 'monospace', fontSize: '8px', color: '#fff',
              letterSpacing: '0.5px', textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              whiteSpace: 'nowrap',
            }}>
              {asset.subcat}
              {hasExtraTags && (
                <span style={{
                  fontSize: '7px', opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px', padding: '1px 4px',
                }}>
                  {tagsOpen ? '−' : `+${extraTags.length}`}
                </span>
              )}
            </span>

            {tagsOpen && extraTags.map((t, i) => (
              <span key={i} style={{
                backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.18)',
                padding: '4px 9px', borderRadius: '20px',
                fontFamily: 'monospace', fontSize: '8px', color: '#ddd',
                letterSpacing: '0.3px', textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                animation: 'tagFadeIn 0.18s ease forwards',
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* play icon on hover — desktop only */}
          <div className="play-hint" style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
            opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease',
          }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>

          {/* caption */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', zIndex: 3 }}>
            <p style={{ margin: '0 0 3px', fontSize: '12px', color: '#fff', fontWeight: '400', lineHeight: 1.3 }}>
              {asset.caption}
            </p>
            <span style={{
              fontSize: '9px', fontFamily: 'monospace', letterSpacing: '0.5px',
              color: hovered ? color : '#666', transition: 'color 0.2s',
            }}>
              Watch on Instagram ↗
            </span>
          </div>
        </div>
      </a>

      <style>{`
        @keyframes tagFadeIn { from { opacity: 0; transform: translateY(-2px); } to { opacity: 1; transform: translateY(0); } }
        @media (hover: none) {
          .play-hint { display: none !important; }
        }
      `}</style>
    </div>
  );
}

// ─── GALLERY OVERLAY ─────────────────────────────────────────────────────────
function Gallery({ industry, onClose }) {
  const { color, subcats, assets } = industry;
  const [activeSubcat, setActiveSubcat] = useState('All');

  const allSubcats = subcats.length > 0 ? ['All', ...subcats] : [];
  const filtered = activeSubcat === 'All'
    ? assets
    : assets.filter(a => (a.tags ? a.tags.includes(activeSubcat) : a.subcat === activeSubcat));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  return (
    <div className="gallery-root" style={{
      position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#0A0A0B',
      display: 'grid', gridTemplateColumns: '340px 1fr',
      animation: 'gin 0.3s ease forwards',
    }}>
      <style>{`
        @keyframes gin { from { opacity:0 } to { opacity:1 } }
        .gl-left::-webkit-scrollbar { width: 2px; }
        .gl-left::-webkit-scrollbar-thumb { background: var(--gc); }
        .gl-right::-webkit-scrollbar { width: 3px; }
        .gl-right::-webkit-scrollbar-track { background: #0e0e10; }
        .gl-right::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }
        .gl-right::-webkit-scrollbar-thumb:hover { background: var(--gc); }
        .gl-close { background: transparent; border: 1px solid #2a2a2a; color: #666; font-family: monospace; font-size: 10px; letter-spacing: 2px; cursor: pointer; padding: 10px 20px; border-radius: 20px; transition: all 0.2s; }
        .gl-close:hover { border-color: var(--gc); color: var(--gc); }
        .subcat-tab { font-family: monospace; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; padding: 7px 16px; border-radius: 20px; cursor: pointer; border: 1px solid; transition: all 0.2s ease; background: transparent; white-space: nowrap; flex-shrink: 0; }
        .subcat-tabs { display: flex; gap: 6px; }
        .subcat-tabs::-webkit-scrollbar { display: none; }

        /* Left panel filter — vertical menu style, full-width rows, left-aligned text */
        .subcat-menu { display: flex; flex-direction: column; gap: 4px; }
        .subcat-menu-item {
          font-family: monospace; font-size: 11px; letter-spacing: 0.5px;
          text-transform: uppercase; text-align: left;
          padding: 10px 14px; border-radius: 8px; cursor: pointer;
          border: 1px solid; background: transparent;
          transition: all 0.2s ease; width: 100%;
          display: flex; align-items: center; justify-content: space-between;
        }
        .video-grid {
          column-count: 3; column-gap: 16px; padding: 24px;
        }
        .video-grid > div { margin-bottom: 16px; width: 100%; display: inline-block; }
        @media (max-width: 1100px) { .video-grid { column-count: 2; } }
        @media (max-width: 800px) {
          .gallery-root { grid-template-columns: 1fr !important; }
          .gl-left { display: none !important; }
          .mobile-info-block { display: flex !important; }
          .video-grid { column-count: 2; column-gap: 10px; padding: 16px; }
          .video-grid > div { margin-bottom: 10px; }
        }
        @media (min-width: 801px) { .mobile-info-block { display: none !important; } }
        @media (max-width: 420px) { .video-grid { column-count: 1 !important; } }
      `}</style>

      {/* LEFT: info panel (desktop only) */}
      <div className="gl-left" style={{
        backgroundColor: '#0D0D0F', borderRight: '1px solid #16161A',
        overflowY: 'auto', display: 'flex', flexDirection: 'column', '--gc': color,
      }}>
        <div style={{ padding: '36px 28px 0', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color, fontWeight: '700', letterSpacing: '2px' }}>
              {industry.index}
            </span>
            <div style={{ height: '1px', flex: 1, backgroundColor: '#1e1e1e' }} />
          </div>

          <h2 style={{
            margin: '0 0 6px', fontSize: 'clamp(22px, 2vw, 28px)', fontWeight: '300',
            fontFamily: '"Times New Roman", Georgia, serif', color: '#fff', lineHeight: 1.2, letterSpacing: '-0.4px',
          }}>
            {industry.label}
          </h2>
          {industry.role && (
            <p style={{ margin: '0 0 6px', fontSize: '11px', color, fontFamily: 'monospace', letterSpacing: '0.5px' }}>
              {industry.client}
            </p>
          )}
          <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#555', fontWeight: '300' }}>{industry.role}</p>

          <p style={{ margin: '16px 0', fontSize: '13px', color: '#888', lineHeight: 1.75, fontWeight: '300' }}>
            {industry.summary}
          </p>

          {industry.result && (
            <div style={{ padding: '14px 18px', backgroundColor: color + '12', borderLeft: `3px solid ${color}`, marginBottom: '20px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'monospace', color, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>
                Result
              </span>
              <p style={{ margin: 0, fontSize: '13px', color: '#ccc', lineHeight: 1.6, fontWeight: '300' }}>
                {industry.result}
              </p>
            </div>
          )}

          {/* Sub-category filter — also in left panel for context */}
          {allSubcats.length > 1 && (
            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 12px', fontSize: '9px', fontFamily: 'monospace', color: '#3a3a3a', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Filter by type
              </p>
              <div className="subcat-menu">
                {allSubcats.map(cat => {
                  const isActive = activeSubcat === cat;
                  return (
                    <button key={cat} className="subcat-menu-item"
                      onClick={() => setActiveSubcat(cat)}
                      style={{
                        color: isActive ? '#fff' : '#777',
                        borderColor: isActive ? color : '#222',
                        backgroundColor: isActive ? color + '22' : 'transparent',
                        fontWeight: isActive ? '600' : '400',
                      }}
                    >
                      <span>{cat}</span>
                      {isActive && (
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          backgroundColor: color, flexShrink: 0,
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div style={{ height: '1px', backgroundColor: '#1a1a1a', margin: '0 28px' }} />
        <div style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: 'auto' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '9px', color: '#3a3a3a', letterSpacing: '1.5px' }}>
            {filtered.length} CLIPS
          </span>
          <button className="gl-close" style={{ '--gc': color }} onClick={onClose}>✕ CLOSE</button>
        </div>
      </div>

      {/* RIGHT: media grid */}
      <div className="gl-right" style={{ backgroundColor: '#0A0A0B', overflowY: 'auto', position: 'relative', '--gc': color }}>

        {/* sticky top bar */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 5,
          backgroundColor: 'rgba(10,10,11,0.94)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #16161A', padding: '12px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color, fontWeight: '700', flexShrink: 0 }}>
              {industry.index}
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#555', letterSpacing: '1px', textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {industry.label}
            </span>
          </div>

          <button className="gl-close" style={{ '--gc': color, flexShrink: 0 }} onClick={onClose}>✕</button>
        </div>

        {/* Dedicated filter row — own full-width line, never crammed against the title or close button */}
        {allSubcats.length > 1 && (
          <div style={{
            position: 'sticky', top: '49px', zIndex: 4,
            backgroundColor: 'rgba(10,10,11,0.96)', backdropFilter: 'blur(14px)',
            borderBottom: '1px solid #16161A',
            padding: '12px 24px',
            overflowX: 'auto',
          }}>
            <div className="subcat-tabs" style={{ flexWrap: 'nowrap', minWidth: 'max-content' }}>
              {allSubcats.map(cat => {
                const isActive = activeSubcat === cat;
                return (
                  <button key={cat} className="subcat-tab"
                    onClick={() => setActiveSubcat(cat)}
                    style={{
                      color: isActive ? '#fff' : '#555',
                      borderColor: isActive ? color : '#2a2a2a',
                      backgroundColor: isActive ? color : 'transparent',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* mobile: condensed info */}
        <div className="mobile-info-block" style={{ flexDirection: 'column', padding: '20px', borderBottom: '1px solid #16161A', backgroundColor: '#0D0D0F' }}>
          <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#999', lineHeight: 1.6, fontWeight: '300' }}>
            {industry.summary}
          </p>
          {industry.result && (
            <div style={{ padding: '10px 14px', backgroundColor: color + '15', borderLeft: `3px solid ${color}` }}>
              <span style={{ fontSize: '9px', fontFamily: 'monospace', color, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Result</span>
              <p style={{ margin: 0, fontSize: '12px', color: '#ccc', lineHeight: 1.55, fontWeight: '300' }}>{industry.result}</p>
            </div>
          )}
        </div>

        {/* video grid */}
        {filtered.length > 0 ? (
          <div className="video-grid">
            {filtered.map(asset => <VideoCard key={asset.id} asset={asset} color={color} />)}
          </div>
        ) : (
          <div style={{ padding: '80px 20px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#3a3a3a', letterSpacing: '2px', textTransform: 'uppercase' }}>
              No clips in this category yet
            </p>
          </div>
        )}

        <div style={{ padding: '48px 0', textAlign: 'center', borderTop: '1px solid #16161A', marginTop: '20px' }}>
          <button className="gl-close" style={{ '--gc': color }} onClick={onClose}>↑ BACK TO TOP · CLOSE</button>
        </div>
      </div>
    </div>
  );
}

// ─── INDUSTRY CARD ────────────────────────────────────────────────────────────
function IndustryCard({ industry, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isEmpty = !industry.assets || industry.assets.length === 0;

  return (
    <div
      onClick={() => onClick(industry)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        minHeight: '260px', backgroundColor: '#1c1c1f',
        border: hovered ? `1.5px solid ${industry.color}` : '1.5px solid transparent',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
      }}>
        <img src={industry.cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.06) 100%)',
      }} />

      {isEmpty && (
        <div style={{
          position: 'absolute', top: '14px', right: '14px', zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #333',
          padding: '3px 9px', borderRadius: '10px',
          fontFamily: 'monospace', fontSize: '8px', color: '#555', letterSpacing: '1px',
        }}>
          SOON
        </div>
      )}

      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: industry.color, fontWeight: '700', letterSpacing: '2px' }}>
            {industry.index}
          </span>
        </div>

        <div>
          <h3 style={{
            margin: '0 0 6px', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: '400',
            fontFamily: '"Times New Roman", Georgia, serif', color: '#fff', lineHeight: 1.2, letterSpacing: '-0.2px',
          }}>
            {industry.label}
          </h3>
          <p style={{ margin: '0 0 14px', fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '300', lineHeight: 1.5 }}>
            {industry.headline}
          </p>
          <div style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(5px)',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <span style={{
              display: 'inline-block', fontFamily: 'monospace', fontSize: '10px', color: '#fff',
              backgroundColor: isEmpty ? '#333' : industry.color,
              padding: '7px 16px', borderRadius: '20px', letterSpacing: '1px', textTransform: 'uppercase',
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
  const [openGallery, setOpenGallery] = useState(null);

  const displayed = activeFilter === 'ALL'
    ? INDUSTRIES
    : INDUSTRIES.filter(ind => ind.id === activeFilter);

  return (
    <section id="work" style={{ padding: 'clamp(80px, 10vw, 140px) 8%', backgroundColor: '#111113' }}>
      <style>{`
        .ind-tab { font-family: monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; padding: 8px 18px; border-radius: 24px; cursor: pointer; border: 1px solid; transition: all 0.2s; background: transparent; white-space: nowrap; }
        .industry-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 8px; margin-top: 36px; }
        .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }
        @media (max-width: 560px) {
          .industry-grid { grid-template-columns: 1fr; }
          .ind-tab { font-size: 9px; padding: 6px 12px; }
        }
      `}</style>

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#F472B6', display: 'block', marginBottom: '14px', fontFamily: 'monospace', fontWeight: '600' }}>
              ✦ Selected Work
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '300', margin: 0, fontFamily: '"Times New Roman", Times, Georgia, serif', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              Real brands. Measurable results.
            </h2>
          </div>
          <p style={{ fontSize: '13px', color: '#444', fontWeight: '300', margin: 0, maxWidth: '240px', lineHeight: 1.6, textAlign: 'right' }}>
            Select an industry to see campaigns and video work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          <button className="ind-tab" onClick={() => setActiveFilter('ALL')}
            style={{ color: activeFilter === 'ALL' ? '#fff' : '#555', borderColor: activeFilter === 'ALL' ? '#F472B6' : '#2a2a2a', backgroundColor: activeFilter === 'ALL' ? '#F472B6' : 'transparent' }}>
            All Industries
          </button>
          {INDUSTRIES.map(ind => {
            const isActive = activeFilter === ind.id;
            return (
              <button key={ind.id} className="ind-tab" onClick={() => setActiveFilter(ind.id)}
                style={{ color: isActive ? '#fff' : '#555', borderColor: isActive ? ind.color : '#2a2a2a', backgroundColor: isActive ? ind.color : 'transparent' }}>
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#F472B6', flexShrink: 0 }} />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#444', letterSpacing: '2px', textTransform: 'uppercase' }}>
            {activeFilter === 'ALL' ? `${INDUSTRIES.length} industries` : INDUSTRIES.find(i => i.id === activeFilter)?.label}
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#1a1a1a' }} />
        </div>

        {/* Industry grid */}
        <div className="industry-grid">
          {displayed.map(ind => (
            <IndustryCard key={ind.id} industry={ind} onClick={setOpenGallery} />
          ))}
        </div>

      </div>

      {openGallery && (
        <Gallery industry={openGallery} onClose={() => setOpenGallery(null)} />
      )}
    </section>
  );
}
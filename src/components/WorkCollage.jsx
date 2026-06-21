import React from 'react';

export default function WorkCollage({ campaigns }) {

  // EASY MANAGEMENT CENTRAL: All 9 slots live here
  const assetGrid = {
    // Index 0 (Ai-cha Nepal) - Grouped together
    0: [
      "/assets/vanilla.mp4",          // Slot 1: Widescreen Hero Showpiece
      "/assets/chocolate_crunch.mp4", // Slot 2: Tall Floating Specimen
      "/assets/mango.mp4"             // Slot 3: Square Floating Specimen
    ],
    // Index 1 (ING Group)
    1: [
      "/assets/asset_04.mp4",         // Slot 4: Widescreen Hero
      "/assets/asset_05.mp4",         // Slot 5: Tall Floating
      "/assets/asset_06.mp4"          // Slot 6: Square Floating
    ],
    // Index 2 (Naamche & Utopia)
    2: [
      "/assets/asset_07.mp4",         // Slot 7: Widescreen Hero
      "/assets/asset_08.mp4",         // Slot 8: Tall Floating
      "/assets/asset_09.mp4"          // Slot 9: Square Floating
    ]
  };

  const handleNodeMouseMove = (e) => {
    const currentTarget = e.currentTarget;
    const rect = currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    currentTarget.style.setProperty('--mouse-x', x);
    currentTarget.style.setProperty('--mouse-y', y);
  };

  const handleNodeMouseLeave = (e) => {
    const currentTarget = e.currentTarget;
    currentTarget.style.setProperty('--mouse-x', 0);
    currentTarget.style.setProperty('--mouse-y', 0);
  };

  const renderMedia = (src, altString) => {
    if (!src) return <div style={{ width: '100%', height: '100%', backgroundColor: '#1c1e22' }} />;

    const isVideo = 
      src.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) || 
      src.includes("video") || 
      src.includes("chocolate_crunch") || 
      src.includes("mango") ||
      src.includes("vanilla") ||
      src.includes("asset_");

    // Custom positioning presets to make sure vertical videos don't lose their subject matter when filling the frames
    let objectPosition = 'center center';
    if (src.includes("mango")) {
      objectPosition = 'center 30%'; // Adjusts the crop point so the main focus stays perfectly in frame
    } else if (src.includes("vanilla")) {
      objectPosition = 'center center';
    }

    const assetStyles = {
      width: '100%',
      height: '100%',
      // CHANGED: Forces 'cover' across everything so it explicitly forces the media to fill 100% of the visual block width/height
      objectFit: 'cover',
      objectPosition: objectPosition,
      transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none'
    };

    if (isVideo) {
      return <video src={src} autoPlay loop muted playsInline style={assetStyles} />;
    }
    return <img src={src} alt={altString} style={assetStyles} />;
  };

  const renderList = campaigns || [];

  return (
    <section 
      id="visual-lookbook" 
      style={{ 
        backgroundColor: '#131518', 
        position: 'relative', 
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* ARCHITECTURAL CORNER CROP MARKS */}
      <div style={{ position: 'absolute', top: '40px', left: '40px', width: '16px', height: '16px', borderTop: '1px solid #2c2e35', borderLeft: '1px solid #2c2e35', pointerEvents: 'none', zIndex: 10 }} />
      <div style={{ position: 'absolute', top: '40px', right: '40px', width: '16px', height: '16px', borderTop: '1px solid #2c2e35', borderRight: '1px solid #2c2e35', pointerEvents: 'none', zIndex: 10 }} />
      <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '16px', height: '16px', borderBottom: '1px solid #2c2e35', borderLeft: '1px solid #2c2e35', pointerEvents: 'none', zIndex: 10 }} />
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '16px', height: '16px', borderBottom: '1px solid #2c2e35', borderRight: '1px solid #2c2e35', pointerEvents: 'none', zIndex: 10 }} />

      {/* TOP CREATIVE NAVIGATION RAIL */}
      <div style={{ width: '100%', padding: '0 60px', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: '44px', left: 0, zIndex: 10 }}>
        <span style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '3px', color: '#eaeaea', fontWeight: '600' }}>
          FEATURED SHOWCASE
        </span>
        <span style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '1px', color: '#6c6f7d', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Swipe to explore <span className="pink-brand-pulse" />
        </span>
      </div>

      {/* BOTTOM BRAND ROW */}
      <div style={{ position: 'absolute', bottom: '40px', left: '80px', zIndex: 10, fontFamily: 'monospace', fontSize: '9px', color: '#6c6f7d', letterSpacing: '2px' }}>
        SELECTED MARKETING CAMPAIGNS // SERIES 01
      </div>

      {/* MASTER HORIZONTAL LINE TRACK */}
      <div 
        className="master-horizontal-line"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          overscrollBehaviorX: 'contain', 
          padding: '0 12vw', 
          boxSizing: 'border-box',
          gap: '180px', 
          cursor: 'default',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          zIndex: 2
        }}
      >
        {renderList.map((campaign, index) => {
          const currentAssets = assetGrid[index] || [];

          return (
            <div 
              key={campaign.id}
              onMouseMove={handleNodeMouseMove}
              onMouseLeave={handleNodeMouseLeave}
              className="filmstrip-project-node"
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                height: '65vh',
                width: '136vh', 
                flexShrink: 0,
                scrollSnapAlign: 'center',
                '--mouse-x': 0,
                '--mouse-y': 0
              }}
            >
              
              {/* ASSET 1: THE WIDESCREEN HERO SHOWPIECE */}
              <div 
                className="filmstrip-media-container asset-primary"
                style={{
                  width: '75vh', 
                  height: '50vh', 
                  overflow: 'hidden',
                  backgroundColor: '#1c1e22',
                  position: 'relative',
                  boxShadow: '0 40px 90px -20px rgba(0, 0, 0, 0.6)', 
                  border: '1px solid rgba(255, 255, 255, 0.02)',
                  zIndex: 3
                }}
              >
                {renderMedia(currentAssets[0], `${campaign.title} Main Look`)}
                
                <div style={{
                  position: 'absolute',
                  bottom: '32px',
                  left: '32px',
                  zIndex: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '2px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase' }}>
                    {campaign.category || 'Creative Direction'}
                  </span>
                  <h3 style={{ margin: 0, fontFamily: '"Playfair Display", "Didot", serif', fontWeight: '400', fontSize: '26px', letterSpacing: '0.5px', color: '#ffffff', textShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>
                    {campaign.title}
                  </h3>
                </div>
              </div>

              {/* ASSET 2: FLOATING TALL SPECIMEN */}
              <div 
                className="filmstrip-media-container asset-tall"
                style={{
                  width: '36vh',
                  height: '48vh', 
                  overflow: 'hidden',
                  backgroundColor: '#1c1e22',
                  boxShadow: '0 30px 70px -20px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.02)',
                  position: 'absolute',
                  left: '64vh', 
                  bottom: '2vh',
                  zIndex: 2
                }}
              >
                {renderMedia(currentAssets[1], `${campaign.title} Alternate View`)}
              </div>

              {/* ASSET 3: FLOATING SQUARE SPECIMEN */}
              <div 
                className="filmstrip-media-container asset-square"
                style={{
                  width: '30vh',
                  height: '30vh',
                  overflow: 'hidden',
                  backgroundColor: '#1c1e22',
                  boxShadow: '0 30px 70px -20px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.02)',
                  position: 'absolute',
                  left: '94vh', 
                  top: '2vh',
                  zIndex: 4
                }}
              >
                {renderMedia(currentAssets[2], `${campaign.title} Context`)}
              </div>

              {/* FIXED ALIGNMENT INDEX NUMBER END-CAP */}
              <div 
                style={{ 
                  position: 'absolute', 
                  right: 0, 
                  height: '100%', 
                  width: '6vh',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end',
                  zIndex: 5
                }}
              >
                <span 
                  className="filmstrip-index-tag"
                  style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    color: '#2c2e35', 
                    letterSpacing: '2px', 
                    whiteSpace: 'nowrap', 
                    fontWeight: '600',
                    transform: 'rotate(-90deg) translateX(0px)',
                    transformOrigin: 'center center',
                    transition: 'color 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  0{index + 1}
                </span>
              </div>

            </div>
          );
        })}
        
        <div style={{ flex: '0 0 auto', width: '15vw', height: '1px' }} />
      </div>

      <style>{`
        .master-horizontal-line::-webkit-scrollbar { display: none; }
        .master-horizontal-line { -ms-overflow-style: none; scrollbar-width: none; }
        .filmstrip-media-container { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease; }
        
        .filmstrip-project-node:hover .asset-primary {
          transform: translateX(calc(var(--mouse-x) * 16px)) translateY(calc(var(--mouse-y) * 16px - 4px)) scale(1.005);
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.75);
        }
        .filmstrip-project-node:hover .asset-tall {
          transform: translateX(calc(var(--mouse-x) * 48px + 12px)) translateY(calc(var(--mouse-y) * 38px + 6px));
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.65);
        }
        .filmstrip-project-node:hover .asset-square {
          transform: translateX(calc(var(--mouse-x) * 80px + 24px)) translateY(calc(var(--mouse-y) * 64px - 8px)) scale(1.01);
          box-shadow: 0 45px 90px -15px rgba(0, 0, 0, 0.7);
        }
        .filmstrip-project-node:hover .filmstrip-index-tag { color: #ff8bb2 !important; transform: rotate(-90deg) translateY(-4px); }
        .filmstrip-media-container img, .filmstrip-media-container video { transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .filmstrip-project-node:hover img, .filmstrip-project-node:hover video { transform: scale(1.04); }
        .pink-brand-pulse { width: 5px; height: 5px; background-color: #ff8bb2; border-radius: 50%; display: inline-block; box-shadow: 0 0 10px rgba(255, 139, 178, 0.6); animation: luxuryPulse 2.5s infinite ease-in-out; }
        @keyframes luxuryPulse { 0% { opacity: 0.3; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0.3; transform: scale(0.9); } }
        
        @media (max-width: 1024px) {
          #visual-lookbook { height: auto !important; padding: 120px 24px 80px 24px !important; }
          .master-horizontal-line { flex-direction: column !important; padding: 0 !important; gap: 100px !important; overflow-x: hidden !important; }
          .filmstrip-project-node { flex-direction: column !important; width: 100% !important; height: auto !important; gap: 24px !important; scroll-snap-align: none !important; }
          .filmstrip-media-container { position: relative !important; width: 100% !important; height: 340px !important; left: auto !important; top: auto !important; bottom: auto !important; transform: none !important; }
          .filmstrip-project-node:hover .filmstrip-media-container { transform: none !important; }
          .filmstrip-project-node > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
import React,{useEffect,useMemo,useState} from 'react';
import {getContent} from '../content/content';

const isVideo = (src,type) => type === 'video' || (type !== 'image' && (/\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(String(src||'').split('?')[0]) || String(src||'').includes('/video/upload/')));

function Media({item,variant='gallery'}) {
  const src = item.src || item.preview || item.url;
  const video = isVideo(src,item.type);
  return <div className={`case-media case-media-${variant}`}>
    {video
      ? <video src={src} poster={item.thumbnail || undefined} controls muted playsInline preload="metadata" />
      : <img src={src} alt={item.caption || item.title || 'Project creative'} loading="lazy" />}
    {video && <span className="case-film-label">PLAY FILM ↗</span>}
  </div>;
}

function ProjectPage({project,index,total,onClose,onNext,onPrevious}) {
  const [filter,setFilter] = useState('All');
  const media = project.assets || [];
  const tagList = [...new Set(media.flatMap(item => item.tags || []).filter(Boolean))];
  const shown = filter==='All' ? media : media.filter(item => (item.tags || []).includes(filter));
  const nextNumber = String(index+1).padStart(2,'0');

  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = event => {
      if(event.key==='Escape') onClose();
      if(event.key==='ArrowRight') onNext();
      if(event.key==='ArrowLeft') onPrevious();
    };
    window.addEventListener('keydown',onKey);
    return () => { document.body.style.overflow=old; window.removeEventListener('keydown',onKey); };
  },[onClose,onNext,onPrevious]);

  return <div className="case-page" role="dialog" aria-modal="true" aria-label={project.label + ' case study'}>
    <style>{`
      .case-page{position:fixed;z-index:1600;inset:0;overflow-y:auto;background:#f4f0ea;color:#241d20}
      .case-masthead{height:64px;position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,72px);background:rgba(244,240,234,.94);backdrop-filter:blur(14px);border-bottom:1px solid #d9d0c8}
      .case-masthead button{border:0;background:none;color:#554a46;font:9px var(--sans);letter-spacing:1.5px;text-transform:uppercase;cursor:pointer}
      .case-masthead-brand{font:italic 21px var(--serif);letter-spacing:-1px}.case-masthead-brand span{color:#ad637d}
      .case-page-inner{max-width:1500px;margin:auto;padding:0 clamp(18px,6vw,92px) 90px}
      .case-topline{display:flex;justify-content:space-between;gap:15px;padding:17px 0;border-bottom:1px solid #cfc4bb;font:9px var(--sans);letter-spacing:1.6px;text-transform:uppercase;color:#766b64}
      .case-intro{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:30px;align-items:end;padding:clamp(48px,8vw,105px) 0 35px}
      .case-eyebrow{font:9px var(--sans);letter-spacing:2px;text-transform:uppercase;color:#a45e77}
      .case-intro h1{font:600 clamp(42px,7vw,92px)/.98 var(--sans);letter-spacing:-.055em;margin:17px 0 22px;max-width:1000px;color:#30232d}
      .case-intro-deck{font:500 clamp(17px,1.8vw,22px)/1.5 var(--sans);color:#87536e;max-width:780px;margin:0}
      .case-facts{display:grid;gap:18px;padding-bottom:6px}
      .case-fact{border-top:1px solid #cfc4bb;padding-top:9px}
      .case-fact small{display:block;font:8px var(--sans);letter-spacing:1.7px;text-transform:uppercase;color:#a58f85;margin-bottom:5px}
      .case-fact strong{font:12px var(--sans);font-weight:600;color:#423733}
      .case-hero-image{position:relative;min-height:320px;height:clamp(340px,58vw,760px);background:#ded4cc;overflow:hidden}
      .case-hero-image img{width:100%;height:100%;object-fit:cover;display:block}
      .case-hero-folio{position:absolute;right:20px;bottom:18px;background:#f4f0ea;padding:10px 13px;font:9px var(--sans);letter-spacing:1.5px}
      .case-brief{display:grid;grid-template-columns:1fr 1.2fr;gap:50px;padding:clamp(55px,8vw,105px) 4%;border-bottom:1px solid #cfc4bb}
      .case-section-label{font:9px var(--sans);letter-spacing:2px;text-transform:uppercase;color:#a45e77}
      .case-brief h2,.case-process h2,.case-gallery-heading h2{font:600 clamp(30px,4.2vw,54px)/1.08 var(--sans);letter-spacing:-.045em;margin:13px 0;color:#30232d}
      .case-brief-copy{font:16px/1.8 var(--sans);color:#655a54;max-width:650px;margin:0}
      .case-brief-pull{font:italic clamp(21px,2.8vw,34px)/1.3 var(--serif);color:#a34f7a;margin:28px 0 0;max-width:680px}
      .case-process{padding:clamp(55px,8vw,100px) 4%;border-bottom:1px solid #cfc4bb}
      .case-process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:34px;border-top:1px solid #cfc4bb}
      .case-process-step{padding:17px 18px 10px 0;border-right:1px solid #cfc4bb;min-height:125px}
      .case-process-step:not(:first-child){padding-left:18px}
      .case-process-step:last-child{border:0}
      .case-process-step small{font:9px var(--sans);letter-spacing:1.5px;color:#a45e77}
      .case-process-step strong{display:block;font:600 17px var(--sans);margin-top:14px;color:#493440}
      .case-process-note{font:14px/1.8 var(--sans);color:#74675f;max-width:780px;margin:22px 0 0}
      .case-gallery{padding:clamp(55px,8vw,100px) 0 30px}
      .case-gallery-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:0 4% 26px}
      .case-gallery-heading h2{margin-bottom:0}
      .case-gallery-count{font:9px var(--sans);letter-spacing:1.5px;color:#8c7e75;white-space:nowrap}
      .case-filters{display:flex;gap:8px;flex-wrap:wrap;margin:0 4% 26px}
      .case-filters button{border:1px solid #cfc4bb;background:transparent;border-radius:30px;padding:9px 14px;color:#6f625a;font:9px var(--sans);letter-spacing:.7px;cursor:pointer}
      .case-filters button.active{background:#282022;border-color:#282022;color:#fff}
      .case-gallery-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:clamp(18px,2.4vw,34px);align-items:start}
      .case-gallery-item{min-width:0;align-self:start}
      .case-gallery-item.is-portrait{grid-column:span 4}
      .case-gallery-item.is-landscape{grid-column:span 8}
      .case-gallery-item.is-square{grid-column:span 6}
      .case-media{position:relative;display:grid;place-items:center;overflow:hidden;background:linear-gradient(145deg,#f7eaf0,#eee6f4);aspect-ratio:4/3;border:1px solid rgba(164,94,119,.12)}
      .case-gallery-item.is-portrait .case-media{aspect-ratio:3/4}
      .case-gallery-item.is-landscape .case-media{aspect-ratio:16/10}
      .case-gallery-item.is-square .case-media{aspect-ratio:1}
      .case-media img,.case-media video{display:block;width:100%;height:100%;object-fit:contain;background:#f7f2f4}
      .case-media video{object-fit:contain}
      .case-film-label{position:absolute;right:12px;top:12px;background:#fff8fc;color:#874765;border:1px solid #e6c8d8;border-radius:30px;padding:8px 12px;font:700 8px var(--sans);letter-spacing:1px}
      .case-caption{display:flex;justify-content:space-between;gap:14px;padding:12px 1px 0;border-top:1px solid #e2cbd8;margin-top:10px}
      .case-caption strong{font:600 14px/1.4 var(--sans);color:#382a34}
      .case-caption span{font:9px var(--sans);letter-spacing:.8px;text-transform:uppercase;color:#98788a;text-align:right}
      .case-empty{grid-column:1/-1;padding:70px 20px;text-align:center;font:italic 22px var(--serif);color:#87766e}
      .case-impact{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;background:linear-gradient(120deg,#f3dce8,#e9e0f4 58%,#f7e9d9);padding:clamp(35px,6vw,75px);margin-top:70px;border-radius:4px}
      .case-impact h2{font:600 clamp(30px,4vw,50px)/1.05 var(--sans);margin:12px 0;color:#30232d}
      .case-impact p{font:14px/1.8 var(--sans);color:#655a54;margin:0}
      .case-bottom-nav{display:flex;justify-content:space-between;align-items:center;gap:15px;border-top:1px solid #cfc4bb;margin-top:80px;padding-top:22px}
      .case-bottom-nav button{border:0;background:none;padding:10px 0;font:10px var(--sans);letter-spacing:1px;text-transform:uppercase;color:#6d5e57;cursor:pointer}
      @media(max-width:760px){
        .case-intro{grid-template-columns:1fr;gap:25px}
        .case-facts{grid-template-columns:repeat(2,1fr)}
        .case-brief{grid-template-columns:1fr;gap:20px}
        .case-process-grid{grid-template-columns:repeat(2,1fr)}
        .case-process-step:nth-child(2){border-right:0}
        .case-process-step:nth-child(3){padding-left:0}
        .case-gallery-item.is-portrait,.case-gallery-item.is-landscape,.case-gallery-item.is-square{grid-column:span 6}
        .case-impact{grid-template-columns:1fr}
      }
      @media(max-width:480px){
        .case-masthead{height:56px}
        .case-masthead button{font-size:8px}
        .case-facts{grid-template-columns:1fr 1fr}
        .case-process-grid{grid-template-columns:1fr 1fr}
        .case-gallery-item.is-portrait,.case-gallery-item.is-landscape,.case-gallery-item.is-square{grid-column:1/-1}
        .case-gallery-heading{align-items:start;flex-direction:column}
        .case-bottom-nav{align-items:flex-start;flex-direction:column}
      }
    `}</style>
    <header className="case-masthead"><button onClick={onClose}>← Back to index</button><div className="case-masthead-brand">diya<span>shr.</span></div><button onClick={onClose}>Close ×</button></header>
    <div className="case-page-inner">
      <div className="case-topline"><span>Portfolio / Selected work / Case study {nextNumber}</span><span>Independent creative practice · Dubai</span></div>
      <section className="case-intro">
        <div><div className="case-eyebrow">Case study / {nextNumber} — {project.client || 'Selected project'}</div><h1>{project.label}</h1><p className="case-intro-deck">{project.headline}</p></div>
        <div className="case-facts">
          <div className="case-fact"><small>Client / Brand</small><strong>{project.client || 'Independent project'}</strong></div>
          <div className="case-fact"><small>My role</small><strong>{project.role || 'Strategy & creative'}</strong></div>
          <div className="case-fact"><small>Discipline</small><strong>{(project.subcats || []).slice(0,2).join(' · ') || 'Brand storytelling'}</strong></div>
        </div>
      </section>
      <div className="case-hero-image">{project.cover && <img src={project.cover} alt={project.label + ' campaign cover'} /> }<span className="case-hero-folio">FIG. {nextNumber} / THE CAMPAIGN</span></div>
      <section className="case-brief">
        <div><div className="case-section-label">01 / The brief</div><h2>The thinking<br/><i>behind the feeling.</i></h2></div>
        <div><p className="case-brief-copy">{project.summary || 'A brand story shaped through strategy, visual direction and content.'}</p>{project.objective && <p className="case-brief-copy" style={{marginTop:18}}>{project.objective}</p>}<p className="case-brief-pull">“{project.pullQuote || project.headline}”</p></div>
      </section>
      <section className="case-process">
        <div className="case-section-label">02 / The creative direction</div><h2>From first thought<br/>to final frame.</h2>
        <div className="case-process-grid">
          {[
            ['01','Strategy'],['02','Storyboarding'],['03','Production'],['04','Distribution']
          ].map(([n,label])=><div className="case-process-step" key={n}><small>{n} / PROCESS</small><strong>{label}</strong></div>)}
        </div>
        <p className="case-process-note">{project.storyboard || project.process || 'Every execution begins with a clear audience insight and a visual idea. The story is mapped, shaped for its platform, then carried through production and rollout.'}</p>
      </section>
      <section className="case-gallery">
        <div className="case-gallery-heading"><div><div className="case-section-label">03 / The visual archive</div><h2>Inside the <i>campaign.</i></h2></div><span className="case-gallery-count">{String(shown.length).padStart(2,'0')} CREATIVE FILES</span></div>
        {tagList.length>0 && <div className="case-filters"><button className={filter==='All'?'active':''} onClick={()=>setFilter('All')}>All frames</button>{tagList.map(tag=><button key={tag} className={filter===tag?'active':''} onClick={()=>setFilter(tag)}>{tag}</button>)}</div>}
        <div className="case-gallery-grid">{shown.length ? shown.map((item,i)=><article key={item.id || i} className={`case-gallery-item ${item.orientation==='portrait'?'is-portrait':item.orientation==='square'?'is-square':'is-landscape'}`}><Media item={item}/><div className="case-caption"><strong>{item.caption || item.title || 'Campaign frame'}</strong><span>{(item.tags || []).slice(0,2).join(' / ') || item.orientation || 'Creative asset'}</span></div>{item.href && <a href={item.href} target="_blank" rel="noreferrer" style={{display:'inline-block',marginTop:8,font:'9px var(--sans)',letterSpacing:1,textTransform:'uppercase',color:'#a45e77',textDecoration:'none'}}>View published work ↗</a>}</article>) : <div className="case-empty">More frames from this story are coming soon.</div>}</div>
      </section>
      {project.result && <section className="case-impact"><div><div className="case-section-label">04 / The outcome</div><h2>What the work<br/><i>set in motion.</i></h2></div><p>{project.result}</p></section>}
      <nav className="case-bottom-nav"><button onClick={onPrevious}>← Previous project</button><span className="case-gallery-count">{nextNumber} / {String(total).padStart(2,'0')}</span><button onClick={onNext}>Next project →</button></nav>
    </div>
  </div>;
}

function ProjectCard({project,index,onOpen}) {
  const count = project.assets.length;
  return <button className={`work-editorial-card work-editorial-card-${index%4}`} onClick={onOpen} aria-label={`Open ${project.label} case study`}>
    <div className="work-card-image">
      {project.cover ? <img src={project.cover} alt={project.label + ' project'} loading="lazy"/> : <div className="work-card-placeholder">D.S.</div>}
      <span className="work-card-number">PROJECT / {String(index+1).padStart(2,'0')}</span><span className="work-card-open">View story ↗</span>
    </div>
    <div className="work-card-caption"><div><small>{project.client || 'Selected project'} · {project.subcats?.[0] || 'Creative direction'}</small><h3>{project.label}</h3><p>{project.headline}</p></div><span className="work-card-count">{String(count).padStart(2,'0')}<small>FILES</small></span></div>
  </button>;
}

export default function Work() {
  const [filter,setFilter] = useState('All');
  const [active,setActive] = useState(null);
  const projects = useMemo(() => (getContent('work').industries || []).map((project,i) => {
    const raw = project.media && project.media.length ? project.media : project.videos || [];
    const assets = raw.map((item,j) => ({...item,id:item.id || project.id+'-'+j,src:item.src || item.preview || item.url,type:item.type || 'auto',thumbnail:item.thumbnail || ''}));
    return {...project,index:i,assets};
  }),[]);
  const categories = ['All',...new Set(projects.flatMap(project => project.subcats || []).filter(Boolean))];
  const visible = filter==='All' ? projects : projects.filter(project => (project.subcats || []).includes(filter));
  const openProject = project => {setActive(project);setFilter('All')};
  const activeIndex = active ? projects.findIndex(project => project.id===active.id) : -1;
  const goTo = direction => {
    if(!projects.length) return;
    const next=(activeIndex+direction+projects.length)%projects.length;
    setActive(projects[next]);
  };

  return <section id="work" className="work-editorial">
    <style>{`
      .work-editorial{background:#f8f5f0;color:#241d20;padding:clamp(78px,10vw,145px) clamp(20px,6.5vw,100px) clamp(90px,11vw,150px);border-top:1px solid #dfd5ce}
      .work-editorial-inner{max-width:1440px;margin:auto}
      .work-index-top{display:flex;justify-content:space-between;gap:20px;padding-bottom:15px;border-bottom:1px solid #cfc4bb;font:9px var(--sans);letter-spacing:1.8px;text-transform:uppercase;color:#82756e}
      .work-editorial-heading{display:grid;grid-template-columns:1fr 250px;gap:30px;align-items:end;padding:45px 0 35px}
      .work-editorial-kicker{font:9px var(--sans);letter-spacing:2.2px;text-transform:uppercase;color:#a45e77}
      .work-editorial-heading h2{font:400 clamp(62px,11vw,152px)/.8 var(--serif);letter-spacing:-.07em;margin:18px 0 0}
      .work-editorial-heading h2 em{color:#a45e77;font-weight:400}
      .work-editorial-heading p{font:italic 17px/1.55 var(--serif);color:#786a63;margin:0 0 6px}
      .work-editorial-filters{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:19px 0 30px;border-top:1px solid #d9d0c8}
      .work-editorial-filters span{font:8px var(--sans);letter-spacing:1.5px;text-transform:uppercase;color:#9a8b81;margin-right:8px}
      .work-editorial-filters button{border:0;background:transparent;padding:7px 9px;color:#83746d;font:9px var(--sans);letter-spacing:.5px;cursor:pointer}
      .work-editorial-filters button.active{color:#a45e77;border-bottom:1px solid #a45e77}
      .work-editorial-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(14px,2.4vw,34px);row-gap:clamp(45px,7vw,100px);align-items:start}
      .work-editorial-card{display:block;grid-column:span 6;text-align:left;border:0;padding:0;background:transparent;color:inherit;cursor:pointer;min-width:0}
      .work-editorial-card:nth-child(4n+1){grid-column:span 7}
      .work-editorial-card:nth-child(4n+2){grid-column:span 5;margin-top:clamp(55px,9vw,130px)}
      .work-editorial-card:nth-child(4n+3){grid-column:span 5;margin-left:12%;margin-top:-10px}
      .work-editorial-card:nth-child(4n+4){grid-column:span 6;margin-left:8%;margin-top:clamp(35px,6vw,85px)}
      .work-card-image{height:clamp(260px,40vw,570px);position:relative;overflow:hidden;background:#e7ddd5}
      .work-editorial-card:nth-child(4n+2) .work-card-image,.work-editorial-card:nth-child(4n+3) .work-card-image{height:clamp(260px,34vw,470px)}
      .work-card-image img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1);filter:saturate(.82)}
      .work-editorial-card:hover .work-card-image img{transform:scale(1.045)}
      .work-card-placeholder{height:100%;display:grid;place-items:center;background:#e9dfe0;color:#ad7486;font:italic 90px var(--serif)}
      .work-card-number{position:absolute;top:15px;left:16px;color:white;text-shadow:0 1px 8px #0008;font:8px var(--sans);letter-spacing:1.7px}
      .work-card-open{position:absolute;right:15px;bottom:15px;background:#f8f5f0;color:#312629;padding:10px 13px;font:8px var(--sans);letter-spacing:1px;text-transform:uppercase;transform:translateY(5px);opacity:0;transition:.3s}
      .work-editorial-card:hover .work-card-open,.work-editorial-card:focus-visible .work-card-open{opacity:1;transform:translateY(0)}
      .work-card-caption{display:flex;justify-content:space-between;gap:18px;padding:14px 0 0;border-top:1px solid #cfc4bb;margin-top:11px}
      .work-card-caption small{font:8px var(--sans);letter-spacing:1.4px;text-transform:uppercase;color:#967e74}
      .work-card-caption h3{font:400 clamp(24px,3vw,38px)/1.05 var(--serif);letter-spacing:-.03em;margin:8px 0 5px}
      .work-card-caption p{font:italic 14px/1.45 var(--serif);color:#8b7770;margin:0}
      .work-card-count{font:10px var(--sans);color:#a45e77;text-align:right;white-space:nowrap;padding-top:5px}
      .work-card-count small{display:block;margin-top:4px;font-size:7px;letter-spacing:1px}
      .work-no-projects{grid-column:1/-1;padding:60px;text-align:center;color:#86766e;font:italic 20px var(--serif)}
      @media(max-width:760px){
        .work-editorial-heading{grid-template-columns:1fr;gap:15px}
        .work-editorial-heading p{max-width:330px}
        .work-editorial-card,.work-editorial-card:nth-child(4n+1),.work-editorial-card:nth-child(4n+2),.work-editorial-card:nth-child(4n+3),.work-editorial-card:nth-child(4n+4){grid-column:span 6;margin:0}
        .work-editorial-card:nth-child(odd){grid-column:1/8}
        .work-editorial-card:nth-child(even){grid-column:6/13;margin-top:55px}
        .work-card-image,.work-editorial-card:nth-child(4n+2) .work-card-image,.work-editorial-card:nth-child(4n+3) .work-card-image{height:clamp(220px,55vw,390px)}
      }
      @media(max-width:480px){
        .work-editorial-card,.work-editorial-card:nth-child(odd),.work-editorial-card:nth-child(even){grid-column:1/-1;margin:0}
        .work-editorial-card:nth-child(even){width:88%;margin-left:auto}
        .work-card-image,.work-editorial-card:nth-child(4n+2) .work-card-image,.work-editorial-card:nth-child(4n+3) .work-card-image{height:340px}
      }
    `}</style>
    <div className="work-editorial-inner">
      <div className="work-index-top"><span>Index / The work</span><span>Creative direction · Strategy · Campaigns</span></div>
      <div className="work-editorial-heading"><div><div className="work-editorial-kicker">An archive of ideas, made visible</div><h2>Selected <em>work.</em></h2></div><p>Brand worlds, campaign stories and content systems — considered from the first thought to the final frame.</p></div>
      <div className="work-editorial-filters"><span>Explore by discipline</span>{categories.map(category=><button key={category} className={filter===category?'active':''} onClick={()=>setFilter(category)}>{category==='All'?'All projects':category}</button>)}</div>
      <div className="work-editorial-grid">{visible.length ? visible.map(project=><ProjectCard key={project.id} project={project} index={projects.indexOf(project)} onOpen={()=>openProject(project)}/>) : <div className="work-no-projects">No projects in this category yet.</div>}</div>
    </div>
    {active && <ProjectPage project={active} index={activeIndex} total={projects.length} onClose={()=>setActive(null)} onNext={()=>goTo(1)} onPrevious={()=>goTo(-1)}/>}
  </section>;
}

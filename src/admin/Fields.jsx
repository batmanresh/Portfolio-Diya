import React,{useEffect,useState} from 'react';
import {supabase} from '../supabaseClient';

async function uploadFile(file){
 const safe=file.name.toLowerCase().replace(/[^a-z0-9.]+/g,'-');
 const path=`portfolio/${Date.now()}-${safe}`;
 const {error}=await supabase.storage.from('media').upload(path,file,{cacheControl:'3600',upsert:false});
 if(error)throw error;
 return supabase.storage.from('media').getPublicUrl(path).data.publicUrl;
}
export function Field({field,value,onChange}){
 let input;
 switch(field.type){
  case 'textarea': input=<textarea rows={4} value={value||''} onChange={e=>onChange(e.target.value)} placeholder={field.placeholder||''}/>;break;
  case 'lines': input=<LinesInput value={value||[]} onChange={onChange}/>;break;
  case 'color': input=<div className="row"><input type="color" value={value||'#e77ca9'} onChange={e=>onChange(e.target.value)}/><input type="text" value={value||''} onChange={e=>onChange(e.target.value)}/></div>;break;
  case 'select': input=<select value={value||field.options[0]} onChange={e=>onChange(e.target.value)}>{field.options.map(o=><option key={o} value={o}>{o==='auto'?'Auto detect':o[0].toUpperCase()+o.slice(1)}</option>)}</select>;break;
  case 'image':case 'video':case 'media':case 'file':input=<MediaInput field={field} value={value||''} onChange={onChange}/>;break;
  case 'list':input=<ListInput field={field} value={value||[]} onChange={onChange}/>;break;
  default:input=<input type="text" value={value||''} onChange={e=>onChange(e.target.value)} placeholder={field.placeholder||''}/>;
 }
 return <div className={`field field-${field.type}`}><label>{field.label}</label>{input}{field.help&&<small className="field-help">{field.help}</small>}</div>;
}
function LinesInput({value,onChange}){
 const valueText=value.join('\n');
 const [text,setText]=useState(valueText);
 useEffect(()=>setText(valueText),[valueText]);
 return <textarea rows={Math.max(3,Math.min(8,value.length+1))} value={text} placeholder="Add one item per line" onChange={e=>{setText(e.target.value);onChange(e.target.value.split('\n').map(s=>s.trim()).filter(Boolean))}}/>;
}
function MediaInput({field,value,onChange}){
 const [uploading,setUploading]=useState(false),[error,setError]=useState('');
 const accept=field.accept||(field.type==='image'?'image/*':field.type==='video'?'video/*':field.type==='media'?'image/*,video/*':'*');
 const isVideo=field.type==='video'||(field.type==='media'&&/\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(value.split('?')[0]));
 const choose=async e=>{const file=e.target.files?.[0];if(!file)return;setUploading(true);setError('');try{onChange(await uploadFile(file))}catch(err){setError(err.message||'Upload failed. Please try again.')}finally{setUploading(false);e.target.value=''}};
 return <div className="media-uploader">
  {value&&<div className="media-preview">{isVideo?<video src={value} muted playsInline controls/>:<img src={value} alt="Uploaded preview"/>}</div>}
  <div className="media-controls"><input type="url" value={value} placeholder="Paste a media URL or upload a file" onChange={e=>onChange(e.target.value)}/><label className="upload-button">{uploading?'Uploading…':'＋ Upload file'}<input type="file" accept={accept} onChange={choose} hidden disabled={uploading}/></label>{value&&<button type="button" className="clear-button" onClick={()=>onChange('')}>Remove</button>}</div>
  <small className="field-help">{field.type==='media'?'Images and videos supported. Add a custom thumbnail in the next field if needed.':'Paste a URL or upload a file.'}</small>
  {error&&<p className="error">{error}</p>}
 </div>;
}
function ListInput({field,value,onChange}){
 const [openIndex,setOpenIndex]=useState(value.length?0:null);
 useEffect(()=>{if(openIndex!==null&&openIndex>=value.length)setOpenIndex(value.length?value.length-1:null)},[value.length,openIndex]);
 const update=(i,item)=>onChange(value.map((v,j)=>j===i?item:v));
 const remove=i=>{if(!window.confirm(`Remove this ${field.itemName}?`))return;onChange(value.filter((_,j)=>j!==i));setOpenIndex(null)};
 const move=(i,dir)=>{const next=[...value];[next[i],next[i+dir]]=[next[i+dir],next[i]];onChange(next);setOpenIndex(i+dir)};
 const add=()=>{onChange([...value,{}]);setOpenIndex(value.length)};
 return <div className="studio-list">{value.map((item,i)=>{const open=openIndex===i;const title=(field.titleKey&&item[field.titleKey])||`${field.itemName} ${i+1}`;const thumb=field.fields.find(f=>f.type==='image');return <article key={item.id||i} className={`studio-item ${open?'is-open':''}`}><div className="studio-item-head"><button type="button" className="studio-item-toggle" onClick={()=>setOpenIndex(open?null:i)}>{thumb&&item[thumb.key]?<img src={item[thumb.key]} alt=""/>:<span className="studio-item-number">{String(i+1).padStart(2,'0')}</span>}<span><strong>{title}</strong><small>{field.itemName} · {open?'Editing':'Click to edit'}</small></span><b>{open?'−':'＋'}</b></button><div className="studio-item-actions"><button type="button" title="Move up" disabled={i===0} onClick={()=>move(i,-1)}>↑</button><button type="button" title="Move down" disabled={i===value.length-1} onClick={()=>move(i,1)}>↓</button><button type="button" title="Remove" className="remove" onClick={()=>remove(i)}>×</button></div></div>{open&&<div className="studio-item-body">{field.fields.map(sub=><Field key={sub.key} field={sub} value={item[sub.key]} onChange={v=>update(i,{...item,[sub.key]:v})}/>)}</div>}</article>})}<button type="button" className="add-item" onClick={add}>＋ Add {field.itemName}</button></div>;
}

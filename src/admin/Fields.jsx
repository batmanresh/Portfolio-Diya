import React,{useEffect,useState} from 'react';
import {supabase} from '../supabaseClient';

async function uploadFile(file){
 const safe=file.name.toLowerCase().replace(/[^a-z0-9.]+/g,'-');
 const path=`portfolio/${Date.now()}-${safe}`;
 const {error}=await supabase.storage.from('media').upload(path,file,{cacheControl:'3600',upsert:false});
 if(error)throw error;
 return supabase.storage.from('media').getPublicUrl(path).data.publicUrl;
}
export function Field({field,value,onChange,projectCategoryOptions=[],assetCategoryOptions=[]}){
 let input;
 switch(field.type){
  case 'textarea': input=<textarea rows={4} value={value||''} onChange={e=>onChange(e.target.value)} placeholder={field.placeholder||''}/>;break;
  case 'lines': input=<LinesInput value={value||[]} onChange={onChange}/>;break;
  case 'color': input=<div className="row"><input type="color" value={value||'#e77ca9'} onChange={e=>onChange(e.target.value)}/><input type="text" value={value||''} onChange={e=>onChange(e.target.value)}/></div>;break;
  case 'select': input=<select value={value||field.options[0]} onChange={e=>onChange(e.target.value)}>{field.options.map(o=><option key={o} value={o}>{o==='auto'?'Auto detect':o[0].toUpperCase()+o.slice(1)}</option>)}</select>;break;
  case 'multi-select':case 'project-multi-select':case 'asset-multi-select': {const options=field.type==='project-multi-select'?projectCategoryOptions:field.type==='asset-multi-select'?assetCategoryOptions:field.options||[];const aliases={'Ad Campaigns':'Campaign Creative','Campaign Marketing':'Campaign Creative','Content':'Social Content','Content Marketing':'Social Content','Brand Strategy':'Brand Storytelling','Experiential Marketing':'Event & Experiential','Entertainment Marketing':'Event & Experiential','Engagement Strategy':'Community & Engagement','Promotional Marketing':'Promotional Content','Lead Generation':'Performance & Lead Generation','Influencer Marketing':'Influencer Content'};const selected=[...new Set((Array.isArray(value)?value:[]).map(item=>field.type==='asset-multi-select'?(aliases[item]||item):item).filter(item=>options.includes(item)))];input=<div className="multi-select-options">{options.map(option=><label key={option} className={selected.includes(option)?'multi-select-option selected':'multi-select-option'}><input type="checkbox" checked={selected.includes(option)} onChange={e=>onChange(e.target.checked?[...selected,option]:selected.filter(item=>item!==option))}/><span>{option}</span></label>)}</div>;break;}
  case 'category-list': input=<CategoryList value={value||[]} onChange={onChange} categoryKind={field.key==='projectCategories'?'project':'asset'}/>;break;
  case 'image':case 'video':case 'media':case 'file':input=<MediaInput field={field} value={value||''} onChange={onChange}/>;break;
  case 'list':input=<ListInput field={field} value={value||[]} onChange={onChange} projectCategoryOptions={projectCategoryOptions} assetCategoryOptions={assetCategoryOptions}/>;break;
  default:input=<input type="text" value={value||''} onChange={e=>onChange(e.target.value)} placeholder={field.placeholder||''}/>;
 }
 return <div className={`field field-${field.type}`}><label>{field.label}</label>{input}{field.help&&<small className="field-help">{field.help}</small>}</div>;
}

function CategoryList({value,onChange,categoryKind}){
 const [draft,setDraft]=useState('');
 const [editing,setEditing]=useState(-1);
 const [editValue,setEditValue]=useState('');
 const add=()=>{const name=draft.trim();if(!name||value.some(x=>x.toLowerCase()===name.toLowerCase()))return;onChange([...value,name]);setDraft('')};
 const rename=(index)=>{const name=editValue.trim();if(!name||value.some((x,i)=>i!==index&&x.toLowerCase()===name.toLowerCase()))return;onChange(value.map((x,i)=>i===index?name:x),{type:categoryKind,oldName:value[index],newName:name});setEditing(-1);setEditValue('')};
 const remove=index=>{if(!window.confirm('Delete this category? Existing projects and assets will stop using it as a filter.'))return;onChange(value.filter((_,i)=>i!==index),{type:categoryKind,oldName:value[index]})};
 return <div className="category-manager">
  <div className="category-manager-add"><input value={draft} placeholder="Type a new category name" onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();add()}}}/><button type="button" onClick={add} disabled={!draft.trim()}>＋ Add</button></div>
  <div className="category-manager-list">{value.map((name,index)=><div className="category-manager-row" key={name+'-'+index}>{editing===index?<><input autoFocus value={editValue} onChange={e=>setEditValue(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')rename(index);if(e.key==='Escape')setEditing(-1)}}/><button type="button" onClick={()=>rename(index)}>Save</button><button type="button" className="category-delete" onClick={()=>setEditing(-1)}>Cancel</button></>:<><span>{name}</span><button type="button" onClick={()=>{setEditing(index);setEditValue(name)}}>Edit</button><button type="button" className="category-delete" onClick={()=>remove(index)}>Delete</button></>}</div>)}</div>
  {!value.length&&<small className="field-help">No categories yet. Add your first category above.</small>}
 </div>;
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
function ListInput({field,value,onChange,projectCategoryOptions,assetCategoryOptions}){
 const [openIndex,setOpenIndex]=useState(value.length?0:null);
 useEffect(()=>{if(openIndex!==null&&openIndex>=value.length)setOpenIndex(value.length?value.length-1:null)},[value.length,openIndex]);
 const update=(i,item)=>onChange(value.map((v,j)=>j===i?item:v));
 const remove=i=>{if(!window.confirm(`Remove this ${field.itemName}?`))return;onChange(value.filter((_,j)=>j!==i));setOpenIndex(null)};
 const move=(i,dir)=>{const next=[...value];[next[i],next[i+dir]]=[next[i+dir],next[i]];onChange(next);setOpenIndex(i+dir)};
 const add=()=>{onChange([...value,{}]);setOpenIndex(value.length)};
 return <div className="studio-list">{value.map((item,i)=>{const open=openIndex===i;const title=(field.titleKey&&item[field.titleKey])||`${field.itemName} ${i+1}`;const thumb=field.fields.find(f=>f.type==='image');return <article key={item.id||i} className={`studio-item ${open?'is-open':''}`}><div className="studio-item-head"><button type="button" className="studio-item-toggle" onClick={()=>setOpenIndex(open?null:i)}>{thumb&&item[thumb.key]?<img src={item[thumb.key]} alt=""/>:<span className="studio-item-number">{String(i+1).padStart(2,'0')}</span>}<span><strong>{title}</strong><small>{field.itemName} · {open?'Editing':'Click to edit'}</small></span><b>{open?'−':'＋'}</b></button><div className="studio-item-actions"><button type="button" title="Move up" disabled={i===0} onClick={()=>move(i,-1)}>↑</button><button type="button" title="Move down" disabled={i===value.length-1} onClick={()=>move(i,1)}>↓</button><button type="button" title="Remove" className="remove" onClick={()=>remove(i)}>×</button></div></div>{open&&<div className="studio-item-body">{field.fields.map(sub=><Field key={sub.key} field={sub} value={item[sub.key]} onChange={v=>update(i,{...item,[sub.key]:v})} projectCategoryOptions={projectCategoryOptions} assetCategoryOptions={assetCategoryOptions}/>)}</div>}</article>})}<button type="button" className="add-item" onClick={add}>＋ Add {field.itemName}</button></div>;
}

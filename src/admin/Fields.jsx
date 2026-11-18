import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

// Uploads a file to the Supabase "media" bucket and returns its public URL.
async function uploadFile(file) {
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-');
  const path = `${Date.now()}-${safeName}`;
  const { error } = await supabase.storage.from('media').upload(path, file);
  if (error) throw error;
  return supabase.storage.from('media').getPublicUrl(path).data.publicUrl;
}

// Renders one field based on its type (see sections.js).
export function Field({ field, value, onChange }) {
  const input = (() => {
    switch (field.type) {
      case 'textarea':
        return <textarea rows={4} value={value || ''} onChange={e => onChange(e.target.value)} />;
      case 'lines':
        return <LinesInput value={value || []} onChange={onChange} />;
      case 'color':
        return (
          <div className="row">
            <input type="color" value={value || '#F472B6'} onChange={e => onChange(e.target.value)} />
            <input type="text" value={value || ''} onChange={e => onChange(e.target.value)} style={{ maxWidth: 120 }} />
          </div>
        );
      case 'select':
        return (
          <select value={value || field.options[0]} onChange={e => onChange(e.target.value)}>
            {field.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        );
      case 'image':
      case 'video':
      case 'media':
      case 'file':
        return <MediaInput field={field} value={value || ''} onChange={onChange} />;
      case 'list':
        return <ListInput field={field} value={value || []} onChange={onChange} />;
      default:
        return <input type="text" value={value || ''} onChange={e => onChange(e.target.value)} />;
    }
  })();

  return (
    <div className={`field field-${field.type}`}>
      <label>{field.label}</label>
      {input}
    </div>
  );
}

// A list of short items edited as one-per-line text.
function LinesInput({ value, onChange }) {
  const [text, setText] = useState(value.join('\n'));
  return (
    <textarea
      rows={Math.max(3, value.length + 1)}
      value={text}
      onChange={e => {
        setText(e.target.value);
        onChange(e.target.value.split('\n').map(s => s.trim()).filter(Boolean));
      }}
    />
  );
}

// URL box + upload button + preview.
function MediaInput({ field, value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [previewKind, setPreviewKind] = useState('');
  const accept = field.accept || (field.type === 'image' ? 'image/*' : field.type === 'video' ? 'video/*' : field.type === 'media' ? 'image/*,video/*' : '*');

  const handleFile = async e => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      onChange(await uploadFile(file));
      setPreviewKind(file.type.startsWith('video/') ? 'video' : 'image');
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
    }
    setUploading(false);
    e.target.value = '';
  };

  return (
    <div className="media">
      {value && (field.type === 'image' || (field.type === 'media' && (previewKind === 'image' || (!previewKind && /\.(png|jpe?g|gif|webp|avif)(\?|$)/i.test(value))))) && <img src={value} alt="" className="preview" />}
      {value && (field.type === 'video' || (field.type === 'media' && (previewKind === 'video' || (!previewKind && /\.(mp4|webm|mov)(\?|$)/i.test(value))))) && <video src={value} className="preview" muted loop autoPlay playsInline />}
      <div className="media-controls">
        <input type="text" value={value} placeholder="Paste a link, or upload →" onChange={e => onChange(e.target.value)} />
        <label className="btn btn-small">
          {uploading ? 'Uploading…' : 'Upload'}
          <input type="file" accept={accept} onChange={handleFile} hidden disabled={uploading} />
        </label>
        {value && field.type === 'file' && <a href={value} target="_blank" rel="noreferrer" className="btn btn-small btn-ghost">Open</a>}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

// Repeatable group of fields: add, remove, move up/down.
function ListInput({ field, value, onChange }) {
  const [openIndex, setOpenIndex] = useState(null);

  const update = (i, item) => onChange(value.map((v, j) => (j === i ? item : v)));
  const remove = i => {
    if (!window.confirm(`Remove this ${field.itemName}?`)) return;
    onChange(value.filter((_, j) => j !== i));
    setOpenIndex(null);
  };
  const move = (i, dir) => {
    const next = [...value];
    [next[i], next[i + dir]] = [next[i + dir], next[i]];
    onChange(next);
    if (openIndex === i) setOpenIndex(i + dir);
  };
  const add = () => {
    onChange([...value, {}]);
    setOpenIndex(value.length);
  };

  return (
    <div className="list">
      {value.map((item, i) => {
        const open = openIndex === i;
        const title = (field.titleKey && item[field.titleKey]) || `${capitalize(field.itemName)} ${i + 1}`;
        const thumb = field.fields.find(f => f.type === 'image');
        return (
          <div key={i} className={`list-item ${open ? 'open' : ''}`}>
            <div className="list-head" onClick={() => setOpenIndex(open ? null : i)}>
              {thumb && item[thumb.key] && <img src={item[thumb.key]} alt="" className="thumb" />}
              <span className="list-title">{title}</span>
              <span className="list-actions" onClick={e => e.stopPropagation()}>
                <button type="button" title="Move up" disabled={i === 0} onClick={() => move(i, -1)}>↑</button>
                <button type="button" title="Move down" disabled={i === value.length - 1} onClick={() => move(i, 1)}>↓</button>
                <button type="button" title="Remove" className="danger" onClick={() => remove(i)}>✕</button>
              </span>
              <span className="chevron">{open ? '−' : '+'}</span>
            </div>
            {open && (
              <div className="list-body">
                {field.fields.map(sub => (
                  <Field key={sub.key} field={sub} value={item[sub.key]} onChange={v => update(i, { ...item, [sub.key]: v })} />
                ))}
              </div>
            )}
          </div>
        );
      })}
      <button type="button" className="btn btn-ghost add" onClick={add}>+ Add {field.itemName}</button>
    </div>
  );
}

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

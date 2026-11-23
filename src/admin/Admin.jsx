import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import defaults from '../content/defaults';
import sections from './sections';
import { Field } from './Fields';
import './admin.css';

export default function Admin() {
  const [session, setSession] = useState(undefined); // undefined = still checking

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  if (session === undefined) return null;
  return <div className="admin">{session ? <Dashboard user={session.user} /> : <Login />}</div>;
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setBusy(false);
  };

  return (
    <div className="login">
      <form onSubmit={submit} className="card">
        <div className="logo">diya<span>shr.</span> <small>admin</small></div>
        <div className="field">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoFocus />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button className="btn" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      </form>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ user }) {
  const [active, setActive] = useState(sections[0].key);
  const [content, setContent] = useState(null);   // what's being edited
  const [unsaved, setUnsaved] = useState({});      // { hero: true, ... }
  const [status, setStatus] = useState(null);      // { type: 'ok' | 'error', text }
  const [saving, setSaving] = useState(false);

  // Load saved content; anything not saved yet starts from the defaults.
  useEffect(() => {
    const load = async () => {
      let rows = [];
      try {
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('database not reachable')), 8000));
        const { data, error } = await Promise.race([supabase.from('site_content').select('section, data'), timeout]);
        if (error) throw error;
        rows = data || [];
      } catch (err) {
        setStatus({ type: 'error', text: `Couldn't load saved content (${err.message}). Showing defaults — has supabase/setup.sql been run?` });
      }
      const saved = Object.fromEntries(rows.map(r => [r.section, r.data]));
      setContent(Object.fromEntries(sections.map(s => [s.key, { ...defaults[s.key], ...saved[s.key] }])));
    };
    load();
  }, []);

  // Warn before closing the tab with unsaved edits.
  const hasUnsaved = Object.values(unsaved).some(Boolean);
  useEffect(() => {
    if (!hasUnsaved) return;
    const warn = e => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [hasUnsaved]);

  if (!content) return <p className="loading">Loading…</p>;

  const section = sections.find(s => s.key === active);

  const setField = (key, value, categoryChange) => {
    setContent(current => {
      const next = { ...current, [active]: { ...current[active], [key]: value } };
      // Keep existing assignments connected when a category is renamed or deleted.
      if (active === 'categories' && categoryChange && current.work?.industries) {
        const { type, oldName, newName } = categoryChange;
        const updateList = list => (list || []).flatMap(item => {
          if (item !== oldName) return [item];
          return type === 'rename' && newName ? [newName] : [];
        });
        next.work = {
          ...current.work,
          industries: current.work.industries.map(project => {
            if (type === 'project') return { ...project, subcats: updateList(project.subcats) };
            if (type === 'asset') {
              const updateAssets = assets => (assets || []).map(asset => ({ ...asset, tags: updateList(asset.tags) }));
              return { ...project, videos: updateAssets(project.videos), media: updateAssets(project.media) };
            }
            return project;
          })
        };
      }
      return next;
    });
    setUnsaved(u => ({ ...u, [active]: true, ...(categoryChange ? { work: true } : {}) }));
    setStatus(null);
  };

  const save = async () => {
    setSaving(true);
    const sectionsToSave = [...new Set([active, ...Object.keys(unsaved).filter(key => unsaved[key])])];
    const results = await Promise.all(sectionsToSave.map(sectionKey =>
      supabase.from('site_content')
        .upsert({ section: sectionKey, data: content[sectionKey], updated_at: new Date().toISOString() })
        .select()
    ));
    setSaving(false);
    const failedIndex = results.findIndex(({ error, data }) => error || !data?.length);
    if (failedIndex !== -1) {
      const sectionKey = sectionsToSave[failedIndex];
      const { error } = results[failedIndex];
      const reason = error ? error.message : 'this account is not allowed to edit. Check the admin email in supabase/setup.sql.';
      setStatus({ type: 'error', text: `Not saved (${sectionKey}): ${reason}` });
    } else {
      setUnsaved(current => {
        const next = { ...current };
        sectionsToSave.forEach(sectionKey => { next[sectionKey] = false; });
        return next;
      });
      setStatus({ type: 'ok', text: 'All changes saved! Refresh the site to see them.' });
    }
  };

  return (
    <>
      <header className="topbar">
        <div className="logo">diya<span>shr.</span> <small>admin</small></div>
        <div className="topbar-right">
          <span className="user">{user.email}</span>
          <a href="/" target="_blank" rel="noreferrer" className="btn btn-small btn-ghost">View site ↗</a>
          <button className="btn btn-small btn-ghost" onClick={() => supabase.auth.signOut()}>Log out</button>
        </div>
      </header>

      <div className="layout">
        <nav className="sidebar">
          {sections.map(s => (
            <button key={s.key} className={s.key === active ? 'active' : ''} onClick={() => { setActive(s.key); setStatus(null); }}>
              {s.title}
              {unsaved[s.key] && <span className="dot" title="Unsaved changes" />}
            </button>
          ))}
        </nav>

        <main className="editor">
          <h1>{section.title}</h1>
          <p className="muted">{section.description}</p>

          <div key={active} className="fields">
            {section.fields.map(f => (
              <Field key={f.key} field={f} value={content[active][f.key]} onChange={(v, change) => setField(f.key, v, change)} projectCategoryOptions={content.categories?.projectCategories || []} assetCategoryOptions={content.categories?.assetCategories || []} />
            ))}
          </div>

          <div className="savebar">
            {status && <span className={status.type === 'error' ? 'error' : 'ok'}>{status.text}</span>}
            {!status && unsaved[active] && <span className="muted">You have unsaved changes</span>}
            <button className="btn" onClick={save} disabled={saving || !unsaved[active]}>
              {saving ? 'Saving…' : 'Save changes'}
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

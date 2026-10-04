import { supabase } from '../supabaseClient';
import defaults from './defaults';

// Everything saved from the admin panel lives in one Supabase table,
// `site_content`, with one row per section:
//   section: 'hero' | 'about' | 'work' | 'results' | 'contact'
//   data:    the section's content as JSON (same shape as defaults.js)

let saved = {};

// Called once before the site renders (see index.js).
// If Supabase is slow or unreachable, the site falls back to defaults.
export async function loadContent(timeoutMs = 3000) {
  const request = supabase.from('site_content').select('section, data');
  const timeout = new Promise(resolve => setTimeout(() => resolve({ data: null }), timeoutMs));
  try {
    const { data, error } = await Promise.race([request, timeout]);
    if (error) console.warn('Could not load site content, using defaults:', error.message);
    (data || []).forEach(row => { saved[row.section] = row.data; });
  } catch (err) {
    console.warn('Could not load site content, using defaults:', err);
  }
}

// Returns a section's content: saved values win, defaults fill any gaps.
export function getContent(section) {
  return { ...defaults[section], ...saved[section] };
}

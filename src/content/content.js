import { supabase } from '../supabaseClient';
import defaults from './defaults';

// Each admin section is stored as a JSON row in site_content.
// Saved content overrides defaults, so existing project media remains compatible.
let saved = {};

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

export function getContent(section) {
  return { ...defaults[section], ...saved[section] };
}

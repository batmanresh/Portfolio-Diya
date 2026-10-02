-- ─────────────────────────────────────────────────────────────────────────────
-- Admin panel setup — run this once in Supabase:
--   Dashboard → SQL Editor → New query → paste this file → Run
--
-- BEFORE RUNNING: replace the email below with the admin's login email.
-- Only that account can edit content or upload files.
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. Who is the admin?
create or replace function public.is_admin()
returns boolean
language sql stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'diya.shr.business@gmail.com';
$$;


-- 2. Site content: one row per section (hero, about, work, results, contact)
create table if not exists public.site_content (
  section    text primary key,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

drop policy if exists "Anyone can read content" on public.site_content;
drop policy if exists "Admin can add content"   on public.site_content;
drop policy if exists "Admin can edit content"  on public.site_content;

create policy "Anyone can read content" on public.site_content
  for select using (true);

create policy "Admin can add content" on public.site_content
  for insert with check (public.is_admin());

create policy "Admin can edit content" on public.site_content
  for update using (public.is_admin()) with check (public.is_admin());


-- 3. File storage for images, videos and the resume
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "Anyone can view media"  on storage.objects;
drop policy if exists "Admin can upload media" on storage.objects;

create policy "Anyone can view media" on storage.objects
  for select using (bucket_id = 'media');

create policy "Admin can upload media" on storage.objects
  for insert with check (bucket_id = 'media' and public.is_admin());

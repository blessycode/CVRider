import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/*
  Database Schema (SQL to run in Supabase SQL Editor):

  create table cvs (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users not null,
    title text,
    template_id text default 'modern-1',
    full_name text,
    job_title text,
    summary text,
    photo_url text,
    contact_info jsonb default '[]'::jsonb,
    experience jsonb default '[]'::jsonb,
    education jsonb default '[]'::jsonb,
    skills jsonb default '[]'::jsonb,
    projects jsonb default '[]'::jsonb,
    certifications jsonb default '[]'::jsonb,
    primary_color text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
  );

  alter table cvs enable row level security;

  create policy "Users can select their own cvs"
    on cvs for select
    using ( auth.uid() = user_id );

  create policy "Users can insert their own cvs"
    on cvs for insert
    with check ( auth.uid() = user_id );

  create policy "Users can update their own cvs"
    on cvs for update
    using ( auth.uid() = user_id );

  create policy "Users can delete their own cvs"
    on cvs for delete
    using ( auth.uid() = user_id );
*/

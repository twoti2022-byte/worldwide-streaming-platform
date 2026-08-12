create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roles (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.permissions (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id uuid not null references auth.users(id) on delete cascade,
  role_id uuid not null references public.roles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, role_id)
);

create table if not exists public.role_permissions (
  role_id uuid not null references public.roles(id) on delete cascade,
  permission_id uuid not null references public.permissions(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (role_id, permission_id)
);

create index if not exists idx_user_roles_user_id on public.user_roles(user_id);
create index if not exists idx_role_permissions_role_id on public.role_permissions(role_id);

alter table public.profiles enable row level security;
alter table public.roles enable row level security;
alter table public.permissions enable row level security;
alter table public.user_roles enable row level security;
alter table public.role_permissions enable row level security;

create policy "Users can read their own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Authenticated users can read roles" on public.roles for select to authenticated using (true);
create policy "Authenticated users can read permissions" on public.permissions for select to authenticated using (true);
create policy "Users can read their own role assignments" on public.user_roles for select using (auth.uid() = user_id);
create policy "Authenticated users can read role permissions" on public.role_permissions for select to authenticated using (true);

insert into public.roles (name, description) values
  ('viewer', 'Default viewer role'),
  ('creator', 'Future content creator role'),
  ('content_manager', 'Future content operations role'),
  ('rights_manager', 'Future rights review role'),
  ('moderator', 'Future trust and safety role'),
  ('finance', 'Future finance operations role'),
  ('administrator', 'Administrative operations role'),
  ('super_administrator', 'Highest privilege role')
on conflict (name) do nothing;

create extension if not exists pgcrypto;

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  locale text default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.roles (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  name text not null unique,
  description text,
  created_at timestamptz not null default now()
);

create table public.permissions (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  description text,
  created_at timestamptz not null default now()
);

create table public.user_roles (
  user_id uuid not null references public.users(id) on delete cascade,
  role_id uuid not null references public.roles(id) on delete cascade,
  assigned_at timestamptz not null default now(),
  assigned_by uuid references public.users(id) on delete set null,
  primary key (user_id, role_id)
);

create table public.role_permissions (
  role_id uuid not null references public.roles(id) on delete cascade,
  permission_id uuid not null references public.permissions(id) on delete cascade,
  primary key (role_id, permission_id)
);

create index user_roles_role_id_idx on public.user_roles(role_id);
create index role_permissions_permission_id_idx on public.role_permissions(permission_id);

alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.roles enable row level security;
alter table public.permissions enable row level security;
alter table public.user_roles enable row level security;
alter table public.role_permissions enable row level security;

create policy "Users can read their own user record" on public.users for select using (auth.uid() = id);
create policy "Users can read their own profile" on public.profiles for select using (auth.uid() = user_id);
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Authenticated users can read role names" on public.roles for select to authenticated using (true);
create policy "Authenticated users can read permission names" on public.permissions for select to authenticated using (true);
create policy "Users can read their own role assignments" on public.user_roles for select using (auth.uid() = user_id);

insert into public.roles (key, name, description) values
('viewer','Viewer','Default viewer role'),('creator','Creator','Future creator ecosystem role'),('content_manager','Content Manager','Future content operations role'),('rights_manager','Rights Manager','Future rights workflow role'),('moderator','Moderator','Future trust and safety role'),('finance','Finance','Future finance operations role'),('administrator','Administrator','Administrative role'),('super_administrator','Super Administrator','Highest privileged role');

insert into public.permissions (key, description) values
('profile:read','Read own profile'),('profile:update','Update own profile'),('admin:read','Read administrative data'),('admin:write','Write administrative data');

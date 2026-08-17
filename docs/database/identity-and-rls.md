# Database foundation

The initial migration creates only identity and authorization structures: `users`, `profiles`, `roles`, `permissions`, `user_roles`, and the role-permission join table. Row Level Security is enabled so users can read their own identity records and role assignments while administrative writes remain server-side.

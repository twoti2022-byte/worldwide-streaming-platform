# Database Foundation

Module 01 creates only identity and authorization tables: `profiles`, `roles`, `permissions`, `user_roles`, and `role_permissions`.

Row Level Security is enabled on all foundational tables. Users may read/update their own profile and read their own role assignments. Administrative writes require future server-side service-role paths and must not be trusted from frontend input.

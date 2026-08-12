export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
export interface Database {
  public: {
    Tables: {
      profiles: { Row: { id: string; display_name: string | null; avatar_url: string | null; created_at: string; updated_at: string }; Insert: { id: string; display_name?: string | null; avatar_url?: string | null }; Update: { display_name?: string | null; avatar_url?: string | null } };
      roles: { Row: { id: string; name: string; description: string | null; created_at: string }; Insert: { name: string; description?: string | null }; Update: { description?: string | null } };
      permissions: { Row: { id: string; name: string; description: string | null; created_at: string }; Insert: { name: string; description?: string | null }; Update: { description?: string | null } };
      user_roles: { Row: { user_id: string; role_id: string; created_at: string }; Insert: { user_id: string; role_id: string }; Update: never };
      role_permissions: { Row: { role_id: string; permission_id: string; created_at: string }; Insert: { role_id: string; permission_id: string }; Update: never };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

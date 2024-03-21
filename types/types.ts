import type { Database } from "@/types/supabase";
import type { User as SupabaseUser } from "@supabase/gotrue-js/src/lib/types";

export type User = SupabaseUser | null;
export type Item = Database["public"]["Tables"]["items"]["Row"];
export type Collection = Database["public"]["Tables"]["collections"]["Row"];
export type ItemImage = Database["public"]["Tables"]["items_images"]["Row"];

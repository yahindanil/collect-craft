import React from "react";
import { createClient } from "@/utils/supabase/server";
import ItemEditForm from "./ItemEditForm";

export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { itemId: string } }) {
  const { itemId } = params;
  const supabase = createClient();

  const { data: item, error } = await supabase
    .from("items")
    .select()
    .eq("id", itemId)
    .single();

  return <ItemEditForm item={item} />;
}

import React from "react";
import { createClient } from "@/utils/supabase/server";
import ItemEditForm from "./ItemEditForm";
import { getImgUrl } from "@/app/utils/getImgUrl";

export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { itemId: string } }) {
  const { itemId } = params;
  const supabase = createClient();

  const { data: item, error } = await supabase
    .from("items")
    .select("*,collections(user_id)")
    .eq("id", itemId)
    .single();

  if (!item || !item.collections || !item.collections.user_id) return;

  const imgUrl = await getImgUrl({
    userId: item.collections.user_id,
    itemId: item.id,
  });

  return <ItemEditForm item={item} imgUrl={imgUrl} collectionUserId={item.collections.user_id} />;
}

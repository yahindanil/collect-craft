import React from "react";
import { createClient } from "@/utils/supabase/server";
import ItemsListClient from "./ItemsListClient";

export default async function ItemsListServer({
  collectionId,
}: {
  collectionId: string;
}) {
  const supabase = createClient();

  const { data: items, error } = await supabase
    .from("items")
    .select()
    .eq("collection_id", collectionId);

  if (items?.length == 0 || !items) {
    return (
      <div className="wrapper">
        <h1>This collection is empty</h1>
      </div>
    );
  }

  return <ItemsListClient items={items} />;
}

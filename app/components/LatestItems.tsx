import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionCard from "./collections/CollectionCard";
import ItemCard from "@/app/collections/[collectionId]/ItemCard";

export default async function CollectionsLatest() {
  const supabase = createClient();

  const { data: latestItems, error } = await supabase
    .from("items")
    .select()
    .order("created_at", { ascending: false })
    .limit(5);

  if (!latestItems) {
    return;
  }

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4 font-bold text-3xl">Latest items</h2>

      {latestItems?.map((item) => (
        <ItemCard key={item.id} item={item} collectionId={""} isOwner={false} />
      ))}
    </div>
  );
}

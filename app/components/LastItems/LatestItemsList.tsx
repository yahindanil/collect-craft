import React from "react";
import { createClient } from "@/utils/supabase/server";
import LatestItem from "./LatestItem";

export default async function LatestItemsList() {
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
      <div className="">
        <h2 className="text-center mb-4 font-bold text-3xl">Latest items</h2>
      </div>
      <div className="">
        {latestItems?.map((item) => (
          <LatestItem
            key={item.id}
            itemCollectionId={item.collection_id}
            itemName={item.name}
            itemId={item.id}
            collectionUserId={item.user_id}
          />
        ))}
      </div>
    </div>
  );
}

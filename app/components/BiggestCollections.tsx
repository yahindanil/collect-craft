import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionCard from "./collections/CollectionCard";

export default async function BiggestCollections() {
  const supabase = createClient();

  const { data: collectionsWithCount, error } = await supabase
    .from("collections")
    .select(`*, items(id)`);

  if (error) {
    console.error("Error fetching data:", error);
    return;
  }

  const sortedCollections = collectionsWithCount
    .sort((a, b) => {
      const countA = a.items.length;
      const countB = b.items.length;

      return countB - countA;
    })
    .slice(0, 5);

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4 font-bold text-3xl">
        Top 5 bigges collections
      </h2>

      {sortedCollections?.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}

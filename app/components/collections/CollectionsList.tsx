import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionCard from "./CollectionCard";


export default async function CollectionsList() {
  const supabase = createClient();

  const { data: collections, error: collectionError } = await supabase
    .from("collections")
    .select()
    .order("created_at", { ascending: false });

  if (collectionError) {
    console.log("Error fetching data:", collectionError.message);
  }

  return (
    <div className="mb-4">
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collections?.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}

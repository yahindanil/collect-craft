import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionCard from "./CollectionCard";
import CollectionCreationButton from "./CollectionCreationButton";

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
      <h2 className="text-center mb-4 font-bold text-3xl">Collections</h2>
      <CollectionCreationButton />
      {collections?.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}

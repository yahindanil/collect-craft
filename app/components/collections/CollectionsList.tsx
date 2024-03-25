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
      <div className="md:flex md:items-center">
        <h2 className="text-center mb-1 font-bold text-3xl md:text-left md:mr-auto">
          Collections
        </h2>
        <CollectionCreationButton />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collections?.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}

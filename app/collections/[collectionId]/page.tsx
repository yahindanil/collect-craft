import React from "react";
import { createClient } from "@/utils/supabase/client";
import CreateItemButton from "./CreateItemButton";
import ItemsListServer from "./ItemsListServer";

export default async function CollectionPage({
  params,
}: {
  params: { collectionId: string };
}) {
  const { collectionId } = params;
  const supabase = createClient();

  const { data: collection, error } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  if (!collection) {
    return (
      <div className="wrapper">
        <h1>No such collection</h1>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className="text-center mb-4 font-bold text-3xl">{collection.name}</h1>
      <div className="mb-3">
        <CreateItemButton collectionId={collection.id} />
      </div>
      <div>
        <ItemsListServer collectionId={collection.id} />
      </div>
    </div>
  );
}

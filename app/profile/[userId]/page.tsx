import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionCard from "@/app/components/collections/CollectionCard";
import CreateCollectionButton from "@/app/components/collections/CollectionCreationButton";

export default async function personalProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const supabase = createClient();

  const { data: userCollections, error } = await supabase
    .from("collections")
    .select()
    .eq("user_id", userId);

  return (
    <div className="mb-4 wrapper">
      <h2 className="text-center mb-4 font-bold text-3xl">Your collections</h2>
      <CreateCollectionButton />
      {userCollections?.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}

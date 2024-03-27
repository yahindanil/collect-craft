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
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return (
    <div className="mb-4 wrapper">
      <div className="md:flex md:items-center">
        <h2 className="text-center mb-4 font-bold text-3xl md:text-left md:mr-auto">
          My collections
        </h2>
        <CreateCollectionButton />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {userCollections?.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}

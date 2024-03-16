import React from "react";
import CollectionEditForm from "./CollectionEditForm";
import { createClient } from "@/utils/supabase/server";
import { Collection } from "@/types/types";

export const dynamic = "force-dynamic";

export default async function page({
  params,
}: {
  params: { collectionId: Collection };
}) {
  const { collectionId } = params;
  const supabase = createClient();

  const { data: collection, error } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  return <CollectionEditForm collection={collection} />;
}

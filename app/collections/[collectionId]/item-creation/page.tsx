import React from "react";
import ItemCreationForm from "./ItemCreationForm";
import { createClient } from "@/utils/supabase/server";
import { Collection } from "@/types/types";

export default async function page({
  params,
}: {
  params: { collectionId: Collection };
}) {
  const { collectionId } = params;
  const supabase = createClient();

  const { data: collection, error: collectionError } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  if (!collection) return;

  return <ItemCreationForm collection={collection} />;
}

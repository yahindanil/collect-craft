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

  const { data: collection, error } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  return <ItemCreationForm collection={collection} />;
}
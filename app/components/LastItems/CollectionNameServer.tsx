import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionNameClient from "./CollectionNameClient";

export default async function CollectionNameServer({
  collectionId,
}: {
  collectionId: any;
}) {
  const supabase = createClient();

  const { data: collectionName, error } = await supabase
    .from("collections")
    .select("name")
    .eq("id", collectionId)
    .single();

  return <CollectionNameClient collectionName={collectionName} />;
}

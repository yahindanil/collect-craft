import React from "react";
import ItemCreationForm from "./ItemCreationForm";
import { createClient } from "@/utils/supabase/server";
import { Collection } from "@/types/types";
import { redirect } from "next/navigation";

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

  const { data: userData , error: userError } = await supabase.auth.getUser();

  if (userError || !userData?.user || !collection) {
    redirect("/");
  }

  return <ItemCreationForm collection={collection} userId={userData.user.id}/>;
}

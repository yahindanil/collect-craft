import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import UsersCollectionList from "./UsersCollectionList";

export default async function personalProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const supabase = createClient();

  const { data: UserCollections, error } = await supabase
    .from("collections")
    .select()
    .eq("user_id", userId);

  console.log(UserCollections);

  return <UsersCollectionList UserCollections={UserCollections} />;
}

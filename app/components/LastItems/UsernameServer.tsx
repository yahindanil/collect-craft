import React from "react";
import { createClient } from "@/utils/supabase/server";
import UsernameClient from "./UsernameClient";

export default async function UsernameServer({
  collectionId,
}: {
  collectionId: any;
}) {
  const supabase = createClient();

  const { data: username, error } = await supabase
    .from("collections")
    .select("username")
    .eq("id", collectionId)
    .single();

  if (!username) {
    return;
  }

  return <UsernameClient username={username.username} />;
}

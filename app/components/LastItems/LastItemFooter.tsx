import React from "react";
import { createClient } from "@/utils/supabase/server";
import { CardFooter } from "@/components/ui/card";

export default async function LastItemFooter({
  collectionId,
}: {
  collectionId: string;
}) {
  const supabase = createClient();

  const { data: collection, error } = await supabase
    .from("collections")
    .select("name, username")
    .eq("id", collectionId)
    .single();

  if (!collection) {
    return;
  }

  return (
    <CardFooter className="pb-[15px]">
      <div className="flex justify-between w-full">
        <div>
          <p>{collection.name}</p>
        </div>
        <div>
          <p>{collection.username}</p>
        </div>
      </div>
    </CardFooter>
  );
}

import React, { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import CreateItemButton from "./CreateItemButton";
import ItemsListServer from "./ItemsListServer";
import { Collection } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function CollectionPage({
  params,
}: {
  params: { collectionId: Collection["id"] };
}) {
  // const router = useRouter();
  const { collectionId } = params;
  const supabase = createClient();
  const test = true;

  const { data: user, error: userError } = await supabase.auth.getUser();

  const { data: collection, error: collectionError } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  if (!collection) {
    return (
      <div className="wrapper">
        <h1>No such collection</h1>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className="text-center mb-4 font-bold text-3xl">{collection.name}</h1>
      <div className="mb-3">
        <div className="mb-3">
          <CreateItemButton collectionId={collection.id} />
        </div>
        {test && (
          <div>
            <Link href={`/collections/${collection.id}/collection-edit`}>
              <Button className="w-full">Edit collection</Button>
            </Link>
          </div>
        )}
      </div>
      <div>
        <ItemsListServer collectionId={collection.id} />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import CreateItemButton from "./CreateItemButton";
import ItemsListServer from "./itemsList/ItemsListServer";
import { Collection } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ItemCard from "./ItemCard";

export const dynamic = "force-dynamic";

export default async function CollectionPage({
  params,
}: {
  params: { collectionId: Collection["id"] };
}) {
  const { collectionId } = params;
  const supabase = createClient();
  const test = true;

  const { data: collection, error: collectionError } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  const { data: items, error: itemsError } = await supabase
    .from("items")
    .select()
    .eq("collection_id", collectionId);

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
        {/* Тут нужно релизовать что бы только владелец коллекции мог видеть эту кнопку */}
        {test && (
          <div>
            <Link href={`/collections/${collection.id}/collection-edit`}>
              <Button className="w-full">Edit collection</Button>
            </Link>
          </div>
        )}
      </div>
      <div>
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} collectionId={collection.id} />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { createClient } from "@/utils/supabase/server";
import CreateItemButton from "./CreateItemButton";
import { Collection } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ItemCard from "./ItemCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function CollectionPage({
  params,
}: {
  params: { collectionId: Collection["id"] };
}) {
  const { collectionId } = params;
  const supabase = createClient();

  const { data: user, error } = await supabase.auth.getUser();

  const { data: collection, error: collectionError } = await supabase
    .from("collections")
    .select()
    .eq("id", collectionId)
    .single();

  const { data: items, error: itemsError } = await supabase
    .from("items")
    .select()
    .eq("collection_id", collectionId);

  let isOwner = false;
  if (user.user && user.user.id === collection.user_id) {
    isOwner = true;
  }

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

      <Card className="w-full mx-auto mb-3">
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{collection.description}</CardDescription>
        </CardContent>
      </Card>
      {isOwner && (
        <div className="mb-3">
          <div className="mb-3">
            <Link href={`/collections/${collection.id}/collection-edit`}>
              <Button className="w-full">Edit collection</Button>
            </Link>
          </div>
          <div className="mb-3">
            <Link href={`/collections/${collection.id}/item-creation`}>
              <Button className="w-full">Create item</Button>
            </Link>
            {/* <CreateItemButton collectionId={collection.id} /> */}
          </div>
        </div>
      )}
      <div>
        {items?.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            collectionId={collection.id}
            isOwner={isOwner}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { createClient } from "@/utils/supabase/server";
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

  const { data: user, error: userError } = await supabase.auth.getUser();

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
  if (user.user && user.user.id === collection!.user_id) {
    isOwner = true;
  }

  if (!collection) {
    return (
      <div className="wrapper">
        <h2>No such collection</h2>
      </div>
    );
  }

  const renderControlPanel = (collection: { id: string }) => (
    <div className="lg:grid lg:gri lg:gap-3 lg:grid-cols-2">
      <div className="mb-3">
        <Link href={`/collections/${collection.id}/collection-edit`}>
          <Button className="w-full">Edit collection</Button>
        </Link>
      </div>
      <div className="mb-3">
        <Link href={`/collections/${collection.id}/item-creation`}>
          <Button className="w-full">Create item</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="wrapper">
      <h1 className="text-center mb-4 font-bold text-3xl">{collection.name}</h1>
      <div className={`md:flex ${items?.length ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-1/2 md:ml-4">
          {isOwner && <div>{renderControlPanel(collection)}</div>}

          <Card className="w-full mx-auto mb-3">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{collection.description}</CardDescription>
            </CardContent>
            <CardFooter className="">
              <div className="flex justify-between w-full">
                <div>
                  <p>{collection.category}</p>
                </div>
                <div>
                  <p>{collection.username}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {items && items.length > 0 && (
          <div className="items-list md:w-1/2">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                collectionId={collection.id}
                isOwner={isOwner}
                userId={collection.user_id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

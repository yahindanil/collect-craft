import React from "react";
import { createClient } from "@/utils/supabase/server";
import CollectionCard from "../collections/CollectionCard";
import ItemCard from "@/app/collections/[collectionId]/ItemCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CollectionNameServer from "./CollectionNameServer";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function CollectionsLatest() {
  const supabase = createClient();

  const { data: latestItems, error } = await supabase
    .from("items")
    .select()
    .order("created_at", { ascending: false })
    .limit(5);

  if (!latestItems) {
    return;
  }

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4 font-bold text-3xl">Latest items</h2>

      {latestItems?.map((item) => (
        <div key={item.id}>
          <Link href={`/collections/${item.collection_id}`}>
            <Card className="w-full mx-auto mb-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
              <CardContent className="p-2">
                <div className="flex justify-between w-full">
                  <div>{item.name}</div>
                  <CollectionNameServer collectionId={item.collection_id} />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

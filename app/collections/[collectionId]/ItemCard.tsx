import React from "react";
import { Item } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import ItemCardImage from "./ItemCardImage";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function ItemCard({
  item,
  collectionId,
  isOwner,
  userId,
}: {
  item: Item;
  collectionId: string;
  isOwner: boolean;
  userId: string;
}) {
  const supabase = createClient();

  const { data: imgUrl, error } = await supabase.storage
    .from("images")
    .createSignedUrl(`${userId}/${item.id}`, 60);

  return (
    <div>
      <Card className="w-full mx-auto mb-3">
        <CardContent className="p-2">
          <div className="flex justify-between w-full">
            <div>{item.name}</div>
            {isOwner && (
              <Link href={`/collections/${collectionId}/item-edit/${item.id}`}>
                <Button>Edit</Button>
              </Link>
            )}
          </div>
        </CardContent>

        {imgUrl && <ItemCardImage imgUrl={imgUrl.signedUrl} />}
      </Card>
    </div>
  );
}

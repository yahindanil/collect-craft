import React from "react";
import { Item } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ItemCard({
  item,
  collectionId,
}: {
  item: Item;
  collectionId: string;
}) {
  return (
    <Card className="w-full mx-auto mb-3">
      {/* <CardHeader>
          <CardTitle>{collection.name}</CardTitle>
        </CardHeader> */}
      <CardContent className="p-2">
        <div className="flex justify-between w-full">
          <div>{item.name}</div>
          <Link href={`/collections/${collectionId}/item-edit/${item.id}`}>
            <Button>Edit</Button>
          </Link>
        </div>
      </CardContent>
      {/* <CardFooter>
          <div className="flex justify-between w-full"></div>
        </CardFooter> */}
    </Card>
  );
}

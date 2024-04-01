import React from "react";
import Link from "next/link";
import { getImgUrl } from "@/app/utils/getImgUrl";
import LastItemFooter from "./LastItemFooter";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ItemCardImage from "@/app/collections/[collectionId]/ItemCardImage";

export default async function LatestItem({
  itemCollectionId,
  itemName,
  itemId,
  collectionUserId,
}: {
  itemCollectionId: string;
  itemName: string;
  itemId: string;
  collectionUserId: string;
}) {
  const imgUrl = await getImgUrl({
    userId: collectionUserId,
    itemId,
  });

  return (
    <Link href={`/collections/${itemCollectionId}`}>
      <Card className="w-full mx-auto mb-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
        <CardContent className="p-2">
          <div>
            <p className="font-semibold">{itemName}</p>
          </div>
        </CardContent>

        {imgUrl && <ItemCardImage imgUrl={imgUrl} />}

        <LastItemFooter collectionId={itemCollectionId} />
      </Card>
    </Link>
  );
}

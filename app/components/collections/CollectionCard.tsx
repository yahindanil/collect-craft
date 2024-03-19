import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { Collection } from "@/types/types";

const truncateDescription = (description: string, maxLength = 250) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  } else {
    return description;
  }
};

export default function CollectionCard({
  collection,
}: {
  collection: Collection;
}) {
  return (
    <div>
      <div key={collection.name} className="mb-4">
        <Link href={`/collections/${collection.id}`}>
          <Card className="w-full mx-auto hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
            <CardHeader className="">
              <CardTitle>{collection.name}</CardTitle>
              {/* <div className="text-sm text-muted-foreground">
                <p>{collection.category}</p>
              </div> */}
            </CardHeader>
            <CardContent>
              <CardDescription>
                {truncateDescription(collection.description)}
              </CardDescription>
            </CardContent>
            <CardFooter>
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
        </Link>
      </div>
    </div>
  );
}

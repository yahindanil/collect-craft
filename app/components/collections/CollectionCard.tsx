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
import { Collection } from "@/types/types";

export default function CollectionCard({
  collection,
}: {
  collection: Collection;
}) {
  return (
    <div key={collection.name} className="">
      <Link href={`/collections/${collection.id}`}>
        <Card className="w-full h-[245.6px] flex flex-col mx-auto hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
          <CardHeader className="">
            <CardTitle>{collection.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="line-clamp-5">
              {collection.description}
            </CardDescription>
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
      </Link>
    </div>
  );
}

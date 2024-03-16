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

export default function CollectionCard({
  collection,
}: {
  collection: Collection;
}) {
  return (
    <div>
      <div key={collection.name} className="mb-4">
        <Link href={`/collections/${collection.id}`}>
          <Card className="w-full mx-auto">
            <CardHeader>
              <CardTitle>{collection.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{collection.description}</CardDescription>
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

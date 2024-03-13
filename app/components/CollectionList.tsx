import React, { useState, useEffect } from "react";
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

export default async function CollectionList() {
  const supabase = createClient();

  const { data: collections, error } = await supabase
    .from("collections")
    .select();

  if (error) {
    console.log("Error fetching data:", error.message);
  }

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4 font-bold text-3xl">Collections</h2>
      {collections?.map((collection) => (
        <div key={collection.name} className="mb-4">
          <Link href={"#"}>
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>{collection.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{collection.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-end w-full">
                  <p>{collection.category}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

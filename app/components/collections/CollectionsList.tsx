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
import CollectionCard from "./CollectionCard";

export default async function CollectionsList() {
  const supabase = createClient();

  const { data: user, error: userError } = await supabase.auth.getUser();

  const { data: collections, error: collectionError } = await supabase
    .from("collections")
    .select();

  if (collectionError) {
    console.log("Error fetching data:", collectionError.message);
  }

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4 font-bold text-3xl">Collections</h2>
      {collections?.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}

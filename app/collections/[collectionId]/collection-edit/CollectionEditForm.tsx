"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Collection } from "@/types/types";

export default function CollectionEditForm({
  collection,
}: {
  collection: Collection;
}) {
  const supabase = createClient();
  const router = useRouter();

  const [collectionName, setCollectionName] = useState(collection.name);
  const [collectionDescription, setCollectionDescription] = useState(
    collection.description
  );
  const [category, setCategory] = useState(collection.category);

  const editCollection = async () => {
    if (!collectionName || !collectionDescription || !category) {
      return;
    }

    const { error } = await supabase
      .from("collections")
      .update({
        name: collectionName,
        description: collectionDescription,
        category: category,
      })
      .eq("id", collection.id);

    if (error) {
      console.error("Error editing collection:", error.message);
    }

    window.location.href = `/collections/${collection.id}`;
  };

  return (
    <div className="wrapper">
      <Card className="w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Edit collection</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collectionName">Collection name</Label>
                <Input
                  id="collectionName"
                  required
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collectionDescription">Description</Label>
                <Textarea
                  id="collectionDescription"
                  required
                  value={collectionDescription}
                  onChange={(e) => setCollectionDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Select required value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="stuff">Stuff</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="signs">Signs</SelectItem>
                    <SelectItem value="silverware">Silverware</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/collections/${collection.id}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button type="button" onClick={editCollection}>
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

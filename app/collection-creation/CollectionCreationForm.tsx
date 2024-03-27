"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { categories } from "../utils/collectionCategories";

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

export default function CollectionCreationForm({
  userId,
  userEmail,
}: {
  userId: string;
  userEmail: string;
}) {
  const supabase = createClient();
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const username = userEmail.split("@")[0];

  const insertCollection = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!collectionName || !collectionDescription || !category || !userId) {
      return;
    }

    const { data: newCollection, error } = await supabase
      .from("collections")
      .insert([
        {
          name: collectionName,
          description: collectionDescription,
          category: category,
          user_id: userId,
          username: username,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error inserting collection:", error.message);
    }

    window.location.href = `/collections/${newCollection.id}`;
  };

  return (
    <div className="wrapper md:max-w-[400px]">
      <Card className="w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Create collection</CardTitle>
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
                  maxLength={25}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collectionDescription">Description</Label>
                <Textarea
                  className="h-[140px]"
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
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/collections"}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button
              type="button"
              disabled={isSubmitting}
              onClick={insertCollection}
            >
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

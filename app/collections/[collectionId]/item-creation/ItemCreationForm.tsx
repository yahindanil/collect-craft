"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CreateItem({
  collection,
}: {
  collection: { id: string; user_id: string };
}) {
  const supabase = createClient();
  const [itemName, setItemName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const insertItem = async () => {
    if (!itemName) {
      return;
    }

    const { data: newItem, error: itemInsertError } = await supabase
      .from("items")
      .insert([
        {
          name: itemName,
          collection_id: collection.id,
        },
      ])
      .select()
      .single();

    if (selectedFile) {
      const { data: image, error: imageError } = await supabase.storage
        .from("images")
        .upload(`${collection.user_id}/${newItem.id}`, selectedFile);

      if (imageError) {
        console.error("Error inserting collection:", imageError.message);
      }
    }

    if (itemInsertError) {
      console.error("Error inserting collection:", itemInsertError.message);
    }
    window.location.href = `/collections/${collection.id}`;
  };

  return (
    <div className="wrapper">
      <Card className="w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Create item</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collectionName">Collection name</Label>
                <Input
                  id="collectionName"
                  required
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/collections/${collection.id}`}>
              <Button variant="outline" className="w-[80px]">
                Cancel
              </Button>
            </Link>
            <Button className="w-[80px]" type="button" onClick={insertItem}>
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

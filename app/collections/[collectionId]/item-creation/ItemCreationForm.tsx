"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import ImgDropzone from "../ImgDropzone";
import { uploadItemImg } from "@/app/utils/uploadItemImg";

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
  userId,
}: {
  collection: { id: string; user_id: string };
  userId: string;
}) {
  const supabase = createClient();
  const [itemName, setItemName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
          user_id: userId,
        },
      ])
      .select()
      .single();

    if (selectedFile) {
      await uploadItemImg({
        selectedFile: selectedFile,
        itemId: newItem.id,
        collectionUserId: collection.user_id,
      });
    }

    if (itemInsertError) {
      console.error("Error inserting collection:", itemInsertError.message);
    }
    window.location.href = `/collections/${collection.id}`;
  };

  return (
    <div className="wrapper md:max-w-[400px]">
      <Card className="max-w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Create item</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="itemName">Item name</Label>
                <Input
                  id="itemName"
                  required
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  maxLength={20}
                />
              </div>
              <ImgDropzone
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
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

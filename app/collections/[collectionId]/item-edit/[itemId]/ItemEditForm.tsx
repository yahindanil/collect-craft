"use client";

import React, { useState } from "react";
import { Item } from "@/types/types";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import ImgDropzone from "../../ImgDropzone";
import { uploadItemImg } from "@/app/utils/uploadItemImg";

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
import ItemCardImage from "../../ItemCardImage";

export default function ItemEditForm({
  collectionUserId,
  item,
  imgUrl,
}: {
  collectionUserId: string;
  item: Item;
  imgUrl?: string;
}) {
  const supabase = createClient();
  const router = useRouter();
  const [itemName, setItemName] = useState(item.name);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(imgUrl);
  const [imgIsDeleted, setImgIsChanged] = useState(false);

  const handleImgChange = () => {
    setImageUrl(undefined);
    setImgIsChanged(true);
  };

  async function deleteImg() {
    const { data: itemImages, error: imagesDeleteError } =
      await supabase.storage
        .from("images")
        .remove([`${collectionUserId}/${item.id}`]);
  }

  const editItem = async () => {
    if (!itemName) {
      return;
    }

    const { error } = await supabase
      .from("items")
      .update({
        name: itemName,
      })
      .eq("id", item.id);

    if (error) {
      console.error("Error editing item:", error.message);
    }

    if (imgIsDeleted) {
      deleteImg();
    }

    if (!imageUrl && selectedFile) {
      await uploadItemImg({
        selectedFile: selectedFile,
        itemId: item.id,
        collectionUserId: collectionUserId,
      });
    }

    window.location.href = `/collections/${item.collection_id}`;
  };

  const deleteItem = async () => {
    await deleteImg();
    const { error } = await supabase.from("items").delete().eq("id", item.id);

    window.location.href = `/collections/${item.collection_id}`;
  };

  return (
    <div className="wrapper md:max-w-[400px]">
      <Card className="max-w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Edit item</CardTitle>
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
              {imageUrl ? (
                <div>
                  <ItemCardImage imgUrl={imageUrl} />
                  <Button
                    className=""
                    type="button"
                    variant="destructive"
                    onClick={handleImgChange}
                  >
                    Delete image
                  </Button>
                </div>
              ) : (
                <ImgDropzone
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/collections/${item.collection_id}`}>
              <Button variant="outline" className="w-[80px]">
                Cancel
              </Button>
            </Link>
            <Button
              className="w-[80px]"
              type="button"
              variant="destructive"
              onClick={deleteItem}
            >
              Delete
            </Button>
            <Button className="w-[80px]" type="button" onClick={editItem}>
              Edit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

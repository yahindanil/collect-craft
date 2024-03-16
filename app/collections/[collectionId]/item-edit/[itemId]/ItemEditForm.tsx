"use client";

import React, { useState } from "react";
import { Item } from "@/types/types";
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

export default function ItemEditForm({ item }: { item: Item }) {
  const supabase = createClient();
  const router = useRouter();

  const [itemName, setItemName] = useState(item.name);

  console.log(itemName);

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

    window.location.href = `/collections/${item.collection_id}`;
  };

  return (
    <div className="wrapper">
      <Card className="w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Edit item</CardTitle>
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
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/collections/${item.collection_id}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button type="button" onClick={editItem}>
              Edit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

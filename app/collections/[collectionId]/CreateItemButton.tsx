"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function CreateItem({ collectionId }: { collectionId: string }) {
  const supabase = createClient();
  const router = useRouter();
  const [itemName, setItemName] = useState("");

  const insertItem = async () => {
    if (!itemName) {
      return;
    }

    const { error } = await supabase.from("items").insert([
      {
        name: itemName,
        collection_id: collectionId,
      },
    ]);

    if (error) {
      console.error("Error inserting collection:", error.message);
    }

    router.refresh();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="w-full">
          <Button>Create item</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create item</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                required
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={insertItem}>
              Add item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

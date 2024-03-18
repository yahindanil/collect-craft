"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

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
import { User } from "@/types/types";

export default function CollectionCreationForm({ user }: { user: any }) {
  const supabase = createClient();
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [category, setCategory] = useState("");
  const username = user.email.split("@")[0];

  const insertCollection = async () => {
    if (!collectionName || !collectionDescription || !category || !user) {
      return;
    }

    const { error } = await supabase.from("collections").insert([
      {
        name: collectionName,
        description: collectionDescription,
        category: category,
        user_id: user.id,
        username: username,
      },
    ]);

    if (error) {
      console.error("Error inserting collection:", error.message);
    }

    window.location.href = `/profile/${user.id}`;
  };

  return (
    <div className="wrapper">
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
            <Link href={"/"}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button type="button" onClick={insertCollection}>
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

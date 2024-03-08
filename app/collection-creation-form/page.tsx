import React from "react";
import Link from "next/link";

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

export default function CollectionCreationForm() {
  return (
    <div className="wrapper">
      <Card className="w-[380px] wx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Create collection</CardTitle>
          {/* <CardDescription>
            Deploy your new project in one-click.
          </CardDescription> */}
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collectionName">Collection name</Label>
                <Input id="collectionName" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="signs">Signs</SelectItem>
                    <SelectItem value="silverware">Silverware</SelectItem>
                    <SelectItem value="toys">Toys</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/"}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button>Create</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

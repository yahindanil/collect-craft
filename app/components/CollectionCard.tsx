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

export default function CollectionCard() {
  return (
    <div className="">
      <Link href={"#"}>
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle>Collection name</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end">
              <p>Books</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end w-full">
              <p>Books</p>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

"use client";

import React from "react";
import { Collection } from "@/types/types";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UsersCollectionList({
  UserCollections,
}: {
  UserCollections: Collection[];
}) {
  if (UserCollections?.length == 0 || !UserCollections) {
    return (
      <div className="wrapper">
        <h1>You don&apos;t own any collections </h1>
      </div>
    );
  }

  return (
    <div className="mb-4 wrapper">
      <h2 className="text-center mb-4 font-bold text-3xl">Your collections</h2>
      {UserCollections?.map((collection) => (
        <div key={collection.name} className="mb-4">
          <Link href={`/collections/${collection.id}`}>
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>{collection.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{collection.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-end w-full">
                  <p>{collection.category}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

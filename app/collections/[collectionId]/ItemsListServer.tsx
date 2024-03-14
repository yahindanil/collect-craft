import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";

export default async function ItemsListServer({
  collectionId,
}: {
  collectionId: string;
}) {
  const supabase = createClient();

  const { data: items, error } = await supabase
    .from("items")
    .select()
    .eq("collection_id", collectionId);

  if (items?.length == 0 || !items) {
    return (
      <div className="wrapper">
        <h1>This collection is empty</h1>
      </div>
    );
  }

  return (
    <Table className="border-solid border-2">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="text-right">ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell className="text-right">{item.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}

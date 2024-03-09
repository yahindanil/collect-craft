import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CreateCollectionButton() {
  return (
    <div>
      <Link href={"/collection-creation-form"}>
        <Button className="w-full">Create collection</Button>
      </Link>
    </div>
  );
}

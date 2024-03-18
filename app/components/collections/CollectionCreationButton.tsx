import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function CollectionCreationButton() {
  const supabase = createClient();

  const { data: user, error } = await supabase.auth.getUser();
  const isLoggedIn = user?.user ? true : false;

  return (
    <div>
      {isLoggedIn && (
        <div className="mb-5">
          <Link href={"/collection-creation"}>
            <Button className="w-full">Create collection</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

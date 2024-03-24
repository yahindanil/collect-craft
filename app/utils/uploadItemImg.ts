"use client";

import { createClient } from "@/utils/supabase/client";

export async function uploadItemImg({
  selectedFile,
  itemId,
  collectionUserId,
}: {
  selectedFile: File;
  itemId: string;
  collectionUserId: string;
}) {
  const supabase = createClient();

  const { data: image, error: imageError } = await supabase.storage
    .from("images")
    .upload(`${collectionUserId}/${itemId}`, selectedFile);

  if (imageError) {
    console.error("Error inserting collection:", imageError.message);
  }
}

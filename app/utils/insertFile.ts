import { createClient } from "@/utils/supabase/client";

export const insertFiles = async ({
  file,
  itemId,
  userId,
}: {
  file: any;
  itemId: string;
  userId: string;
}) => {
  if (!file) return;

  const supabase = createClient();

  const { error } = await supabase.from("items_images").insert([
    {
      name: file.name,
    },
  ]);

  const { error: uploadError } = await supabase.storage
    .from("files")
    .upload(`${userId}/${file.name}`, file);

  if (uploadError) {
    console.error("Error uploading image:", uploadError);
    return;
  }

  console.log(uploadError);
};

import { createClient } from "@/utils/supabase/server";

export async function getImgUrl({
  userId,
  itemId,
}: {
  userId: string;
  itemId: string;
}) {
  const supabase = createClient();

  const { data: imgUrl, error } = await supabase.storage
    .from("images")
    .createSignedUrl(`${userId}/${itemId}`, 3600, {
      transform: {
        width: 100,
      },
    });

  return imgUrl?.signedUrl;
}

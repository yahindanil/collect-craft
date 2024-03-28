import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function UserAvatar() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user || !data.user.email) {
    return (
      <Link href={"/login"}>
        <Button variant="outline">Login</Button>
      </Link>
    );
  }

  const firstLetter = data.user.email[0]?.toUpperCase() || "";
  const username = data.user.email.split("@")[0];

  return (
    <Link href={"/profile"}>
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback>{firstLetter}</AvatarFallback>
      </Avatar>
    </Link>
  );
}
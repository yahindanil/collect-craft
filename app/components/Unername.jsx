import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function UserAvatar() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return (
      <div>
        <p>Guest</p>
      </div>
    );
  }

  const firstLetter = data.user.email[0]?.toUpperCase() || "";
  const username = data.user.email.split("@")[0];

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback>{firstLetter}</AvatarFallback>
      </Avatar>

      <p>{username}</p>
    </div>
  );
}

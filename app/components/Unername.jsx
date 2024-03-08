import { createClient } from "@/utils/supabase/server";

export default async function Username() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return (
      <div className="">
        <p>Guest</p>
      </div>
    );
  } else {
    const username = data.user.email.split("@")[0];
    return (
      <div className="">
        <p>{username}</p>
      </div>
    );
  }
}

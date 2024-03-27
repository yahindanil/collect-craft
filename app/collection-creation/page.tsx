import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CollectionCreationForm from "./CollectionCreationForm";

export default async function CollectionCreation() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user || !data?.user?.email) {
    redirect("/");
  }

  return <CollectionCreationForm userId={data.user.id} userEmail={data.user.email} />;
}

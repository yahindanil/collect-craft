import React from "react";
import { createClient } from "@/utils/supabase/server";
import NavMenuClient from "./NavMenuClint";

export default async function NavMenuServer() {
  const supabase = createClient();

  const { data: user, error } = await supabase.auth.getUser();

  return <NavMenuClient user={user.user} />;
}

import React from "react";
import { createClient } from "@/utils/supabase/server";
import NavMenuClient from "./NavMenuClient";

export default async function NavMenuServer() {
  const supabase = createClient();

  const { data: userData, error } = await supabase.auth.getUser();

  let userName = "username";
  if (userData.user?.email) {
    userName = userData.user.email.split("@")[0];
  }

  return <NavMenuClient user={userData.user} userName={userName} />;
}

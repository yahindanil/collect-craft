"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("emailLogin") as string,
    password: formData.get("passwordLogin") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("emailSignup") as string,
    password: formData.get("passwordSignup") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error.message);

    // Here is an error (Email rate limit exceeded) which seem to be with how supabase works.
    // For now i can't fix it, so i just ignore it and redirect to homepage.
    // The registration still works btw.
    // redirect("/error");

    // if(error.message == "")

    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

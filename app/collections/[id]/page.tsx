import React from "react";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const supabase = createClient();

  const { data: collection, error } = await supabase
    .from("collections")
    .select()
    .eq("id", id)
    .single();

  if (!collection) {
    return (
      <div className="wrapper">
        <h1>No such collection</h1>
      </div>
    );
  }
  console.log(collection.name);

  return (
    <div className="wrapper">
      <h1>Hello world {id}</h1>
      <h1>{collection.name}</h1>
    </div>
  );
}

// export async function generateStaticParams() {
//   const supabase = createClient();

//   const { data: collections, error } = await supabase
//     .from("collections")
//     .select();

//   if (error) {
//     console.log("Error fetching data:", error.message);
//   }

//   if (error || !collections) {
//     redirect("/");
//   }

//   return collections.map((collection) => {
//     console.log(collection.name);
//     id: collection.id;
//     name: collection.name;
//   });
// }

// export default async function CollectionPage({
//   params: { id, name },
// }: {
//   params: { id: string; name: string };
// }) {
//   const supabase = createClient();
//   const { data: collections, error } = await supabase
//     .from("collections")
//     .select("*")
//     .eq("name", name);

//   return (
//     <div className="wrapper">
//       <h1>Hello world {id}</h1>
//       <h1>{name}</h1>
//     </div>
//   );
// }

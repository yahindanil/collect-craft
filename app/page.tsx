import { Button } from "@/components/ui/button";
import Link from "next/link";
import Username from "./components/Username";
import CreateCollectionButton from "./components/CreateCollectionButton";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="flex justify-end pt-[40px] mb-[30px]">
        <Username />
      </div>
      <div>
        <CreateCollectionButton />
      </div>
    </main>
  );
}

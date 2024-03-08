import { Button } from "@/components/ui/button";
import Link from "next/link";
import Username from "./components/unername";
import CreateCollectionButton from "./components/CreateCollectionButton";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="flex justify-between items-center pt-[40px] mb-[30px]">
        <Link href={"/login"}>
          <Button variant="outline">Login</Button>
        </Link>
        <Link href={"/profile"}>
          <Username />
        </Link>
      </div>
      <div>
        <CreateCollectionButton />
      </div>
    </main>
  );
}

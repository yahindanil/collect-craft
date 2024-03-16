import { Button } from "@/components/ui/button";
import Link from "next/link";
import Username from "./components/Username";
import CreateCollectionButton from "./components/collections/CreateCollectionButton";
import CollectionsList from "./components/collections/CollectionsList";
import NavMenu from "./components/navMenu/NavMenuClint";

export default function Home() {
  return (
    <div>
      <header className="wrapper"></header>
      <main className="wrapper">
        {/* <div className="flex justify-end pt-[40px] mb-[30px]">
        <Username />
      </div> */}
        <div className="mb-5">
          <CreateCollectionButton />
        </div>
        <div>
          <CollectionsList />
        </div>
      </main>
    </div>
  );
}

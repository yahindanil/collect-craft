import { Button } from "@/components/ui/button";
import Link from "next/link";
import Username from "./components/Username";
import CreateCollectionButton from "./components/CreateCollectionButton";
import CollectionsList from "./components/CollectionsList";
import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <div>
      <header className="wrapper">
        <NavMenu />
      </header>
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

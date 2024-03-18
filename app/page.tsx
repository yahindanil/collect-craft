import React from "react";
import CollectionsList from "./components/collections/CollectionsList";
import LatestItems from "./components/LatestItems";

export default async function Home() {
  return (
    <div>
      <header className="wrapper"></header>
      <main className="wrapper">
        <div>
          <LatestItems />
        </div>
      </main>
    </div>
  );
}

import React from "react";
import LatestItems from "./components/LastItems/LatestItems";
import BiggestCollections from "./components/BiggestCollections";

export default async function Home() {
  return (
    <div>
      <header className="wrapper"></header>
      <main className="wrapper">
        <div>
          <BiggestCollections />
          <LatestItems />
        </div>
      </main>
    </div>
  );
}

import React from "react";
import LatestItemsList from "./components/LastItems/LatestItemsList";
import BiggestCollections from "./components/BiggestCollections";

export default async function Home() {
  return (
    <div>
      <header className="wrapper"></header>
      <main className="wrapper">
        <div className="md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          <BiggestCollections />
          <LatestItemsList />
        </div>
      </main>
    </div>
  );
}

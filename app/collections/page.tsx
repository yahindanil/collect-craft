import React from "react";
import CollectionsList from "../components/collections/CollectionsList";
import CollectionCreationButton from "../components/collections/CollectionCreationButton";

export default function page() {
  return (
    <div className="wrapper">
      <div className="md:flex md:items-center">
        <h2 className="text-center mb-4 font-bold text-3xl md:text-left md:mr-auto">
          Collections
        </h2>
        <CollectionCreationButton />
      </div>
      <CollectionsList />
    </div>
  );
}

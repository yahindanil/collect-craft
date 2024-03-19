import React from "react";

export default function CollectionNameClient({
  collectionName,
}: {
  collectionName: any;
}) {
  if (!collectionName) {
    return;
  }

  return <div>{collectionName.name}</div>;
}

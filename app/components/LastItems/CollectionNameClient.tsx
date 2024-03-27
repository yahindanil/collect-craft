import React from "react";

export default function CollectionNameClient({
  collectionName,
}: {
  collectionName: any;
}) {
  if (!collectionName) {
    return;
  }

  return <div className="text-end">{collectionName.name}</div>;
}

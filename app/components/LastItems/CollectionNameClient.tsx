import React from "react";

export default function CollectionNameClient({
  collectionName,
}: {
  collectionName: any;
}) {
  return <div>{collectionName.name}</div>;
}

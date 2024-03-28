import React from "react";

export default function UsernameClient({ username }: { username: string }) {
  if (!username) {
    return;
  }

  return (
    <div className="flex justify-end w-full pr-2 pb-2">
      <p>{username}</p>
    </div>
  );
}

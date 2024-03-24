"use client";

import React, { useState } from "react";

export default function ItemCardImage({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="relative w-[300px] mx-auto mb-5">
      <img
        className="h-auto"
        src={imgUrl}
        alt="Picture of the author"
      />
    </div>
  );
}

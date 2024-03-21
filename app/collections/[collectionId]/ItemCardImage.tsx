"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ItemCardImage({ imgUrl }: { imgUrl: string }) {
  const myLoader = ({ src }: { src: any }) => {
    return `${imgUrl}`;
  };

  return (
    <div>
      <Image
        priority
        unoptimized={true}
        loader={myLoader}
        src={imgUrl}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}

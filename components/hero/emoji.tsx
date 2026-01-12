'use client';

import Image from "next/image";
import { useState } from "react";

export default function Emoji() {
    const [index, setIndex] = useState(1);

  const randomEmoji = () => {
      setIndex(Math.floor(Math.random() * 7 + 1));
  };

  return (
    <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
      <Image
        onClick={() => randomEmoji()}
        src={`/emojis/${index}.png`} 
        alt="waving hand"
        fill
        sizes="20px"
        className="object-contain cursor-pointer"
      />
    </span>
  );
}

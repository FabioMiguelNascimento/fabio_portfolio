"use client";

import Image from "next/image";
import { useState } from "react";

export default function Emoji() {
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const randomEmoji = () => {
    setIsAnimating(true);
    setIndex(Math.floor(Math.random() * 7 + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
      <Image
        style={{
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: isAnimating
            ? "scale(1.5) rotate(15deg)"
            : "scale(1) rotate(0deg)",
        }}
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

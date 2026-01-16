"use client";

import React from "react";

type TransProps = {
  text: string;
  components?: {
    strong?: (children: React.ReactNode) => React.ReactElement;
  };
};

export function Trans({ text, components = {} }: TransProps) {
  // Parse only <strong>...</strong> tags for now
  const segments: Array<{ text: string; strong?: boolean }> = [];
  const regex = /<strong>(.*?)<\/strong>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const idx = match.index;
    if (idx > lastIndex) segments.push({ text: text.slice(lastIndex, idx) });
    segments.push({ text: match[1], strong: true });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex) });

  return (
    <>
      {segments.map((seg, i) =>
        seg.strong ? (
          components.strong ? (
            components.strong(seg.text)
          ) : (
            <strong key={i} className="font-bold">
              {seg.text}
            </strong>
          )
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

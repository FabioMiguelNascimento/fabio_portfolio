"use client";

import { useEffect, useState } from 'react';
import StampRender from './stamp-render';
import { AVAILABLE_STAMPS } from './stamps.registry';

interface StampsCyclerProps {
  interval?: number;
  className?: string;
}

export default function StampsCycler({ interval = 1200, className = '' }: StampsCyclerProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!AVAILABLE_STAMPS.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % AVAILABLE_STAMPS.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 320);
    return () => clearTimeout(t);
  }, [index]);

  const stamp = AVAILABLE_STAMPS[index];
  if (!stamp) return null;

  const style: React.CSSProperties = {
    transition: 'transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isAnimating ? 'scale(1.25) rotate(8deg)' : 'scale(1) rotate(0deg)'
  };

  return (
    <span aria-hidden className={`inline-flex items-center justify-center ml-3 ${className}`}>
      <span key={stamp.id} className="inline-flex w-10 h-10 items-center justify-center overflow-hidden leading-none" style={style}>
        <StampRender id={stamp.id} />
      </span>
    </span>
  );
}

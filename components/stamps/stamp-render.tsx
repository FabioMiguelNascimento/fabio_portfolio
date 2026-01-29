"use client";

import React from 'react';
import { cn } from '../../lib/utils';
import { getIconComponent } from '../icons';
import { STAMP_REGISTRY } from './stamps.registry';

interface StampRenderProps {
  id: string; 
  rotation?: number;
}

export function StampRender({ id, rotation = 0, className, ...rest }: StampRenderProps & React.ComponentProps<"div">) {
  const config = STAMP_REGISTRY[id];
  if (!config) return null;

  const style: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    mixBlendMode: 'multiply',
  };

  if (config.type === 'icon') {
    const iconEl = getIconComponent(config.iconKey);

    return (
      <div
        style={style}
        {...rest}
        className={cn(
          "inline-flex items-center justify-center w-10 h-10 rounded-none bg-transparent opacity-90 [&_svg]:w-6 [&_svg]:h-6",
          config.color,
          className
        )}
      >
        {iconEl}
      </div>
    );
  }

  if (config.type === 'emoji') {
    return (
      <div
        style={style}
        {...rest}
        className={cn("inline-flex items-center justify-center w-10 h-10 select-none filter sepia-[0.4] opacity-90 cursor-default text-2xl", className)}
      >
        {config.content}
      </div>
    );
  }

  if (config.type === 'text') {
    return (
      <div
        style={style}
        {...rest}
        className={cn("inline-flex items-center justify-center h-7 px-2 text-xs font-black border-2 border-stone-800 text-stone-900 rounded-[2px] leading-none font-mono tracking-tighter uppercase opacity-80 whitespace-nowrap", className)}
      >
        {config.content}
      </div>
    );
  }

  return null;
}

export default StampRender;
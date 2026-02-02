"use client";

import React from 'react';
import { cn } from '../../lib/utils';
import { getIconComponent } from '../icons';
import { STAMP_REGISTRY } from './stamps.registry';

interface StampRenderProps {
  id: string; 
  rotation?: number;
}

const StampRenderInner = ({ id, rotation = 0, className, ...rest }: StampRenderProps & React.ComponentProps<"div">, ref: React.ForwardedRef<HTMLDivElement>) => {
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
        ref={ref}
        style={style}
        {...rest}
        className={cn(
          "inline-flex items-center justify-center w-10 h-10 rounded-none bg-transparent [&_svg]:w-6 [&_svg]:h-6",
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
        ref={ref}
        style={style}
        {...rest}
        className={cn("inline-flex items-center justify-center w-10 h-10 select-none filter cursor-default text-2xl", className)}
      >
        {config.content}
      </div>
    );
  }

  if (config.type === 'text') {
    return (
      <div
        ref={ref}
        style={style}
        {...rest}
        className={cn("inline-flex items-center justify-center h-7 px-2 text-xs font-black border-2 border-stone-800 rounded-[2px] leading-none font-mono tracking-tighter uppercase whitespace-nowrap", className)}
      >
        {config.content}
      </div>
    );
  }

  return null;
}

export const StampRender = React.forwardRef(StampRenderInner);
export default StampRender;
"use client";

import type { Node, NodeProps } from '@xyflow/react';
import StampRender from './stamp-render';

export type StampNodeData = {
  stampId: string;
  rotation?: number;
};

export default function StampNode({ data }: NodeProps<Node<StampNodeData>>) {
  if (!data) return null;
  return <StampRender id={data.stampId} rotation={data.rotation ?? 0} />;
}
  
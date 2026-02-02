"use client";
import { Background, ControlButton, Controls, ReactFlow, type Node, type NodeTypes, type OnInit, type OnNodesChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FiZap } from 'react-icons/fi';

import { isMobile } from '@/lib/device';
import { useDroppable } from "@dnd-kit/core";
import React from 'react';
import type { StampNodeData } from './stamp-node';

type StampsCanvasProps = {
  nodes: Node<StampNodeData>[];
  onNodesChange: OnNodesChange<Node<StampNodeData>>;
  onInit: OnInit<Node<StampNodeData>>;
  nodeTypes: NodeTypes;
  wrapperRef?: React.RefObject<HTMLDivElement | null>;
  overlay?: React.ReactNode;
  interactive?: boolean;
  enablePan?: boolean;
  onToggleInteractive?: () => void;
};

export default function StampsCanvas({ nodes, onNodesChange, onInit, nodeTypes, wrapperRef, overlay, interactive = true, enablePan = false, onToggleInteractive }: StampsCanvasProps) {
  const { setNodeRef } = useDroppable({
    id: "stamps-canvas",
  });

  const setRefs = React.useCallback((node: HTMLDivElement | null) => {
    setNodeRef(node);
    if (wrapperRef) wrapperRef.current = node;
  }, [setNodeRef, wrapperRef]);

  return (
    <div
      ref={setRefs}
      style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', height: "90dvh", touchAction: 'pan-y' as const }}
    >
      <ReactFlow
        className="w-full h-full border-y-2"
        fitView
        maxZoom={1}
        minZoom={1}
        preventScrolling={false}
        panOnDrag={interactive && (!isMobile() || Boolean(enablePan))}
        zoomOnScroll={interactive}
        zoomOnPinch={interactive}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onInit={onInit}
        nodeTypes={nodeTypes}
      >
        <Background />
        {isMobile() &&
          <Controls showInteractive={false} showZoom={false}>
            <ControlButton className="sm:hidden" onClick={() => onToggleInteractive?.()} aria-label="toggle-interactive" aria-pressed={interactive} title={interactive ? 'Interatividade: On' : 'Interatividade: Off'}>
              <FiZap className={"h-4 w-4 " + (interactive ? 'text-emerald-400' : 'text-foreground')} />
            </ControlButton>
          </Controls>
        }
      </ReactFlow>
      {overlay}
    </div>
  );
}
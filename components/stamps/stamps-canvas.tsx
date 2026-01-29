"use client";
import { Background, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function StampsCanvas() {
  return (
    <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', height: "90dvh"}}>
        <ReactFlow
          className="w-full h-full border-y-2"
          fitView
          maxZoom={1}
          minZoom={1}
          preventScrolling={false}
        >
          <Background />
        </ReactFlow>
    </div>
  );
}
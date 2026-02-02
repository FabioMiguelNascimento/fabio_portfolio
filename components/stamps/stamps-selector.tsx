"use client";

import { useDraggable } from "@dnd-kit/core";
import StampRender from "./stamp-render";
import { AVAILABLE_STAMPS } from "./stamps.registry";

type StampsSelectorProps = {
    disabled?: boolean;
};

export default function StampsSelector({ disabled }: StampsSelectorProps) {
    function StampItem({ stamp, disabled }: { stamp: typeof AVAILABLE_STAMPS[number]; disabled?: boolean }) {
        const { setNodeRef, attributes, listeners } = useDraggable({
            id: stamp.id,
            disabled: disabled || !stamp.id,
        });

        return (
            <StampRender
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                draggable={!disabled}
                onDragStart={(e) => {
                    if (disabled) return;
                    e.dataTransfer?.setData("application/stamp", stamp.id);
                    if (e.dataTransfer) e.dataTransfer.effectAllowed = "copy";
                }}
                key={stamp.id}
                id={stamp.id}
                style={{ touchAction: disabled ? undefined : 'none' }}
                className={
                    disabled
                        ? "cursor-not-allowed select-none opacity-50"
                        : "cursor-pointer select-none touch-none"
                }
            />
        );
    }

    return (
        <div className="p-4 border gap-2 flex flex-wrap bg-background">
            {AVAILABLE_STAMPS.map((stamp) => (
                <StampItem key={stamp.id} stamp={stamp} disabled={disabled} />
            ))}
        </div>
    );
}
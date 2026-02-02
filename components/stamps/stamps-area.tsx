"use client"

import { addStamp, getAllStamps, getVisitorStamp } from '@/actions/stamps'
import { Button } from '@/components/ui/button'
import { isMobile } from '@/lib/device'
import { Stamp } from '@/prisma/generated/client'
import { DndContext, DragOverlay, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core"
import { useNodesState, type Node, type NodeTypes, type ReactFlowInstance } from '@xyflow/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import StampNode, { type StampNodeData } from './stamp-node'
import StampRender from "./stamp-render"
import StampsCanvas from "./stamps-canvas"
import StampsSelector from "./stamps-selector"

const getClientStartPoint = (event: DragEndEvent): { x: number; y: number } | null => {
    const e = event.activatorEvent as MouseEvent | TouchEvent | undefined
    if (!e) return null

    if ('changedTouches' in e && e.changedTouches.length > 0) {
        return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
    }

    if ('clientX' in e && 'clientY' in e) {
        return { x: e.clientX, y: e.clientY }
    }

    return null
}

const getClientDropPoint = (event: DragEndEvent): { x: number; y: number } | null => {
    const start = getClientStartPoint(event)
    if (!start) return null

    return {
        x: start.x + event.delta.x,
        y: start.y + event.delta.y,
    }
}

export default function StampsArea() {
    const [activeId, setActiveId] = useState<string | null>(null)
    const [hasPublished, setHasPublished] = useState(false)
    const [isPublishing, setIsPublishing] = useState(false)
    const [confirmError, setConfirmError] = useState<string | null>(null)
    const [pending, setPending] = useState<null | {
        stampId: string
        rotation: number
        flowPosition: { x: number; y: number }
        clientPosition: { x: number; y: number }
    }>(null)

    type StampNodeType = Node<StampNodeData>
    const [nodes, setNodes, onNodesChange] = useNodesState<StampNodeType>([])
    const [rf, setRf] = useState<ReactFlowInstance<StampNodeType> | null>(null)
    const canvasRef = useRef<HTMLDivElement | null>(null)
    const [canvasRect, setCanvasRect] = useState<DOMRect | null>(null)

    const [interactive, setInteractive] = useState<boolean>(() => !isMobile())
    const [allowPan, setAllowPan] = useState<boolean>(false)

    const nodeTypes = useMemo<NodeTypes>(() => ({ stamp: StampNode as NodeTypes[string] }), [])

    const buildStampNode = useCallback((id: string, position: { x: number; y: number }, rotation: number, nodeId?: string): StampNodeType => {
        return {
            id: nodeId ?? `stamp-${id}-${Date.now()}`,
            type: 'stamp',
            position,
            data: { stampId: id, rotation },
            draggable: false,
            selectable: false,
        }
    }, [])

    const mapDbStampToNode = useCallback((stamp: Stamp) => {
        return buildStampNode(stamp.stampId, { x: stamp.x, y: stamp.y }, stamp.rotation ?? 0, `db-${stamp.id}`)
    }, [buildStampNode])

    useEffect(() => {
        let mounted = true

        Promise.all([getAllStamps(), getVisitorStamp()]).then(([stamps, visitorStamp]) => {
            if (!mounted) return
            setNodes(stamps.map(mapDbStampToNode))
            setHasPublished(Boolean(visitorStamp))
        })

        return () => {
            mounted = false
        }
    }, [mapDbStampToNode, setNodes])

    useEffect(() => {
        if (!pending) return

        const rect = canvasRef.current?.getBoundingClientRect() ?? null
        const raf = requestAnimationFrame(() => setCanvasRect(rect))

        const onResize = () => requestAnimationFrame(() => setCanvasRect(canvasRef.current?.getBoundingClientRect() ?? null))
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
            cancelAnimationFrame(raf)
        }
    }, [pending])

    const handleDragStart = useCallback((event: DragStartEvent) => {
        if (hasPublished) return
        if (pending) return
        setActiveId(String(event.active.id))
    }, [hasPublished, pending])

    const handleDragCancel = useCallback(() => {
        setActiveId(null)
    }, [])

    const confirmPublish = useCallback(async () => {
        if (!pending || isPublishing) return

        setIsPublishing(true)
        const { stampId, rotation, flowPosition } = pending

        const result = await addStamp({
            stampId,
            x: Math.round(flowPosition.x),
            y: Math.round(flowPosition.y),
            rotation,
            scale: 1,
        })

        if (result?.success) {
            const node = buildStampNode(stampId, flowPosition, rotation)
            setNodes((prev) => [...prev, node])
            setHasPublished(true)
            setPending(null)
        } else {
            setConfirmError("Você já publicou um carimbo. Esta ação é única.")
        }

        setIsPublishing(false)
    }, [pending, isPublishing, buildStampNode, setNodes])

    const cancelPublish = useCallback(() => {
        if (isPublishing) return
        setPending(null)
        setConfirmError(null)
    }, [isPublishing])

    const overlay = useMemo(() => {
        if (!pending || !canvasRect) return null

        const CUTOUT_SIZE = 72
        const WARNING_W = 260
        const WARNING_H = 120
        const GAP = 16

        const { width, height } = canvasRect
        const center = pending.clientPosition

        const spaceRight = width - center.x
        const spaceLeft = center.x
        const spaceBottom = height - center.y
        const spaceTop = center.y

        let left = center.x + GAP
        let top = center.y - WARNING_H / 2

        if (spaceRight < WARNING_W + GAP && spaceLeft >= WARNING_W + GAP) {
            left = center.x - WARNING_W - GAP
        } else if (spaceRight < WARNING_W + GAP && spaceLeft < WARNING_W + GAP) {
            if (spaceBottom >= WARNING_H + GAP) {
                left = center.x - WARNING_W / 2
                top = center.y + GAP
            } else if (spaceTop >= WARNING_H + GAP) {
                left = center.x - WARNING_W / 2
                top = center.y - WARNING_H - GAP
            }
        }

        left = Math.max(12, Math.min(left, width - WARNING_W - 12))
        top = Math.max(12, Math.min(top, height - WARNING_H - 12))

        return (
            <div className="absolute inset-0 z-50 pointer-events-none">
                <div
                    className="absolute border-2 border-dashed border-white/80"
                    style={{
                        width: CUTOUT_SIZE,
                        height: CUTOUT_SIZE,
                        left: center.x - CUTOUT_SIZE / 2,
                        top: center.y - CUTOUT_SIZE / 2,
                        boxShadow: "0 0 0 9999px rgba(0,0,0,0.6)",
                    }}
                />

                <div
                    className="absolute"
                    style={{
                        left: center.x,
                        top: center.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div style={{ pointerEvents: 'none' }}>
                        <StampRender id={pending.stampId} rotation={pending.rotation} />
                    </div>
                </div>

                <div
                    className="absolute bg-background text-foreground border shadow-lg rounded-md p-3 w-[260px]"
                    style={{ left, top, pointerEvents: 'auto' }}
                >
                    <div className="text-sm font-semibold">Publicar carimbo?</div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Essa ação é permanente e a posição/tipo não poderá ser alterada.
                    </p>
                    {confirmError ? (
                        <p className="text-xs text-destructive mt-2">{confirmError}</p>
                    ) : null}
                    <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="outline" onClick={cancelPublish} disabled={isPublishing}>Cancelar</Button>
                        <Button size="sm" onClick={confirmPublish} disabled={isPublishing}>Publicar</Button>
                    </div>
                </div>
            </div>
        )
    }, [pending, canvasRect, confirmError, isPublishing, cancelPublish, confirmPublish])

    const handleDragEnd = useCallback(async (event: DragEndEvent) => {
        const { over, active } = event
        setActiveId(null)

        if (!rf || !over || over.id !== 'stamps-canvas') return
        if (hasPublished) return
        if (pending) return

        const point = getClientDropPoint(event)
        if (!point) return

        const position = rf.screenToFlowPosition(point)
        const id = String(active.id)
        const rotation = Math.floor(Math.random() * 41) - 20

        const canvasRect = canvasRef.current?.getBoundingClientRect()
        if (!canvasRect) return

        const clientPosition = {
            x: point.x - canvasRect.left,
            y: point.y - canvasRect.top,
        }

        setConfirmError(null)
        setPending({ stampId: id, rotation, flowPosition: position, clientPosition })
    }, [rf, hasPublished, pending])

    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <StampsSelector disabled={hasPublished || Boolean(pending)} />

            <StampsCanvas
                nodes={nodes}
                onNodesChange={onNodesChange}
                onInit={setRf}
                nodeTypes={nodeTypes}
                wrapperRef={canvasRef}
                overlay={overlay}
                interactive={interactive}
                enablePan={allowPan}
                onToggleInteractive={() => setInteractive((v) => {
                    const nv = !v
                    if (nv && isMobile()) setAllowPan(true)
                    return nv
                })}
            />



            <DragOverlay>
                {activeId ? <StampRender id={activeId} /> : null}
            </DragOverlay>
        </DndContext>
    )
}
import { CanvasHTMLAttributes, useEffect, useRef } from "react"

export default function StampsCanvas {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {

        const canvas = canvasRef.current
        
        if(canvas) {
            const context = canvas.getContext('2d')!
            draw(context)
        }

    }, [draw])

    return (
        <canvas ref={canvasRef} />
    )
}
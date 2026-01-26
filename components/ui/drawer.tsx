"use client"

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragY, setDragY] = useState(0)
  const [startY, setStartY] = useState(0)

  useEffect(() => {
    console.log('[Drawer] isOpen ->', isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartY(e.touches[0].clientY)
    setDragY(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const currentY = e.touches[0].clientY
    const deltaY = Math.max(0, currentY - startY)
    setDragY(deltaY)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    if (dragY > 120) {
      onClose()
    } else {
      setDragY(0)
    }
  }

  if (!isOpen) return null

  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  const computedMaxHeight = isDragging ? Math.max(140, viewportHeight * 0.9 - dragY) : undefined

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-x-hidden">
      <div 
        className="fixed inset-0 bg-black/500 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        ref={drawerRef}
        className="fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col bg-background border-t rounded-t-lg max-h-[90vh] animate-in-from-bottom transition-transform duration-200 ease-out"
        style={{ 
          transform: `translateY(${dragY}px)`,
          transition: isDragging ? 'none' : 'transform 0.2s ease-out, max-height 0.2s ease-out',
          maxHeight: computedMaxHeight ? `${computedMaxHeight}px` : undefined
        }}
      >
        <div 
          className="flex justify-center pt-3 pb-2 touch-none select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={`w-12 h-1 rounded-full bg-black duration-150 `}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
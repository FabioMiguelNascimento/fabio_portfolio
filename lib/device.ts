// Client-side helpers to detect mobile / touch devices and listen for changes
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false

  try {
    const mqSmall = window.matchMedia('(max-width: 640px)')
    const mqCoarse = window.matchMedia('(pointer: coarse)')
    const hasTouch = 'ontouchstart' in window || (navigator && (navigator as any).maxTouchPoints > 0)
    
    // Chrome mobile específico - verificar user agent como fallback
    const userAgent = navigator.userAgent || ''
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    const isChromeAndroid = /Chrome/.test(userAgent) && /Android/.test(userAgent)

    return !!(mqSmall.matches || mqCoarse.matches || hasTouch || isMobileUA || isChromeAndroid)
  } catch (e) {
    return false
  }
}

// Calls callback with new boolean value when the viewport crosses the 640px breakpoint.
export function onMobileChange(cb: (isMobileNow: boolean) => void) {
  if (typeof window === 'undefined') return () => {}

  const mq = window.matchMedia('(max-width: 640px)')
  const handler = (e: MediaQueryListEvent) => cb(e.matches)

  if (mq.addEventListener) {
    mq.addEventListener('change', handler as any)
    return () => mq.removeEventListener('change', handler as any)
  }

  // fallback for older browsers
  if ((mq as any).addListener) {
    ;(mq as any).addListener(handler as any)
    return () => (mq as any).removeListener(handler as any)
  }

  return () => {}
}
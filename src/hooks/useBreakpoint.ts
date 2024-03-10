'use client'
import { useEffect, useRef, useState } from 'react'
import { useThrottledCallback } from 'use-debounce'

type Breakpoint = 'desktop' | 'tablet' | 'mobile'

const TABLET_MIN_WIDTH = 768
const LAPTOP_MIN_WIDTH = 1200

// const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;
const getWindowWidth = () => {
  if (typeof window === 'undefined') return 0
  return window.innerWidth
}
const getBreakpoint = () => {
  const windowWidth = getWindowWidth()
  if (windowWidth === 0) return null
  if (windowWidth < TABLET_MIN_WIDTH) return 'mobile'
  if (windowWidth < LAPTOP_MIN_WIDTH) return 'tablet'
  return 'desktop'
}

export const useBreakpoint = () => {
  const prevWidth = useRef(getWindowWidth())
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(
    getBreakpoint(),
  )

  const onResizeWindow = useThrottledCallback(() => {
    const newBreakpoint = getBreakpoint()
    if (newBreakpoint !== breakpoint) {
      setBreakpoint(newBreakpoint)
    }
    prevWidth.current = getWindowWidth()
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', onResizeWindow)
    return () => {
      window.removeEventListener('resize', onResizeWindow)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return breakpoint
}

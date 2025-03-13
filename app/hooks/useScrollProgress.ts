"use client"

import type React from "react"

import { useState, useEffect } from "react"

export function useScrollProgress(containerRef: React.RefObject<HTMLElement>) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth
      const scrolled = container.scrollLeft
      const progress = (scrolled / scrollWidth) * 100
      setScrollProgress(progress)
      container.style.setProperty("--scroll-progress", `${progress}%`)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [containerRef])

  return scrollProgress
}


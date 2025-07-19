"use client"

import { useEffect, useState } from "react"

export function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-5 h-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-sm animate-pulse" />
    </div>
  )
}

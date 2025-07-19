"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  color: string
}

const sparkleColors = [
  "rgba(99, 102, 241, 0.6)", // Indigo
  "rgba(139, 92, 246, 0.6)", // Violet
  "rgba(59, 130, 246, 0.6)", // Blue
  "rgba(16, 185, 129, 0.6)", // Emerald
]

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2,
          delay: Math.random() * 4,
          color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: "3s",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: sparkle.color,
              filter: "blur(0.5px)",
            }}
          />
        </div>
      ))}
    </div>
  )
}

"use client"

import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div >
              <Image
                src="/favicon.png"
                alt="Favicon"
                width={40}
                height={40}
                className="rounded"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Code Humanizer</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Professional Edition</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
            <Zap size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">AI Powered</span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

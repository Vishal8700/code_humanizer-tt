"use client"

import { Heart, Github, Twitter, Coffee, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Code Cleaner & Humanizer</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              Transform your code into clean, human-readable masterpieces while maintaining perfect syntax and
              functionality. Built with precision for developers who care about code quality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Smart comment removal</li>
              <li>• Variable humanization</li>
              <li>• Intelligent spacing</li>
              <li>• Safe code reordering</li>
              <li>• Multi-language support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <button className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-all duration-300">
                <Github size={18} />
              </button>
              <button className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-300">
                <Twitter size={18} />
              </button>
              <button className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-900/30 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-all duration-300">
                <Coffee size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by developers, for developers
          </p>
        </div>
      </div>
    </footer>
  )
}

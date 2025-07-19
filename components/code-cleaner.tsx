"use client"

import { useState } from "react"
import { Copy, Wand2, Settings, Code2, Sparkles, CheckCircle } from "lucide-react"

interface CleaningOptions {
  removeComments: boolean
  humanizeVars: boolean
  varySpacing: boolean
  reorderCode: boolean
}

const languages = [
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "c", label: "C" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "go", label: "Go" },
]

const variableReplacements = {
  i: ["index", "counter", "pos", "iter", "idx"],
  j: ["inner", "col", "step", "jdx", "secondary"],
  k: ["key", "row", "level", "kdx", "tertiary"],
  n: ["size", "length", "count", "total", "num"],
  m: ["limit", "max", "bound", "end", "maximum"],
  x: ["value", "item", "element", "data", "input"],
  y: ["result", "output", "temp", "buffer", "response"],
  z: ["final", "last", "remaining", "extra", "additional"],
  arr: ["items", "elements", "collection", "data_list"],
  str: ["text", "content", "message", "word"],
  num: ["number", "digit", "amount", "quantity"],
  val: ["value", "data", "input", "parameter"],
  res: ["result", "output", "answer", "response"],
  tmp: ["temporary", "buffer", "holder", "cache"],
  len: ["length", "size", "count", "total"],
  sum: ["total", "accumulator", "aggregate", "combined"],
  max: ["maximum", "largest", "peak", "highest"],
  min: ["minimum", "smallest", "lowest", "least"],
}

export function CodeCleaner() {
  const [inputCode, setInputCode] = useState("")
  const [outputCode, setOutputCode] = useState("")
  const [language, setLanguage] = useState("python")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [options, setOptions] = useState<CleaningOptions>({
    removeComments: true,
    humanizeVars: true,
    varySpacing: true,
    reorderCode: true,
  })

  const removeComments = (code: string, lang: string) => {
    if (!options.removeComments) return code

    switch (lang) {
      case "python":
        return code
          .replace(/#.*$/gm, "")
          .replace(/"""[\s\S]*?"""/g, "")
          .replace(/'''[\s\S]*?'''/g, "")
      case "cpp":
      case "java":
      case "javascript":
      case "c":
      case "go":
      case "php":
        return code.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "")
      case "ruby":
        return code.replace(/#.*$/gm, "").replace(/=begin[\s\S]*?=end/g, "")
      default:
        return code
    }
  }

  const humanizeVariables = (code: string) => {
    if (!options.humanizeVars) return code

    let humanized = code
    const usedReplacements = new Set()

    for (const [original, alternatives] of Object.entries(variableReplacements)) {
      const regex = new RegExp(`\\b${original}\\b`, "g")
      if (regex.test(humanized)) {
        let replacement
        do {
          replacement = alternatives[Math.floor(Math.random() * alternatives.length)]
        } while (usedReplacements.has(replacement) && usedReplacements.size < alternatives.length)

        usedReplacements.add(replacement)
        humanized = humanized.replace(new RegExp(`\\b${original}\\b`, "g"), replacement)
      }
    }

    return humanized
  }

  const varySpacing = (code: string) => {
    if (!options.varySpacing) return code

    let varied = code
    const operators = ["<<", ">>", "==", "!=", "<=", ">=", "+", "-", "*", "/", "="]

    operators.forEach((op) => {
      const escapedOp = op.replace(/([+*?^$()[\]{}\\|])/g, "\\$1")
      const patterns = [` ${op} `, `${op}`, ` ${op}`, `${op} `]

      if (Math.random() > 0.5) {
        const pattern = patterns[Math.floor(Math.random() * patterns.length)]
        varied = varied.replace(new RegExp(`\\s*${escapedOp}\\s*`, "g"), pattern)
      }
    })

    return varied
  }

  const reorderStatements = (code: string) => {
    if (!options.reorderCode) return code

    const lines = code.split("\n")
    const result = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i].trim()

      if (
        line &&
        !line.startsWith("if") &&
        !line.startsWith("for") &&
        !line.startsWith("while") &&
        !line.startsWith("def") &&
        !line.startsWith("class") &&
        !line.includes("return")
      ) {
        const group = [lines[i]]
        let j = i + 1

        while (
          j < lines.length &&
          lines[j].trim() &&
          !lines[j].trim().startsWith("if") &&
          !lines[j].trim().startsWith("for") &&
          !lines[j].trim().startsWith("while") &&
          !lines[j].trim().includes("return") &&
          lines[j].indexOf("=") > 0
        ) {
          group.push(lines[j])
          j++
        }

        if (group.length > 1 && Math.random() > 0.5) {
          for (let k = group.length - 1; k > 0; k--) {
            const randomIndex = Math.floor(Math.random() * (k + 1))
            ;[group[k], group[randomIndex]] = [group[randomIndex], group[k]]
          }
        }

        result.push(...group)
        i = j
      } else {
        result.push(lines[i])
        i++
      }
    }

    return result.join("\n")
  }

  const cleanCode = async () => {
    if (!inputCode.trim()) {
      alert("Please enter some code to clean!")
      return
    }

    setIsProcessing(true)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    let cleaned = inputCode
    cleaned = removeComments(cleaned, language)
    cleaned = humanizeVariables(cleaned)
    cleaned = varySpacing(cleaned)
    cleaned = reorderStatements(cleaned)
    cleaned = cleaned
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/^\s*\n/, "")
      .replace(/\n\s*$/, "")

    setOutputCode(cleaned)
    setIsProcessing(false)
  }

  const copyOutput = async () => {
    if (!outputCode) return

    await navigator.clipboard.writeText(outputCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Options Panel */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cleaning Configuration</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(options).map(([key, value]) => (
            <label
              key={key}
              className="flex items-center gap-3 cursor-pointer group p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-300"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setOptions((prev) => ({ ...prev, [key]: e.target.checked }))}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md border-2 transition-all duration-300 ${
                    value ? "bg-indigo-500 border-indigo-500" : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {value && <CheckCircle className="w-3 h-3 text-white absolute top-0.5 left-0.5" />}
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {key === "removeComments" && "Remove Comments"}
                {key === "humanizeVars" && "Humanize Variables"}
                {key === "varySpacing" && "Vary Spacing"}
                {key === "reorderCode" && "Reorder Code"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Original Code</h3>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <textarea
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full h-96 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl font-mono text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
            />
            {inputCode && (
              <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-md">
                {inputCode.split("\n").length} lines
              </div>
            )}
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cleaned Code</h3>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              Syntax preserved
            </span>
          </div>

          <div className="relative">
            <textarea
              value={outputCode}
              readOnly
              placeholder="Cleaned code will appear here..."
              className="w-full h-96 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl font-mono text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none shadow-sm"
            />

            {outputCode && (
              <>
                <div className="absolute top-3 right-16 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded-md">
                  {outputCode.split("\n").length} lines
                </div>
                <button
                  onClick={copyOutput}
                  className={`absolute top-3 right-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    copied
                      ? "bg-emerald-500 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-sm"
                  }`}
                >
                  <Copy size={16} className="inline mr-2" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Clean Button */}
      <div className="text-center">
        <button
          onClick={cleanCode}
          disabled={isProcessing || !inputCode.trim()}
          className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
        >
          {isProcessing ? (
            <>
              <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Processing...
            </>
          ) : (
            <>
              <Wand2 className="inline mr-3" size={20} />
              Clean & Humanize Code
            </>
          )}
        </button>
      </div>
    </div>
  )
}

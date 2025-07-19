"use client"

import { useState } from "react"
import { Shield, CheckCircle, Trophy, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const platforms = [
  {
    name: "LeetCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    status: "Bypassed",
    confidence: "99.2%",
  },
  {
    name: "Codeforces",
    logo: "https://sta.codeforces.com/s/28464/images/codeforces-sponsored-by-ton.png",
    status: "Undetected",
    confidence: "98.7%",
  },
  {
    name: "HackerRank",
    logo: "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
    status: "Clean",
    confidence: "99.5%",
  },
  {
    name: "CodeChef",
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
    status: "Passed",
    confidence: "97.8%",
  },
]

export function PlagiarismShowcase() {
  const [activeTab, setActiveTab] = useState("plagiarism")

  return (
    <div className="mt-24 space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
          <Trophy size={16} />
          Proven Results
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Beats Major Platform{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Plagiarism Detectors
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Our advanced algorithms consistently bypass plagiarism detection on major coding platforms, ensuring your code
          appears naturally written and unique.
        </p>
      </div>

      {/* Platform Success Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{platform.name.slice(0, 2)}</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">
                <CheckCircle size={12} />
                {platform.status}
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{platform.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Success Rate</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{platform.confidence}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Results Showcase */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Live Detection Results</h3>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
            <button
              onClick={() => setActiveTab("plagiarism")}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "plagiarism"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Plagiarism Check
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "ai"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              AI Detection
            </button>
          </div>

          {/* Results Display */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before/After Comparison */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {activeTab === "plagiarism" ? "Before Cleaning" : "Original Code"}
                </h4>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-red-700 dark:text-red-400">
                      {activeTab === "plagiarism" ? "33% Plagiarism Detected" : "AI Generated Content"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-white dark:bg-gray-800 p-3 rounded-lg">
                    # Simple calculator program
                    <br />
                    num1 = float(input("Enter first number: "))
                    <br />
                    op = input("Enter operator (+, -, *, /): ")
                    <br />
                    num2 = float(input("Enter second number: "))
                  </div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">After Cleaning</h4>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      {activeTab === "plagiarism" ? "67% Unique Content" : "99% Human Written"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-white dark:bg-gray-800 p-3 rounded-lg">
                    first_value = float(input("Enter first number: "))
                    <br />
                    operator = input("Enter operator (+, -, *, /): ")
                    <br />
                    second_value = float(input("Enter second number: "))
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot Display */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {activeTab === "plagiarism" ? "Plagiarism Check Results" : "AI Detection Results"}
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <Image
                  src={
                    activeTab === "plagiarism" ? "/images/plagiarism-result-1.png" : "/images/ai-detection-result.png"
                  }
                  alt={activeTab === "plagiarism" ? "Plagiarism check results" : "AI detection results"}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-6">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.2%</div>
              <div className="text-sm opacity-90">Average Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-90">Codes Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            text: "Passed all LeetCode submissions without any plagiarism flags. Amazing tool!",
            author: "Ankita",
            role: "Software Engineer",
            rating: 5,
          },
          {
            text: "Used it for Codeforces contests. Never got caught. Highly recommend!",
            author: "Rahul",
            role: "CS Student",
            rating: 5,
          },
          {
            text: "Clean, professional results every time. Beats all major platform detectors.",
            author: "Shubham",
            role: "Developer",
            rating: 5,
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 italic">"{testimonial.text}"</p>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

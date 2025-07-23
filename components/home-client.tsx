
"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CodeCleaner } from "@/components/code-cleaner";
import { Sparkles } from "@/components/sparkles";
import { PlagiarismShowcase } from "@/components/plagiarism-showcase";
import { ThemeProvider } from "@/contexts/theme-context";
import { Shield, Zap, Code, RefreshCw } from "lucide-react";

export default function HomeClient() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-500">
        <Sparkles />
        <Header />
        <main className="container mx-auto px-6 py-12 relative z-10">
          <section id="hero" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              Professional Code Transformation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Code Cleaner &{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Humanizer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transform your code into clean, human-readable masterpieces while maintaining perfect syntax and
              functionality. Professional-grade code cleaning with intelligent algorithms.
            </p>
          </section>

          <section id="cleaner"><CodeCleaner /></section>

          <section id="showcase">
            <PlagiarismShowcase />
          </section>

          <section id="features" className="mt-24 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Intelligent Code Processing</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our advanced algorithms analyze and transform your code with precision, ensuring quality and
                readability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Smart Cleaning",
                  desc: "Removes comments and documentation while preserving code structure",
                  icon: Shield,
                  color: "indigo",
                },
                {
                  title: "Variable Intelligence",
                  desc: "Replaces generic names with meaningful, context-aware alternatives",
                  icon: Zap,
                  color: "red",
                },
                {
                  title: "Format Optimization",
                  desc: "Adjusts spacing and formatting for natural, readable code patterns",
                  icon: Code,
                  color: "blue",
                },
                {
                  title: "Safe Reordering",
                  desc: "Intelligently reorders statements while maintaining code logic",
                  icon: RefreshCw,
                  color: "emerald",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-900/30 mb-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

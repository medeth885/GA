"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Sparkles, Star } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/hooks/useTheme"

interface GreenIntroProps {
  onComplete?: () => void
  duration?: number
}

// Custom hook for typing animation - simplified and more reliable
function useTypewriter(text: string, speed = 50, delay = 0, shouldStart = true) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!shouldStart) {
      setDisplayText("")
      setIsComplete(false)
      return
    }

    const timeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay, shouldStart])

  return { displayText, isComplete }
}

export default function GreenIntro({ onComplete, duration = 4000 }: GreenIntroProps) {
  const { isDark } = useTheme()
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showMainContent, setShowMainContent] = useState(false)
  const [animationsStarted, setAnimationsStarted] = useState(false)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const [ledDisplayActive, setLedDisplayActive] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Simplified loading simulation
  useEffect(() => {
    if (prefersReducedMotion) {
      setLoadingProgress(100)
      setShowMainContent(true)
      setAnimationsStarted(true)
      setLedDisplayActive(true)
      return
    }

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    return () => clearInterval(interval)
  }, [duration, prefersReducedMotion])

  // Handle loading completion and LED activation
  useEffect(() => {
    if (loadingProgress === 100) {
      const timer = setTimeout(() => {
        setShowMainContent(true)
        setLedDisplayActive(true) // Activate LED display when main content shows
        setTimeout(() => setAnimationsStarted(true), 300)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [loadingProgress])

  // Auto-complete after duration
  useEffect(() => {
    if (showMainContent) {
      const timer = setTimeout(() => {
        onComplete?.()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [showMainContent, duration, onComplete])

  // Typing animations
  const titleAnimation = useTypewriter("GREAN WORLD", 120, 500, animationsStarted)
  const taglineAnimation = useTypewriter(
    "Pioneering Ethiopia's Sustainable Energy Revolution",
    60,
    2000,
    animationsStarted,
  )

  return (
    <section
      id="green-intro"
      style={{ clipPath: "inset(0)" }}
      className="relative h-screen w-full overflow-hidden mb-0"
      role="banner"
      aria-label="GREAN WORLD Introduction"
    >
      {/* Loading Screen */}
      <AnimatePresence>
        {!showMainContent && (
          <motion.div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-colors duration-300 ${
              isDark 
                ? 'bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950' 
                : 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100'
            }`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-[#3DD56D]/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Logo and Company Name */}
            <motion.div
              className="relative z-10 text-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              {/* Logo Container with GREAN Logo */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3DD56D]/30 to-[#2bb757]/30 blur-xl animate-pulse"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    src="/images/grean-logo-icon.png"
                    alt="GREAN WORLD Logo"
                    width={128}
                    height={128}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Company Name */}
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-[#3DD56D]">GREAN</span>
                <span className={`ml-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>WORLD</span>
              </motion.h1>
              <motion.p
                className={`text-sm mt-2 tracking-wide transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                ENERGY TECHNOLOGY
              </motion.p>
            </motion.div>

            {/* Progress Section */}
            <motion.div
              className="relative z-10 w-80 max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {/* Progress Bar */}
              <div className={`w-full rounded-full h-3 mb-4 overflow-hidden shadow-inner transition-colors duration-300 ${
                isDark ? 'bg-slate-800' : 'bg-gray-300'
              }`}>
                <motion.div
                  className="bg-gradient-to-r from-[#3DD56D] to-[#2bb757] h-3 rounded-full shadow-lg"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: "0 0 10px rgba(61, 213, 109, 0.5)",
                  }}
                />
              </div>

              {/* Progress Text */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#3DD56D] font-mono font-semibold">
                  {loadingProgress < 30 && "Initializing Systems..."}
                  {loadingProgress >= 30 && loadingProgress < 60 && "Loading Energy Grid..."}
                  {loadingProgress >= 60 && loadingProgress < 90 && "Connecting Solar Panels..."}
                  {loadingProgress >= 90 && "System Ready!"}
                </span>
                <span className={`font-mono font-bold transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{Math.round(loadingProgress)}%</span>
              </div>
            </motion.div>

            {/* Enhanced Solar Panel Animation */}
            <motion.div
              className="relative z-10 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className={`w-32 h-20 border-2 border-[#3DD56D]/40 rounded-lg relative overflow-hidden backdrop-blur-sm transition-colors duration-300 ${
                isDark ? 'bg-slate-900/50' : 'bg-white/80'
              }`}>
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-0.5 p-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#3DD56D]/60 rounded-sm"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        backgroundColor: [
                          "rgba(61, 213, 109, 0.3)",
                          "rgba(61, 213, 109, 0.8)",
                          "rgba(61, 213, 109, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
                {/* Solar panel reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>
              <p className={`text-xs mt-2 text-center font-mono transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Solar Array Status: Active</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with 3D Spline Scene */}
      <AnimatePresence>
        {showMainContent && (
          <motion.div
            className="relative z-10 transition-opacity duration-700 opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* 3D Spline Scene Background */}
            <div
              className="absolute inset-0 z-20"
              style={{
                opacity: 1,
                transition: "opacity 1s ease-in-out",
                transform: "translateZ(0px)",
                willChange: "opacity, transform",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="spline-container absolute inset-0 w-full h-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                }}
              >
                <iframe
                  src="https://my.spline.design/lightningbulb-a99zBfErB7MdVtQSqhkBD2GB/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  title="Lightning Bulb 3D Animation - Sustainable Energy Innovation"
                  loading="eager"
                  onLoad={() => setSplineLoaded(true)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "transparent",
                    zIndex: 100,
                  }}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>

            {/* Overlay Patterns and Effects */}
            <div className="absolute inset-0 pointer-events-none z-40">
              {/* SVG Pattern Overlay */}
              <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="inverter-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="8" fill="#3DD56D" fillOpacity="0.3" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#inverter-pattern)" />
                </svg>
              </div>

              {/* Gradient Overlay */}
              <div
                style={{
                  background:
                    "linear-gradient(to right, rgba(61, 213, 109, 0.8) 0%, rgba(61, 213, 109, 0.4) 30%, transparent 50%)",
                }}
                className="absolute inset-0 z-0 pointer-events-none"
              />
            </div>

            {/* Header Logo */}
            <div className="absolute top-0 left-0 z-[100] pt-6 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-start">
                <motion.div
                  style={{ opacity: 1, transform: "none" }}
                  className="flex-shrink-0 items-center gap-3 relative z-[101]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div
                        className="logo-container relative mr-3"
                        tabIndex={0}
                        style={{ transform: "none", opacity: 1 }}
                      >
                        <div className="logo-glow-effect" />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 logo-spin z-[102]">
                          <Image
                            src="/images/grean-logo-icon.png"
                            alt="GREAN WORLD Logo"
                            width={48}
                            height={48}
                            className="object-contain relative z-[103]"
                            priority
                          />
                        </div>
                      </div>
                      <div style={{ opacity: 1, transform: "none" }}>
                        <div className="flex flex-col relative z-[102]">
                          <div className="flex items-center">
                            <span className="text-[#3DD56D] text-xl sm:text-2xl font-bold tracking-wide drop-shadow-lg">
                              GREAN
                            </span>
                            <span className={`text-xl sm:text-2xl font-bold tracking-wide ml-1 drop-shadow-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                              WORLD
                            </span>
                          </div>
                          <p className={`text-xs tracking-wide drop-shadow-md transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>ENERGY TECHNOLOGY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Hero Content Overlay */}
            <div className="hero-overlay relative z-50 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
              <div className="text-center max-w-6xl mx-auto">
                {/* Premium Badge */}
                <motion.div
                  className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm pointer-events-auto text-[#3DD56D] border-[#3DD56D]/20 bg-white/10"
                  style={{ opacity: 1, transform: "none" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Star className="w-3 h-3 mr-2 text-[#3DD56D]" />
                  <span className="font-semibold text-[#3DD56D]">Premium Energy Solutions</span>
                  <Sparkles className="w-3 h-3 ml-2 text-[#3DD56D]" />
                </motion.div>

                {/* Main Title with Typing Animation */}
                <motion.div
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-center mb-6 pointer-events-auto"
                  style={{ opacity: 1, transform: "none" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                >
                  <div className="relative inline-block min-h-[1.2em] min-w-[8ch] flex items-center justify-center">
                    <span
                      style={{ textShadow: "rgba(0, 0, 0, 0.3) 0px 2px 4px" }}
                      className="font-black text-[#3DD56D]"
                    >
                      {titleAnimation.displayText}
                      {!titleAnimation.isComplete && (
                        <span className="inline-block w-2 h-[0.8em] ml-1 align-middle bg-[#3DD56D] opacity-0 animate-pulse" />
                      )}
                    </span>
                  </div>
                </motion.div>

                {/* Tagline with Typing Animation */}
                <motion.div
                  className="text-xl md:text-2xl lg:text-3xl text-center mb-8 max-w-4xl mx-auto pointer-events-auto"
                  style={{ opacity: 1, transform: "none" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="relative min-h-[1.5em] flex items-center justify-center">
                    <span
                      style={{ textShadow: isDark ? "rgba(0, 0, 0, 0.5) 0px 1px 3px" : "rgba(255, 255, 255, 0.8) 0px 1px 3px" }}
                      className={`font-light tracking-wide leading-relaxed transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}
                    >
                      {taglineAnimation.displayText}
                                              {!taglineAnimation.isComplete && (
                          <span className={`inline-block w-1 h-[0.8em] ml-1 align-middle opacity-0 animate-pulse transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-gray-800'}`} />
                        )}
                    </span>
                    <div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full bg-[#3DD56D]"
                      style={{ width: "50%" }}
                    />
                  </div>
                </motion.div>

                {/* Call to Action */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx global>{`
        .logo-glow-effect {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, rgba(61, 213, 109, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover .logo-glow-effect {
          opacity: 1;
        }

        .logo-spin {
          animation: logoSpin 20s linear infinite;
        }

        @keyframes logoSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

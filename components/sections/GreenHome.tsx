"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Leaf, Wind, Zap, ArrowRight, BarChart3 } from "lucide-react"

interface GreenHomeProps {
  ledDisplayActive?: boolean
}

export default function GreenHome({ ledDisplayActive = false }: GreenHomeProps) {
  const [solarCells, setSolarCells] = useState(Array(16).fill(false))

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarCells((prev) => prev.map(() => Math.random() > 0.3))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const floatingDots = [
    { left: "20%", top: "30%" },
    { left: "35%", top: "70%" },
    { left: "50%", top: "30%" },
    { left: "65%", top: "70%" },
    { left: "80%", top: "30%" },
    { left: "95%", top: "70%" },
  ]

  return (
    <div className="relative z-60" style={{ marginTop: "-60px" }}>
      {/* LED Text Display */}
      <AnimatePresence>
        {ledDisplayActive && (
          <motion.div
            className="w-full mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative overflow-hidden bg-[#001418] border border-[#00ff9d]/30 rounded-md shadow-lg"
              style={{ height: "2.25rem", opacity: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00261e]/20 to-transparent"></div>
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff9d]/5 to-transparent"
                style={{ transform: "translateY(74.9%)" }}
              ></div>
              <div className="led-text-container w-full h-full overflow-hidden whitespace-nowrap relative">
                <motion.div
                  className="inline-flex items-center h-full text-sm font-led tracking-wider text-[#00ff9d] digital-text"
                  style={{
                    textShadow: "rgb(0, 255, 157) 0px 0px 5px, rgba(0, 255, 157, 0.25) 0px 0px 10px",
                  }}
                  animate={{
                    x: [1200, -2400],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <span className="px-4 digital-chars">
                    TRANSFORMING ETHIOPIA'S ENERGY LANDSCAPE WITH SUSTAINABLE SOLUTIONS • SOLAR INSTALLATIONS • ENERGY
                    STORAGE • SMART GRID TECHNOLOGY • POWERING 20 GREEN VILLAGES BY 2030 • REDUCING CARBON FOOTPRINT •
                    GREAN WORLD ENERGY TECHNOLOGY PLC • CONTACT: +251-913-330000 | +251-910-212989
                  </span>
                </motion.div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#001418] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#001418] to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#00ff9d]/5 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Section */}
      <div className="relative z-50">
        <section
          id="green-home"
          className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
          style={{ marginTop: "-60px" }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2bb757]/10 via-transparent to-[#23a455]/10"></div>

          {/* Floating Dots */}
          <div className="absolute inset-0 overflow-hidden">
            {floatingDots.map((dot, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 rounded-full bg-[#3dd56d]/20"
                style={{ left: dot.left, top: dot.top }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center min-h-screen">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Column - Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border mb-8 bg-[#2bb757]/20 text-[#3DD56D] border-[#2bb757]/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Sun className="mr-2 h-4 w-4" />
                  Powering a Sustainable Future
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Building a Greener Future Together
                      <span className="inline-block w-1 h-4 bg-[#3DD56D] ml-1"></span>
                    </motion.span>
                  </h1>

                  <div className="space-y-4">
                    <p className="text-xl text-[#3DD56D]">
                      Transforming <span className="text-[#2bb757] font-semibold">20 Villages</span> into Green Villages
                      by 2030.
                    </p>
                    <p className="text-lg max-w-2xl text-gray-300">
                      Leading Ethiopia's energy transition with{" "}
                      <span className="font-semibold text-[#3DD56D]">
                        sustainable, reliable, and affordable innovations
                      </span>
                      .
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <button className="gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] text-white hover:shadow-lg hover:shadow-[#3DD56D]/20 hover:translate-y-[-1px] rounded-full font-bold h-12 px-8 py-4 text-lg flex items-center justify-center min-w-[200px]">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-[#3DD56D] text-[#3DD56D] bg-transparent hover:bg-[#3DD56D]/10 hover:shadow-md hover:shadow-[#3DD56D]/10 rounded-full font-bold h-12 px-8 py-4 text-lg flex items-center justify-center min-w-[200px]">
                    Contact Us
                  </button>
                </motion.div>

                {/* Trusted By */}
                <motion.div
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-sm text-gray-400">Trusted by:</span>
                  <div className="flex space-x-4">
                    {[Sun, Leaf, Wind, Zap].map((Icon, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#2bb757]/20 border border-[#2bb757]/50"
                      >
                        <Icon className="h-5 w-5 text-[#3DD56D]" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Solar Panel Visualization */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-96 lg:h-[500px]">
                  <motion.div
                    className="relative w-full h-full max-w-[350px] max-h-[300px] sm:max-w-[400px] sm:max-h-[350px] mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Solar Panel */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[280px] max-h-[200px] sm:max-w-[350px] sm:max-h-[250px] md:max-w-[400px] md:max-h-[300px] rounded-xl overflow-hidden shadow-2xl z-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3DD56D]/30 to-[#2bb757]/30 opacity-30 blur-sm rounded-xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0c253a] to-[#071221] border border-slate-700/50"></div>

                        {/* Solar Cells Grid */}
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2 sm:p-3">
                          {solarCells.map((active, index) => (
                            <motion.div
                              key={index}
                              className="rounded-sm relative overflow-hidden transition-all duration-500 bg-[#2bb757]/70"
                              initial={{ opacity: 0.3 }}
                              animate={{ opacity: active ? 0.9 : 0.3 }}
                              transition={{ duration: 0.5, delay: index * 50 }}
                            />
                          ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-[#3DD56D]/10 to-transparent opacity-20"></div>
                      </div>
                    </div>

                    {/* Pulsing Circles */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-full h-full max-w-[250px] max-h-[250px] sm:max-w-[280px] sm:max-h-[280px] rounded-full bg-[#3DD56D]/20 animate-pulse"></div>
                      <div
                        className="absolute w-[80%] h-[80%] max-w-[200px] max-h-[200px] sm:max-w-[220px] sm:max-h-[220px] rounded-full bg-[#3DD56D]/30 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute w-[60%] h-[60%] max-w-[150px] max-h-[150px] sm:max-w-[160px] sm:max-h-[160px] rounded-full bg-[#3DD56D]/40 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>

                      {/* Center Icon */}
                      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#2bb757]/60 flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                      </div>

                      {/* SVG Grid Overlay */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                        <g stroke="rgba(61, 213, 109, 0.4)" fill="none" strokeWidth="1">
                          <path d="M200,100 L100,200 L200,300 L300,200 Z"></path>
                          <path d="M200,100 L300,200"></path>
                          <path d="M100,200 L300,200"></path>
                          <path d="M200,300 L200,100"></path>
                        </g>
                        <g fill="rgba(61, 213, 109, 0.8)">
                          <circle cx="200" cy="100" r="5"></circle>
                          <circle cx="100" cy="200" r="5"></circle>
                          <circle cx="200" cy="300" r="5"></circle>
                          <circle cx="300" cy="200" r="5"></circle>
                        </g>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute -top-4 -right-4 rounded-xl p-4 backdrop-blur-sm bg-slate-800/90 shadow-lg border-2 border-[#2bb757]/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="text-3xl font-bold text-[#3dd56d]">98%</div>
                    <div className="text-sm text-gray-300">Efficiency</div>
                    <div className="flex items-center mt-1">
                      <Zap className="h-4 w-4 mr-1 text-[#2bb757]" />
                      <span className="text-xs text-[#2bb757]">Active</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 rounded-xl p-4 backdrop-blur-sm bg-slate-800/90 shadow-lg border-2 border-[#2bb757]/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <div className="text-2xl font-bold text-[#3dd56d]">5k+</div>
                    <div className="text-sm text-gray-300">Homes</div>
                    <div className="flex items-center mt-1">
                      <Leaf className="h-4 w-4 mr-1 text-[#2bb757]" />
                      <span className="text-xs text-[#2bb757]">Powered</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .digital-text {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.1em;
        }

        .digital-chars {
          text-transform: uppercase;
        }

        .font-led {
          font-family: 'Courier New', monospace;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

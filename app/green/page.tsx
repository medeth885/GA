"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/hooks/useTheme"
import GreenIntro from "@/components/sections/GreenIntro"
import GreenHome from "@/components/sections/GreenHome"
import GreenAbout from "@/components/sections/GreenAbout"
import GreenSolutions from "@/components/sections/GreenSolutions"
import GreenProducts from "@/components/sections/GreenProducts"
import GreenContact from "@/components/sections/GreenContact"
import GreenFooter from "@/components/sections/GreenFooter"

export default function GreenPage() {
  const { isDark } = useTheme()
  const [showMainContent, setShowMainContent] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [ledDisplayActive, setLedDisplayActive] = useState(false)

  const handleIntroComplete = () => {
    setShowMainContent(true)
    setLedDisplayActive(true) // Activate LED display when intro completes
  }

  const sections = [
    { component: GreenHome, name: "Home" },
    { component: GreenAbout, name: "About" },
    { component: GreenSolutions, name: "Solutions" },
    { component: GreenProducts, name: "Products" },
    { component: GreenContact, name: "Contact" },
    { component: GreenFooter, name: "Footer" },
  ]

  // Handle scroll-based section detection
  useEffect(() => {
    if (!showMainContent) return

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="green-"]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        const top = element.offsetTop
        const bottom = top + element.offsetHeight

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [showMainContent])

  const scrollToSection = (index: number) => {
    const sectionIds = [
      "green-home",
      "green-about",
      "green-solutions",
      "green-products",
      "green-contact",
      "green-footer",
    ]
    const element = document.getElementById(sectionIds[index])
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Loading Intro */}
      <GreenIntro onComplete={handleIntroComplete} duration={4000} />

      {/* Main Content */}
      {showMainContent && (
        <div className="relative">
          {/* Navigation Dots */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSection === index 
                    ? "bg-[#3DD56D] scale-125" 
                    : isDark 
                      ? "bg-white/30 hover:bg-white/50" 
                      : "bg-gray-400/50 hover:bg-gray-600/70"
                }`}
                aria-label={`Go to ${section.name} section`}
                title={section.name}
              />
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-0">
            <div id="green-home">
              <GreenHome ledDisplayActive={ledDisplayActive} />
            </div>
            <div id="green-about">
              <GreenAbout />
            </div>
            <div id="green-solutions">
              <GreenSolutions />
            </div>
            <div id="green-products">
              <GreenProducts />
            </div>
            <div id="green-contact">
              <GreenContact />
            </div>
            <div id="green-footer">
              <GreenFooter />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

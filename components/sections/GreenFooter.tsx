"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

// Component props type
interface GreenFooterProps {
  noSeam?: boolean
}

export default function GreenFooter({ noSeam = false }: GreenFooterProps) {
  const { isDark } = useTheme()
  
  return (
    <footer id="green-footer" className={`py-3 px-4 sm:px-6 w-full border-t transition-colors duration-300 ${
      isDark 
        ? 'border-slate-700/20 bg-slate-950' 
        : 'border-green-200/20 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Copyright */}
        <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
          © {new Date().getFullYear()} <span className="text-[#3DD56D]">GREAN</span> WORLD
        </div>

        {/* Center - Logo and tagline */}
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src="/logos/grean-world-logo.png"
              alt="GREAN WORLD logo icon, green energy brand"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
            <span className="text-[#3DD56D]">#</span>PoweringDignity
          </span>
        </div>

        {/* Right side - Social icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/greanworld.et"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#3DD56D] transition-colors"
            aria-label="Facebook - @greanworld.et"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/GreanWorld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#3DD56D] transition-colors"
            aria-label="Twitter - @GreanWorld"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/company/greanworld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#3DD56D] transition-colors"
            aria-label="LinkedIn - @greanworld"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com/greanworldet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#3DD56D] transition-colors"
            aria-label="Instagram - @greanworldet"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, isDark, toggleTheme } = useTheme()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`relative h-9 w-9 rounded-lg border transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'border-green-500/20 bg-slate-800/50 hover:bg-slate-700/50 hover:border-green-400/30' 
              : 'border-green-200/50 bg-white/50 hover:bg-green-50/50 hover:border-green-300/50'
          } backdrop-blur-sm`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'dark' : 'light'}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isDark ? (
                <Moon className="h-4 w-4 text-blue-400" />
              ) : (
                <Sun className="h-4 w-4 text-amber-500" />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`min-w-[160px] ${
          isDark 
            ? 'bg-slate-800/95 border-slate-700/50' 
            : 'bg-white/95 border-green-200/50'
        } backdrop-blur-md`}
      >
        <DropdownMenuItem
          onClick={() => {
            if (theme !== 'light') toggleTheme()
          }}
          className={`flex items-center gap-2 cursor-pointer ${
            theme === 'light' 
              ? 'bg-green-100/50 text-green-700' 
              : isDark 
                ? 'hover:bg-slate-700/50' 
                : 'hover:bg-green-50/50'
          }`}
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Light</span>
          {theme === 'light' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-2 w-2 rounded-full bg-green-500"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            if (theme !== 'dark') toggleTheme()
          }}
          className={`flex items-center gap-2 cursor-pointer ${
            theme === 'dark' 
              ? 'bg-slate-700/50 text-blue-400' 
              : isDark 
                ? 'hover:bg-slate-700/50' 
                : 'hover:bg-green-50/50'
          }`}
        >
          <Moon className="h-4 w-4 text-blue-400" />
          <span>Dark</span>
          {theme === 'dark' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-2 w-2 rounded-full bg-blue-400"
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Alternative simple toggle button (without dropdown)
export function SimpleThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`relative h-9 w-9 rounded-lg border transition-all duration-300 hover:scale-105 ${
        isDark 
          ? 'border-green-500/20 bg-slate-800/50 hover:bg-slate-700/50 hover:border-green-400/30' 
          : 'border-green-200/50 bg-white/50 hover:bg-green-50/50 hover:border-green-300/50'
      } backdrop-blur-sm`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 180, opacity: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-blue-400" />
          ) : (
            <Sun className="h-4 w-4 text-amber-500" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
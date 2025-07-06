"use client"

import { useTheme as useNextThemes } from "next-themes"
import { useEffect, useState } from "react"

interface UseThemeReturn {
  isDark: boolean
  isLight: boolean
  theme: string | undefined
  toggleTheme: () => void
  setTheme: (theme: string) => void
  resolvedTheme: string | undefined
}

export function useTheme(): UseThemeReturn {
  const { theme, setTheme, resolvedTheme } = useNextThemes()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  // Return safe values during SSR
  if (!mounted) {
    return {
      isDark: false,
      isLight: false,
      theme: undefined,
      toggleTheme: () => {},
      setTheme: () => {},
      resolvedTheme: undefined,
    }
  }

  return {
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    theme,
    toggleTheme,
    setTheme,
    resolvedTheme,
  }
}

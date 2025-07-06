import { type ClassValue, clsx } from "clsx"

/**
 * Utility function for theme-aware class names
 */
export function themeClasses(
  lightClasses: ClassValue,
  darkClasses: ClassValue,
  isDark: boolean
): string {
  return clsx(isDark ? darkClasses : lightClasses)
}

/**
 * Predefined theme-aware background classes
 */
export const themeBackgrounds = {
  primary: (isDark: boolean) => themeClasses(
    "bg-white border-green-200/50",
    "bg-slate-800/50 border-green-500/20",
    isDark
  ),
  secondary: (isDark: boolean) => themeClasses(
    "bg-green-50/50 border-green-200/30",
    "bg-slate-900/50 border-slate-700/30",
    isDark
  ),
  card: (isDark: boolean) => themeClasses(
    "bg-white/90 border-green-200/30 shadow-sm",
    "bg-slate-800/90 border-slate-700/30 shadow-slate-900/20",
    isDark
  ),
  glass: (isDark: boolean) => themeClasses(
    "bg-white/80 backdrop-blur-sm border-green-200/30",
    "bg-slate-800/80 backdrop-blur-sm border-slate-700/30",
    isDark
  ),
}

/**
 * Predefined theme-aware text classes
 */
export const themeTexts = {
  primary: (isDark: boolean) => themeClasses(
    "text-gray-900",
    "text-white",
    isDark
  ),
  secondary: (isDark: boolean) => themeClasses(
    "text-gray-600",
    "text-gray-300",
    isDark
  ),
  muted: (isDark: boolean) => themeClasses(
    "text-gray-500",
    "text-gray-400",
    isDark
  ),
  accent: (isDark: boolean) => themeClasses(
    "text-green-600",
    "text-green-400",
    isDark
  ),
}

/**
 * Predefined theme-aware button classes
 */
export const themeButtons = {
  primary: (isDark: boolean) => themeClasses(
    "bg-green-600 hover:bg-green-700 text-white border-green-600",
    "bg-green-500 hover:bg-green-600 text-white border-green-500",
    isDark
  ),
  secondary: (isDark: boolean) => themeClasses(
    "bg-white hover:bg-green-50 text-green-600 border-green-200",
    "bg-slate-800 hover:bg-slate-700 text-green-400 border-slate-600",
    isDark
  ),
  ghost: (isDark: boolean) => themeClasses(
    "hover:bg-green-50 text-gray-600 hover:text-green-600",
    "hover:bg-slate-800 text-gray-300 hover:text-green-400",
    isDark
  ),
}

/**
 * Animation classes for theme transitions
 */
export const themeTransitions = {
  smooth: "transition-all duration-300 ease-in-out",
  fast: "transition-all duration-150 ease-in-out",
  slow: "transition-all duration-500 ease-in-out",
}

/**
 * Helper to get theme-aware CSS variables
 */
export function getThemeVariables(isDark: boolean) {
  return {
    primary: isDark ? 'var(--grean-secondary)' : 'var(--grean-primary)',
    background: isDark ? '#020617' : '#ffffff',
    foreground: isDark ? '#ffffff' : '#000000',
    muted: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
    border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  }
}
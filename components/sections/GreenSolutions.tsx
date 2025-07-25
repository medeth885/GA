"use client"

import {
  SunMedium,
  ClipboardList,
  GraduationCap,
  Network,
  Leaf,
  ArrowRight,
  Database,
  Smartphone,
  Settings2,
  Twitter,
  Users,
  Building2,
  Zap,
  School,
  Award,
  Target,
  TrendingUp,
  Building,
  Facebook,
  ArrowUpRight,
  BarChartIcon as ChartNoAxesColumn,
} from "lucide-react"
import { useState, useMemo, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TypingTextAnimation } from "@/components/animations/text/TypingTextAnimation"

// Official Brand CSS from Brand Guidelines
const brandCSS = `
  /* Official GREAN WORLD Brand Colors - 60-30-10 Rule */
  :root {
    --grean-primary: #3dd56d;
    --grean-secondary: #2bb757;
    --grean-accent: #23a455;
  }

  /* Official Brand Typography Classes */
  .typography-display {
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .typography-h1 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .typography-h2 {
    font-weight: 600;
    line-height: 1.25;
  }

  .typography-h3 {
    font-weight: 600;
    line-height: 1.3;
  }

  .typography-body {
    font-weight: 400;
    line-height: 1.6;
  }

  .typography-small {
    font-weight: 500;
    line-height: 1.4;
  }

  /* GreenSolutions Animation Keyframes */
  @keyframes fadeInRotate {
    0% {
      opacity: 0;
      transform: rotate(-10deg) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }

  @keyframes slideInMultiDirection {
    0% {
      opacity: 0;
      transform: translateX(-50px) translateY(-30px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateX(0) translateY(0) scale(1);
    }
  }

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-80px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(80px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-80px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(80px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideOutScale {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
  }

  /* Animation Classes */
  .card-fade-in-rotate {
    animation: fadeInRotate 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .card-slide-multi {
    animation: slideInMultiDirection 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .card-slide-in-left {
    animation: slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .card-slide-in-right {
    animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .card-slide-in-top {
    animation: slideInFromTop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .card-slide-in-bottom {
    animation: slideInFromBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .card-slide-out-scale {
    animation: slideOutScale 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
  }

  /* Initial hidden state */
  .card-hidden {
    opacity: 0;
    transform: translateY(80px) scale(0.95);
  }
`

// Essential solutions for initial render
const useSolutionData = () => {
  return useMemo(
    () => ({
      solutions: [
        {
          icon: <SunMedium className="h-6 w-6" />,
          title: "Solar Panel Services",
          description:
            "Complete solar energy solutions from specification and design to installation and ongoing support.",
          link: "/solutions/solar-energy",
          bgColor: "bg-[#FA156A]/10",
          textColor: "text-[#FA156A]",
          borderColor: "border-[#FA156A]/20",
        },
        {
          icon: <ClipboardList className="h-6 w-6" />,
          title: "Energy Consultancy",
          description: "Expert guidance to optimize your energy usage and transition to sustainable energy solutions.",
          link: "/solutions/energy-consultancy",
          bgColor: "bg-gradient-to-br from-green-50 to-green-100/60",
          textColor: "text-[#00B36]",
          borderColor: "border-[#00B36]/50",
        },
        {
          icon: <GraduationCap className="h-6 w-6" />,
          title: "Training Programs",
          description: "Comprehensive training in renewable energy technologies for professionals and communities.",
          link: "/solutions/training",
          bgColor: "bg-gradient-to-br from-green-50 to-green-100/60",
          textColor: "text-[#14532D]",
          borderColor: "border-[#14532D]/30",
        },
        {
          icon: <Network className="h-6 w-6" />,
          title: "Energy Hubs Support",
          description: "Community-focused energy centers providing multiple services and infrastructure support.",
          link: "/solutions/energy-hubs",
          bgColor: "bg-gradient-to-br from-green-50 to-green-100/60",
          textColor: "text-[#1DDB39]",
          borderColor: "border-[#1DDB39]/30",
        },
      ],
      integratedSolutions: [
        {
          title: "Community Solar Projects",
          description: "Large-scale solar installations for entire communities",
          icon: SunMedium,
          features: ["Grid-tied systems", "Community ownership", "Shared benefits"],
        },
        {
          title: "Commercial Energy Transition",
          description: "Business-focused renewable energy solutions",
          icon: Building2,
          features: ["Cost reduction", "Sustainability goals", "Energy independence"],
        },
        {
          title: "Workforce Development",
          description: "Training programs for renewable energy careers",
          icon: GraduationCap,
          features: ["Technical skills", "Certification programs", "Job placement"],
        },
        {
          title: "Sustainable Campus Initiative",
          description: "Educational institution energy transformation",
          icon: School,
          features: ["Campus-wide solutions", "Educational integration", "Research opportunities"],
        },
        {
          title: "Rural Electrification Program",
          description: "Bringing clean energy to remote areas",
          icon: Zap,
          features: ["Off-grid solutions", "Community engagement", "Sustainable development"],
        },
        {
          title: "Women Entrepreneurship Program",
          description: "Empowering women in the energy sector",
          icon: Users,
          features: ["Business training", "Microfinance", "Leadership development"],
        },
      ],
    }),
    [],
  )
}

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated, options])

  return { ref, isIntersecting, hasAnimated }
}

// Four Pillars Component
const FourPillarsSection = () => {
  const pillarsRef = useIntersectionObserver()

  const stats = [
    { icon: Target, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "1,200+", label: "Professionals Trained" },
    { icon: TrendingUp, value: "40%", label: "Average Cost Savings" },
    { icon: Building, value: "25+", label: "Institutions Served" },
  ]

  const integratedSolutions = [
    {
      title: "Community Solar Projects",
      description: "Empowering neighborhoods with premium solar energy solutions and smart grid integration.",
      icon: SunMedium,
      tags: ["Residential", "Smart Communities", "Sustainable Living"],
      features: ["Solar energy audits", "Community installations", "Smart grid integration"],
    },
    {
      title: "Commercial Energy Transition",
      description: "Helping businesses reduce costs and carbon footprint through smart energy solutions.",
      icon: Building2,
      tags: ["Energy Efficiency", "Cost Reduction", "Sustainability"],
      features: ["Commercial energy audits", "System optimization", "ROI analysis"],
    },
    {
      title: "Workforce Development",
      description: "Building local expertise through comprehensive renewable energy training programs.",
      icon: Users,
      tags: ["Training Programs", "Capacity Building", "Career Development"],
      features: ["Technical certification", "Skills development", "Career placement"],
    },
    {
      title: "Sustainable Campus Initiative",
      description: "Transforming educational institutions into sustainable energy showcases.",
      icon: GraduationCap,
      tags: ["Education", "Campus Solutions", "Learning Labs"],
      features: ["Campus energy solutions", "Educational programs", "Research partnerships"],
    },
  ]

  return (
    <section
      ref={pillarsRef.ref}
      className={`w-full max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 relative transition-all duration-1000 ${
        pillarsRef.hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div
          className={`transition-all duration-1000 ${pillarsRef.hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center rounded-full px-4 py-2 typography-small mb-6 shadow-lg backdrop-blur-sm bg-[#3DD56D]/20 text-[#3DD56D] border border-[#3DD56D]/30">
            <Award className="w-4 h-4 mr-2" />
            Integrated Service Approach
          </div>
          <div className="min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex items-center justify-center mb-6">
            <h2 className="typography-display text-4xl sm:text-5xl md:text-6xl text-center text-white">
              Four Pillars of Energy Excellence
              <span className="inline-block w-1 h-[0.8em] ml-2 align-middle bg-[#3DD56D] opacity-0"></span>
            </h2>
          </div>
          <p className="typography-body text-lg md:text-xl max-w-4xl mx-auto text-center text-gray-300">
            Our comprehensive services work together seamlessly to provide{" "}
            <span className="text-[#2bb757] font-semibold">end-to-end energy solutions</span> that transform communities
            and businesses across Ethiopia.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
          pillarsRef.hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="rounded-xl relative overflow-hidden p-6 text-center group transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 hover:border-[#3DD56D]/50 bg-slate-900/90 border-slate-700/50 hover:bg-slate-800/90 shadow-lg backdrop-blur-sm"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="relative z-10 p-6">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#3DD56D]/5 via-[#2bb757]/3 to-[#23A455]/5"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full transition-all duration-300 bg-gradient-to-br from-[#3DD56D]/20 to-[#2bb757]/20 group-hover:from-[#3DD56D]/30 group-hover:to-[#2bb757]/30 group-hover:scale-110 group-hover:shadow-lg">
                    <stat.icon className="w-6 h-6 text-[#3DD56D] group-hover:text-[#2bb757] transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#3DD56D]">{stat.value}</div>
                <div className="typography-small mt-2 transition-colors duration-300 text-gray-400 group-hover:text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Integrated Solutions Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000 delay-500 ${
          pillarsRef.hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {integratedSolutions.map((solution, index) => (
          <div
            key={solution.title}
            className="rounded-xl overflow-hidden p-6 lg:p-8 group hover:scale-105 transition-all duration-500 relative border-2 hover:border-[#3DD56D]/50 bg-slate-900/90 border-slate-700/50 hover:bg-slate-800/90 shadow-lg hover:shadow-2xl backdrop-blur-sm"
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <div className="relative z-10 p-6">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#3DD56D]/5 via-[#2bb757]/3 to-[#23A455]/5"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-[#3DD56D]/20 to-[#2bb757]/20 group-hover:from-[#3DD56D]/30 group-hover:to-[#2bb757]/30 group-hover:scale-110 group-hover:shadow-lg">
                    <solution.icon className="w-6 h-6 text-[#3DD56D] group-hover:text-[#2bb757] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="typography-h3 mb-3 group-hover:text-[#3DD56D] transition-colors duration-300 text-white">
                      {solution.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full typography-small border transition-all duration-300 bg-gradient-to-r from-[#3DD56D]/10 to-[#2bb757]/10 text-[#3DD56D] border-[#3DD56D]/30 group-hover:from-[#3DD56D]/20 group-hover:to-[#2bb757]/20 group-hover:border-[#3DD56D]/50 group-hover:shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="typography-body mb-6 transition-colors duration-300 text-gray-300 group-hover:text-gray-200">
                  {solution.description}
                </p>
                <div className="space-y-3">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 group/feature">
                      <div className="w-2 h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] group-hover/feature:scale-125 group-hover/feature:shadow-sm"></div>
                      <span className="typography-small transition-colors duration-300 text-gray-400 group-hover:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          pillarsRef.hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="rounded-xl relative overflow-hidden inline-flex items-center justify-center p-8 max-w-4xl mx-auto group border-2 hover:border-[#3DD56D]/50 transition-all duration-500 bg-slate-900/90 border-slate-700/50 hover:bg-slate-800/90 shadow-lg hover:shadow-2xl backdrop-blur-sm">
          <div className="relative z-10 p-6">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#3DD56D]/5 via-[#2bb757]/3 to-[#23A455]/5"></div>
            <div className="relative z-10 text-center space-y-4">
              <div className="typography-h3 transition-colors duration-300 text-white group-hover:text-gray-100">
                Comprehensive energy solutions for every need
              </div>
              <div className="typography-body transition-colors duration-300 text-gray-300 group-hover:text-gray-200">
                Trusted by{" "}
                <span className="text-[#3DD56D] font-semibold group-hover:text-[#2bb757] transition-colors duration-300">
                  25+ institutions
                </span>{" "}
                across Ethiopia
              </div>
              <div className="pt-2">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] text-white hover:shadow-lg hover:shadow-[#3DD56D]/20 hover:translate-y-[-1px] rounded-full font-bold h-12 px-8 py-4 text-lg">
                  Explore Our Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Component props type
interface GreenSolutionsProps {
  noSeam?: boolean
}

export default function GreenSolutions({ noSeam = false }: GreenSolutionsProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const { solutions, integratedSolutions } = useSolutionData()
  const isDark = true // Assuming dark theme for this component
  const isLight = false

  // Animation states for different sections
  const mainCard = useIntersectionObserver()
  const solutionCards = useIntersectionObserver()
  const pillarsCards = useIntersectionObserver()

  // Inject brand CSS
  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.textContent = brandCSS
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  return (
    <section
      id="green-solutions"
      className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
    >
      {/* Consistent Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bb757]/10 via-transparent to-[#23a455]/10" />

      {/* Massive Vertical Background Text for Solutions */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center space-y-[-3vw]">
          {/* SOLUTIONS - Massive center text */}
          <motion.div
            className={`flex items-center justify-center opacity-[0.04]`}
            initial={{ opacity: 0, scale: 0.6, y: 0 }}
            animate={{ opacity: 0.04, scale: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.2, ease: "easeOut" }}
          >
            <span
              className={`text-[30vw] sm:text-[27vw] md:text-[24vw] lg:text-[21vw] xl:text-[18vw] font-black leading-[0.6] tracking-[-0.02em] select-none ${
                isDark
                  ? "text-white drop-shadow-[0_0_70px_rgba(61,213,109,0.12)]"
                  : "text-gray-900 drop-shadow-[0_0_50px_rgba(35,164,85,0.1)]"
              }`}
            >
              SOLUTIONS
            </span>
          </motion.div>
        </div>
      </div>

      {/* Hero Section with Loop Text Animation */}
      <div className="relative max-w-4xl mx-auto text-center mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-12 lg:mb-16 z-10">
        <div
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium mb-6 shadow-lg tracking-wide typography-small ${
            isDark
              ? "bg-[#3DD56D]/20 text-[#3DD56D] border border-[#3DD56D]/20"
              : "bg-[#2bb757]/20 text-[#2bb757] border border-[#2bb757]/20"
          }`}
        >
          <span className="font-bold">GREAN WORLD</span> Solutions
        </div>
        <div className="mb-6">
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight flex flex-col sm:flex-row items-center justify-center gap-2 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <TypingTextAnimation
              text="Empowering Ethiopia with Sustainable Energy Solutions"
              speed="medium"
              className="inline-block"
            />
          </h1>
        </div>
        <p
          className={`typography-body text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Comprehensive, innovative, and sustainable energy services for communities and businesses across Ethiopia.
        </p>
      </div>

      {/* Main Card - Green Solutions Hero - Original SVG + Gradient Design */}
      <div
        ref={mainCard.ref}
        className={`relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden mb-8 sm:mb-12 lg:mb-16 z-10 transition-all duration-300 bg-gradient-to-b from-slate-950 to-slate-900 ${
          mainCard.hasAnimated
            ? mainCard.isIntersecting
              ? "card-fade-in-rotate"
              : "card-slide-out-scale"
            : "card-hidden"
        }`}
      >
        {/* Wave Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="wave-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 C30,15 70,5 100,10 L100,0 L0,0 Z" fill="#3DD56D" fillOpacity="0.1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>

        <div className="flex flex-col h-full">
          {/* Header Row */}
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3DD56D] flex items-center justify-center">
                <SunMedium className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl typography-h3 tracking-wide text-white">
                  <span className="font-bold">GREAN WORLD</span> Energy
                </h3>
                <p className="text-xs sm:text-sm typography-small text-slate-300">Clean Energy Solutions</p>
              </div>
            </div>
            <div className="rounded-lg px-3 py-1.5 flex items-center space-x-2 self-start sm:self-auto bg-slate-800/80 backdrop-blur-sm border border-slate-700">
              <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <p className="text-xs sm:text-sm font-medium text-white">@greansolutions</p>
            </div>
          </div>

          {/* Hero/Headline */}
          <div className="flex-grow flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
            {/* Left: Headline and description */}
            <div className="max-w-xl text-center lg:text-left mb-6 lg:mb-0 flex-1">
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-3 bg-white/20 backdrop-blur-sm text-white">
                Green Solutions
              </span>
              <h2 className="typography-h2 text-2xl sm:text-3xl mb-4 text-white">
                Our Green Solutions Platform Accelerates Clean Energy Adoption
              </h2>
              <p className="typography-body text-base sm:text-lg mb-6 text-slate-300">
                Modernize your community or business with our streamlined approach to sustainable energy that delivers
                results in weeks, not months.
              </p>

              {/* Stats card */}
              <div className="p-4 rounded-lg py-4 mb-4 shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                  <div className="text-center p-3 rounded-lg bg-slate-700/60 border border-slate-600">
                    <div className="text-xl sm:text-2xl font-bold text-[#3DD56D]">60%</div>
                    <div className="text-xs typography-small text-slate-300">Energy savings</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-slate-700/60 border border-slate-600">
                    <div className="text-xl sm:text-2xl font-bold text-[#2bb757]">40%</div>
                    <div className="text-xs typography-small text-slate-300">Cost reduction</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-slate-700/60 border border-slate-600">
                    <div className="text-xl sm:text-2xl font-bold text-[#23A455]">3 weeks</div>
                    <div className="text-xs typography-small text-slate-300">Avg. implementation</div>
                  </div>
                </div>
              </div>

              {/* Key Solutions card */}
              <div className="p-4 sm:p-5 rounded-lg mb-4 shadow-lg bg-gradient-to-r from-[#2bb757] to-[#23A455] text-white overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl typography-h3 mb-3 text-white">Key Solutions:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <SunMedium className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-white">Solar energy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-white">Energy analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-white">Mobile monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Settings2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-white">Automation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags and CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 mt-4 gap-4">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#3DD56D] text-[#3DD56D] bg-transparent">
                    #GreenEnergy
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#2bb757] text-[#2bb757] bg-transparent">
                    #SustainableTech
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#23A455] text-[#23A455] bg-transparent">
                    #SmartSolutions
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white bg-gradient-to-r from-[#3DD56D] to-[#2bb757] hover:shadow-lg hover:shadow-[#3DD56D]/30">
                  See Case Studies
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: Original Animated Visual - SVG + Gradient Design */}
            <div className="flex-1 flex items-center justify-center relative min-h-[250px] sm:min-h-[300px] lg:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-l from-green-900/80 to-transparent z-0"></div>
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-green-600/20 animate-pulse"></div>
                    <div
                      className="absolute w-56 h-56 rounded-full bg-green-600/30 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute w-40 h-40 rounded-full bg-green-600/40 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute w-24 h-24 rounded-full bg-green-600/50 flex items-center justify-center">
                      <ChartNoAxesColumn className="w-12 h-12 text-white" />
                    </div>
                    {/* SVG lines/dots */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                      <g stroke="rgba(74, 222, 128, 0.6)" fill="none" strokeWidth="2">
                        <path
                          d="M200,120 A80,80 0 0,1 280,200 A80,80 0 0,1 200,280 A80,80 0 0,1 120,200 A80,80 0 0,1 200,120"
                          strokeDasharray="5,5"
                        />
                        <path d="M200,140 L200,120" />
                        <path d="M195,125 L200,120 L205,125" />
                        <path d="M260,200 L280,200" />
                        <path d="M275,195 L280,200 L275,205" />
                        <path d="M200,260 L200,280" />
                        <path d="M195,275 L200,280 L205,275" />
                        <path d="M140,200 L120,200" />
                        <path d="M125,195 L120,200 L125,205" />
                      </g>
                      <g stroke="rgba(74, 222, 128, 0.3)" fill="none" strokeWidth="1">
                        <path d="M200,200 L150,150"></path>
                        <path d="M200,200 L250,150"></path>
                        <path d="M200,200 L150,250"></path>
                        <path d="M200,200 L250,250"></path>
                      </g>
                      <g fill="rgba(74, 222, 128, 0.8)">
                        <circle cx="200" cy="120" r="4"></circle>
                        <circle cx="280" cy="200" r="4"></circle>
                        <circle cx="200" cy="280" r="4"></circle>
                        <circle cx="120" cy="200" r="4"></circle>
                        <circle cx="150" cy="150" r="3"></circle>
                        <circle cx="250" cy="150" r="3"></circle>
                        <circle cx="150" cy="250" r="3"></circle>
                        <circle cx="250" cy="250" r="3"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="relative pt-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="solutions-container">
            {/* Services Section */}
            <section ref={solutionCards.ref} className="flex flex-col items-center py-8 px-4 sm:px-6">
              <div className="w-full max-w-7xl">
                <div
                  className={`w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative bg-gradient-to-b from-slate-950 to-slate-900 ${
                    solutionCards.hasAnimated
                      ? solutionCards.isIntersecting
                        ? "card-fade-in-rotate"
                        : "card-slide-out-scale"
                      : "card-hidden"
                  }`}
                >
                  {/* Green gradient filling the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#3DD56D]/40 via-[#2bb757]/25 to-transparent pointer-events-none z-10"></div>
                  <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row">
                      {/* Left: Content */}
                      <div className="w-full lg:w-[55%] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                          {/* Header Row */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3DD56D] flex items-center justify-center">
                                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg sm:text-xl typography-h3 text-white">Grean World Energy</h3>
                                <p className="text-xs sm:text-sm typography-small text-slate-300">
                                  Sustainable Energy Solutions for Ethiopia
                                </p>
                              </div>
                            </div>
                            <div className="rounded-lg px-3 py-1.5 flex items-center space-x-2 self-start sm:self-auto bg-slate-800/80 backdrop-blur-sm border border-slate-700">
                              <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                              <p className="text-xs sm:text-sm font-medium text-white">Green Innovation Hub</p>
                            </div>
                          </div>
                          {/* Product Card */}
                          <div className="bg-gradient-to-r from-[#2bb757] to-[#23A455] text-white p-4 rounded-2xl shadow-lg overflow-hidden relative">
                            <div className="relative z-10">
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-2 bg-white/20 backdrop-blur-sm text-white typography-small">
                                Sustainable Product
                              </span>
                              <h4 className="text-lg typography-h3 mb-2">Sustainable Solutions for a Better World</h4>
                              <p className="text-sm typography-body">
                                Our new sustainable product line uses 100% recycled materials and biodegradable
                                packaging to minimize environmental impact while maximizing performance.
                              </p>
                            </div>
                          </div>
                          {/* Features & Impact */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                              <div className="flex items-center space-x-2 mb-2">
                                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DD56D]" />
                                <h5 className="typography-small text-sm text-white">Eco Features</h5>
                              </div>
                              <ul className="text-xs typography-small space-y-1 list-disc list-inside text-slate-300">
                                <li>10Wp-350Wp solar home systems</li>
                                <li>Lighting, phone charging, TV support</li>
                                <li>Professional installation included</li>
                                <li>Local maintenance & training</li>
                              </ul>
                            </div>
                            <div className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                              <div className="flex items-center space-x-2 mb-2">
                                <ChartNoAxesColumn className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DD56D]" />
                                <h5 className="typography-small text-sm text-white">Environmental Impact</h5>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-center">
                                  <div className="text-lg sm:text-xl font-bold text-[#3DD56D]">270k+</div>
                                  <div className="text-xs typography-small text-slate-300">Systems deployed</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg sm:text-xl font-bold text-[#2bb757]">500+</div>
                                  <div className="text-xs typography-small text-slate-300">Villages reached</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg sm:text-xl font-bold text-[#23A455]">200+</div>
                                  <div className="text-xs typography-small text-slate-300">Women entrepreneurs</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg sm:text-xl font-bold text-[#3DD56D]">30k tons</div>
                                  <div className="text-xs typography-small text-slate-300">CO₂ reduction</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Tags & CTA - Moved to bottom */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 gap-4 flex-shrink-0">
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-[#3DD56D] text-[#3DD56D] bg-transparent">
                              #Sustainable
                            </span>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-[#2bb757] text-[#2bb757] bg-transparent">
                              #EcoFriendly
                            </span>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-[#23A455] text-[#23A455] bg-transparent">
                              #ZeroWaste
                            </span>
                          </div>
                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 text-white text-xs py-1.5 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] hover:shadow-lg hover:shadow-[#3DD56D]/30">
                            Learn More
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      {/* Right: Animated Visual - Original SVG + Gradient Design */}
                      <div className="w-full lg:w-[45%] relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] p-4">
                        <div className="absolute inset-0 bg-gradient-to-l from-green-600/80 to-transparent z-0"></div>

                        {/* Subtle green pattern overlay */}
                        <div
                          className="absolute inset-0 opacity-20 z-5"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
                              <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="2" fill="#16a34a" fillOpacity="0.3"/>
                                <circle cx="10" cy="10" r="1" fill="#16a34a" fillOpacity="0.2"/>
                                <circle cx="50" cy="20" r="1.5" fill="#16a34a" fillOpacity="0.25"/>
                                <circle cx="20" cy="50" r="1" fill="#16a34a" fillOpacity="0.2"/>
                                <path d="M0,0 L15,30 L30,0 Z" fill="#16a34a" fillOpacity="0.1"/>
                                <path d="M30,30 L45,60 L60,30 Z" fill="#16a34a" fillOpacity="0.08"/>
                              </svg>
                            `)}")}`,
                            backgroundSize: "60px 60px",
                            backgroundRepeat: "repeat",
                          }}
                        ></div>

                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                          <div className="relative w-full h-full max-w-[300px] max-h-[300px] sm:max-w-[350px] sm:max-h-[350px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-full max-w-[250px] max-h-[250px] sm:max-w-[280px] sm:max-h-[280px] rounded-full bg-green-600/20 animate-pulse"></div>
                              <div
                                className="absolute w-[75%] h-[75%] max-w-[190px] max-h-[190px] sm:max-w-[210px] sm:max-h-[210px] rounded-full bg-green-600/30 animate-pulse"
                                style={{ animationDelay: "0.5s" }}
                              ></div>
                              <div
                                className="absolute w-[50%] h-[50%] max-w-[125px] max-h-[125px] sm:max-w-[140px] sm:max-h-[140px] rounded-full bg-green-600/40 animate-pulse"
                                style={{ animationDelay: "1s" }}
                              ></div>
                              <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-600/50 flex items-center justify-center shadow-lg">
                                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                              </div>
                              {/* SVG lines/dots */}
                              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                <g stroke="rgba(61, 213, 109, 0.4)" fill="none" strokeWidth="1">
                                  <path d="M200,200 L150,150"></path>
                                  <path d="M200,200 L250,150"></path>
                                  <path d="M200,200 L150,250"></path>
                                  <path d="M200,200 L250,250"></path>
                                  <path d="M200,200 L120,200"></path>
                                  <path d="M200,200 L280,200"></path>
                                  <path d="M200,200 L200,120"></path>
                                  <path d="M200,200 L200,280"></path>
                                </g>
                                <g fill="rgba(61, 213, 109, 0.8)">
                                  <circle cx="150" cy="150" r="4"></circle>
                                  <circle cx="250" cy="150" r="4"></circle>
                                  <circle cx="150" cy="250" r="4"></circle>
                                  <circle cx="250" cy="250" r="4"></circle>
                                  <circle cx="120" cy="200" r="4"></circle>
                                  <circle cx="280" cy="200" r="4"></circle>
                                  <circle cx="200" cy="120" r="4"></circle>
                                  <circle cx="200" cy="280" r="4"></circle>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Four Pillars of Energy Excellence */}
            <div
              ref={pillarsCards.ref}
              className={`transition-all duration-300 ${
                pillarsCards.hasAnimated
                  ? pillarsCards.isIntersecting
                    ? "card-slide-multi"
                    : "card-slide-out-scale"
                  : "card-hidden"
              }`}
              style={{ animationDelay: pillarsCards.hasAnimated ? "0.3s" : "0s" }}
            >
              <FourPillarsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useMemo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import {
  Search,
  Filter,
  Star,
  ShoppingCart,
  Zap,
  Battery,
  Sun,
  Settings,
  Lightbulb,
  Flame,
  Users,
  Droplets,
  Phone,
  ArrowRight,
  BarChart3,
  SunMedium,
} from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  description: string
  rating: number
  reviews?: number
  features: string[]
  specifications: { [key: string]: string }
  tags: string[]
  badge?: string
  badgeColor?: string
  icon: any
  iconColor: string
  inStock: boolean
  popular?: boolean
  sale?: boolean
}

export default function GreenProducts() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [cart, setCart] = useState<string[]>([])

  const products: Product[] = [
    // Featured Products (also in main catalog)
    {
      id: "solar-home-system-200w",
      name: "Solar Home System 200W",
      category: "solar-pv",
      description:
        "Our flagship solar home system with everything needed to power a small household, including lighting, phone charging, and TV capability.",
      rating: 4.9,
      features: ["200W solar panel", "Battery backup", "LED lights & charging", "2-year local support"],
      specifications: {
        "Panel Power": "200W",
        Warranty: "2 years",
        Price: "ETB 16,499",
      },
      tags: ["#SolarHome", "#CleanEnergy", "#OffGrid"],
      badge: "FLAGSHIP",
      badgeColor: "from-orange-500 to-red-600",
      icon: Sun,
      iconColor: "from-orange-500 to-red-600",
      inStock: true,
      popular: true,
    },
    {
      id: "mirt-stove-deluxe",
      name: "Mirt Stove Deluxe",
      category: "cooking-higher",
      description:
        "The enhanced Mirt stove is made from durable sand and cement mortar, designed for Ethiopian households to bake injera efficiently and reduce fuel use.",
      rating: 4.8,
      features: [
        "Bakes up to 30 injeras per day",
        "Reduces fuel consumption by 50%",
        "5+ year lifespan",
        "Local materials",
      ],
      specifications: {
        "Fuel Savings": "50%",
        "Injeras/day": "30+",
        Lifespan: "5 years",
        Materials: "Eco-friendly local",
      },
      tags: ["#CleanCooking", "#Injera", "#EcoStove"],
      badge: "ECO-FRIENDLY",
      badgeColor: "from-green-500 to-emerald-600",
      icon: Flame,
      iconColor: "from-purple-500 to-purple-700",
      inStock: true,
      popular: true,
    },

    // Solar PV Systems
    {
      id: "school-solar-1kw",
      name: "School Solar System 1kW",
      category: "solar-pv",
      description:
        "Solar PV system designed for schools and educational institutions with classroom lighting and equipment power.",
      rating: 4.9,
      features: ["1kW Solar Panel Array", "Battery Backup System", "LED Lighting Package", "Educational Display"],
      specifications: {
        Warranty: "10 years panels, 3 years system",
      },
      tags: ["Solar", "Educational", "Large Scale"],
      badge: "INSTITUTIONAL",
      badgeColor: "from-orange-500 to-red-600",
      icon: Sun,
      iconColor: "from-orange-500 to-red-600",
      inStock: true,
      popular: true,
    },
    {
      id: "health-center-solar-2kw",
      name: "Health Center Solar System 2kW",
      category: "solar-pv",
      description: "Reliable solar power system for health centers with backup power for medical equipment.",
      rating: 4.8,
      features: ["2kW Solar Array", "Medical Grade Inverter", "Battery Backup", "Emergency Power"],
      specifications: {
        Warranty: "10 years panels, 5 years system",
      },
      tags: ["Solar", "Healthcare", "Critical Power"],
      badge: "CRITICAL",
      badgeColor: "from-orange-500 to-red-600",
      icon: Sun,
      iconColor: "from-orange-500 to-red-600",
      inStock: true,
    },
    {
      id: "household-solar-200w",
      name: "Household Solar System 200W",
      category: "solar-pv",
      description: "Complete solar PV system for households including panels, battery, inverter, and lighting.",
      rating: 4.7,
      features: ["200W Solar Panel", "Battery Storage", "LED Lights", "Phone Charging"],
      specifications: {
        Warranty: "5 years panels, 2 years battery",
      },
      tags: ["Solar", "Off-grid", "Household"],
      badge: "SALE",
      badgeColor: "from-red-500 to-pink-600",
      icon: Sun,
      iconColor: "from-orange-500 to-red-600",
      inStock: true,
      sale: true,
    },
    {
      id: "community-water-pump-solar",
      name: "Community Water Pump Solar",
      category: "water-pumping",
      description: "Solar-powered water pumping system for community drinking water supply in off-grid areas.",
      rating: 4.8,
      features: ["High Capacity Pump", "Solar Panel Array", "Water Storage Tank", "Distribution System"],
      specifications: {
        Warranty: "7 years",
      },
      tags: ["Solar", "Community", "Drinking Water"],
      badge: "COMMUNITY",
      badgeColor: "from-slate-500 to-slate-700",
      icon: Users,
      iconColor: "from-slate-500 to-slate-700",
      inStock: true,
    },
    {
      id: "commercial-backup-5kw",
      name: "Commercial Backup System 5kW",
      category: "power-backup",
      description: "High-capacity backup power system for commercial and institutional use with extended runtime.",
      rating: 4.8,
      features: ["5kW Inverter", "Large Battery Bank", "Automatic Transfer", "Remote Monitoring"],
      specifications: {
        Warranty: "5 years system",
      },
      tags: ["Commercial", "High Capacity", "UPS"],
      badge: "COMMERCIAL",
      badgeColor: "from-blue-500 to-blue-700",
      icon: Battery,
      iconColor: "from-blue-500 to-blue-700",
      inStock: true,
    },
    {
      id: "agricultural-solar-pump-1hp",
      name: "Agricultural Solar Pump 1HP",
      category: "water-pumping",
      description: "High-capacity solar water pumping system for agricultural irrigation with automatic controls.",
      rating: 4.7,
      features: ["1HP Solar Pump", "Automatic Controls", "Weather Protection", "High Flow Rate"],
      specifications: {
        Warranty: "5 years",
      },
      tags: ["Solar", "Irrigation", "Agriculture"],
      badge: "AGRICULTURE",
      badgeColor: "from-slate-500 to-slate-700",
      icon: Users,
      iconColor: "from-slate-500 to-slate-700",
      inStock: true,
    },

    // Cooking Solutions
    {
      id: "electric-induction-cooktop",
      name: "Electric Induction Cooktop",
      category: "cooking-higher",
      description: "High-efficiency electric induction cooktop with precise temperature control and minimal emissions.",
      rating: 4.8,
      features: ["Digital Controls", "Energy Efficient", "Safety Features", "Easy Cleaning"],
      specifications: {
        Efficiency: "90% energy efficiency",
        Warranty: "3 years",
      },
      tags: ["Electric", "Zero Emissions", "Modern"],
      badge: "PREMIUM",
      badgeColor: "from-purple-500 to-purple-700",
      icon: Zap,
      iconColor: "from-purple-500 to-purple-700",
      inStock: true,
    },
    {
      id: "lpg-gas-stove-system",
      name: "LPG Gas Stove System",
      category: "cooking-higher",
      description: "Complete LPG cooking system with safety features and efficient gas consumption.",
      rating: 4.6,
      features: ["Safety Valves", "Efficient Burners", "Easy Installation", "Low Maintenance"],
      specifications: {
        Efficiency: "60% thermal efficiency",
        Warranty: "2 years",
      },
      tags: ["LPG", "Clean Burning", "Convenient"],
      badge: "PREMIUM",
      badgeColor: "from-purple-500 to-purple-700",
      icon: Flame,
      iconColor: "from-purple-500 to-purple-700",
      inStock: true,
    },

    // Water Solutions
    {
      id: "solar-water-pump-500w",
      name: "Solar Water Pump 500W",
      category: "pue",
      description: "Solar-powered water pump for irrigation and livestock watering, designed for smallholder farmers.",
      rating: 4.6,
      features: ["500W Solar Panel", "Submersible Pump", "Controller Unit", "Weather Resistant"],
      specifications: {
        Warranty: "3 years",
      },
      tags: ["Solar", "Water Pump", "Agriculture"],
      badge: "FARMING",
      badgeColor: "from-emerald-500 to-teal-600",
      icon: Settings,
      iconColor: "from-emerald-500 to-teal-600",
      inStock: true,
    },
    {
      id: "solar-milk-chiller",
      name: "Solar Milk Chiller",
      category: "pue",
      description:
        "Solar-powered milk cooling system to maintain milk quality and extend shelf life for dairy farmers.",
      rating: 4.5,
      features: ["Solar Powered", "Temperature Control", "Insulated Tank", "Energy Efficient"],
      specifications: {
        Warranty: "3 years",
      },
      tags: ["Solar", "Dairy", "Food Safety"],
      badge: "DAIRY",
      badgeColor: "from-emerald-500 to-teal-600",
      icon: Settings,
      iconColor: "from-emerald-500 to-teal-600",
      inStock: true,
    },

    // Power Backup
    {
      id: "home-backup-1kw",
      name: "Home Backup System 1kW",
      category: "power-backup",
      description: "Complete backup power system for homes with inverter and battery bank for essential appliances.",
      rating: 4.6,
      features: ["1kW Inverter", "Battery Bank", "Automatic Switching", "LED Indicators"],
      specifications: {
        Warranty: "3 years inverter, 2 years battery",
      },
      tags: ["Backup Power", "Inverter", "Battery"],
      badge: "RELIABLE",
      badgeColor: "from-blue-500 to-blue-700",
      icon: Battery,
      iconColor: "from-blue-500 to-blue-700",
      inStock: true,
    },

    // Street Lights
    {
      id: "solar-street-light-60w",
      name: "Solar Street Light 60W Premium",
      category: "street-lights",
      description: "High-power solar street light with smart controls and motion sensors for enhanced efficiency.",
      rating: 4.9,
      features: ["60W LED", "Motion Sensor", "Smart Controls", "All-Weather Design"],
      specifications: {
        Warranty: "5 years",
      },
      tags: ["Solar", "High Power", "Smart Control"],
      badge: "SALE",
      badgeColor: "from-red-500 to-pink-600",
      icon: Lightbulb,
      iconColor: "from-yellow-500 to-orange-600",
      inStock: true,
      sale: true,
    },
    {
      id: "solar-street-light-30w",
      name: "Solar Street Light 30W",
      category: "street-lights",
      description: "Standalone solar street light with LED technology and automatic dusk-to-dawn operation.",
      rating: 4.5,
      features: ["30W LED", "Auto On/Off", "Weather Resistant", "Easy Installation"],
      specifications: {
        Warranty: "3 years",
      },
      tags: ["Solar", "Street Lighting", "LED"],
      badge: "STANDARD",
      badgeColor: "from-yellow-500 to-orange-600",
      icon: Lightbulb,
      iconColor: "from-yellow-500 to-orange-600",
      inStock: true,
    },

    // Advisory Services
    {
      id: "re-system-design",
      name: "RE System Design Consultation",
      category: "advisory",
      description: "Professional renewable energy system design and consultation services for custom installations.",
      rating: 4.9,
      features: ["Site Assessment", "Custom Design", "Technical Support", "Installation Guidance"],
      specifications: {
        Warranty: "Consultation guarantee",
      },
      tags: ["Consultation", "Design", "Custom"],
      badge: "EXPERT",
      badgeColor: "from-slate-500 to-slate-700",
      icon: Users,
      iconColor: "from-slate-500 to-slate-700",
      inStock: true,
    },
    {
      id: "business-development-package",
      name: "Business Development Package",
      category: "advisory",
      description: "Comprehensive business development support for renewable energy entrepreneurs and organizations.",
      rating: 4.7,
      features: ["Business Planning", "Training Programs", "Market Analysis", "Technical Support"],
      specifications: {
        Warranty: "6 months support",
      },
      tags: ["Business", "Training", "Support"],
      badge: "SALE",
      badgeColor: "from-red-500 to-pink-600",
      icon: Users,
      iconColor: "from-slate-500 to-slate-700",
      inStock: true,
      sale: true,
    },
  ]

  const categories = [
    { id: "all", label: "All", icon: Settings, color: "from-green-500 to-green-600" },
    { id: "cooking-higher", label: "Cooking", icon: Flame, color: "from-purple-500 to-purple-700" },
    { id: "solar-pv", label: "Solar PV", icon: Sun, color: "from-orange-500 to-red-600" },
    { id: "pue", label: "PUE", icon: Settings, color: "from-emerald-500 to-teal-600" },
    { id: "water-pumping", label: "Water Pumping", icon: Droplets, color: "from-slate-500 to-slate-700" },
    { id: "street-lights", label: "Street Lights", icon: Lightbulb, color: "from-yellow-500 to-orange-600" },
    { id: "power-backup", label: "Power Backup", icon: Battery, color: "from-blue-500 to-blue-700" },
    { id: "advisory", label: "Advisory", icon: Users, color: "from-slate-500 to-slate-700" },
  ]

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort products
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "popular":
      default:
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1
          if (!a.popular && b.popular) return 1
          return b.rating - a.rating
        })
        break
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const addToCart = (productId: string) => {
    setCart((prev) => [...prev, productId])
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((id) => id !== productId))
  }

  const isInCart = (productId: string) => cart.includes(productId)

  return (
    <section
      ref={ref}
      id="green-products"
      className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950' 
          : 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100'
      }`}
    >
      {/* Consistent Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bb757]/10 via-transparent to-[#23a455]/10" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Featured Products Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium mb-4 shadow-lg bg-[#2bb757]/20 text-[#2bb757] border border-[#2bb757]/20">
            Grean World Products
          </div>
          <div className="mb-3">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-white">
              <span className="inline-block">
                Find Your Perfect Energy Solution
                <span className="inline-block w-1 h-4 bg-green-400 ml-1"></span>
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-xl md:text-2xl text-white">Browse Our Collection</p>
            <span className="text-base text-gray-300">Explore Our Products</span>
          </div>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] hover:shadow-[#3DD56D]/30 focus:ring-[#3DD56D]">
            <ArrowRight className="h-5 w-5" />
            Browse Collection
          </button>
        </motion.div>

        {/* Featured Products Section */}
        <div className="mb-20">
          {/* Solar Home System Card */}
          <motion.section
            className="w-full max-w-7xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8 z-10 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full rounded-2xl shadow-lg hover:shadow-xl overflow-hidden relative bg-gradient-to-b from-slate-950 to-slate-900 transform transition-all duration-1000">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="solar-home-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="8" fill="#4ade80" fillOpacity="0.3"></circle>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#solar-home-pattern)"></rect>
                </svg>
              </div>

              <div className="flex flex-col relative z-10">
                <div className="flex flex-col lg:flex-row">
                  {/* Solar Panel Visualization */}
                  <div className="w-full lg:w-[45%] relative overflow-hidden flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:min-h-0 p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2bb757]/80 to-transparent z-0"></div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[350px] max-h-[300px] sm:max-w-[400px] sm:max-h-[350px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Solar Panel Grid */}
                          <div className="relative w-full h-full max-w-[280px] max-h-[200px] sm:max-w-[350px] sm:max-h-[250px] md:max-w-[400px] md:max-h-[300px] rounded-xl overflow-hidden shadow-2xl z-0">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3DD56D]/30 to-[#2bb757]/30 opacity-30 blur-sm rounded-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0c253a] to-[#071221] border border-slate-700/50"></div>
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2 sm:p-3">
                              {Array.from({ length: 16 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="rounded-sm relative overflow-hidden transition-all duration-500 bg-[#2bb757]/70"
                                  style={{ transitionDelay: `${i * 50}ms` }}
                                ></div>
                              ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-[#3DD56D]/10 to-transparent opacity-20"></div>
                          </div>
                        </div>
                        {/* Animated Circles */}
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
                          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#2bb757]/60 flex items-center justify-center shadow-lg">
                            <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-3 bg-green-600 text-white border-green-600/30">
                          Solar Energy
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black leading-tight mb-4 text-white">
                          Solar Home System 200W
                        </h3>
                        <p className="text-base sm:text-lg font-medium text-slate-300">
                          Our flagship solar home system with everything needed to power a small household, including
                          lighting, phone charging, and TV capability.
                        </p>
                      </div>

                      {/* Specs Grid */}
                      <div className="p-4 rounded-lg py-4 shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
                          <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-green-400">200W</div>
                            <div className="text-xs text-slate-300">Panel Power</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-green-400">2 yrs</div>
                            <div className="text-xs text-slate-300">Warranty</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-green-400">ETB 16,499</div>
                            <div className="text-xs text-slate-300">Price</div>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 sm:p-5 rounded-lg shadow-lg overflow-hidden relative">
                        <div className="relative z-10">
                          <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center space-x-3">
                              <div className="bg-white/20 p-2 rounded-full">
                                <SunMedium className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-white font-medium">200W solar panel</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="bg-white/20 p-2 rounded-full">
                                <Battery className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-white font-medium">Battery backup</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="bg-white/20 p-2 rounded-full">
                                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-white font-medium">LED lights & charging</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="bg-white/20 p-2 rounded-full">
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-white font-medium">2-year local support</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tags and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-4 flex-shrink-0">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-500 text-green-400 bg-transparent">
                            #SolarHome
                          </span>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-500 text-green-400 bg-transparent">
                            #CleanEnergy
                          </span>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-500 text-green-400 bg-transparent">
                            #OffGrid
                          </span>
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green-600 hover:bg-green-700 text-white">
                          See Details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Mirt Stove Card */}
          <motion.section
            className="w-full max-w-7xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8 z-10 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[627px] rounded-2xl shadow-lg hover:shadow-xl overflow-hidden relative bg-gradient-to-b from-slate-950 to-slate-900 transform transition-all duration-1000">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="mirt-stove-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="8" fill="#4ade80" fillOpacity="0.3"></circle>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#mirt-stove-pattern)"></rect>
                </svg>
              </div>

              <div className="flex min-h-full flex-col">
                <div className="flex flex-col lg:flex-row flex-grow">
                  {/* Product Information */}
                  <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-full">
                    <div className="space-y-6 sm:space-y-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 flex items-center justify-center">
                            <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-black text-white">Mirt Stove Deluxe</h3>
                            <p className="text-sm sm:text-base font-medium text-slate-300">
                              Efficient Injera Baking Solution
                            </p>
                          </div>
                        </div>
                        <div className="backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-2 flex items-center space-x-2 self-start sm:self-auto bg-slate-800/80 border border-slate-700">
                          <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                          <p className="text-xs sm:text-sm font-medium text-white">@mirtstove</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-5 rounded-lg shadow-lg overflow-hidden relative">
                        <div className="relative z-10">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-2 bg-white/20 backdrop-blur-sm text-white border-white/20">
                            Clean Cooking
                          </div>
                          <h4 className="text-xl font-black mb-2">Efficient, Durable, and Eco-Friendly</h4>
                          <p className="text-base font-medium">
                            The enhanced Mirt stove is made from durable sand and cement mortar, designed for Ethiopian
                            households to bake injera efficiently and reduce fuel use.
                          </p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                          <div className="flex items-center space-x-3 mb-2">
                            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                            <h5 className="font-semibold text-sm sm:text-base text-white">Key Features</h5>
                          </div>
                          <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-300">
                            <li>Bakes up to 30 injeras per day</li>
                            <li>Reduces fuel consumption by 50%</li>
                            <li>5+ year lifespan with proper maintenance</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                          <div className="flex items-center space-x-3 mb-2">
                            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                            <h5 className="font-semibold text-sm sm:text-base text-white">Environmental Impact</h5>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-400">50%</div>
                              <div className="text-xs text-slate-300">Fuel savings</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-400">30+</div>
                              <div className="text-xs text-slate-300">Injeras/day</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-400">5 yrs</div>
                              <div className="text-xs text-slate-300">Lifespan</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-400">Eco</div>
                              <div className="text-xs text-slate-300">Local materials</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tags and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 flex-shrink-0">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-500 text-green-400 bg-transparent">
                            #CleanCooking
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-500 text-green-400 bg-transparent">
                            #Injera
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-500 text-green-400 bg-transparent">
                            #EcoStove
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm h-10 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white">
                          View Details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stove Visualization */}
                  <div className="w-full lg:w-[45%] relative overflow-hidden flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:min-h-0 p-4">
                    <div className="absolute inset-0 bg-gradient-to-l from-[#3DD56D]/80 to-transparent z-0"></div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[300px] max-h-[300px] sm:max-w-[350px] sm:max-h-[350px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full max-w-[280px] max-h-[280px] rounded-full bg-[#3DD56D]/20 transition-all duration-500 animate-pulse"></div>
                          <div
                            className="absolute w-[80%] h-[80%] max-w-[220px] max-h-[220px] rounded-full bg-[#3DD56D]/30 transition-all duration-500 animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute w-[60%] h-[60%] max-w-[160px] max-h-[160px] rounded-full bg-[#3DD56D]/40 transition-all duration-500 animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#2bb757]/60 flex items-center justify-center shadow-lg transition-all duration-700">
                            <Flame className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:w-12 text-white" />
                          </div>
                          {/* Animated SVG */}
                          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                            <g stroke="rgba(61, 213, 109, 0.4)" fill="none" strokeWidth="1">
                              <circle cx="200" cy="200" r="80" strokeDasharray="5,5">
                                <animateTransform
                                  attributeName="transform"
                                  attributeType="XML"
                                  type="rotate"
                                  from="0 200 200"
                                  to="360 200 200"
                                  dur="20s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle cx="200" cy="200" r="120" strokeDasharray="3,7">
                                <animateTransform
                                  attributeName="transform"
                                  attributeType="XML"
                                  type="rotate"
                                  from="360 200 200"
                                  to="0 200 200"
                                  dur="30s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>
                            <g fill="rgba(61, 213, 109, 0.6)">
                              <circle cx="200" cy="120" r="3">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="280" cy="200" r="3">
                                <animate
                                  attributeName="opacity"
                                  values="0.6;1;0.6"
                                  dur="2s"
                                  begin="0.5s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle cx="200" cy="280" r="3">
                                <animate
                                  attributeName="opacity"
                                  values="0.6;1;0.6"
                                  dur="2s"
                                  begin="1s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle cx="120" cy="200" r="3">
                                <animate
                                  attributeName="opacity"
                                  values="0.6;1;0.6"
                                  dur="2s"
                                  begin="1.5s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Product Catalog Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Product </span>
            <span className="text-[#3DD56D]">Catalog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive selection of premium solar equipment and accessories. All products come with
            warranty and professional installation support.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, features, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#3DD56D] transition-colors"
              />
            </div>

            {/* Sort and Popular */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-400/30">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm font-medium">Most Popular</span>
                <Filter className="w-4 h-4" />
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3DD56D]">{filteredAndSortedProducts.length}</div>
                  <div className="text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3DD56D]">7+</div>
                  <div className="text-gray-400">Categories</div>
                </div>
              </div>

              {/* Cart Counter */}
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-[#3DD56D]" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#3DD56D] text-white text-xs rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Filter by Category */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3DD56D]/20 text-[#3DD56D] border border-[#3DD56D]/30 mb-4">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by Category</span>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              )
            })}
          </div>

          {/* Products Found */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-[#3DD56D] border border-slate-700">
              <span className="font-bold">{filteredAndSortedProducts.length}</span>
              <span className="text-gray-400">products found</span>
            </span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {filteredAndSortedProducts.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#3DD56D]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Card Header */}
                <div className="relative p-6 pb-4">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.iconColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Top Row - Category & Badge */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.iconColor}`}></div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {product.category.replace("-", " ")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Rating */}
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30">
                        <Star className="w-3 h-3 text-amber-400 fill-current" />
                        <span className="text-xs font-semibold text-amber-400">{product.rating}</span>
                      </div>

                      {/* Product Badge */}
                      {product.badge && (
                        <div
                          className={`px-2 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${product.badgeColor} text-white shadow-lg`}
                        >
                          {product.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className="relative z-10 flex justify-center mb-4">
                    <div
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${product.iconColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      {/* Glow effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-br ${product.iconColor} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10`}
                      ></div>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="relative z-10 text-lg font-bold text-white text-center mb-2 line-clamp-2 group-hover:text-[#3DD56D] transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="relative z-10 text-sm text-gray-400 text-center line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="px-6 pb-6">
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <div className={`w-1 h-4 bg-gradient-to-b ${product.iconColor} rounded-full`}></div>
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.iconColor}`}></div>
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <div className={`w-1 h-4 bg-gradient-to-b ${product.iconColor} rounded-full`}></div>
                      Specifications
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications)
                        .slice(0, 2)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center p-2 rounded-lg bg-white/5 border border-white/10"
                          >
                            <span className="text-xs text-gray-400">{key}</span>
                            <span
                              className={`text-xs font-semibold bg-gradient-to-r ${product.iconColor} bg-clip-text text-transparent`}
                            >
                              {value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.iconColor} bg-opacity-20 text-gray-300 border border-white/10`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-6">
                    <div className="relative p-4 rounded-xl bg-gradient-to-r from-[#3DD56D]/10 to-[#2bb757]/10 border border-[#3DD56D]/20 group-hover:border-[#3DD56D]/40 transition-colors duration-300">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white mb-2">Get Quote</div>
                        <div className="flex flex-col gap-2">
                          <a
                            href="tel:+251913330000"
                            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#3DD56D]/20 text-[#3DD56D] hover:bg-[#3DD56D]/30 transition-colors duration-200 text-xs font-medium"
                          >
                            <Phone className="w-3 h-3" />
                            +251 913 330000
                          </a>
                          <a
                            href="tel:+251910212989"
                            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#3DD56D]/20 text-[#3DD56D] hover:bg-[#3DD56D]/30 transition-colors duration-200 text-xs font-medium"
                          >
                            <Phone className="w-3 h-3" />
                            +251 910 212989
                          </a>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">Competitive pricing available</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => (isInCart(product.id) ? removeFromCart(product.id) : addToCart(product.id))}
                      className={`flex-1 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                        isInCart(product.id)
                          ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                          : `bg-gradient-to-r ${product.iconColor} text-white hover:shadow-lg hover:scale-105`
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {isInCart(product.id) ? "Remove" : "Add"}
                    </button>
                    <button className="px-4 py-3 rounded-xl font-semibold text-sm border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>

                {/* Card Footer */}
                <div
                  className={`px-6 py-3 bg-gradient-to-r ${product.iconColor} bg-opacity-5 border-t border-white/10`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.iconColor}`}></div>
                      <span className="text-xs font-medium text-gray-400">
                        {product.inStock ? "In Stock" : "Contact for Availability"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {product.popular && <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>}
                      {product.sale && <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>}
                      <Icon className={`w-4 h-4 bg-gradient-to-r ${product.iconColor} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3DD56D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="px-6 py-3 bg-[#3DD56D] text-white rounded-lg hover:bg-[#2bb757] transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#3DD56D]/25 transition-all duration-300 transform hover:scale-105">
              Request Custom Quote
            </button>
            <button className="px-8 py-4 border-2 border-[#3DD56D] text-[#3DD56D] font-semibold rounded-full hover:bg-[#3DD56D] hover:text-white transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

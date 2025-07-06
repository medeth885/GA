import { Shield, Target, Users, Heart, Leaf, ArrowRight, Sparkles } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

const GreenAbout = () => {
  const { isDark } = useTheme()
  return (
    <section className={`relative py-16 sm:py-24 overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950' 
        : 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100'
    }`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bb757]/10 via-transparent to-[#23a455]/10"></div>

      <div className="container relative z-10">
        {/* Main Header */}
        <div className="max-w-6xl mx-auto text-center mt-4 sm:mt-6 lg:mt-8 mb-12 sm:mb-16 lg:mb-20 relative z-10 px-4">
          <div className="inline-flex items-center rounded-full px-4 py-2 typography-small mb-6 shadow-lg backdrop-blur-sm bg-[#3dd56d]/20 text-[#3dd56d] border border-[#3dd56d]/30">
            <Sparkles className="w-4 h-4 mr-2" />
            About Grean World
          </div>
          <div className="mb-4">
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight flex flex-col sm:flex-row items-center justify-center gap-2 text-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="inline-block">
                Empowering Ethiopia's Energy Transition
                <span className="inline-block w-1 h-4 bg-green-400 ml-1"></span>
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl typography-body text-center max-w-3xl mx-auto mt-6 text-gray-300">
            <span className="text-[#2bb757] font-semibold">Clean, accessible, and sustainable energy</span> for all
            communities.
          </p>
        </div>

        {/* About Section Card with HUD Overlay - Face of Resilience */}
        <div className="w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden relative z-10 mb-8 sm:mb-12 lg:mb-16">
          {/* Video Background */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREAN-VIDOE-hUdmwNiZuOPPjJJHsH93QMoqIIQP2U.mp4" type="video/mp4" />
          </video>

          {/* HUD Frame Overlay */}
          <div className="absolute inset-0 z-5 pointer-events-none">
            {/* Corner frames */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#3DD56D]/60"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#3DD56D]/60"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#3DD56D]/60"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#3DD56D]/60"></div>

            {/* Status bars */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3DD56D]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3DD56D]/40 to-transparent"></div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col h-full relative z-20">
            {/* Header Row */}
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3DD56D] flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl typography-h3 tracking-wide text-white">
                    <span className="font-bold">GREAN WORLD</span> Energy
                  </h3>
                  <p className="text-xs sm:text-sm typography-small text-slate-300">Clean Energy Solutions</p>
                </div>
              </div>
              <div className="rounded-lg px-3 py-1.5 flex items-center space-x-2 self-start sm:self-auto bg-slate-800/80 backdrop-blur-sm border border-slate-700">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <p className="text-xs sm:text-sm font-medium text-white">Resilience Hub</p>
              </div>
            </div>

            {/* Hero/Headline */}
            <div className="flex-grow flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
              {/* Left: Content */}
              <div className="max-w-xl text-center lg:text-left mb-6 lg:mb-0 flex-1">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-3 bg-white/20 backdrop-blur-sm text-white">
                  Face of Resilience
                </span>

                {/* Primary Message Card */}
                <div className="p-4 sm:p-5 rounded-lg mb-4 shadow-lg bg-gradient-to-r from-[#2bb757] to-[#23A455] text-white overflow-hidden relative">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-5 h-5 text-white" />
                      <h4 className="text-lg sm:text-xl typography-h3 text-white">Face of Resilience</h4>
                    </div>
                    <p className="text-sm sm:text-base typography-body mb-2 text-white">
                      "This is the face of resilience."
                    </p>
                    <p className="text-xs sm:text-sm typography-small text-white/90 mb-3">
                      Barefoot, bold, and building a better tomorrow.
                    </p>
                    <p className="text-xs sm:text-sm typography-body text-white/95">
                      At GREAN WORLD, we stand with the hardworking people who power Ethiopia from the ground
                      up—literally.
                    </p>
                  </div>
                </div>

                {/* Features & Impact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DD56D]" />
                      <h5 className="typography-small text-sm text-white">Our Commitment</h5>
                    </div>
                    <ul className="text-xs typography-small space-y-1 list-disc list-inside text-slate-300">
                      <li>Clean energy solutions</li>
                      <li>Solar systems for communities</li>
                      <li>Clean cooking technology</li>
                      <li>Support for those who need it most</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DD56D]" />
                      <h5 className="typography-small text-sm text-white">Beyond Struggle</h5>
                    </div>
                    <p className="text-xs typography-small text-slate-300 mb-2">
                      They deserve more than struggle—they deserve opportunity.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold text-[#3DD56D]">270k+</div>
                        <div className="text-xs typography-small text-slate-300">Systems deployed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold text-[#2bb757]">500+</div>
                        <div className="text-xs typography-small text-slate-300">Villages reached</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Animated Visual */}
              <div className="flex-1 flex items-center justify-center relative min-h-[250px] sm:min-h-[300px] lg:min-h-0">
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
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 p-4 sm:p-6 lg:p-8 gap-4 flex-shrink-0">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#3DD56D] text-[#3DD56D] bg-transparent">
                  #Resilience
                </div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#2bb757] text-[#2bb757] bg-transparent">
                  #Opportunity
                </div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#23A455] text-[#23A455] bg-transparent">
                  #CleanEnergy
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white bg-gradient-to-r from-[#3DD56D] to-[#2bb757] hover:shadow-lg hover:shadow-[#3DD56D]/30">
                Join Our Mission
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Business Innovation Card */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 z-10">
          <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circle-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="8" fill="#4ade80" fillOpacity="0.15"></circle>
                </pattern>
                <pattern id="leaf-accent-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path
                    d="M40,10 C30,10 20,20 20,30 C20,40 30,50 40,50 C50,50 60,40 60,30 C60,20 50,10 40,10 Z M40,45 C32.5,45 25,37.5 25,30 C25,22.5 32.5,15 40,15 C47.5,15 55,22.5 55,30 C55,37.5 47.5,45 40,45 Z"
                    fill="#4ade80"
                    fillOpacity="0.08"
                  ></path>
                </pattern>
                <rect width="100%" height="100%" fill="url(#circle-pattern)"></rect>
                <rect width="100%" height="100%" fill="url(#leaf-accent-pattern)"></rect>
              </svg>
            </div>

            <div className="flex flex-col lg:flex-row h-full relative">
              {/* Right Visual Section - Desktop Only */}
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-green-600/80 to-transparent z-0"></div>
                <div className="absolute inset-0 z-10 flex items-center justify-center h-full">
                  <div className="relative w-full h-full max-w-[300px] max-h-[300px] sm:max-w-[350px] sm:max-h-[350px] lg:max-w-[400px] lg:max-h-[400px]">
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

              {/* Left Content Section */}
              <div className="w-full lg:w-[55%] flex flex-col h-full relative z-30">
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4 flex-shrink-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-600 flex items-center justify-center">
                      <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white">
                        <span className="font-bold">GREAN WORLD</span> Energy
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300">Sustainable Energy Solutions for Ethiopia</p>
                    </div>
                  </div>
                  <div className="rounded-lg px-3 py-1.5 flex items-center space-x-2 self-start sm:self-auto bg-slate-800/80 backdrop-blur-sm border border-slate-700">
                    <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    <p className="text-xs sm:text-sm font-medium text-white">Green Innovation Hub</p>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between space-y-3 sm:space-y-4 md:space-y-6 px-4 sm:px-6 lg:px-8 lg:pr-12 pb-4 sm:pb-6 lg:pb-8 min-h-[500px]">
                  {/* Business Innovation Card */}
                  <div
                    className="border transition-all duration-300 bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 text-white p-4 sm:p-5 rounded-2xl shadow-lg overflow-hidden relative"
                    style={{ background: "linear-gradient(135deg, rgb(43, 183, 87), rgb(35, 164, 85))" }}
                  >
                    <div className="relative z-10 p-6">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 typography-small mb-2 sm:mb-3 bg-white/20 backdrop-blur-sm text-white">
                        Business Innovation
                      </span>
                      <h4 className="typography-h3 mb-2 sm:mb-3 text-white">Circular Economy Business Model</h4>
                      <p className="typography-body text-white/90">
                        Our innovative circular economy framework helps businesses reduce waste by{" "}
                        <span className="text-[#3dd56d] font-semibold">85%</span>, cut costs by{" "}
                        <span className="text-[#3dd56d] font-semibold">35%</span>, and improve sustainability metrics
                        while maintaining product quality and performance.
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="transition-all duration-300 relative overflow-hidden hover:bg-slate-800/80 p-3 sm:p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                      <div className="relative z-10 p-6">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                          <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#3dd56d]" />
                          <h5 className="typography-h3 text-sm text-white">Eco Features</h5>
                        </div>
                        <ul className="typography-small space-y-1 sm:space-y-2 list-disc list-inside text-slate-300">
                          <li>
                            <span className="text-[#2bb757]">10Wp-350Wp</span> solar home systems
                          </li>
                          <li>Lighting, phone charging, TV support</li>
                          <li>Professional installation included</li>
                          <li>Local maintenance & training</li>
                        </ul>
                      </div>
                    </div>
                    <div className="transition-all duration-300 relative overflow-hidden hover:bg-slate-800/80 p-3 sm:p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                      <div className="relative z-10 p-6">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                          <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#3dd56d]" />
                          <h5 className="typography-h3 text-sm text-white">Environmental Impact</h5>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center">
                            <div className="text-lg sm:text-xl font-bold text-[#3dd56d]">270k+</div>
                            <div className="typography-small text-slate-300">Systems deployed</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg sm:text-xl font-bold text-[#3dd56d]">500+</div>
                            <div className="typography-small text-slate-300">Villages reached</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg sm:text-xl font-bold text-[#2bb757]">200+</div>
                            <div className="typography-small text-slate-300">Women entrepreneurs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg sm:text-xl font-bold text-[#2bb757]">30k tons</div>
                            <div className="typography-small text-slate-300">CO₂ reduction</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 gap-4 flex-shrink-0 relative z-40 bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 typography-small border-[#3dd56d] text-[#3dd56d] bg-transparent">
                        #Sustainable
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 typography-small border-[#2bb757] text-[#2bb757] bg-transparent">
                        #EcoFriendly
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 typography-small border-[#23a455] text-[#23a455] bg-transparent">
                        #ZeroWaste
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#3DD56D] to-[#2bb757] text-white hover:shadow-lg hover:shadow-[#3DD56D]/20 hover:translate-y-[-1px] rounded-full font-bold h-10 px-6 py-3 text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Visual Section */}
              <div className="lg:hidden w-full relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[350px] p-4">
                <div className="absolute inset-0 bg-gradient-to-l from-[#2bb757]/80 to-transparent z-0"></div>
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[250px] max-h-[250px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full max-w-[200px] max-h-[200px] rounded-full bg-[#3dd56d]/20 animate-pulse"></div>
                      <div
                        className="absolute w-[75%] h-[75%] max-w-[150px] max-h-[150px] rounded-full bg-[#2bb757]/30 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute w-[50%] h-[50%] max-w-[100px] max-h-[100px] rounded-full bg-[#23a455]/40 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div className="absolute w-12 h-12 rounded-full bg-[#2bb757]/50 flex items-center justify-center shadow-lg">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Excellence Section */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24 z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 typography-small mb-6 shadow-lg backdrop-blur-sm bg-[#2bb757]/20 text-[#2bb757] border border-[#2bb757]/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Distribution Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl typography-display text-center mb-6 text-white">
              Our <span className="text-[#3dd56d]">Distribution</span> Model
            </h2>
            <p className="text-lg sm:text-xl typography-body text-center max-w-3xl mx-auto text-gray-300">
              Innovative <span className="text-[#2bb757] font-semibold">supply chain solutions</span> connecting rural
              communities with sustainable energy through strategic partnerships and local networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgb(61, 213, 109), rgb(43, 183, 87))" }}
            >
              <div className="relative z-10 text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="typography-h3 mb-3 text-white">Local Partnerships</h3>
                <p className="typography-body text-white/90 mb-4">
                  Working with <span className="font-semibold">200+ local agents</span> across rural Ethiopia to ensure
                  reliable distribution and maintenance support.
                </p>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="typography-small text-white/80">Active Partners</div>
              </div>
            </div>

            <div
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgb(43, 183, 87), rgb(35, 164, 85))" }}
            >
              <div className="relative z-10 text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="typography-h3 mb-3 text-white">Direct Sales</h3>
                <p className="typography-body text-white/90 mb-4">
                  Direct-to-consumer sales through <span className="font-semibold">mobile units</span> and regional
                  distribution centers.
                </p>
                <div className="text-2xl font-bold text-white">15</div>
                <div className="typography-small text-white/80">Distribution Centers</div>
              </div>
            </div>

            <div
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg overflow-hidden md:col-span-2 lg:col-span-1 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgb(35, 164, 85), rgb(30, 126, 52))" }}
            >
              <div className="relative z-10 text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="typography-h3 mb-3 text-white">Digital Platform</h3>
                <p className="typography-body text-white/90 mb-4">
                  Online ordering and <span className="font-semibold">mobile app</span> for easy access to products and
                  services.
                </p>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="typography-small text-white/80">Online Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics Section */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24 z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 typography-small mb-6 shadow-lg backdrop-blur-sm bg-[#23a455]/20 text-[#23a455] border border-[#23a455]/30">
              <Leaf className="w-4 h-4 mr-2" />
              Measurable Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl typography-display text-center mb-6 text-white">
              Our <span className="text-[#3dd56d]">Impact</span>
            </h2>
            <p className="text-lg sm:text-xl typography-body text-center max-w-3xl mx-auto text-gray-300">
              Transforming lives through <span className="text-[#2bb757] font-semibold">sustainable energy access</span>{" "}
              and creating lasting positive change in Ethiopian communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            <div className="rounded-xl border relative overflow-hidden bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 p-6 text-center transition-all duration-300">
              <div className="relative z-10 p-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#3dd56d] mb-2">270k+</div>
                <div className="typography-h3 mb-2 text-white">Solar Systems</div>
                <div className="typography-small text-gray-400">Deployed across Ethiopia</div>
              </div>
            </div>

            <div className="rounded-xl border relative overflow-hidden bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 p-6 text-center transition-all duration-300">
              <div className="relative z-10 p-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#2bb757] mb-2">500+</div>
                <div className="typography-h3 mb-2 text-white">Villages</div>
                <div className="typography-small text-gray-400">Connected to clean energy</div>
              </div>
            </div>

            <div className="rounded-xl border relative overflow-hidden bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 p-6 text-center transition-all duration-300">
              <div className="relative z-10 p-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#23a455] mb-2">1.2M</div>
                <div className="typography-h3 mb-2 text-white">People</div>
                <div className="typography-small text-gray-400">Lives improved</div>
              </div>
            </div>

            <div className="rounded-xl border relative overflow-hidden bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 p-6 text-center transition-all duration-300">
              <div className="relative z-10 p-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#3dd56d] mb-2">30k</div>
                <div className="typography-h3 mb-2 text-white">Tons CO₂</div>
                <div className="typography-small text-gray-400">Emissions reduced</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl border relative overflow-hidden bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 p-6 sm:p-8 transition-all duration-300">
              <div className="relative z-10 p-6">
                <h3 className="typography-h3 mb-4 text-[#3dd56d]">Economic Empowerment</h3>
                <p className="typography-body mb-4 text-gray-300">
                  Our solar solutions have enabled{" "}
                  <span className="text-[#2bb757] font-semibold">200+ women entrepreneurs</span> to start and grow their
                  businesses, creating sustainable income streams in rural communities.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#2bb757]">200+</div>
                    <div className="typography-small text-gray-400">Women Entrepreneurs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#23a455]">$2.5M</div>
                    <div className="typography-small text-gray-400">Income Generated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border relative overflow-hidden bg-slate-900/80 border-slate-700 hover:bg-slate-800/80 p-6 sm:p-8 transition-all duration-300">
              <div className="relative z-10 p-6">
                <h3 className="typography-h3 mb-4 text-[#2bb757]">Educational Impact</h3>
                <p className="typography-body mb-4 text-gray-300">
                  Solar lighting has extended study hours for{" "}
                  <span className="text-[#3dd56d] font-semibold">50,000+ students</span>, improving educational outcomes
                  and creating brighter futures.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3dd56d]">50k+</div>
                    <div className="typography-small text-gray-400">Students Benefited</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#23a455]">85%</div>
                    <div className="typography-small text-gray-400">Grade Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24 z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 typography-small mb-6 shadow-lg backdrop-blur-sm bg-[#3dd56d]/20 text-[#3dd56d] border border-[#3dd56d]/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Future Forward
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl typography-display text-center mb-6 text-white">
              Our <span className="text-[#3dd56d]">Vision</span>
            </h2>
            <p className="text-lg sm:text-xl typography-body text-center max-w-3xl mx-auto text-gray-300">
              Building a <span className="text-[#2bb757] font-semibold">sustainable energy future</span> where every
              Ethiopian community has access to clean, reliable, and affordable power.
            </p>
          </div>

          <div
            className="relative p-8 sm:p-12 lg:p-16 text-center rounded-3xl shadow-2xl overflow-hidden transition-all duration-300"
            style={{ background: "linear-gradient(135deg, rgb(61, 213, 109), rgb(43, 183, 87), rgb(35, 164, 85))" }}
          >
            <div className="relative z-10 max-w-4xl mx-auto text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl typography-display mb-6 text-white">
                Transforming <span className="text-yellow-300">20 Villages</span> by 2030
              </h3>
              <p className="text-lg sm:text-xl typography-body mb-8 text-white/90">
                Our ambitious goal is to create 20 fully sustainable green villages, each powered entirely by renewable
                energy and serving as models for rural development across Africa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">100%</div>
                  <div className="typography-small text-white/80">Renewable Energy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">20</div>
                  <div className="typography-small text-white/80">Green Villages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">2030</div>
                  <div className="typography-small text-white/80">Target Year</div>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 hover:shadow-md hover:shadow-[#3DD56D]/10 rounded-full font-bold h-12 px-8 py-4 text-lg bg-white/20 border-white/30 text-white hover:bg-white/30">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreenAbout

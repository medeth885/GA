"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Sun,
  ChevronDown,
  MessageSquare,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  interest: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function GreenContact() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    interest: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.interest.trim()) {
      newErrors.interest = "Please select your interest"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        interest: "",
        message: "",
      })
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section
      ref={ref}
      id="green-contact"
      className={`relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950' 
          : 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100'
      }`}
    >
      {/* Consistent Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bb757]/10 via-transparent to-[#23a455]/10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse bg-[#3DD56D]"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-15 animate-bounce bg-[#3DD56D]"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full opacity-10 animate-pulse bg-[#3DD56D]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full opacity-25 animate-bounce bg-[#3DD56D]"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-8 lg:mb-12 relative z-10">
        <motion.div
          className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium mb-6 shadow-xl backdrop-blur-sm bg-[#3DD56D]/20 text-[#3DD56D] border border-[#3DD56D]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Mail className="mr-2 h-5 w-5" />
          Contact Us
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-center text-white">
            {"Let's Connect & Transform Energy Together"}
            <span className="inline-block w-1 h-4 bg-green-400 ml-1"></span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ready to power your future with sustainable energy? Our expert team is here to guide you through solar
          solutions, clean cooking technologies, and energy consulting services.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact-form" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-bold px-8 py-4 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 min-h-[48px] bg-gradient-to-r from-[#3DD56D] to-[#2bb757] hover:from-[#2bb757] hover:to-[#3DD56D] focus:ring-[#3DD56D]">
              <Send className="mr-2 h-5 w-5" />
              Send a Message
            </button>
          </a>
          <a href="tel:+251913330000" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-bold px-8 py-4 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 min-h-[48px] border-[#3DD56D] text-[#3DD56D] hover:bg-[#3DD56D]/10 hover:scale-105 focus:ring-[#3DD56D] backdrop-blur-sm bg-slate-800/80">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
          </a>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl overflow-hidden relative group transition-all duration-500 backdrop-blur-sm h-full flex flex-col bg-gradient-to-br from-slate-800/90 to-slate-900/70 border border-slate-700/50"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3DD56D]/5 via-transparent to-[#2bb757]/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3DD56D]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#2bb757]/15 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Form Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-2xl mr-4 shadow-lg backdrop-blur-sm bg-gradient-to-br from-[#3DD56D]/30 to-[#2bb757]/20 text-[#3DD56D]">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-white">Send us a message</h2>
                  <p className="text-sm text-gray-300">⚡ Quick response within 24 hours guaranteed</p>
                </div>
              </div>

              {/* Contact Form */}
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white font-semibold" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative group">
                      <input
                        className={`flex w-full border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD56D] focus:border-[#3DD56D] transition-all duration-300 h-12 pl-10 rounded-lg shadow-sm text-white placeholder:text-gray-400 bg-slate-800/80 ${
                          errors.name ? "border-red-500" : "border-slate-600/60"
                        }`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-[#3DD56D] transition-colors text-gray-400">
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold text-sm text-white" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative group">
                      <input
                        className={`flex w-full border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD56D] focus:border-[#3DD56D] transition-all duration-300 h-12 pl-10 rounded-lg shadow-sm text-white placeholder:text-gray-400 bg-slate-800/80 ${
                          errors.email ? "border-red-500" : "border-slate-600/60"
                        }`}
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-[#3DD56D] transition-colors text-gray-400">
                        <Mail className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="font-semibold text-sm text-white" htmlFor="phone">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <input
                        className="flex w-full border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD56D] focus:border-[#3DD56D] transition-all duration-300 h-12 pl-10 rounded-lg shadow-sm text-white placeholder:text-gray-400 bg-slate-800/80 border-slate-600/60"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone (optional)"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-[#3DD56D] transition-colors text-gray-400">
                        <Phone className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold text-sm text-white" htmlFor="subject">
                      Subject
                    </label>
                    <div className="relative group">
                      <input
                        className={`flex w-full border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD56D] focus:border-[#3DD56D] transition-all duration-300 h-12 pl-10 rounded-lg shadow-sm text-white placeholder:text-gray-400 bg-slate-800/80 ${
                          errors.subject ? "border-red-500" : "border-slate-600/60"
                        }`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-[#3DD56D] transition-colors text-gray-400">
                        <Sun className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.subject && (
                      <p className="text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Interest Selection */}
                <div className="space-y-2">
                  <label className="font-semibold text-sm text-white" htmlFor="interest">
                    {"I'm Interested In"}
                  </label>
                  <div className="relative group">
                    <select
                      className={`flex w-full border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD56D] focus:border-[#3DD56D] transition-all duration-300 h-12 pl-10 pr-10 rounded-lg shadow-sm appearance-none text-white bg-slate-800/80 ${
                        errors.interest ? "border-red-500" : "border-slate-600/60"
                      }`}
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your interest...</option>
                      <option value="solar-energy-solutions">Solar Energy Solutions</option>
                      <option value="clean-cooking-stoves">Clean Cooking Stoves</option>
                      <option value="energy-consulting">Energy Consulting</option>
                      <option value="business-partnership">Business Partnership</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-[#3DD56D] transition-colors pointer-events-none text-gray-400">
                      <Sun className="h-4 w-4" />
                    </div>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  {errors.interest && (
                    <p className="text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.interest}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2 flex-1">
                  <label className="font-semibold text-sm text-white" htmlFor="message">
                    Your Message
                  </label>
                  <div className="relative group h-full">
                    <textarea
                      className={`flex w-full border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD56D] focus-visible:ring-offset-2 transition-all duration-300 h-full min-h-[160px] pl-10 pt-3 rounded-lg shadow-sm resize-none text-white placeholder:text-gray-400 bg-slate-800/80 ${
                        errors.message ? "border-red-500" : "border-slate-600/60"
                      }`}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your needs..."
                      required
                    />
                    <div className="absolute left-3 top-3 group-focus-within:text-[#3DD56D] transition-colors text-gray-400">
                      <Send className="h-4 w-4" />
                    </div>
                  </div>
                  {errors.message && (
                    <p className="text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 text-white w-full group relative overflow-hidden rounded-full h-14 shadow-lg hover:shadow-xl bg-gradient-to-r from-[#3DD56D] to-[#2bb757] hover:from-[#2bb757] hover:to-[#3DD56D] focus-visible:ring-[#3DD56D] hover:scale-105"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center justify-center text-base font-medium">
                          Send Message
                          <span className="ml-2">
                            <Send className="h-4 w-4" />
                          </span>
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Failed to send message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information and Map */}
          <motion.div
            className="space-y-6 h-full flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Information */}
            <div className="rounded-3xl p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/70 border border-slate-700/50">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3DD56D]/5 via-transparent to-[#2bb757]/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#3DD56D]/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#2bb757]/15 to-transparent rounded-full blur-lg"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl mr-4 shadow-lg backdrop-blur-sm bg-gradient-to-br from-[#3DD56D]/30 to-[#2bb757]/20 text-[#3DD56D]">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">Contact Information</h3>
                    <p className="text-base text-gray-300">🌍 Reach us anytime, anywhere</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-xl mr-4 mt-1 shadow-lg backdrop-blur-sm group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-700/80 to-slate-800/60 border border-slate-600/50">
                      <MapPin className="h-6 w-6 text-[#3DD56D]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-3 text-white">📍 Our Location</p>
                      <p className="text-sm leading-relaxed font-medium text-gray-300">
                        Kirkos Sub City Wereda 02, Deberezeit road, Sierra Leone street, Tegene Building (Global Hotel),
                        6th floor Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  {/* Email and Phone Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                      <div className="p-4 rounded-xl mr-3 mt-1 shadow-lg backdrop-blur-sm group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-700/80 to-slate-800/60 border border-slate-600/50">
                        <Mail className="h-6 w-6 text-[#3DD56D]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg mb-3 text-white">📧 Email Us</p>
                        <p className="text-sm mb-2 font-medium text-gray-300">
                          <a
                            href="mailto:info@greanworld.com"
                            className="hover:text-[#3DD56D] transition-colors border-b border-dashed hover:border-[#3DD56D] border-gray-400"
                          >
                            info@greanworld.com
                          </a>
                        </p>
                        <p className="text-sm mb-3 font-medium text-gray-300">
                          <a
                            href="mailto:sileshi@greanworld.com"
                            className="hover:text-[#3DD56D] transition-colors border-b border-dashed hover:border-[#3DD56D] border-gray-400"
                          >
                            sileshi@greanworld.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-400">⚡ Response within 24 hours</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                      <div className="p-4 rounded-xl mr-3 mt-1 shadow-lg backdrop-blur-sm group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-700/80 to-slate-800/60 border border-slate-600/50">
                        <Phone className="h-6 w-6 text-[#3DD56D]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg mb-3 text-white">📞 Call Us</p>
                        <p className="text-sm mb-2 font-medium text-gray-300">
                          <a
                            href="tel:+251913330000"
                            className="hover:text-[#3DD56D] transition-colors border-b border-dashed hover:border-[#3DD56D] border-gray-400"
                          >
                            (+251) 913 330000
                          </a>
                        </p>
                        <p className="text-sm mb-3 font-medium text-gray-300">
                          <a
                            href="tel:+251910212989"
                            className="hover:text-[#3DD56D] transition-colors border-b border-dashed hover:border-[#3DD56D] border-gray-400"
                          >
                            (+251) 910 212989
                          </a>
                        </p>
                        <p className="text-sm text-gray-400">🕒 Mon-Fri: 8am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="rounded-3xl p-4 shadow-2xl hover:shadow-3xl relative overflow-hidden group transition-all duration-500 backdrop-blur-sm flex-1 bg-gradient-to-br from-slate-800/90 to-slate-900/70 border border-slate-700/50">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3DD56D]/5 via-transparent to-[#2bb757]/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#3DD56D]/20 to-transparent rounded-full blur-lg"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-[#2bb757]/15 to-transparent rounded-full blur-md"></div>

              <div className="relative z-10">
                {/* Map Header */}
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-2xl mr-3 shadow-lg backdrop-blur-sm bg-gradient-to-br from-blue-600/80 to-blue-700/60">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">GREAN WORLD HQ</h3>
                    <p className="text-xs text-gray-400">🗺️ Our headquarters location</p>
                  </div>
                </div>

                {/* Interactive Map Container */}
                <div className="relative flex-1 min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-300 hover:shadow-xl cursor-pointer group border-slate-600/50 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                  {/* Grid Pattern Background */}
                  <div
                    className="absolute inset-0 opacity-30 bg-slate-600"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgb(71, 85, 105) 1px, transparent 1px), linear-gradient(90deg, rgb(71, 85, 105) 1px, transparent 1px)",
                      backgroundSize: "25px 25px",
                    }}
                  ></div>

                  {/* Map Roads/Streets */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 right-0 h-1 bg-slate-500/40 transform rotate-12"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-1 bg-slate-500/40 transform -rotate-6"></div>
                    <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-slate-500/40 transform rotate-3"></div>
                    <div className="absolute top-0 bottom-0 right-1/4 w-1 bg-slate-500/40 transform -rotate-2"></div>
                  </div>

                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      {/* Pulsing Rings */}
                      <div className="absolute top-0 left-0 w-16 h-16 bg-[#3DD56D]/30 rounded-full animate-ping"></div>
                      <div
                        className="absolute top-2 left-2 w-12 h-12 bg-[#3DD56D]/50 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>

                      {/* Main Marker */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#3DD56D] to-[#2bb757] rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>

                      {/* Marker Label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold shadow-lg border-2 whitespace-nowrap bg-slate-800 text-[#3DD56D] border-[#3DD56D]/50">
                        GREAN WORLD HQ
                      </div>
                    </div>
                  </div>

                  {/* Map Info Card */}
                  <div className="absolute top-4 left-4 right-4 backdrop-blur-sm rounded-xl p-4 shadow-lg border transition-all duration-300 bg-slate-800/90 border-slate-600/50 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 text-[#3DD56D]">GREAN WORLD HQ</h4>
                        <p className="text-sm mb-2 text-gray-300">Kirkos Sub City, Addis Ababa, Ethiopia</p>
                        <div className="flex items-center space-x-4 text-xs">
                          <span className="flex items-center text-gray-400">
                            <MapPin className="h-3 w-3 mr-1" />
                            8°59'37.4"N 38°45'35.1"E
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 bg-[#3DD56D] text-slate-900 hover:bg-[#2bb757]">
                          Directions
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-xl p-3 shadow-lg border transition-all duration-300 bg-slate-800/90 border-slate-600/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="text-xs px-3 py-1 rounded-lg transition-colors text-blue-400 hover:bg-blue-400/20">
                          View larger map
                        </button>
                      </div>
                      <div className="text-xs text-gray-400">Click to open in Google Maps</div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#3DD56D]/10 to-[#2bb757]/5"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

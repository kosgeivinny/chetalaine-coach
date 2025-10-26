"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* ====== Background Decorations with improved contrast and depth ====== */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0F766E]/5 via-white to-[#EC4899]/5" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#EC4899]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0F766E]/10 rounded-full blur-3xl" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0F766E 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* ====== Text Section ====== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Expertise Tag */}
          <div className="inline-block mb-6 px-6 py-2 rounded-full 
                         bg-linear-to-r from-[#0F766E]/20 to-[#EC4899]/20 
                         border border-[#0F766E]/20
                         text-[#0F766E] text-base font-semibold
                         shadow-sm backdrop-blur-sm
                         animate-fadeIn">
            ✨ Strategic Business Coaching & Consulting
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-(--font-playfair) leading-tight mb-6">
            Transform Your 
            <span className="block mt-2">
              <span className="text-[#EC4899]">Vision</span> Into 
              <span className="text-[#0F766E]"> Reality</span>
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
            Expert guidance to help you build a 
            <span className="text-[#0F766E] font-medium"> sustainable</span> and 
            <span className="text-[#EC4899] font-medium"> profitable</span> business 
            that aligns with your core values.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 gap-6 mb-10 max-w-lg">
            <div className="text-left">
              <div className="text-2xl font-bold text-[#0F766E]">200+</div>
              <div className="text-sm text-gray-600">Businesses Scaled</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-[#EC4899]">95%</div>
              <div className="text-sm text-gray-600">Client Success Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#coaching"
              className="px-8 py-4 rounded-full font-semibold text-white text-lg
                         bg-[#EC4899] hover:bg-[#be185d] shadow-lg 
                         transition-all duration-300 transform hover:scale-[1.02]
                         hover:shadow-xl hover:shadow-[#EC4899]/25 group"
            >
              <span className="flex items-center justify-center gap-2">
                Book Strategy Call
                <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="#courses"
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-[#0F766E]
                         text-[#0F766E] hover:text-white bg-white/90 hover:bg-[#0F766E]
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Programs
            </Link>
          </div>
        </motion.div>

        {/* ====== Right Section with Social Proof ====== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Main Image/Profile Section */}
          <div className="relative z-10">
            <div className="w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden border-4 border-[#0F766E]/10 shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="/images/monica.jpeg"
                  alt="Monica Chetalaine - Business Strategy Coach"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Featured In Section */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] 
                          bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="text-center text-sm text-gray-600 font-medium mb-2">Featured In</div>
              <div className="flex justify-center items-center gap-6">
                <div className="text-[#0F766E] font-semibold">Forbes</div>
                <div className="text-[#EC4899] font-semibold">Inc.</div>
                <div className="text-[#0F766E] font-semibold">HBR</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-[#0F766E]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0F766E] via-[#0d5f57] to-[#0F766E]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EC4899]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* ===== Image Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl
                         border-4 border-white/20">
            <Image
              src="/images/monica.jpeg"
              alt="Monica Chetalaine - Business Strategy Coach"
              fill
              className="object-cover hover:scale-105 transition-all duration-700"
            />
            
            {/* Experience Badge */}
            <div className="absolute -right-6 top-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-l-xl shadow-lg
                          border-l-4 border-[#0F766E] transform hover:translate-x-1 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#0F766E]">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            
            {/* Clients Badge */}
            <div className="absolute -left-6 bottom-12 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-r-xl shadow-lg
                          border-r-4 border-[#EC4899] transform hover:-translate-x-1 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#EC4899]">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </motion.div>

        {/* ===== Text Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
            {/* Section Tag */}
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              About Monica
            </div>

            <h2 className="text-4xl md:text-5xl font-(--font-playfair) leading-tight mb-6 text-white">
              Turning <span className="text-[#EC4899]">Visionaries</span> Into{" "}
              <span className="text-white font-bold">Successful</span> Entrepreneurs
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-white/90 leading-relaxed">
                With over a decade of experience in business strategy and entrepreneurial coaching, 
                I help visionaries like you transform their passion into 
                <span className="text-[#EC4899] font-semibold"> profitable ventures</span>. 
                My approach combines proven business frameworks with 
                <span className="text-[#EC4899] font-semibold"> innovative strategies</span> 
                that drive real results.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                Through personalized coaching and actionable systems, I&apos;ve guided hundreds of 
                entrepreneurs from overwhelm to clarity, helping them build 
                <span className="text-white font-semibold"> sustainable businesses</span> that 
                thrive without sacrificing their wellbeing.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
                <span className="text-white/90">Business Strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
                <span className="text-white/90">Systems Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
                <span className="text-white/90">Growth Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
                <span className="text-white/90">Team Building</span>
              </div>
            </div>

            <button
              className="px-8 py-4 rounded-full font-semibold text-[#0F766E] text-lg
                       bg-white hover:bg-[#EC4899] hover:text-white shadow-lg 
                       transition-all duration-300 transform hover:scale-[1.02]
                       hover:shadow-xl hover:shadow-white/25 group"
            >
              <span className="flex items-center gap-2">
                Schedule a Discovery Call
                <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
        </motion.div>
      </div>
    </section>
  );
}
